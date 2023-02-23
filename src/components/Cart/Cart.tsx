import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { loadStripe } from '@stripe/stripe-js'
import { useRef } from 'react'
import { useClickAway, useKey } from 'react-use'
import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'
import { removeItem, resetCart } from '../../redux/Cart/cartReducer'
import createRequest from '../../utils/createRequest'
import getTotalPrice from '../../utils/getTotalPrice'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export default function Cart({ isOpen, onClose }: Props) {
  const cartRef = useRef<HTMLDivElement>(null)
  useClickAway(cartRef, onClose)
  useKey('Escape', onClose)
  const products = useAppSelector((state) => state.cart.products)
  const dispatch = useAppDispatch()

  const isEmpty = products.length === 0

  const totalPrice = getTotalPrice(products)

  const itemList = products.map((item) => {
    return (
      <li className="flex items-center gap-5" key={item.id}>
        <img className="aspect-[4/5] w-20 object-cover" src={item.img} alt={item.title} />
        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="gray-7 mb-2 text-sm text-gray-700">{item.desc.substring(0, 100)}...</p>
          <span className="text-blue-600">
            {item.quantity} x ${item.price}
          </span>
        </div>
        <button className="ml-auto" type="button" onClick={() => dispatch(removeItem(item.id))}>
          <DeleteOutlinedIcon className="text-red-600" />
        </button>
      </li>
    )
  })

  const handlePayment = async () => {
    try {
      const stripePromise = loadStripe(
        'pk_test_51MeGYRIYBK6xKcMc2qQqQqvyIsVBDpEDjwYXuy9C66CXrNNHFfkPgyO4wsf0tVWrdIifnC5ejDgQ7WGEdvdTRszs00V7wh75d0'
      )

      const stripe = await stripePromise
      const response = await createRequest.post('/orders', {
        products,
      })

      await stripe?.redirectToCheckout({
        sessionId: response.data.stripeSession.id,
      })
    } catch (err) {
      //
    }
  }

  const cart = (
    <div className="absolute h-screen w-screen bg-black bg-opacity-25 backdrop-blur-[2px]">
      <div
        ref={cartRef}
        className=" absolute top-0 right-0 z-50 w-1/3 min-w-[500px] bg-white p-5 shadow-2xl"
      >
        <h2 className="mb-5 text-xl text-gray-700">Products in your cart</h2>
        {itemList.length > 0 && (
          <ul className="mb-5 max-h-72 space-y-2 overflow-y-auto">{itemList}</ul>
        )}
        <div className="mb-5 flex justify-between text-lg">
          <span className="font-semibold uppercase">Total</span>
          <strong className="font-semibold">${totalPrice}</strong>
        </div>
        <button
          className="mb-5 w-60 bg-blue-600 py-2 uppercase text-white hover:bg-blue-700
          disabled:bg-gray-700 disabled:opacity-30"
          type="button"
          disabled={isEmpty}
          onClick={handlePayment}
        >
          Go to checkout
        </button>
        <button
          className="block
            text-xs text-red-600 disabled:text-gray-700 disabled:opacity-30"
          type="button"
          disabled={isEmpty}
          onClick={() => dispatch(resetCart())}
        >
          Remove all
        </button>
      </div>
    </div>
  )

  return isOpen ? cart : null
}

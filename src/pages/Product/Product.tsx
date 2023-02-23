import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import BalanceIcon from '@mui/icons-material/Balance'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useAppDispatch from '../../hooks/useAppDispatch'
import useFetch from '../../hooks/useFetch'
import { addToCart } from '../../redux/Cart/cartReducer'
import { ProductType } from '../../types/types'

export default function Product() {
  const { id } = useParams()
  const [selectedImgId, setSelectedImgId] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { data } = useFetch<ProductType>(`/products/${id}?populate=*`)
  const dispatch = useAppDispatch()

  const { title, price, desc, img, img2 } = data?.attributes ?? {}

  const images: readonly (string | undefined)[] = [
    `${import.meta.env.VITE_SERVER_URL}${img?.data.attributes.url}`,
    `${import.meta.env.VITE_SERVER_URL}${img2?.data.attributes.url}`,
  ]

  return (
    <div className="mt-5 flex w-full gap-20 py-5 px-2">
      {data ? (
        <>
          <div className="flex flex-1 gap-2">
            <div className="flex flex-1 flex-col gap-2">
              <button type="button" onClick={() => setSelectedImgId(0)}>
                <img
                  className="aspect-[2.9/3] object-cover"
                  src={images[0]}
                  alt={title}
                />
              </button>
              <button type="button" onClick={() => setSelectedImgId(1)}>
                <img
                  className="aspect-[2.9/3] object-cover"
                  src={images[1]}
                  alt={title}
                />
              </button>
            </div>
            <div className="flex-[5]">
              <img
                className="aspect-[2.9/3] max-h-[70dvh] object-cover"
                src={images[selectedImgId]}
                alt={title}
              />
            </div>
          </div>

          <div className="flex-1 space-y-8">
            <h2 className="text-2xl font-bold">{title}</h2>
            <strong className="block text-3xl font-semibold text-blue-600">
              ${price}
            </strong>
            <p className="text-lg">{desc}</p>
            <div className="flex items-center gap-2">
              <button
                className="aspect-square w-8 bg-slate-200 text-xl duration-300 hover:bg-slate-300"
                type="button"
                onClick={() =>
                  setQuantity((prevQuantity) =>
                    prevQuantity > 1 ? prevQuantity - 1 : 1
                  )
                }
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="aspect-square w-8 bg-slate-200 text-xl duration-300 hover:bg-slate-300"
                type="button"
                onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
              >
                +
              </button>
            </div>
            <button
              className="flex w-60 items-center justify-center gap-3 bg-blue-600 py-2 uppercase text-white hover:bg-blue-700"
              type="button"
              onClick={() => {
                if (id && title && desc && price && img) {
                  dispatch(
                    addToCart({
                      id: parseInt(id, 10),
                      title,
                      desc,
                      price,
                      quantity,
                      img: images[0] as string,
                    })
                  )
                }
              }}
            >
              <AddShoppingCartIcon />
              Add to cart
            </button>
            <div className="flex gap-6">
              <button
                className="flex items-center gap-1 text-sm uppercase text-blue-600"
                type="button"
              >
                <FavoriteBorderIcon />
                Add to wish list
              </button>
              <button
                className="flex items-center gap-1 text-sm uppercase text-blue-600"
                type="button"
              >
                <BalanceIcon />
                Compare items
              </button>
            </div>
            <div className="flex flex-col gap-3 text-sm text-gray-700">
              <span>Vendor: Polo</span>
              <span>Product Type: Hat</span>
              <span>Tags: Hat, Women</span>
            </div>
            <hr />
            <div className="space-y-3">
              <details className="text-sm text-gray-700">
                <summary className="mb-2 text-base uppercase">
                  Description
                </summary>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus unde aperiam cupiditate velit sit, consequuntur
                aliquam, doloribus neque quos minima omnis expedita, quidem quae
                odit suscipit. At consequuntur aperiam doloribus ad, corporis
                recusandae quibusdam temporibus voluptatem blanditiis nulla
                facere omnis cupiditate molestias magnam. Quod libero esse
                sapiente quas dolorem, voluptas itaque ad laudantium
                perspiciatis nostrum impedit eos, quam voluptates ducimus
                laborum voluptatem natus labore perferendis? Culpa eos soluta
                explicabo inventore?
              </details>
              <hr className="w-72" />
              <details className="text-sm text-gray-700">
                <summary className="mb-2 text-base uppercase">
                  Additional Information
                </summary>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
                iusto, repellendus est cumque officia adipisci! Est magni, cum
                harum pariatur voluptates nobis aliquid eaque asperiores
                reprehenderit ex! Ipsum amet fugit omnis exercitationem
                quibusdam sunt ad molestias ut asperiores saepe, perspiciatis
                possimus quisquam dolores, voluptatum porro placeat accusamus
                dicta officiis est.
              </details>
              <hr className="w-72" />
              <details className="text-sm text-gray-700">
                <summary className="mb-2 text-base uppercase">FAQ</summary>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                quisquam vitae in nulla perspiciatis quis, nam ex sint debitis
                voluptatum?
              </details>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAppSelector from '../../hooks/useAppSelector'
import Cart from '../Cart/Cart'

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const productsCount = useAppSelector((state) => state.cart.products.length)

  const handleToggleCartOpen = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <div className="sticky top-0 z-50">
      <nav className="flex h-16 justify-between bg-white shadow-xl">
        <div className="flex items-center">
          <button className="flex items-center px-2 py-3" type="button">
            <img src="/img/english-language.png" alt="English language flag" />
            <ExpandMoreOutlinedIcon />
          </button>
          <button className="flex items-center px-2 py-3" type="button">
            <span>USD</span>
            <ExpandMoreOutlinedIcon />
          </button>
          <div>
            <Link className="px-2 py-3" to="women">
              Women
            </Link>
          </div>
          <div>
            <Link className="px-2 py-3" to="men">
              Men
            </Link>
          </div>
          <div>
            <Link className="px-2 py-3" to="kids">
              Kids
            </Link>
          </div>
        </div>

        <h1 className="flex items-center">
          <Link className="px-2 py-3 text-3xl uppercase tracking-tight" to="/">
            Crummy
          </Link>
        </h1>

        <div className="flex items-center">
          <div>
            <Link className="px-2 py-3" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className="px-2 py-3" to="about">
              About
            </Link>
          </div>
          <div>
            <Link className="px-2 py-3" to="contact">
              Contact
            </Link>
          </div>
          <div>
            <Link className="px-2 py-3" to="stores">
              Stores
            </Link>
          </div>
          <div className="ml-4 flex items-center">
            <button className="px-2 py-3" type="button">
              <SearchOutlinedIcon />
            </button>
            <button className="px-2 py-3" type="button">
              <PersonOutlinedIcon />
            </button>
            <button className="px-2 py-3" type="button">
              <FavoriteBorderOutlinedIcon />
            </button>
            <div className="relative">
              <button className="px-2 py-3" type="button" onClick={handleToggleCartOpen}>
                <ShoppingBagOutlinedIcon />
              </button>
              <span className="absolute right-0.5 top-0.5 min-w-[20px] cursor-pointer rounded-full bg-blue-600 px-1.5 text-center text-sm text-white opacity-90">
                {productsCount}
              </span>
            </div>
          </div>
        </div>
      </nav>
      {isCartOpen && <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />}
    </div>
  )
}

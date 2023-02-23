/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartProductType = {
  id: number
  title: string
  desc: string
  price: number
  img: string
  quantity: number
}

interface CartState {
  products: CartProductType[]
}

const initialState: CartState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProductType>) => {
      const product = state.products.find(
        (item) => item.id === action.payload.id
      )
      if (product) {
        product.quantity += action.payload.quantity
      } else {
        state.products.push(action.payload)
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      )
    },
    resetCart: (state) => {
      state.products = []
    },
  },
})

export const { addToCart, removeItem, resetCart } = cartSlice.actions
export default cartSlice.reducer

type Items = {
  price: number
  quantity: number
}

const getTotalPrice = (items: Items[]) => {
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return totalPrice.toFixed(2)
}

export default getTotalPrice

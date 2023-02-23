import Card from '../components/Card/Card'
import { ProductType } from '../types/types'

const createProductCards = (products: ProductType[]) => {
  return products.map((product) => <Card key={product.id} item={product} />)
}

export default createProductCards

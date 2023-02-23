import useFetch from '../../hooks/useFetch'
import { ProductType } from '../../types/types'
import createProductCards from '../../utils/createProductCards'

type Props = {
  type: string
}

export default function FeaturedProducts({ type }: Props) {
  const { data: products, error } = useFetch<ProductType[]>(
    `/products?populate=*&filters[type][$eq]=${type}`
  )

  return (
    <section className="mx-52 mt-8 mb-20">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="flex-[2] text-2xl font-bold capitalize">
          {type} Products
        </h2>
        <p className="flex-[3] text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          labore quas, eveniet esse dolorem, alias id sequi veritatis quo
          architecto tenetur provident, reprehenderit totam harum libero
          deleniti culpa corporis qui.
        </p>
      </div>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="flex justify-center gap-10">
          {products ? createProductCards(products) : <p>Loading...</p>}
        </div>
      )}
    </section>
  )
}

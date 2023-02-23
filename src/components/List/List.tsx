import qs from 'qs'
import useFetch from '../../hooks/useFetch'
import { ProductType } from '../../types/types'
import createProductCards from '../../utils/createProductCards'

type Props = {
  category: string | undefined
  maxPrice: number
  sort: string
  subcategories: string[]
}

export default function List({
  category,
  maxPrice,
  sort,
  subcategories,
}: Props) {
  const query = qs.stringify(
    {
      populate: '*',
      sort: [`price:${sort}`],
      filters: {
        $and: [
          {
            categories: {
              title: {
                $eqi: category,
              },
            },
          },
          {
            subcategories: {
              title: {
                $in: subcategories,
              },
            },
          },
          {
            price: {
              $lte: maxPrice,
            },
          },
        ],
      },
    },
    { encodeValuesOnly: true }
  )

  const { data: products } = useFetch<ProductType[]>(`products?${query}`)

  return (
    <div className="mt-20 flex flex-wrap justify-between gap-5">
      {products ? createProductCards(products) : <p>Loading...</p>}
    </div>
  )
}

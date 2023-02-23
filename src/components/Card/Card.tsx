import { Link } from 'react-router-dom'
import { ProductType } from '../../types/types'

type Props = {
  item: ProductType
}

export default function Card({ item }: Props) {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="flex w-72  flex-col space-y-2">
        <div className="group relative  aspect-[2/3] overflow-hidden">
          {item.attributes.isNew && (
            <span className="absolute top-2 left-2 z-30 rounded bg-white py-0.5 px-1.5 text-sm font-semibold text-blue-600">
              New Season
            </span>
          )}
          <img
            className="absolute z-10 h-full object-cover"
            src={`${import.meta.env.VITE_SERVER_URL}${
              item.attributes.img?.data.attributes.url
            }`}
            alt="product"
          />
          <img
            className="absolute h-full object-cover group-hover:z-20"
            src={`${import.meta.env.VITE_SERVER_URL}${
              item.attributes.img2?.data.attributes.url
            }`}
            alt="product other perspective"
          />
        </div>
        <h3>{item.attributes.title}</h3>
        <div className="flex items-center gap-2.5">
          {item.attributes.oldPrice ? (
            <s className="font-light text-gray-700 line-through">
              {item.attributes.oldPrice}
            </s>
          ) : null}
          <strong className="text-lg font-semibold">
            ${item.attributes.price}
          </strong>
        </div>
      </div>
    </Link>
  )
}

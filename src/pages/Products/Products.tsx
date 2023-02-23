import { ChangeEvent, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import List from '../../components/List/List'
import useFetch from '../../hooks/useFetch'
import { ProdcutSubcategoryType } from '../../types/types'

// refactor
// create new hooks useFilter1 useFilter2...
// create new state with applied filters and then pass them to <List />
// create apply button to confirm choosed filters and then fetch

export default function Products() {
  const { category } = useParams()
  const [filterMaxPrice, setFilterMaxPrice] = useState(1000)
  const [sortByPrice, setSortByPrice] = useState('asc')
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
    []
  )
  const { data: subcategories } = useFetch<ProdcutSubcategoryType[]>(
    `/subcategories?filters[categories][title][$eqi]=${category}`
  )

  const handleChangeFilterMaxPrice = (e: ChangeEvent<HTMLInputElement>) => {
    const newMaxPrice = parseInt(e.target.value, 10)
    setFilterMaxPrice(newMaxPrice)
  }

  const handleChangeSortByPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setSortByPrice(e.target.value)
  }

  const handleChangeSelectedSubcategories = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target
    const isChecked = e.target.checked

    setSelectedSubcategories(
      isChecked
        ? [...selectedSubcategories, value]
        : selectedSubcategories.filter((subcategory) => {
            return subcategory !== value
          })
    )
  }

  const subcategoriesList = subcategories?.map((subcategory) => (
    <li className="flex items-center gap-1" key={subcategory.id}>
      <input
        type="checkbox"
        id={subcategory.attributes.title}
        value={subcategory.attributes.title}
        onChange={handleChangeSelectedSubcategories}
      />
      <label className="capitalize" htmlFor={subcategory.attributes.title}>
        {subcategory.attributes.title}
      </label>
    </li>
  ))

  return (
    <div className="mx-20 mb-40 flex gap-10">
      <aside className="grow">
        <div className="sticky top-16">
          <h2 className="text-xl font-bold">Options</h2>
          <div>
            <h3 className="mb-1 mt-4 text-lg font-semibold">Categories</h3>
            {subcategories ? <ul>{subcategoriesList}</ul> : <p>Loading...</p>}
          </div>
          <div>
            <h3 className="mb-1 mt-4 text-lg font-semibold">Filter by price</h3>
            <div className="flex items-center gap-1">
              <span>0</span>
              <input
                type="range"
                min="0"
                max="1000"
                value={filterMaxPrice}
                onChange={handleChangeFilterMaxPrice}
              />
              <span>1000</span>
            </div>
          </div>
          <div>
            <h3 className="mb-1 mt-4 text-lg font-semibold">Sort by</h3>
            <ul>
              <li className="flex items-center gap-1">
                <input
                  type="radio"
                  id="price-asc"
                  name="price"
                  value="asc"
                  checked={sortByPrice === 'asc'}
                  onChange={handleChangeSortByPrice}
                />
                <label htmlFor="price-asc">Price (Lowest first)</label>
              </li>
              <li className="flex items-center gap-1">
                <input
                  type="radio"
                  id="price-desc"
                  name="price"
                  value="desc"
                  checked={sortByPrice === 'desc'}
                  onChange={handleChangeSortByPrice}
                />
                <label htmlFor="price-desc">Price (Highest first)</label>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <main className="grow-[4]">
        <Header
          img="https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600"
          title={category || 'Undefined Category'}
        />
        <List
          category={category}
          subcategories={selectedSubcategories}
          maxPrice={filterMaxPrice}
          sort={sortByPrice}
        />
      </main>
    </div>
  )
}

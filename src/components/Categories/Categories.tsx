import { Link } from 'react-router-dom'

export default function Categories() {
  return (
    <section className="mx-8 mb-20 grid grid-flow-row auto-rows-[40vh] grid-cols-4 gap-2">
      <div className="group relative w-full overflow-hidden">
        <img
          className="h-full w-full object-cover duration-300 group-hover:scale-125"
          src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <button
          type="button"
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-center text-xs font-semibold uppercase"
        >
          <Link className="inline-block min-w-[100px] py-3" to="sale">
            Sale
          </Link>
        </button>
      </div>
      <div className="group relative row-span-2 overflow-hidden">
        <img
          className="h-full w-full object-cover duration-300 group-hover:scale-125"
          src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <button
          type="button"
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-center text-xs font-semibold uppercase"
        >
          <Link className="inline-block min-w-[100px] py-3" to="new-season">
            New Season
          </Link>
        </button>
      </div>
      <div className="group relative overflow-hidden ">
        <img
          className="h-full w-full object-cover duration-300 group-hover:scale-125"
          src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <button
          type="button"
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-center text-xs font-semibold uppercase"
        >
          <Link className="inline-block min-w-[100px] py-3" to="men">
            Men
          </Link>
        </button>
      </div>
      <div className="group relative overflow-hidden">
        <img
          className="h-full w-full object-cover duration-300 group-hover:scale-125"
          src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <button
          type="button"
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-center text-xs font-semibold uppercase"
        >
          <Link className="inline-block min-w-[100px] py-3" to="accessories">
            Accessories
          </Link>
        </button>
      </div>
      <div className="group relative overflow-hidden">
        <img
          className="h-full w-full object-cover duration-300 group-hover:scale-125"
          src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <button
          type="button"
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-center text-xs font-semibold uppercase"
        >
          <Link className="inline-block min-w-[100px] py-3" to="women">
            Women
          </Link>
        </button>
      </div>
      <div className="group relative col-span-2 overflow-hidden">
        <img
          className="h-full w-full object-cover duration-300 group-hover:scale-125"
          src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <button
          type="button"
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-center text-xs font-semibold uppercase"
        >
          <Link className="inline-block min-w-[100px] py-3" to="shoes">
            Shoes
          </Link>
        </button>
      </div>
    </section>
  )
}

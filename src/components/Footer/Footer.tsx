import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mx-32 mt-20">
      <div className="flex gap-10">
        <section className="basis-1/4">
          <h4 className="mb-1.5 text-lg font-semibold">Categories</h4>
          <ul className="space-y-1.5 text-gray-700">
            <li>
              <Link to="women">Women</Link>
            </li>
            <li>
              <Link to="men">Men</Link>
            </li>
            <li>
              <Link to="kids">Kids</Link>
            </li>
            <li>
              <Link to="shoes">Shoes</Link>
            </li>
            <li>
              <Link to="accessories">Accessories</Link>
            </li>
            <li>
              <Link to="new-arrivals">New Arrivals</Link>
            </li>
          </ul>
        </section>
        <section className="basis-1/4">
          <h4 className="mb-1.5 text-lg font-semibold">Links</h4>
          <ul className="space-y-1.5 text-gray-700">
            <li>
              <Link to="faq">FAQ</Link>
            </li>
            <li>
              <Link to="pages">Pages</Link>
            </li>
            <li>
              <Link to="stores">Stores</Link>
            </li>
            <li>
              <Link to="compare">Compare</Link>
            </li>
            <li>
              <Link to="cookies">Cookies</Link>
            </li>
          </ul>
        </section>
        <section className="basis-1/4">
          <h4 className="mb-1.5 text-lg font-semibold">About</h4>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            exercitationem voluptas debitis. Ipsum totam iste eaque modi omnis
            suscipit porro obcaecati, excepturi dolorem cum eos facilis
            molestias voluptatibus, vel sequi.
          </p>
        </section>
        <section className="basis-1/4">
          <h4 className="mb-1.5 text-lg font-semibold">Contact</h4>
          <p className="text-gray-700 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            veniam? Dolores officia, eveniet tempora repellat dolore molestias
            deserunt nam maxime.
          </p>
        </section>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <div>
          <span className="mr-2 text-xl font-bold text-blue-600">Crummy</span>
          <span className="text-sm text-gray-700">
            © Copyright 2023. All rights reserved
          </span>
        </div>
        <img
          className="h-14"
          src="/img/payment-gateways.png"
          alt="Payment gateways"
        />
      </div>
    </footer>
  )
}

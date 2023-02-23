import qs from 'qs'
import Categories from '../../components/Categories/Categories'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Newsletter from '../../components/Newsletter/Newsletter'
import Slider from '../../components/Slider/Slider'
import Toast from '../../components/Toast/Toast'

export default function Home() {
  const query = qs.parse(window.location.search, { ignoreQueryPrefix: true })
  const { success } = query
  const isOrderAccepted = success === 'true'
  const isOrderCancelled = success === 'false'

  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
      alt: 'fashion',
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
      alt: 'fashion',
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600',
      alt: 'fashion',
    },
  ]
  return (
    <div>
      {isOrderAccepted && <Toast message="Order accepted for completion" type="success" />}
      {isOrderCancelled && <Toast message="Order cancelled" type="error" />}
      <Slider images={images} />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Newsletter />
    </div>
  )
}

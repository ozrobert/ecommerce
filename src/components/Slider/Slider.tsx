import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import { useState } from 'react'

type Image = {
  id: number
  src: string
  alt: string
}

type Props = {
  images: Image[]
}

export default function Slider({ images }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const shiftValueClass = `-translate-x-[${currentSlide * 100}vw]`

  const imageList = images.map((img) => (
    <img
      className="h-full w-screen object-cover object-center"
      key={img.id}
      src={img.src}
      alt={img.alt}
    />
  ))

  return (
    <div className="relative h-[calc(100vh-theme(space.16))] overflow-hidden">
      <div className={`flex h-full w-[300vw] ${shiftValueClass} duration-700`}>
        {imageList}
      </div>
      <div>
        <button
          className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-gray-100 p-1.5 duration-300 hover:bg-gray-100 hover:bg-opacity-70"
          type="button"
          onClick={() =>
            currentSlide > 0
              ? setCurrentSlide(currentSlide - 1)
              : setCurrentSlide(imageList.length - 1)
          }
        >
          <ArrowBackOutlinedIcon fontSize="large" />
        </button>
        <button
          className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-gray-100 p-1.5 duration-300 hover:bg-gray-100 hover:bg-opacity-70"
          type="button"
          onClick={() =>
            currentSlide < imageList.length - 1
              ? setCurrentSlide(currentSlide + 1)
              : setCurrentSlide(0)
          }
        >
          <ArrowForwardOutlinedIcon fontSize="large" />
        </button>
      </div>
    </div>
  )
}

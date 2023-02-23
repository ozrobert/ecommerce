type Props = {
  img: string
  title: string
}

export default function Header({ img, title }: Props) {
  return (
    <header className="relative h-72">
      <img
        className="h-full w-full object-cover"
        src={img}
        alt={`${title} fashion`}
      />
      <h2 className="absolute inset-0 m-auto flex h-fit w-fit items-center justify-center bg-white py-3 px-5 font-semibold uppercase">
        {title}
      </h2>
    </header>
  )
}

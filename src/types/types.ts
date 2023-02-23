export type ProductType = {
  id: number
  attributes: {
    title: string
    desc: string
    price: number
    isNew: boolean
    type: string
    oldPrice?: number
    img?: ImageUrlType
    img2?: ImageUrlType
  }
}

export type ImageUrlType = {
  data: {
    attributes: {
      url: string
    }
  }
}

export type ProdcutSubcategoryType = {
  id: number
  attributes: {
    title: string
  }
}

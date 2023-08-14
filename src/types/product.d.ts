interface ProductType {
  TRADICIONAL: 'TRADICIONAL'
  GELADO: 'GELADO'
  COM_LEITE: 'COM LEITE'
  ESPECIAL: 'ESPECIAL'
  ALCOÓLICO: 'ALCOÓLICO'
}

export interface Product {
  id: number
  title: string
  description: string
  type: ProductType[]
  price: number
  image: string
}

import { ProductItem } from './product-item'

export function ProductsList() {
  return (
    <div className="container mb-8">
      <h2 className="mb-14 font-baloo text-[32px] font-extrabold leading-[130%]">
        Nosso Cafés
      </h2>
      <ProductItem />
    </div>
  )
}

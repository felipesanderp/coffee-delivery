'use client'

import { useProductsStore } from '@/stores/useProductStore'
import { ProductItem } from './product-item'
import { useEffect } from 'react'

export function ProductsList() {
  const { fetchData, products } = useProductsStore((store) => {
    return {
      fetchData: store.fetchData,
      products: store.products,
    }
  })

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="container mb-8">
      <h2 className="mb-14 font-baloo text-[32px] font-extrabold leading-[130%]">
        Nosso Cafés
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

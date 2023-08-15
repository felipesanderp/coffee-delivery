'use client'

import useFromStore from '@/hooks/useFromState'
import { useCartStore } from '@/stores/useCartStore'

export default function Checkout() {
  const cart = useFromStore(useCartStore, (store) => store.cart)
  return (
    <h1>
      {cart?.map((product, index) => <h1 key={index}>{product.title}</h1>)}
    </h1>
  )
}

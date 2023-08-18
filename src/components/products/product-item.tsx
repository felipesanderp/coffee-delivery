'use client'

import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import { Icons } from '../icons'
import { Product } from '@/types/product'
import { useCartStore } from '@/stores/useCartStore'

interface ProductItem {
  product: Product
}

export function ProductItem({ product }: ProductItem) {
  const { addToCart } = useCartStore((store) => {
    return {
      addToCart: store.addToCart,
    }
  })

  return (
    <div className="mb-10 flex h-80 w-64 transform flex-col items-center gap-3 rounded-bl-[2.25rem] rounded-br-md rounded-tl-md rounded-tr-[2.25rem] bg-zinc-200 p-4 transition duration-500 hover:scale-110">
      <Image
        src={product.image}
        alt={product.title}
        className="-mt-10"
        width={120}
        height={120}
      />
      <div className="flex items-center gap-2">
        {product.type.map((type, index) => (
          <Badge key={index} className="mb-1">
            {type}
          </Badge>
        ))}
      </div>
      <h3 className="font-baloo text-xl font-semibold">{product.title}</h3>
      <span className="mb-9 text-center text-sm text-zinc-600">
        {product.description}
      </span>
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-baseline gap-1 font-baloo text-zinc-700">
          <span className="text-sm">R$</span>
          <span className=" text-2xl font-extrabold">
            {product.price.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="flex items-center space-x-2 rounded-md bg-purple-800 p-2 transition-colors duration-300 hover:bg-purple-500"
            onClick={() => addToCart(product)}
          >
            <span className="text-sm text-zinc-100">Adicionar ao </span>
            <Icons.shoppingCart
              width={22}
              height={22}
              className="fill-white stroke-white"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

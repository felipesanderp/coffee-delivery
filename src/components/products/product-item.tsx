'use client'

import Image from 'next/image'

import { Badge } from '../badge'
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

  // const [quantity, setQuantity] = useState<number>(0)

  // function increaseQuantity() {
  //   setQuantity(quantity + 1)
  // }

  // function decreaseQuantity() {
  //   if (quantity <= 0) {
  //     setQuantity(0)
  //   } else {
  //     setQuantity(quantity - 1)
  //   }
  // }

  return (
    <div className="mb-10 flex h-80 w-64 flex-col items-center gap-3 rounded-bl-[2.25rem] rounded-br-md rounded-tl-md rounded-tr-[2.25rem] bg-zinc-200 p-4">
      <Image
        src={product.image}
        alt={product.title}
        className="-mt-10"
        width={120}
        height={120}
      />
      <div className="flex items-center gap-2">
        {product.type.map((type) => (
          <Badge key={product.id} className="mb-1">
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
          {/* <div className="flex h-9 w-[4.5rem] items-center justify-between rounded-md bg-zinc-400">
            <button
              className="group flex items-center rounded-md p-1"
              onClick={decreaseQuantity}
            >
              <Icons.minus
                width={14}
                height={14}
                className="inline stroke-purple-500 p-0 group-hover:stroke-purple-800"
              />
            </button>

            <span>{quantity}</span>

            <button
              className="group flex items-center rounded-md p-1"
              onClick={increaseQuantity}
            >
              <Icons.plus
                width={14}
                height={14}
                className="inline stroke-purple-500 group-hover:stroke-purple-800"
              />
            </button>
          </div> */}

          <button
            className="flex items-center space-x-2 rounded-md bg-purple-800 p-2 transition-colors hover:bg-purple-500"
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

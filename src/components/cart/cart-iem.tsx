import { useCartStore } from '@/stores/useCartStore'
import { Product } from '@/types/product'
import Image from 'next/image'
import { Icons } from '../icons'

interface CartItemProps {
  product: Product
}

export function CartItem({ product }: CartItemProps) {
  const { removeFromCart } = useCartStore((store) => {
    return {
      removeFromCart: store.removeFromCart,
    }
  })

  return (
    <li>
      <div className="flex  justify-between gap-8">
        <Image src={product.image} alt={product.title} width={64} height={64} />
        <div className="flex flex-col gap-2">
          <h3 className="text-base text-zinc-800">{product.title}</h3>
          <div className="flex items-center justify-between gap-6">
            <div className="flex h-8 w-[4.5rem] items-center justify-between rounded-md bg-zinc-400">
              <button className="group flex items-center rounded-md p-1">
                <Icons.minus
                  width={14}
                  height={14}
                  className="inline stroke-purple-500 p-0 group-hover:stroke-purple-800"
                />
              </button>

              <span>{product.quantity}</span>

              <button className="group flex items-center rounded-md p-1">
                <Icons.plus
                  width={14}
                  height={14}
                  className="inline stroke-purple-500 group-hover:stroke-purple-800"
                />
              </button>
            </div>
            <button
              className="flex h-8 items-center space-x-2 rounded-md bg-zinc-400 p-2 transition-colors hover:bg-zinc-500"
              onClick={() => removeFromCart(product)}
            >
              <Icons.trashCan
                width={16}
                height={16}
                className="stroke-purple-500"
              />
              <span className="text-xs">REMOVER</span>
            </button>
          </div>
        </div>

        <div className="flex gap-1  text-zinc-700">
          <span className="text-base font-bold">
            R$ {product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </li>
  )
}

'use client'

import Image from 'next/image'

import expresso from '@/assets/expresso.png'
import { Badge } from '../badge'
import { Icons } from '../icons'
import { useState } from 'react'

export function ProductItem() {
  const [quantity, setQuantity] = useState<number>(0)

  function increaseQuantity() {
    setQuantity(quantity + 1)
  }

  function decreaseQuantity() {
    if (quantity <= 0) {
      setQuantity(0)
    } else {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="flex h-80 w-64 flex-col items-center gap-3 rounded-bl-[2.25rem] rounded-br-md rounded-tl-md rounded-tr-[2.25rem] bg-zinc-200 px-1">
      <Image src={expresso} alt="Expresso" className="-mt-6 mb-3" />
      <Badge className="mb-1">TRADICIONAL</Badge>
      <h3 className="font-baloo text-xl font-semibold">Expresso Tradicional</h3>
      <span className="mb-9 text-center text-sm text-zinc-600">
        O tradicional café feito com água quente e grãos moídos
      </span>
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-baseline gap-1 font-baloo text-zinc-700">
          <span className="text-sm">R$</span>
          <span className=" text-2xl font-extrabold">9,90</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex h-9 w-[4.5rem] items-center justify-between rounded-md bg-zinc-400">
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
          </div>

          <button className="flex items-center space-x-1 rounded-md bg-purple-800 p-2 transition-colors hover:bg-purple-500">
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
import Image from 'next/image'

import heroBanner from '@/assets/hero-banner.png'
import { Icons } from './icons'

export function Hero() {
  return (
    <div className="mx-auto flex h-[544px] max-w-[1440px] items-center justify-between p-8">
      <div className="flex max-w-xl flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h1 className="m-0 font-baloo text-5xl leading-[130%]">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <span className="text-xl leading-[130%]">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </div>

        <div className="flex max-w-full flex-col gap-5">
          <div className="flex gap-10">
            <div className="flex w-[15rem] items-center gap-3">
              <div className="rounded-full bg-yellow-800 p-2">
                <Icons.shoppingCart className="h-4 w-4 fill-white stroke-white" />
              </div>
              <p>Compra simples e segura</p>
            </div>
            <div className="flex w-[19rem] items-center gap-3">
              <div className="rounded-full bg-zinc-700 p-2">
                <Icons.package className="h-4 w-4 stroke-white" />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </div>
          </div>

          <div className="flex gap-10">
            <div className="flex w-[15rem] items-center gap-3">
              <div className="rounded-full bg-yellow-500 p-2">
                <Icons.timer className="h-4 w-4 stroke-white" />
              </div>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div className="flex w-[19rem] items-center gap-3">
              <div className="rounded-full bg-purple-500 p-2">
                <Icons.coffee className="h-4 w-4 stroke-white" />
              </div>
              <p>O café chega fresquinho até você</p>
            </div>
          </div>
        </div>
      </div>
      <Image src={heroBanner} alt="" />
    </div>
  )
}

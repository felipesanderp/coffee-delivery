'use client'

import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

import orderCompleted from '@/assets/order-completed.png'
import { Icons } from '@/components/icons'

export default function ConfirmedOrder() {
  const searchParams = useSearchParams()

  // const cep = searchParams.get('cep')
  const street = searchParams.get('street')
  const number = searchParams.get('number')
  // const complement = searchParams.get('complement')
  const neighborhood = searchParams.get('neighborhood')
  const city = searchParams.get('city')
  const uf = searchParams.get('uf')
  const paymentMethod = searchParams.get('payment_method')

  return (
    <div className="container mt-20 flex items-center justify-between">
      <div>
        <h2 className="font-baloo text-[32px] font-extrabold leading-[130%] text-yellow-800">
          Uhu! Pedido confirmado
        </h2>
        <p className="mb-10 text-xl leading-[130%]">
          Agora é só aguardar que logo o café chegará até você
        </p>
        <div className="border-gradient h-[17rem] w-[33rem] rounded-bl-[2.25rem] rounded-br-md rounded-tl-md rounded-tr-[2.25rem] bg-gradient-to-r from-yellow-500 to-purple-500 p-1">
          <div className="flex h-full w-full rounded-bl-[2.25rem] rounded-br-md rounded-tl-md rounded-tr-[2.25rem] bg-zinc-100">
            <div className="flex flex-col gap-8 p-10">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-purple-500 p-2">
                  <Icons.mapPin className="h-8 w-8 stroke-white" />
                </div>
                <div className="flex flex-col leading-[130%]">
                  <span>
                    Entrega em{' '}
                    <span className="font-bold">
                      {street}, {number}
                    </span>
                  </span>
                  <span>
                    {neighborhood} - {city}, {uf}{' '}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-full bg-yellow-500 p-2">
                  <Icons.timer className="h-8 w-8 stroke-white" />
                </div>
                <div className="flex flex-col leading-[130%]">
                  <span>Previsão de Entrega</span>
                  <span className="font-bold">20 min - 30 min</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-full bg-yellow-800 p-2">
                  <Icons.dollar className="h-8 w-8 stroke-white" />
                </div>
                <div className="flex flex-col leading-[130%]">
                  <span>Pagamento na entrega</span>
                  <span className="font-bold">
                    {paymentMethod === 'credit_card' ? (
                      <span>Cartão de Crédito</span>
                    ) : paymentMethod === 'debit_card' ? (
                      <span>Cartão de Débito</span>
                    ) : (
                      <span>Dinheiro</span>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={orderCompleted} alt="" />
    </div>
  )
}

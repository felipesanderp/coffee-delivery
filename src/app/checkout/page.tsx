'use client'

import useFromStore from '@/hooks/useFromState'
import { useCartStore } from '@/stores/useCartStore'

import { CartItem } from '@/components/cart/cart-item'
import { CheckoutForm } from '@/components/checkout-form'
import { Separator } from '@/components/ui/separator'

export default function Checkout() {
  const cart = useFromStore(useCartStore, (store) => store.cart)

  let total = 0
  if (cart) {
    total = cart.reduce(
      (acc, product) => acc + product.price * (product.quantity as number),
      0,
    )
  }

  return (
    <div className="container grid grid-cols-checkout justify-between">
      <div className="flex flex-col gap-4">
        <h3 className="font-baloo text-lg font-bold text-zinc-800">
          Complete seu pedido
        </h3>
        <div className="flex flex-col">
          <CheckoutForm />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-baloo text-lg font-bold text-zinc-800">
          Cafés selecionados
        </h3>
        <section className="flex flex-col items-center gap-8 rounded-bl-[2.25rem] rounded-br-md rounded-tl-md rounded-tr-[2.25rem] bg-zinc-200 p-4">
          {cart && cart.length > 0 ? (
            <ul className="flex flex-col gap-8">
              {cart?.map((product, index) => (
                <CartItem key={index} product={product} />
              ))}
            </ul>
          ) : (
            ''
          )}
          <Separator />
          <div className="flex w-96 items-center justify-between">
            <span className="text-xl font-bold text-zinc-800">Total:</span>
            <span className="text-xl font-bold text-zinc-800">
              R$ {total.toFixed(2)}
            </span>
          </div>

          <button
            className="flex h-10 w-96 items-center justify-center rounded-md bg-yellow-500 p-6 text-white transition-colors hover:bg-yellow-800"
            // onClick={() => router.push('/checkout')}
          >
            CONFIRMAR PEDIDO
          </button>
        </section>
      </div>
    </div>
  )
}

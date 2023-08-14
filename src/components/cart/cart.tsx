import useFromStore from '@/hooks/useFromState'
import { useCartStore } from '@/stores/useCartStore'
import { CartItem } from './cart-iem'
import { Separator } from '../separator'

export function Cart() {
  const cart = useFromStore(useCartStore, (store) => store.cart)

  let total = 0
  if (cart) {
    total = cart.reduce(
      (acc, product) => acc + product.price * (product.quantity as number),
      0,
    )
  }

  return (
    <section className="flex flex-col gap-6">
      <h3>Carrinho de Compras</h3>
      {cart && cart.length > 0 ? (
        <ul className="flex h-full w-full flex-col items-center gap-3 rounded-bl-[2.25rem] rounded-br-md rounded-tl-md rounded-tr-[2.25rem] bg-zinc-200 p-4">
          {cart?.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </ul>
      ) : (
        ''
      )}
      <Separator />
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-zinc-800">Total:</span>
        <span className="text-xl font-bold text-zinc-800">
          R$ {total.toFixed(2)}
        </span>
      </div>

      <button className="flex h-10 items-center justify-center  rounded-md bg-yellow-500 p-6 text-white transition-colors hover:bg-yellow-800">
        FINALIZAR PEDIDO
      </button>
    </section>
  )
}

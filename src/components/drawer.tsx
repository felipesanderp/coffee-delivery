'use client'

import useFromStore from '@/hooks/useFromState'
import { useCartStore } from '@/stores/useCartStore'

import { Cart } from '@/components/cart/cart'
import { Icons } from '@/components/icons'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

// interface Props {
//   // isOpen: boolean
//   children: React.ReactNode
//   // onCartIconClick: () => void
// }

export const Drawer = () => {
  const cart = useFromStore(useCartStore, (state) => state.cart)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex items-center rounded-md bg-yellow-100 p-2 group-hover:bg-yellow-500">
          <Icons.shoppingCart
            width={22}
            height={22}
            className="fill-yellow-500 stroke-yellow-500 group-hover:fill-yellow-100 group-hover:stroke-yellow-100"
          />
          <div className="absolute -mt-9 ml-4 h-5 w-5 rounded-full bg-yellow-800 text-sm text-white">
            {cart?.length}
          </div>
        </button>
      </SheetTrigger>
      <SheetContent className="w-[30rem]">
        <Cart />
      </SheetContent>
    </Sheet>
  )
}

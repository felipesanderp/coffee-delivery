'use client'

import { useState } from 'react'
import Image from 'next/image'

import logo from '@/assets/logo.png'
import { Icons } from './icons'
import { Drawer } from './drawer'
import useFromStore from '@/hooks/useFromState'
import { useCartStore } from '@/stores/useCartStore'
import { Cart } from './cart/cart'
import Link from 'next/link'

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const cart = useFromStore(useCartStore, (state) => state.cart)

  const handleCartIconClick = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <>
      <div className="h-104 container flex items-center justify-between p-8">
        <Link href="/">
          <Image src={logo} alt="Coffee Delivery" width={'84'} height={'40'} />
        </Link>
        <div className="flex items-center gap-3">
          <div className="group">
            <button className="flex items-center gap-2 rounded-md bg-purple-100 p-2 text-sm text-purple-800 group-hover:bg-purple-500 group-hover:text-purple-100">
              <Icons.mapPin
                width={22}
                height={22}
                className="stroke-purple-500 group-hover:stroke-purple-100"
              />
              Porto Alegre, RS
            </button>
          </div>
          <div className="group relative">
            <button
              className="flex items-center rounded-md bg-yellow-100 p-2 group-hover:bg-yellow-500"
              onClick={handleCartIconClick}
            >
              <Icons.shoppingCart
                width={22}
                height={22}
                className="fill-yellow-500 stroke-yellow-500 group-hover:fill-yellow-100 group-hover:stroke-yellow-100"
              />
              <div className="absolute -mt-9 ml-4 h-5 w-5 rounded-full bg-yellow-800 text-sm text-white">
                {cart?.length}
              </div>
            </button>
          </div>
        </div>
      </div>
      <Drawer isOpen={isDrawerOpen} onCartIconClick={handleCartIconClick}>
        <Cart />
      </Drawer>
    </>
  )
}

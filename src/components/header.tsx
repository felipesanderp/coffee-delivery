import Image from 'next/image'

import logo from '@/assets/logo.png'
import { Icons } from './icons'

export function Header() {
  return (
    <div className="h-104 mx-auto flex max-w-[1440px] items-center justify-between p-8">
      <Image src={logo} alt="Coffee Delivery" width={'84'} height={'40'} />
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
        <div className="group">
          <button className="flex items-center space-x-1 rounded-md bg-yellow-100 p-2 group-hover:bg-yellow-500">
            <Icons.shoppingCart
              width={22}
              height={22}
              className="fill-yellow-500 stroke-yellow-500 group-hover:fill-yellow-100 group-hover:stroke-yellow-100"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

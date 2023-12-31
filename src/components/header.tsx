import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/logo.png'

import { Drawer } from '@/components/drawer'
import { CitiesCombobox } from './cities-combobox'

export function Header() {
  return (
    <>
      <div className="h-104 container flex items-center justify-between p-8">
        <Link href="/">
          <Image src={logo} alt="Coffee Delivery" width={'84'} height={'40'} />
        </Link>
        <div className="flex items-center gap-3">
          {/* <div className="group">
            <button className="flex items-center gap-2 rounded-md bg-purple-100 p-2 text-sm text-purple-800 group-hover:bg-purple-500 group-hover:text-purple-100">
              <Icons.mapPin
                width={22}
                height={22}
                className="stroke-purple-500 group-hover:stroke-purple-100"
              />
              Porto Alegre, RS
            </button>
          </div> */}
          <CitiesCombobox />
          <div className="group relative">
            <Drawer />
          </div>
        </div>
      </div>
    </>
  )
}

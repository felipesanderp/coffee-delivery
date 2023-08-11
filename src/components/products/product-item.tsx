import Image from 'next/image'

import expresso from '@/assets/expresso.png'
import { Badge } from '../badge'

export function ProductItem() {
  return (
    <div className="flex h-80 w-64 flex-col items-center rounded-bl-[2.25rem] rounded-br-md rounded-tl-md rounded-tr-[2.25rem] bg-zinc-200">
      <Image src={expresso} alt="Expresso" className="-mt-6 mb-3" />
      <Badge>TRADICIONAL</Badge>
    </div>
  )
}

'use client'

import * as React from 'react'
import { CheckIcon } from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Icons } from './icons'
import { ScrollArea } from './ui/scroll-area'

interface District {
  id: number
  nome: string
}

export function CitiesCombobox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  const [district, setDistrict] = React.useState<District[]>([])

  React.useEffect(() => {
    async function getDistricts() {
      const response = await fetch(
        'https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas/410001/distritos',
        {
          method: 'GET',
        },
      )

      const data = await response.json()

      setDistrict(data)
    }

    getDistricts()
  }, [])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="flex items-center gap-2 rounded-md bg-purple-100 p-2 text-sm text-purple-800 group-hover:bg-purple-500 group-hover:text-purple-100"
        >
          <Icons.mapPin
            width={22}
            height={22}
            className="stroke-purple-500 group-hover:stroke-purple-100"
          />
          {value
            ? district
                ?.find((d) => d.nome.toLowerCase() === value)
                ?.nome.concat(', PR')
            : 'Selecione uma cidade...'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder="Procure por uma cidade..."
            className="h-9"
          />
          <CommandEmpty>Cidade não encontrada.</CommandEmpty>
          <CommandGroup>
            <ScrollArea className="h-[200px] w-[200px]">
              {district?.map((d) => (
                <CommandItem
                  key={d.id}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
                >
                  {d.nome}
                  <CheckIcon
                    className={cn(
                      'ml-auto h-4 w-4',
                      value === d.nome.toLowerCase()
                        ? 'opacity-100'
                        : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </ScrollArea>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

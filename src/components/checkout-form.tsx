import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Icons } from '@/components/icons'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const FormSchema = z.object({
  cep: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.string().optional(),
  neighborhood: z.string(),
  city: z.string(),
  uf: z.string().max(2),
  payment_type: z.enum(['credit_card', 'debit_card', 'money']),
})

export function CheckoutForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      uf: '',
      payment_type: 'credit_card',
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        <div className="flex h-[23.25rem] flex-col gap-8 rounded-md bg-zinc-200 p-10">
          <div className="flex gap-2">
            <Icons.mapPin className="stroke-yellow-800" size={22} />
            <div>
              <p className="leading-[130%]">Endereço de Entrega</p>
              <span className="text-sm leading-[130%] text-zinc-700">
                Informe o endereço onde deseja receber seu pedido
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="cep"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input
                      type="text"
                      className="peer block w-52"
                      placeholder=" "
                      {...field}
                    />
                  </FormControl>
                  <FormLabel className="absolute left-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-zinc-300 text-sm text-zinc-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-yellow-800">
                    CEP
                  </FormLabel>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input
                      type="text"
                      className="peer block"
                      placeholder=" "
                      {...field}
                    />
                  </FormControl>
                  <FormLabel className="absolute left-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-zinc-300 text-sm text-zinc-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-yellow-800">
                    Rua
                  </FormLabel>
                </FormItem>
              )}
            />

            <div className="flex items-center gap-3">
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormControl>
                      <Input
                        type="text"
                        className="peer block w-52"
                        placeholder=" "
                        {...field}
                      />
                    </FormControl>
                    <FormLabel className="absolute left-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-zinc-300 text-sm text-zinc-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-yellow-800">
                      Número
                    </FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="complement"
                render={({ field }) => (
                  <FormItem className="relative w-full">
                    <FormControl>
                      <Input
                        type="text"
                        className="peer block placeholder:text-xs placeholder:italic"
                        placeholder="Opcional"
                        {...field}
                      />
                    </FormControl>
                    <FormLabel className="absolute left-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-zinc-300 text-sm text-zinc-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-yellow-800">
                      Complemento
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-center gap-3">
              <FormField
                control={form.control}
                name="neighborhood"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormControl>
                      <Input
                        type="text"
                        className="peer block w-52"
                        placeholder=" "
                        {...field}
                      />
                    </FormControl>
                    <FormLabel className="absolute left-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-zinc-300 text-sm text-zinc-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-yellow-800">
                      Bairro
                    </FormLabel>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="relative w-full">
                    <FormControl>
                      <Input
                        type="text"
                        className="peer block"
                        placeholder=" "
                        {...field}
                      />
                    </FormControl>
                    <FormLabel className="absolute left-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-zinc-300 text-sm text-zinc-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-yellow-800">
                      Cidade
                    </FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="uf"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormControl>
                      <Input
                        type="text"
                        className="peer block w-16"
                        placeholder=" "
                        {...field}
                      />
                    </FormControl>
                    <FormLabel className="absolute left-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-zinc-300 text-sm text-zinc-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-yellow-800">
                      UF
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <div className="flex h-[13rem] flex-col gap-8 rounded-md bg-zinc-200 p-10">
          <div className="flex gap-2">
            <Icons.dollar className="stroke-purple-500" size={22} />
            <div>
              <p className="leading-[130%]">Pagamento</p>
              <span className="text-sm leading-[130%] text-zinc-700">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </div>
          <FormField
            control={form.control}
            name="payment_type"
            render={({ field }) => (
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid grid-cols-3 gap-4"
                >
                  <FormControl>
                    <Label className="flex items-center gap-3 rounded-md border bg-zinc-400 p-4 hover:bg-zinc-500 [&:has([data-state=checked])]:border-purple-500 [&:has([data-state=checked])]:bg-purple-100">
                      <RadioGroupItem value="credit_card" className="sr-only" />
                      <Icons.creditCard
                        size={22}
                        className="stroke-purple-500"
                      />
                      CARTÃO DE CRÉDITO
                    </Label>
                  </FormControl>

                  <FormControl>
                    <Label className="flex items-center gap-3 rounded-md border bg-zinc-400 p-4 hover:bg-zinc-500 [&:has([data-state=checked])]:border-purple-500 [&:has([data-state=checked])]:bg-purple-100">
                      <RadioGroupItem value="debit_card" className="sr-only" />
                      <Icons.bank size={22} className="stroke-purple-500" />
                      CARTÃO DE DÉBITO
                    </Label>
                  </FormControl>

                  <FormControl>
                    <Label className="flex items-center gap-3 rounded-md border bg-zinc-400 p-4 hover:bg-zinc-500 [&:has([data-state=checked])]:border-purple-500 [&:has([data-state=checked])]:bg-purple-100">
                      <RadioGroupItem value="money" className="sr-only" />
                      <Icons.money size={22} className="stroke-purple-500" />
                      DINHEIRO
                    </Label>
                  </FormControl>
                </RadioGroup>
              </FormControl>
            )}
          />
        </div>
        <button type="submit">ENVIAR</button>
      </form>
    </Form>
  )
}

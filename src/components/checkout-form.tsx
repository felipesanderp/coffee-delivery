import { Icons } from './icons'
import { Input } from './ui/input'
import { Label } from './ui/label'

export function CheckoutForm() {
  return (
    <form className="flex flex-col gap-3">
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
          <div className="relative">
            <Input
              id="cep"
              type="text"
              className="peer block w-52"
              placeholder=" "
            />
            <Label
              htmlFor="cep"
              className="absolute left-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-zinc-300 text-sm text-zinc-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-yellow-800"
            >
              CEP
            </Label>
          </div>
          <div className="relative">
            <Input
              id="street"
              type="text"
              className="peer block"
              placeholder=" "
            />
            <Label
              htmlFor="street"
              className="absolute left-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-zinc-300 text-sm text-zinc-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-yellow-800"
            >
              Rua
            </Label>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Input
                id="number"
                type="number"
                className="peer block w-52"
                placeholder=" "
              />
              <Label
                htmlFor="number"
                className="absolute left-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-zinc-300 text-sm text-zinc-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-yellow-800"
              >
                Número
              </Label>
            </div>
            <div className="relative w-full">
              <Input
                id="complement"
                type="text"
                placeholder="Opcional"
                className="peer block placeholder:text-xs placeholder:italic"
              />
              <Label
                htmlFor="complement"
                className="absolute left-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-zinc-300 text-sm text-zinc-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-yellow-800"
              >
                Complemento
              </Label>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Input
                id="neighborhood"
                type="text"
                className="peer block w-52"
                placeholder=" "
              />
              <Label
                htmlFor="neighborhood"
                className="absolute left-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-zinc-300 text-sm text-zinc-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-yellow-800"
              >
                Bairro
              </Label>
            </div>
            <div className="relative w-full">
              <Input
                id="city"
                type="text"
                placeholder=" "
                className="peer block"
              />
              <Label
                htmlFor="city"
                className="absolute left-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-zinc-300 text-sm text-zinc-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-yellow-800"
              >
                Cidade
              </Label>
            </div>
            <div className="relative">
              <Input
                id="uf"
                type="text"
                className="peer block w-16"
                placeholder=" "
              />
              <Label
                htmlFor="uf"
                className="absolute left-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-zinc-300 text-sm text-zinc-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-yellow-800"
              >
                UF
              </Label>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[13rem] rounded-md bg-zinc-200 p-10">
        <div className="flex gap-2">
          <Icons.dollar className="stroke-purple-500" size={22} />
          <div>
            <p className="leading-[130%]">Pagamento</p>
            <span className="text-sm leading-[130%] text-zinc-700">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </div>
      </div>
    </form>
  )
}

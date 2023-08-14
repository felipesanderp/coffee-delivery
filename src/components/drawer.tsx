interface Props {
  isOpen: boolean
  children: React.ReactNode
  onCartIconClick: () => void
}

export const Drawer = ({ children, isOpen, onCartIconClick }: Props) => {
  return (
    <div className="relative">
      <div
        className={`fixed right-0 top-0 z-50 h-full w-[30rem] transform bg-zinc-100 text-zinc-800 transition duration-700 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          boxShadow: `${isOpen ? 'rgba(0, 0, 0, 0.4) 0px 30px 30px' : ''}`,
        }}
      >
        <aside className="h-full overflow-y-auto">
          <header className="flex h-14 items-center justify-end bg-zinc-100 px-4 py-4 text-zinc-800">
            <div>
              <button onClick={onCartIconClick}>Close</button>
            </div>
          </header>
          <main className="p-4 text-zinc-800">{children}</main>
        </aside>
      </div>
    </div>
  )
}

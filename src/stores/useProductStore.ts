import { create } from 'zustand'

import { Product } from '@/types/product'

interface State {
  products: Product[]
  isLoading: boolean
  error: any
}

interface Actions {
  fetchData: () => Promise<void>
}

const INITIAL_STATE: State = {
  products: [],
  isLoading: false,
  error: null,
}

export const useProductsStore = create<State & Actions>((set) => ({
  products: INITIAL_STATE.products,
  isLoading: INITIAL_STATE.isLoading,
  error: INITIAL_STATE.error,

  fetchData: async () => {
    try {
      set({
        isLoading: true,
        error: null,
      })

      const response = await fetch('http://localhost:3001/products', {
        method: 'GET',
      })

      const data = await response.json()

      set({
        products: data,
        isLoading: false,
      })
    } catch (error) {
      set({
        error,
        isLoading: false,
      })
    }
  },
}))

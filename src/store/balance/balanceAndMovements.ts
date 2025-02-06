import { create } from 'zustand'

interface BalanceAndMovsStore {
	globalAmount: number
	investmentTax: number
	earnings: number
	currency: 'ARS' | 'USD'
	exchangeRate: number // Propiedad para la tasa de cambio
	incomes: (amount: number, currency: 'ARS' | 'USD') => void
	expenses: (amount: number, currency: 'ARS' | 'USD') => void
	investment: (amount: number, currency: 'ARS' | 'USD') => void
	setCurrency: (currency: 'ARS' | 'USD') => void // Función para cambiar la divisa
	setExchangeRate: (rate: number) => void // Función para actualizar la tasa de cambio
	getConvertedAmount: () => number
	getConvertedTax: () => number
}

export const useBalanceAndMovsStore = create<BalanceAndMovsStore>((set, get) => ({
	globalAmount: 550000,
	investmentTax: 2,
	earnings: 89000,
	currency: 'ARS',
	exchangeRate: 1160,

	incomes: (amount: number, currency: 'ARS' | 'USD') =>
		set((state) => {
			const convertedAmount = currency === 'USD' ? amount * state.exchangeRate : amount
			return { globalAmount: state.globalAmount + convertedAmount }
		}),

	expenses: (amount: number, currency: 'ARS' | 'USD') =>
		set((state) => {
			const convertedAmount = currency === 'USD' ? amount * state.exchangeRate : amount
			return { globalAmount: state.globalAmount - convertedAmount }
		}),

	investment: (amount: number, currency: 'ARS' | 'USD') =>
		set((state) => {
			const convertedAmount = currency === 'USD' ? amount * state.exchangeRate : amount
			const tax = (state.investmentTax / 100) * convertedAmount
			return { globalAmount: state.globalAmount - convertedAmount - tax }
		}),

	setCurrency: (currency: 'ARS' | 'USD') => set({ currency }),

	setExchangeRate: (rate: number) => set({ exchangeRate: rate }),

	getConvertedAmount: () => {
		const state = get()
		return state.currency === 'USD' ? state.globalAmount / state.exchangeRate : state.globalAmount
	},

	getConvertedTax: () => {
		const state = get()
		const taxAmount = (state.investmentTax / 100) * state.globalAmount
		return state.currency === 'USD' ? taxAmount / state.exchangeRate : taxAmount
	},

	getConvertedEarnings: () => {
		const state = get()
		return state.currency === 'USD' ? state.earnings / state.exchangeRate : state.earnings
	}
}))

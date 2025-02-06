import axios from 'axios'
import { useGoalStore } from '@/store/goal/goalStore'
import { Goal } from '@/store/goal/goalStore'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const apiGoal = {
	getAll: async () => {
		try {
			const { data } = await axios.get(`${API_URL}/objective`)
			useGoalStore.getState().setGoal(data)
			return data
		} catch (error) {
			console.error('Error fetching goals:', error)
			return []
		}
	},

	create: async (goal: Goal) => {
		try {
			const { data } = await axios.post(`${API_URL}/objective/create`, goal)
			useGoalStore.getState().setGoal(data)
			return data
		} catch (error) {
			console.error('Error creating goal:', error)
			return null
		}
	},

	update: async (id: number, goalData: Partial<Goal>) => {
		try {
			const { data } = await axios.put(`${API_URL}/objective/${id}`, goalData)
			useGoalStore.getState().setGoal(data)
			return data
		} catch (error) {
			console.error('Error updating goal:', error)
			return null
		}
	},

	delete: async (id: number) => {
		try {
			await axios.delete(`${API_URL}/objective/${id}`)
			useGoalStore.getState().setGoal(null)
			return true
		} catch (error) {
			console.error('Error deleting goal:', error)
			return false
		}
	},
}

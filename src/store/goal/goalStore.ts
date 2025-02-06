import { create } from 'zustand'

export interface Goal {
	description: string
	objectiveType: string
	amountObjective: number
	frequency: string
	startDate: string
	targetDate: string
}

export interface GoalStore {
	goal: Goal | null
	createGoal: (goal: Goal) => void
	updateGoal: (goal: Partial<Goal>) => void
	deleteGoal: () => void
	setGoal: (goal: Goal | null) => void
}

export const useGoalStore = create<GoalStore>((set) => ({
	goal: null,

	createGoal: (goal) => set({ goal }),

	updateGoal: (updatedFields) =>
		set((state) => ({
			goal: state.goal ? { ...state.goal, ...updatedFields } : null,
		})),

	deleteGoal: () => set({ goal: null }),

	setGoal: (goal) => set({ goal }),
}))

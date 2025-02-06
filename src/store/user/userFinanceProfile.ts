import { create } from 'zustand';

export interface FinancialProfile {
  id: number;
  knowledgeLevel: string;
  riskProfile: string;
  incomeMonthly: number;
  expensesMonthly: number;
  percentageSave: number;
  totalDebt: number;
  savingsTotal: number;
  patrimonyTotal: number;
}

interface FinancialProfileStore {
  financialProfile: FinancialProfile | null; 
  setFinancialProfile: (profile: FinancialProfile) => void;
  clearFinancialProfile: () => void;
}

export const useFinancialProfileStore = create<FinancialProfileStore>((set) => ({
  financialProfile: null, 
  setFinancialProfile: (profile: FinancialProfile) => set({ financialProfile: profile }),
  clearFinancialProfile: () => set({ financialProfile: null }), 
}));

import { create } from 'zustand';

interface FinancialProfile {
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
  financialProfile: FinancialProfile;
  setFinancialProfile: (profile: FinancialProfile) => void;
  clearFinancialProfile: () => void;
}

export const useFinancialProfileStore = create<FinancialProfileStore>((set) => ({
  financialProfile: {
    id: 0,
    knowledgeLevel: '',
    riskProfile: '',
    incomeMonthly: 0,
    expensesMonthly: 0,
    percentageSave: 0,
    totalDebt: 0,
    savingsTotal: 0,
    patrimonyTotal: 0,
  },
  setFinancialProfile: (profile: FinancialProfile) => set({ financialProfile: profile }),
  clearFinancialProfile: () => set({
    financialProfile: {
      id: 0,
      knowledgeLevel: '',
      riskProfile: '',
      incomeMonthly: 0,
      expensesMonthly: 0,
      percentageSave: 0,
      totalDebt: 0,
      savingsTotal: 0,
      patrimonyTotal: 0,
    },
  }),
}));

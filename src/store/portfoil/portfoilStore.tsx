import {create} from 'zustand';
import { getPortfolios } from '@/utils/portfoil/getPortfoil'; 


export interface Portfolio {
  id: number;
  quantity: number;
  purchasePrice: number;
  purchaseDate: string;
  category: string;
  object: [string, string, number, number]; // [name, detail, price, quantity]
  userId: number;
}


interface PortfoilStore {
  portfolios: Record<string, Portfolio[]>;  
  loading: boolean;
  error: string | null;
  fetchPortfolios: () => void;
}

const usePortfoilStore = create<PortfoilStore>((set) => ({
  portfolios: {"Bonos": [
      {
        id: 1,
        quantity: 100,
        purchasePrice: 101.5,
        purchaseDate: "2025-02-01",
        category: "Bonos",
        object: ["AL30.BA", "Bono del gobierno", 101.5, 100],
        userId: 1
      },
      {
        id: 2,
        quantity: 50,
        purchasePrice: 110.0,
        purchaseDate: "2025-02-01",
        category: "Bonos",
        object: ["AL35.BA", "Bono corporativo", 110.0, 50],
        userId: 1
      }
    ],
    "Acciones": [
      {
        id: 3,
        quantity: 200,
        purchasePrice: 25.75,
        purchaseDate: "2025-02-01",
        category: "Acciones",
        object: ["DIS.BA", "Acción tecnológica", 25.75, 200],
        userId: 1
      },
      {
        id: 4,
        quantity: 150,
        purchasePrice: 50.25,
        purchaseDate: "2025-02-01",
        category: "Acciones",
        object: ["AAPL.BA", "Acción energética", 50.25, 150],
        userId: 1
      }
    ]},
  loading: false,
  error: null,


  fetchPortfolios: async () => {
    set({ loading: true, error: null });

    try {
      const data = await getPortfolios(); 

      const categorizedPortfolios = data.portfolios.reduce(

        (acc: Record<string, Portfolio[]>, portfolio: Portfolio) => {
          const { category } = portfolio; 

          if (!acc[category]) {
            acc[category] = [];
          }

          acc[category].push({
            id: portfolio.id,
            quantity: portfolio.quantity,
            purchasePrice: portfolio.purchasePrice,
            purchaseDate: portfolio.purchaseDate,
            userId: portfolio.userId,
            object: portfolio.object, 
            category: portfolio.category,
          });

          return acc;
        },
        {} as Record<string, Portfolio[]> 
      );

      set({ portfolios: categorizedPortfolios });
    } catch (error: unknown) { 
      set({ error: error instanceof Error ? error.message : 'Error desconocido' });
    } finally {
      set({ loading: false });
    }
  }
}));

export default usePortfoilStore;

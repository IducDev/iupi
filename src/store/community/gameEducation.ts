
import {create} from "zustand";

interface Option {
  value: string;
  description: string;
}

interface GameData {
  question: string;
  options: Option[];
  answer: string;
}


interface GameStore {
  games: { [key: number]: GameData };
  loadGames: (data: { [key: number]: GameData }) => void; 
}

const initialGames: { [key: number]: GameData } = {
  1: {
    question: "¿Cuál es una estrategia efectiva para invertir en el mercado?",
    options: [
      {
        value: "Evitar diversificar tu portafolio",
        description:
          "No diversificar parece fácil, pero es arriesgado. Concentrar inversiones en un solo activo te expone a pérdidas si ese mercado cae. Sin diversificación, podrías perder oportunidades de crecimiento en otros activos. En resumen, no diversificar te deja vulnerable.",
      },
      {
        value: "Invertir solo en bonos del gobierno",
        description:
          "Invertir en bonos de gobierno parece seguro, pero limita el crecimiento. Ofrecen estabilidad, pero su rendimiento es bajo. Depender de ellos puede hacer tu cartera vulnerable a la inflación. Diversificar es clave para maximizar ganancias.",
      },
      {
        value: "Seguir tendencias sin investigar",
        description:
          "Seguir tendencias puede parecer atractivo, pero no siempre es la mejor estrategia. Las modas pueden llevar a decisiones impulsivas y activos sobrevalorados. Lo que está de moda hoy puede no ser rentable mañana, poniendo en riesgo tu inversión.",
      },
      {
        value: "Comprar acciones de empresas en crecimiento",
        description:
          "Invertir en acciones de empresas en crecimiento es inteligente. Al comprar, te beneficias de su crecimiento, aumentando el valor de tu inversión. Estas empresas innovan y se adaptan a tendencias.",
      },
    ],
    answer: "Comprar acciones de empresas en crecimiento",
  },
};

const useGameStore = create<GameStore>((set) => ({
  games: initialGames, 
  loadGames: (data) => set({ games: data }), 
}));

export default useGameStore;

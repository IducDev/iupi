import {create} from 'zustand';

interface EducationItem {
  img: string;
  title: string;
  message: string;
  levels: string;  
  levelUser: string;
}

interface EducationStore {
  items: { [key: number]: EducationItem }; 
  addItem: (id: number, img: string, title: string, message: string, levels: string, levelUser: string) => void;
  removeItem: (id: number) => void;
}

const useEducationStore = create<EducationStore>((set) => ({

  items: {
    1: { 
      img: "book", 
      title: "Inversión desde Cero", 
      message: "¿Estás listo para comenzar a invertir? Aquí tienes algunas preguntas clave para guiarte en tu camino hacia la inversión.", 
      levels: "0/13", 
      levelUser: "1er Nivel" 
    },
    2: { 
      img: "padlock", 
      title: "Ahorros Inteligentes", 
      message: "¿Cómo puedes ahorrar más en tus compras diarias? ¿Qué estrategias utilizas para reducir tus gastos mensuales?", 
      levels: "0/24", 
      levelUser: "1er Nivel" 
    },
    3: { 
      img: "Sum", 
      title: "Dominio del Presupuesto", 
      message: "¿Cómo puedes asegurarte de que tus gastos se mantengan dentro de tu presupuesto?", 
      levels: "0/12", 
      levelUser: "1er Nivel" 
    },
    4:{
    img: "CreditCard", 
    title: "Puntuaciones de Crédito", 
    message: "¿Cómo puedes aumentar tu puntuación de crédito? ¿Has considerado revisar tu informe de crédito o pagar tus deudas a tiempo?", 
    levels: "0/30", 
    levelUser: "1er Nivel" 
    },
    5:{
      img: "Clock", 
      title: "Planificación para el Futuro", 
      message: "¿Cómo te imaginas tu vida en cinco años? ¿Qué pasos estás tomando para alcanzar tus metas?", 
      levels: "0/18", 
      levelUser: "1er Nivel" 
    }
  },
  addItem: (id, img, title, message, levels, levelUser) => set((state) => ({
    items: { ...state.items, [id]: { img, title, message, levels, levelUser } }
  })),
  removeItem: (id) => set((state) => {
    const newItems = { ...state.items };
    delete newItems[id];
    return { items: newItems };
  })
}));

export default useEducationStore;

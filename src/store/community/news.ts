import { create } from 'zustand';

interface NewsItem {
  img: string;
  title: string;
  message: string;
  autor: string;
  date: string;
  comments: number;
}

interface NewsStore {
  items: { [key: number]: NewsItem };
  addItem: (id: number, img: string, title: string, message: string, autor: string, date: string, comments: number) => void;
  removeItem: (id: number) => void;
}

export const useNewsStore = create<NewsStore>((set) => ({

  items: {
    1: {
      img: 'Global',
      title: 'La economía global en 2025',
      message: 'Un análisis detallado de cómo las economías más grandes del mundo están enfrentando el año 2025.',
      autor: 'Ana Beltrán',
      date: '2025-01-15',
      comments: 75,
    },
    2: {
      img: 'Criptos',
      title: 'El futuro de las criptomonedas',
      message: 'Explorando las tendencias y predicciones para el mercado de criptomonedas en el próximo año.',
      autor: 'Miguel Torres',
      date: '2025-01-18',
      comments: 18,
    },
    3: {
      img: 'Medicine',
      title: 'Impacto de la inteligencia artificial en la medicina',
      message: 'Un análisis sobre cómo DeepSeek está transformando la interacción en el ámbito de la programación y las finanzas.',
      autor: 'Luisa Martínez',
      date: '2025-01-22',
      comments: 35,
    },
    4: {
      img: 'Cars',
      title: 'Tecnologías emergentes en la industria automotriz',
      message: 'Descubriendo las innovaciones tecnológicas que están cambiando la industria automotriz en la actualidad.',
      autor: 'Elena Vargas',
      date: '2025-01-25',
      comments: 10,
    },

  },


  addItem: (id, img, title, message, autor, date, comments) => {
    set((state) => ({
      items: {
        ...state.items,
        [id]: { img, title, message, autor, date, comments },
      },
    }));
  },

  removeItem: (id) => {
    set((state) => {
      const updatedItems = { ...state.items };
      delete updatedItems[id];
      return { items: updatedItems };
    });
  },
}));

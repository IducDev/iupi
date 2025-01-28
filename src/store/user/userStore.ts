import { create } from 'zustand';

interface User {
  id: number | null;
  name: string;
  lastName: string;
  email: string;
  photoUrl: string;
  phoneNumber: number;
  registerDate: string;
  birthDate: string;
  roles: string[];
}

interface UserStore {
  user: User;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: {
    id: null,
    name: '',
    lastName: '',
    email: '',
    photoUrl: '',
    phoneNumber: 0,
    registerDate:"",
    birthDate: '',
    roles: [],
  },
  setUser: (user: User) => set({ user }),
  clearUser: () => set({
    user: {
      id: null,
      name: '',
      lastName: '',
      email: '',
      photoUrl: '',
      phoneNumber: 0,
      registerDate:"",
      birthDate: '',
      roles: [],
    },
  }),
}));

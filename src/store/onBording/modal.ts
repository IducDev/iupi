import {create }from 'zustand';

type ModalState = {
  modalState: string;  
  openModal: () => void;
  closeModal: () => void;
  setLoading: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  modalState: "Cerrado", 
  openModal: () => set({ modalState: "Abierto" }),
  closeModal: () => set({ modalState: "Cerrado" }),
  setLoading: () => set({ modalState: "Cargando" }),
}));
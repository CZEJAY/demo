import { create } from "zustand";

export type ModalType =
  | "account-settings"
  | "delete-account"
  | "credits"
  | "folder";

interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  view?: "main" | "refer" | "invite";
  onOpen: (type: ModalType, view?: "main" | "refer" | "invite") => void;
  onClose: () => void;
  onChangeView: (view: "main" | "refer" | "invite") => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,
  view: "main",
  onOpen: (type, view = "main") => set({ isOpen: true, type, view }),
  onClose: () => set({ isOpen: false, type: null, view: "main" }),
  onChangeView: (view) => set({ view }),
}));

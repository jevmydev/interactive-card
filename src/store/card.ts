import { create } from "zustand";
import { INITIAL_CARD_STORE } from "../constants";
import { type CardTypes } from "../types";

interface CardStore extends CardTypes {
    updateCard: (newCard: object) => void;
}

export const useCard = create<CardStore>((set) => ({
    ...INITIAL_CARD_STORE,
    updateCard: (newCard) => {
        set((store) => ({
            ...store,
            ...newCard
        }));
    }
}));

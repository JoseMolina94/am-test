import { Character } from 'rickmortyapi';
import { create } from 'zustand';

interface CharacterState {
  selectedCharacter: Character | null;
  setSelectedCharacter: (character: Character) => void;
  clearSelectedCharacter: () => void;
}

export const useCharacterStore = create<CharacterState>((set) => ({
  selectedCharacter: null,
  setSelectedCharacter: (character) => set({ selectedCharacter: character }),
  clearSelectedCharacter: () => set({ selectedCharacter: null }),
}));
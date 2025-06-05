import { FavoriteCharacter } from "@/types/Characters";
import { Character } from "rickmortyapi";

const API_URL = process.env.NEXT_PUBLIC_JSON_SERVER_API_URL as string;

export const getFavoriteCharacters = async (): Promise<FavoriteCharacter[]> => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addFavoriteCharacter = async (character: Character): Promise<FavoriteCharacter> => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: `${character.id}`,
      name: character.name
    }),
  });
  return res.json();
};

export const removeFavoriteCharacter = async (id: number): Promise<boolean> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  })

  console.log('PPPP ', response)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return true;
}
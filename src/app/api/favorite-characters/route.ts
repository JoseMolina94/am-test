import { NextRequest } from 'next/server';
import { getFavoriteCharacters, addFavoriteCharacter } from '@/services/favoriteCharacters.service';
import { Character } from '@/types/Characters';

export async function GET() {
  try{
    const response = await getFavoriteCharacters()

    return Response.json(response)
  } catch(e) {
    console.error(e)
    return Response.json([])
  }
}

export async function POST(request: NextRequest) {
  const { character } = await request.json();
  try {
    const result = await addFavoriteCharacter(character as Character);
    Response.json(result);
  } catch (error) {
    Response.json({ error: "Error adding favorite" });
  }
}
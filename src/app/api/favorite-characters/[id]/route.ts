
import { removeFavoriteCharacter } from '@/services/favoriteCharacters.service';

export async function DELETE(
  request: Request
) {
  try {
    const { id } = await request.json();
    
    const result = await removeFavoriteCharacter(parseInt(id));
    
    return Response.json({ 
      success: true,
      data: result 
    });

  } catch (error) {
    return Response.json(
      { 
        success: false,
        error: "Error removing favorite" 
      }
    )
  }
}
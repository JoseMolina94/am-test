import { Character as OriginalCharacter } from "rickmortyapi"

export interface CharacterListData {
  info?: {
    prev: string | null
    next: string | null
    count: number
    pages: number
  }
  results: OriginalCharacter[]
}

export interface FavoriteCharacter {
  id: string
  name: string
}

export interface Character extends OriginalCharacter {
  isFavorite: boolean
}
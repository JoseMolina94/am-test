import { Character } from "rickmortyapi"

export interface CharacterListData {
  info?: {
    prev: string | null
    next: string | null
    count: number
    pages: number
  }
  results: Character[]
}

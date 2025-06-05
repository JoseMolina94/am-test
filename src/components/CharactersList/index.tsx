
import { Character } from '@/types/Characters'
import CharacterCard from '../CharacterCard'

import styles from './charcaters-list.module.css'

type CharactersListProps = {
  list: Character[]
  refetch?: () => void
}

export default function CharactersList (props: CharactersListProps) {
  const {
    list = [],
    refetch = () => {}
  } = props
  
  const addFavorites = async (character: Character) => {
    await fetch('/api/favorite-characters', {
      method: 'POST',
      body: JSON.stringify({ character })
    }).then(() => refetch && refetch())
  }

  const removeFavorites = async (id: number) => {
    const res = await fetch(`/api/favorite-characters/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({ id })
    }).then((data) => data.json())

    console.log("RESSS", res)
    refetch && refetch()
  }

  const manageFavorite = (character: Character) => {
    if (!character.isFavorite) {
      addFavorites(character)
    } else {
      removeFavorites(character.id)
    }
  }

  return (
    <div className={styles.charactersList}>
      {
        list.map((character: Character, index: number) => (
          <CharacterCard 
            key={index} 
            character={character} 
            likeOnClick={() => manageFavorite(character)}
          />
        ))
      }
    </div>
  )
}
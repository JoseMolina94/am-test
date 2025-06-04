
import { Character } from 'rickmortyapi'
import CharacterCard from '../CharacterCard'

import styles from './charcaters-list.module.css'

type CharactersListProps = {
  list: Character[]
}

export default function CharactersList (props: CharactersListProps) {
  const {
    list = []
  } = props

  return (
    <div className={styles.charactersList}>
      {
        list.map((character: Character, index: number) => (
          <CharacterCard key={index} {...character} />
        ))
      }
    </div>
  )
}
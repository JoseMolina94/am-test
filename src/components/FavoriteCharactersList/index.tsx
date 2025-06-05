'use client'

import { useState } from "react"

import styles from './favorite-character-list.module.css'
import { FavoriteCharacter } from "@/types/Characters"

type FavoriteCharactersListProps = {
  favorites: FavoriteCharacter[]
}

export default function FavoriteCharactersList (props: FavoriteCharactersListProps) {
  const { favorites } = props
  const [ isOpen, setIsOpen ] = useState<boolean>(false)

  return(
    <div 
      className={styles.tabContainer}
      onClick={() => setIsOpen(!isOpen)}
    >
      {
        !isOpen 
          ? <span className={styles.favsLabel}> FAVS </span>
          : (
            <div className={styles.tabList}>
              {
                favorites.map((fav: FavoriteCharacter, index: number) => (
                  <div key={index} className={styles.tabItem}>
                    <span>
                      {fav.name.toLocaleUpperCase()}
                    </span>
                  </div>
                ))
              }
            </div>
          )
      }
    </div>
  )
}
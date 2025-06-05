'use client'

import { useEffect, useState } from "react";
import CharactersList from "@/components/CharactersList";
import CharacterDetails from "../components/CharacterDetails";
import CharacterDetailsMobile from "@/components/CharacterDetailsMobile";
import CharacterFilter from "@/components/CharacterFilter";
import { useCharacterStore } from "@/store/characterStore";
import { CharacterListData, FavoriteCharacter } from "@/types/Characters";
import { Character, getCharacters } from "rickmortyapi";

import styles from './page.module.css'
import FavoriteCharactersList from "@/components/FavoriteCharactersList";

export default function Home() {
  const [charactersListData, setCharactersListData] = useState<CharacterListData>()
  const [favoriteCharactersList, setFavoriteCharactersList] = useState<FavoriteCharacter[]>([])
  const { setSelectedCharacter, selectedCharacter } = useCharacterStore()
  const [filterValue, setFilterValue] = useState<string>('')

  const joinCharactersData = () => {
    return (charactersListData?.results || []).map((character: Character) => ({
      ...character,
      isFavorite: !!favoriteCharactersList.find(fav => fav.id === `${character.id}`)
    }))
  }

  const getCharactersList = async (filters: { name: string }) => {
    const response = await getCharacters(filters)
    
    setCharactersListData({
      results: response.data.results || [],
      info: response.data.info 
    })
  }

  const getFavoriteCharacters = async () => {
    try {
      const response = await fetch('/api/favorite-characters').then(data => data.json())
      setFavoriteCharactersList(response || [])
    } catch(e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getFavoriteCharacters()
    getCharactersList({
      name: filterValue
    })
  }, [filterValue])

  useEffect(() => {
    setSelectedCharacter(charactersListData?.results[0] as Character)
  }, [charactersListData])

  return (
    <div className={styles.characterSectionContainer}>

      <div className={styles.characterDetailsSection}>
        <CharacterDetails {...selectedCharacter as Character} />
      </div>

      <div className={styles.charactersListSectionContainer} >
        <div className={styles.characterFilterContainer}>
          <CharacterFilter value={filterValue} setValue={setFilterValue} />
        </div>
        
        <div className={styles.charactersListContainer}>
          <CharactersList 
            list={joinCharactersData() || []}
            refetch={getFavoriteCharacters}
          />
        </div>

        <div className={styles.favsTabSection} >
          <FavoriteCharactersList favorites={favoriteCharactersList || []} />
        </div>
        
      </div>

      <div className={styles.characterDetailsMobileSection}>
        <CharacterDetailsMobile {...selectedCharacter as Character} />

        <div className={styles.favsTabMoblieSection} >
          <FavoriteCharactersList favorites={favoriteCharactersList || []} />
        </div>
      </div>

    </div>
  );
}

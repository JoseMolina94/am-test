'use client'

import { useEffect, useState } from "react";
import CharactersList from "@/components/CharactersList";
import CharacterDetails from "../components/CharacterDetails";
import CharacterFilter from "@/components/CharacterFilter";
import { useCharacterStore } from "@/store/characterStore";
import { CharacterListData } from "@/types/Characters";
import { Character, getCharacters } from "rickmortyapi";

import styles from './page.module.css'

export default function Home() {
  const [charactersListData, setCharactersListData] = useState<CharacterListData>()
  const { setSelectedCharacter, selectedCharacter } = useCharacterStore()
  const [filterValue, setFilterValue] = useState<string>('')
  
  const getCharactersList = async (filters: { name: string }) => {
    const response = await getCharacters(filters)
    
    setCharactersListData({
      results: response.data.results || [],
      info: response.data.info 
    })
  }

  useEffect(() => {
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
            list={charactersListData?.results || []} 
          />
        </div>
        
      </div>

    </div>
  );
}

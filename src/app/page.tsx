'use client'

import { useEffect, useState } from "react";
import CharacterCard from "./components/CharacterCard";
import CharacterDetails from "./components/CharacterDetails";
import { CharacterListData } from "@/types/Characters";
import { Character, getCharacters } from "rickmortyapi";

import styles from './page.module.css'
import { useCharacterStore } from "@/store/characterStore";

export default function Home() {
  const [charactersListData, setCharactersListData] = useState<CharacterListData>()
  const { setSelectedCharacter, selectedCharacter } = useCharacterStore()
  
  const getCharactersList = async () => {
    const response = await getCharacters()
    
    setCharactersListData({
      results: response.data.results || [],
      info: response.data.info 
    })
  }

  useEffect(() => {
    getCharactersList()
  }, [])

  useEffect(() => {
    setSelectedCharacter(charactersListData?.results[0] as Character)
  }, [charactersListData])

  console.log("HHHH", charactersListData?.results)
  return (
    <div className={styles.characterSectionContainer}>

      <div className={styles.characterDetailsSection}>
        <CharacterDetails {...selectedCharacter as Character} />
      </div>

      <div className={styles.charactersList}>
        {
          charactersListData?.results.map((character: Character, index: number) => (
            <CharacterCard key={index} {...character} />
          ))
        }
      </div>

    </div>
  );
}

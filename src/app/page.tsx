'use client'
import { CharacterListData } from "@/types/Characters";
import { useEffect, useState } from "react";
import { getCharacters } from "rickmortyapi";

export default function Home() {
  const [charactersListData, setCharactersListData] = useState<CharacterListData>()
  
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

  console.log('LIST', charactersListData)
  return (
    <div>

    </div>
  );
}

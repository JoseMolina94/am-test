import { Character } from "@/types/Characters";
import { useCharacterStore } from "@/store/characterStore";
import IconHearth from "../icons/IconHearth";
import Image from "next/image";

import styles from './charactercard.module.css'

type CharacterCardProps = {
  character: Character
  likeOnClick?: () => void
}

export default function CharacterCard (props: CharacterCardProps) {
  const { 
    character, 
    likeOnClick = () => {} 
  } = props
  const { name, image, id, isFavorite } = character
  const { setSelectedCharacter, selectedCharacter } = useCharacterStore();

  const firstName = name.split(" ")[0].toLocaleUpperCase()

  return (
    <div 
      className={`${styles.characterCard} ${(selectedCharacter?.id === id) && styles.selected}`}
      onClick={() => setSelectedCharacter(character)}
    >
      {firstName}

      <Image 
        src={image}
        alt={name}
        width={145}
        height={145}
        className={styles.characterImage}
      />

      <button className={styles.likeBtn} onClick={() => likeOnClick && likeOnClick()} >
        <IconHearth 
          color={!isFavorite ? "white" : "red"} 
        /> 
        <span>
          Like
        </span>
      </button>
    </div>
  )
}
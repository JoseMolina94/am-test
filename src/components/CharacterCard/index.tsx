import { Character } from "rickmortyapi";
import { useCharacterStore } from "@/store/characterStore";
import IconHearth from "../icons/IconHearth";
import Image from "next/image";

import styles from './charactercard.module.css'

export default function CharacterCard (props: Character) {
  const { name, image, id } = props
  const { setSelectedCharacter, selectedCharacter } = useCharacterStore();

  const firstName = name.split(" ")[0].toLocaleUpperCase()

  return (
    <div 
      className={`${styles.characterCard} ${(selectedCharacter?.id === id) && styles.selected}`}
      onClick={() => setSelectedCharacter(props)}
    >
      {firstName}

      <Image 
        src={image}
        alt={name}
        width={145}
        height={145}
        className={styles.characterImage}
      />

      <button className={styles.likeBtn} >
        <IconHearth /> <span>Like</span>
      </button>
    </div>
  )
}
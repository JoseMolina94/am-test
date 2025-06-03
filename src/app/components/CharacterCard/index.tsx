import { Character } from "rickmortyapi";
import IconHearth from "../icons/IconHearth";
import Image from "next/image";

import styles from './charactercard.module.css'

export default function CharacterCard (props: Character) {
  const { name, image } = props

  const firstName = name.split(" ")[0].toLocaleUpperCase()

  return (
    <div className={styles.characterCard} >
      {firstName}

      <Image 
        src={image}
        alt={name}
        width={145}
        height={145}
      />

      <button className={styles.likeBtn} >
        <IconHearth /> <span>Like</span>
      </button>
    </div>
  )
}
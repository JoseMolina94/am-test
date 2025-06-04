import { ChangeEvent, Dispatch, SetStateAction } from "react"
import IconSearch from "../icons/IconSearch"

import styles from './character-filter.module.css'

type CharacterFilterProps = {
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

export default function CharacterFilter (props: CharacterFilterProps) {
  const { value, setValue } = props

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value

    setValue(newValue)
  }

  return (
    <div className={styles.characterFilter} >
      <IconSearch color="#7cde0c" />
      <input 
        type="text"
        placeholder="Find your character..."
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
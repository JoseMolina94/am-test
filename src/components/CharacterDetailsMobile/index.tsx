'use client'

import { Character } from "rickmortyapi";
import StatusTag from "../StatusTag";

import styles from './character-details-mobile.module.css'

export default function CharacterDetailsMobile(props: Character) {
  const { image, name, species, origin, location, gender, episode, status } = props

  return (
    <div className={styles.characterDetailsMobileContainer}>
      <div
        className={styles.characterPortait}
        style={{
          backgroundImage: `url("${image}")`,
        }}
      >
        <div className={styles.statusContainer}>
          <StatusTag status={status} />
        </div>


        <div className={styles.detailsSection}>
          <div className={styles.infoContainer} >
            <p className={styles.characterName}>
              {name}
            </p>
            <span> {species} </span>

            <div className={styles.characterInfoContainer}>

              <div className={styles.characterInfo} >
                <span className={styles.characterTitleLabel}>
                  Origin
                </span>
                <span>
                  {origin?.name}
                </span>
              </div>

              <div className={styles.characterInfo} >
                <span className={styles.characterTitleLabel}>
                  Location
                </span>
                <span>
                  {location?.name}
                </span>
              </div>

              <div className={styles.characterInfo} >
                <span className={styles.characterTitleLabel}>
                  Gender
                </span>
                <span>
                  {gender}
                </span>
              </div>

              <div className={styles.characterInfo} >
                <span className={styles.characterTitleLabel}>
                  Episodes
                </span>
                <span>
                  {episode?.length || 0}
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
import { ReactNode } from "react";
import Image from "next/image";

import styles from './app-layout.module.css'

type AppLayoutProps = {
  children: ReactNode
}

export default function AppLayout ( { children } : AppLayoutProps ) {

  return (
    <div
      style={{
        backgroundImage: 'url("/backgrounds/starsbg.webp")'
      }}
    >
      <div className={styles.layoutContainer}>

        <div className={styles.layout}>
          <div className={styles.logoContainer}>
            <Image 
              src='/images/Rick-And-Morty.webp' 
              alt="app-logo" 
              width={200} 
              height={100} 
            />
          </div>

          <div className={styles.appContainer}>
            { children }
          </div>
        </div>

        <Image 
          src='/images/rick-and-morty-characters.webp'
          width={300}
          height={300}
          alt="characters"
          className={styles.charactersDecoration}
        />
        <div className={styles.layoutFooter} />
      </div>
      
    </div>
  )

}
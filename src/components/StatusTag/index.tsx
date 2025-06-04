import styles from './status-tag.module.css'

type StatusTagProps = {
  status: 'Dead' | 'Alive' | 'unknown';
}

export default function StatusTag (props: StatusTagProps) {
  const {
    status = 'unknown'
  } = props

  return (
    <div className={styles.statusTag}>
      <div className={`${styles.statusCircles} ${styles[status.toLocaleLowerCase()]}`} />
      <span>
        { status.toLocaleUpperCase() }
      </span>
    </div>
  )
}
import styles from '../styles/Home.module.css' 

export default function Landing() {
  return(
    <div className={styles.landing}>
      <div className={styles.title}>
      <div className={styles.landingImg}>
        
        </div>
        <h1>
          Weston
        </h1>
        <h1>
          Bailey
        </h1>
      </div>

      <code className={styles.code}>
        {'{ software engineer }'}
      </code>
    </div>
  )
}
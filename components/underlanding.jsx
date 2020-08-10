import styles from '../styles/Home.module.css'

export default function UnderLanding() {
  return(
    <div className={styles.grid} >
      <div className={styles.lowerPageLeft}>
        tech stacks
      </div>
      <div className={styles.lowerPageRight}>
        projects
      </div>

      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div,
        div#__next > div > div {
          height: 100%;
        }
      `}</style>
    </div>
  )
}
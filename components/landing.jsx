import styles from '../styles/Home.module.css' 
import { style } from '@material-ui/system'

export default function Landing() {
  return(
    <div className={styles.landing}>
      <div className={styles.title}>
        <h1>
          Weston
        </h1>
        <h1>
          Bailey
        </h1>
      </div>

      <code>
        {'{ software engineer }'}
      </code>
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
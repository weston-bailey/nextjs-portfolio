import styles from '../styles/Home.module.css';
import TechStack from './techstack'; 

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

      <div>
        &nbsp;
      </div>

      <div className={styles.grid}>

        <TechStack techAnchor={"https://github.com/weston-bailey"} 
                    techImgSrc={"/img/github-logo.png"}
        />

        <TechStack techAnchor={"https://www.linkedin.com/in/weston-bailey-545b591ab/"} 
                    techImgSrc={"/img/linkdin-logo.png"}
        />

      </div>
    </div>
  )
}
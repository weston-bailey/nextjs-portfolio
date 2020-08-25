import styles from '../styles/Home.module.css'
import TechStack from './techstack'

export default function Project(props){
  return (
    <div className={styles.card}>
      <div className={styles.colW50}>
        <h2>{props.title}</h2>
        
        <div>
          <p>
            <em>
              {props.tagline}
            </em>
          </p>
        </div>
        
        <div>
          <p>
            {props.description}
          </p>
        </div>

        <div>
          <a href={props.githubAnchor} target="blank">
            <p>{props.title} on github</p>
          </a>
        </div>

        <div>
          <a href={props.deploymentAnchor} target="blank">
            <p>{props.title} deployment</p>
          </a>
        </div>

        <div className={styles.grid}>
          {props.techStacks}
        </div>
      </div>
      <div className={styles.colW50, styles.center}>
        <a href={props.img1} target="blank">
          <img className={styles.projectImg} src={props.img1} />
        </a>

        <a href={props.img2}target="blank">
          <img className={styles.projectImg} src={props.img2} />
        </a>
        <a href={props.img3} target="blank">
          <img className={styles.projectImg} src={props.img3} />
        </a>

        <a href={props.img4}target="blank">
          <img className={styles.projectImg} src={props.img4} />
        </a>
      </div>
    </div>
  )
}
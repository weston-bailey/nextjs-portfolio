import styles from '../styles/Home.module.css'
import TechStackColumn from './techstackscolumn'
import ProjectsColumn from './projectscolumn'

export default function UnderLanding() {
  return(
    <div className={styles.grid} >
      <div className={styles.lowerPageLeft}>
        <TechStackColumn />
      </div>
      
      <div className={styles.lowerPageRight}>
        <ProjectsColumn />
      </div>
    </div>
  )
}
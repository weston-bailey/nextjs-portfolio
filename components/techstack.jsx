import styles from '../styles/Home.module.css'

export default function TechStack(props){
  return (
    <div className={styles.techImgContainer}>
      <a href={props.techAnchor} target="blank">
        <img className={styles.techImg} src={props.techImgSrc} />
      </a>
    </div>
  )
}
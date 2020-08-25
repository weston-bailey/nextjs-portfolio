import styles from '../styles/Home.module.css'
import TechStack from './techstack'

export default function TechStackColumn(){
  return (
    <div className={styles.underLanding}>
      <h1>technologies</h1>
      <div className={styles.grid}>
        <TechStack techAnchor={"/img/js-logo.png"} 
                   techImgSrc={"/img/js-logo.png"}
        />

        <TechStack techAnchor={"/img/mern-logo-2.png"} 
                   techImgSrc={"/img/mern-logo-2.png"}
        />

        <TechStack techAnchor={"/img/node-js-logo.png"} 
                   techImgSrc={"/img/node-js-logo.png"}
        />

        <TechStack techAnchor={"/img/react-logo.png"} 
                   techImgSrc={"/img/react-logo.png"}
        />

        <TechStack techAnchor={"/img/next-js-logo.png"} 
                   techImgSrc={"/img/next-js-logo.png"}
        />

        <TechStack techAnchor={"/img/express-js-logo.png"} 
                   techImgSrc={"/img/express-js-logo.png"}
        />

        <TechStack techAnchor={"/img/postgress-logo.png"} 
                   techImgSrc={"/img/postgress-logo.png"}
        />

        <TechStack techAnchor={"/img/mongodb-logo.png"} 
                   techImgSrc={"/img/mongodb-logo.png"}
        />

        <TechStack techAnchor={"/img/HTML-logo.png"} 
                   techImgSrc={"/img/HTML-logo.png"}
        />

        <TechStack techAnchor={"/img/css-logo.png"} 
                   techImgSrc={"/img/css-logo.png"}
        />

        <TechStack techAnchor={"/img/bootstrap-logo.png"} 
                   techImgSrc={"/img/bootstrap-logo.png"}
        />

        <TechStack techAnchor={"/img/material-ui-logo.png"} 
                   techImgSrc={"/img/material-ui-logo.png"}
        />

        <TechStack techAnchor={"/img/typescript-logo.png"} 
                   techImgSrc={"/img/typescript-logo.png"}
        />

        <TechStack techAnchor={"/img/python-logo.png"} 
                   techImgSrc={"/img/python-logo.png"}
        />

        <TechStack techAnchor={"/img/flask-logo.png"} 
                   techImgSrc={"/img/flask-logo.png"}
        />

        <TechStack techAnchor={"/img/jinja-logo.png"} 
                   techImgSrc={"/img/jinja-logo.png"}
        />

        <TechStack techAnchor={"/img/tensorflow-logo.png"} 
                   techImgSrc={"/img/tensorflow-logo.png"}
        />

      </div>

      <h1>links</h1>

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


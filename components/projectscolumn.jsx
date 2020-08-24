import styles from '../styles/Home.module.css'
import Project from './project'
import TechStack from './techstack'

export default function ProjectsColumn(){
  return (
    <div className={styles.underLanding}>
      <h1>projects</h1>
      <Project  title={'innervue'}
                githubAnchor={'https://github.com/weston-bailey/innervue'}
                tagline={'Giving job applicants the key tools to ace the interview.'}
                description={'Users are given interview question pratice prompts, and are able to submit their response to receive intuitive feedback on how to improve. Created with Google Cloud Natural Langauge, IBM Watson and the Web Speech API.'}
                img1={'http://placekitten.com/1920/1080'}
                img2={'http://placekitten.com/1920/1080'}
                img3={'http://placekitten.com/1920/1080'}
                techStacks={
                  [
                    <TechStack techAnchor={"/img/mern-logo-2.png"} 
                    techImgSrc={"/img/mern-logo-2.png"}
                    />,
            
                    <TechStack techAnchor={"/img/material-ui-logo.png"} 
                                techImgSrc={"/img/material-ui-logo.png"}
                    />
                  ]
                }
      />

      <Project  title={'Machine Learning Playground'}
                githubAnchor={'https://github.com/weston-bailey/innervue'}
                tagline={'tagline'}
                description={'description'}
                img1={'http://placekitten.com/1920/1080'}
                techStacks={
                  [
                    <TechStack techAnchor={"/img/mern-logo-2.png"} 
                    techImgSrc={"/img/mern-logo-2.png"}
                    />,
            
                    <TechStack techAnchor={"/img/material-ui-logo.png"} 
                                techImgSrc={"/img/material-ui-logo.png"}
                    />
                  ]
                }
      />

      <Project  title={'QuakeBook'}
                githubAnchor={'https://github.com/weston-bailey/innervue'}
                tagline={'tagline'}
                description={'description'}
                img1={'http://placekitten.com/1920/1080'}
                img2={'http://placekitten.com/1920/1080'}
                img3={'http://placekitten.com/1920/1080'}
                techStacks={
                  [
                    <TechStack techAnchor={"/img/mern-logo-2.png"} 
                    techImgSrc={"/img/mern-logo-2.png"}
                    />,
            
                    <TechStack techAnchor={"/img/material-ui-logo.png"} 
                                techImgSrc={"/img/material-ui-logo.png"}
                    />
                  ]
                }
      />

      <Project  title={'Hyperdrive'}
                githubAnchor={'https://github.com/weston-bailey/innervue'}
                tagline={'tagline'}
                description={'description'}
                img1={'http://placekitten.com/1920/1080'}
                img2={'http://placekitten.com/1920/1080'}
                img3={'http://placekitten.com/1920/1080'}
                techStacks={
                  [
                    <TechStack techAnchor={"/img/mern-logo-2.png"} 
                    techImgSrc={"/img/mern-logo-2.png"}
                    />,
            
                    <TechStack techAnchor={"/img/material-ui-logo.png"} 
                                techImgSrc={"/img/material-ui-logo.png"}
                    />
                  ]
                }
      />

      <Project  title={'hack-a-thon'}
                githubAnchor={'https://github.com/weston-bailey/innervue'}
                tagline={'tagline'}
                description={'description'}
                img1={'http://placekitten.com/1920/1080'}
                img2={'http://placekitten.com/1920/1080'}
                img3={'http://placekitten.com/1920/1080'}
                techStacks={
                  [
                    <TechStack techAnchor={"/img/mern-logo-2.png"} 
                    techImgSrc={"/img/mern-logo-2.png"}
                    />,
            
                    <TechStack techAnchor={"/img/material-ui-logo.png"} 
                                techImgSrc={"/img/material-ui-logo.png"}
                    />
                  ]
                }
      />
    </div>
  )
}
import styles from '../styles/Home.module.css'
import Project from './project'
import TechStack from './techstack'

export default function ProjectsColumn(){
  return (
    <div className={styles.underLanding}>
      <h1>example projects</h1>
      <Project  title={'innervue'}
                githubAnchor={'https://github.com/weston-bailey/innervue'}
                tagline={'Giving job applicants the key tools to ace the interview.'}
                description={'Users are given interview question pratice prompts, and are able to submit their response to receive intuitive feedback on how to improve. Created with Google Cloud Natural Langauge, IBM Watson and the Web Speech API.'}
                img1={'/img/innervue-1.png'}
                img2={'/img/innervue-2.png'}
                img3={'/img/innervue-3.png'}
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
                githubAnchor={'https://github.com/weston-bailey/P4-tensorflow-playground'}
                deploymentAnchor={'https://weston-bailey.github.io/P4-tensorflow-playground/'}
                tagline={'An interactive learning app that lets users explore machine learning concepts.'}
                description={'Using Tensorflow.js, the machine learning playground aims to let users understand core AI and ML concepts by allowing them to interact directly with neural nets that they have created and trained in the browser.'}
                img1={'/img/ml-playground-1.png'}
                img2={'/img/ml-playground-2.png'}
                techStacks={
                  [
                    <TechStack techAnchor={"/img/tensorflow-logo.png"} 
                    techImgSrc={"/img/tensorflow-logo.png"}
                    />,

                    <TechStack techAnchor={"/img/python-logo.png"} 
                    techImgSrc={"/img/python-logo.png"}
                    />,

                    <TechStack techAnchor={"/img/js-logo.png"} 
                    techImgSrc={"/img/js-logo.png"}
                    />,

                    <TechStack techAnchor={"/img/html-logo.png"} 
                    techImgSrc={"/img/html-logo.png"}
                    />,
            
                    <TechStack techAnchor={"/img/bootstrap-logo.png"} 
                                techImgSrc={"/img/bootstrap-logo.png"}
                    />
                  ]
                }
      />

      <Project  title={'Quakebook'}
                githubAnchor={'https://github.com/weston-bailey/Quakebook'}
                deploymentAnchor={'https://quakebookapp.herokuapp.com/'}
                tagline={'The world\'s #1 social media platform with a community centered around seismic activity.'}
                description={'Quakebook\'s server collects data from the usgs earthquake API as seismic activity occurs, gives users access to the data in a searchable database, and displays an interactive map of of earthquakes for users to explore. Users can explore the details of a particular earthquake after selecting it from the results of their search. Quakebook users can further engage with the Quakebook community by creating a free profile that will allow them to interact with other users by commenting on a particular earthquake or replying to other user\'s comments.'}
                img1={'/img/quakebook-homepage.png'}
                img2={'/img/quakebook-details.png'}
                techStacks={
                  [
                    <TechStack techAnchor={"/img/node-js-logo.png"} 
                    techImgSrc={"/img/node-js-logo.png"}
                    />,

                    <TechStack techAnchor={"/img/express-js-logo.png"} 
                    techImgSrc={"/img/express-js-logo.png"}
                    />,

                    <TechStack techAnchor={"/img/postgress-logo.png"} 
                    techImgSrc={"/img/postgress-logo.png"}
                    />,
            
                    <TechStack techAnchor={"/img/bootstrap-logo.png"} 
                                techImgSrc={"/img/bootstrap-logo.png"}
                    />
                  ]
                }
      />

      <Project  title={'Hyperdrive'}
                githubAnchor={'https://github.com/weston-bailey/Hyperdrive'}
                deploymentAnchor={'https://weston-bailey.github.io/Hyperdrive/'}
                tagline={'A retro-futuristic styled, space-themed vertical scrolling infinite runner game.'}
                description={'Aesthetically modeled golden era arcade games such as Zaxxon, Gradius and Asteroids, Hyperdrive was designed to evoke a sense of nostalgia and excitment with a familiar, classic look and feel alongside novel gameplay. Created using HTML 5 canvas and vanilla javascript.'}
                img1={'/img/hyperdrive-1.png'}
                img2={'/img/hyperdrive-2.png'}
                img3={'/img/hyperdrive-3.png'}
                techStacks={
                  [
                    <TechStack techAnchor={"/img/HTML-logo.png"} 
                               techImgSrc={"/img/HTML-logo.png"}
                    />,
            
                    <TechStack techAnchor={"/img/js-logo.png"} 
                                techImgSrc={"/img/js-logo.png"}
                    />
                  ]
                }
      />

      <Project  title={'hack-a-thon'}
                githubAnchor={'https://github.com/weston-bailey/hack-a-thon'}
                tagline={'The Lunar Tribune is a satirical newsite with a kitchy, pulp-scifi retro-futuristic theme.'}
                description={'Created in a 24hr hack-a-thon working with a team of UX designers, the project serves a a proof-of-concept with mock functionality to display the vision created by the UX team.'}
                img1={'/img/lunar-1.png'}
                img2={'/img/lunar-2.png'}
                img3={'/img/lunar-3.png'}
                img4={'/img/lunar-4.png'}
                techStacks={
                  [
                    <TechStack techAnchor={"/img/react-logo.png"} 
                               techImgSrc={"/img/react-logo.png"}
                    />,
            
                    <TechStack techAnchor={"/img/bootstrap-logo.png"} 
                                techImgSrc={"/img/bootstrap-logo.png"}
                    />
                  ]
                }
      />
    </div>
  )
}
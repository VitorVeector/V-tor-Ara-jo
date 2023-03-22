import './style.scss';
import coala from '../../assets/Coala.webp';
import skiz from '../../assets/skiz.webp';
import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
  { name: 'React.JS', link: 'https://reactjs.org/' },
  { name: 'React Native', link: 'https://reactnative.dev/' },
  { name: 'Next.JS', link: 'https://nextjs.org/' },
  { name: 'Node.JS', link: 'https://nodejs.org/en/' },
  { name: 'Express.JS', link: 'https://expressjs.com/' },
  { name: 'S.O.L.I.D', link: 'https://en.wikipedia.org/wiki/SOLID' },
  { name: 'Sass / Css', link: 'https://sass-lang.com/' },
  { name: 'ChakraUI', link: 'https://chakra-ui.com/' },
  { name: 'StyledComponents', link: 'https://styled-components.com/' },
  { name: 'MaterialUI', link: 'https://mui.com/' },
  { name: 'PrismicCMS', link: 'https://prismic.io/' },
  { name: 'Stripe', link: 'https://stripe.com/' },
  { name: 'Framer Motion', link: 'https://www.framer.com/motion/' },
];

const skillVariants = skills.map((skill, index) => ({
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } },
}));

export const Home = () => {
  return (
    <header>

      <div className="home-container">
        <div className="home-content">
          <div className="home-info">
            <p>
              Hi, my name is Vitor and I am a Junior Full-Stack Web/Mobile Developer based in São Paulo, Brazil. I have strong skills in JavaScript and I am currently studying Systems Analysis and Development at Estácio University. I am passionate about technology and love working collaboratively with others to contribute to the success of projects.
            </p>
            <div className='home-info_skills'>
              <h3>my knowledge includes:</h3>
              <div className='info_skills-list'>
                <ul>
                  {skills.map((skill, index) => (
                    <motion.div 
                      key={index}
                      variants={skillVariants[index]}
                      initial="hidden"
                      animate="visible">
                      <li className='info_skills-item'>
                        <span><a href={skill.link} target='_blank' rel='noreferrer'>{skill.name}</a></span>
                      </li>
                    </motion.div>
                  ))}
                </ul>
                <img src={skiz} alt="" />
              </div>
            </div>
          </div>
          <div className="home-imgs">
            <motion.div
              initial={{opacity: 0, y: 60}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: 200}}
              transition={{ duration: 1, delay: .1 }}>
              <img src={coala} alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  )
};
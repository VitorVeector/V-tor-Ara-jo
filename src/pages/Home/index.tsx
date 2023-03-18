import './style.scss'
import coala from '../../assets/Coala.webp'
import skiz from '../../assets/skiz.webp'

export const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-info">
                    <p>
                        Eu sou um desenvolvedor Full-Stack Junior Web/Mobile de São Paulo-SP, codando com Skills em JavaScript. Estou estudando Análise e Desenvolvimento de Sistemas na Estácio. Sou apaixonado por tecnologia e gosto de trabalhar em equipe, contribuindo para o sucesso dos projetos.
                    </p>
                    <div className='home-info_skills'>
                        <h3>Meu conhecimento inclui:</h3>
                        <div className='info_skills-list'>
                            <ul>
                                <li className='info_skills-item'><span><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank' rel='noreferrer'>JavaScript</a></span></li>
                                <li className='info_skills-item'><span><a href='https://www.typescriptlang.org/' target='_blank' rel='noreferrer'>TypeScript</a></span></li>
                                <li className='info_skills-item'><span><a href='https://reactjs.org/' target='_blank' rel='noreferrer'>React.JS</a></span></li>
                                <li className='info_skills-item'><span><a href='https://reactnative.dev/' target='_blank' rel='noreferrer'>React Native</a></span></li>
                                <li className='info_skills-item'><span><a href='https://nextjs.org/' target='_blank' rel='noreferrer'>Next.JS</a></span></li>
                                <li className='info_skills-item'><span><a href='https://nodejs.org/en/' target='_blank' rel='noreferrer'>Node.JS</a></span></li>
                                <li className='info_skills-item'><span><a href='https://expressjs.com/' target='_blank' rel='noreferrer'>Express.JS</a></span></li>
                                <li className='info_skills-item'><span><a href='https://en.wikipedia.org/wiki/SOLID' target='_blank' rel='noreferrer'>S.O.L.I.D</a></span></li>
                                <li className='info_skills-item'><span><a href='https://sass-lang.com/' target='_blank' rel='noreferrer'>Sass / Css</a></span></li>
                                <li className='info_skills-item'><span><a href='https://chakra-ui.com/' target='_blank' rel='noreferrer'>ChakraUI</a></span></li>
                                <li className='info_skills-item'><span><a href='https://styled-components.com/' target='_blank' rel='noreferrer'>StyledComponents</a></span></li>
                                <li className='info_skills-item'><span><a href='https://mui.com/' target='_blank' rel='noreferrer'>MaterialUI</a></span></li>
                                <li className='info_skills-item'><span><a href='https://prismic.io/' target='_blank' rel='noreferrer'>PrismicCMS</a></span></li>
                                <li className='info_skills-item'><span><a href='https://stripe.com/' target='_blank' rel='noreferrer'>Stripe</a></span></li>
                            </ul>
                            <img src={skiz} alt="" />
                        </div>
                    </div>
                </div>
                <div className="home-imgs">
                    <img src={coala} alt="" />
                </div>
            </div>
        </div>
    )
}
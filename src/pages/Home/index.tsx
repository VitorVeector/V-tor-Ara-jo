import "./style.scss";
import profile from "../../assets/Profile.jpeg";
import { motion } from "framer-motion";

const skills = [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React.js" },
    { name: "React Native" },
    { name: "Next.js" },
    { name: "Node.js" },
    { name: "Express.JS" },
    { name: "SQL" },
    { name: "Sequelize ORM" },
    { name: "S.O.L.I.D" },
    { name: "Sass / Css" },
    { name: "ChakraUI" },
    { name: "StyledComponents" },
    { name: "MaterialUI" },
    { name: "PrismicCMS" },
    { name: "Stripe" },
    { name: "Framer Motion" }
]
;

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
                            Hi, my name is Vitor and I am a Junior Full-Stack
                            Web/Mobile Developer based in São Paulo, Brazil. I
                            have strong skills in JavaScript and I am currently
                            studying Systems Analysis and Development at Estácio
                            University. I am passionate about technology and
                            love working collaboratively with others to
                            contribute to the success of projects.
                        </p>
                        <div className="home-info_skills">
                            <h3>my knowledge includes:</h3>
                            <div className="info_skills-list">
                                <ul>
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            variants={skillVariants[index]}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            <li className="info_skills-item">
                                                <span>
                                                    <a rel="noreferrer">
                                                        {skill.name}
                                                    </a>
                                                </span>
                                            </li>
                                        </motion.div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="home-imgs">
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 200 }}
                            transition={{ duration: 1, delay: 0.1 }}
                        >
                            <img src={profile} alt="" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </header>
    );
};

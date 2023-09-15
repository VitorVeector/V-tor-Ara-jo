import "./style.scss";
import { useEffect, useState } from 'react'
import { motion } from "framer-motion";

import { db } from "../../firebase";
import { DocumentData, QueryDocumentSnapshot, collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import { FirebaseError } from "firebase/app";

export const Home = () => {
    const [technologies, setTechnologies] = useState<string[]>([]);
    const [info, setInfo] = useState<string>('');
    const [label, setLabel] = useState<string>('');
    
    const homeCollectionsRef = collection(db, "home")
    useEffect(() => {
        const getHomeData = async () => {
            try {
                const dataFirebase = await getDocs(homeCollectionsRef)
                dataFirebase.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
                    const dataRes = doc.data();
                    const technologies = dataRes.technologies;
                    const info = dataRes.info;
                    const label = dataRes.label;
                    setInfo(info);
                    setLabel(label);
                    setTechnologies(technologies)
                })
            } catch (err) {
                if(err instanceof FirebaseError){
                    toast.error(err.message)
                }
            }
            
        }
        getHomeData()
    }, [])

    const skillVariants = technologies.map((skill, index) => ({
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } },
    }));

    console.log(skillVariants)
    
    return (
        <header>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-info">
                        <p>
                            {info}
                        </p>
                        <div className="home-info_skills">
                            <h3>{label}</h3>
                            <div className="info_skills-list">
                                <ul>
                                    {technologies.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            variants={skillVariants[index]}
                                            initial="hidden"
                                            animate="visible">
                                            <li className="info_skills-item">
                                                <span>
                                                    <a rel="noreferrer">
                                                        {skill}
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
                                <img src="https://uploaddeimagens.com.br/images/004/602/357/full/Profile.jpeg?1694283421" alt="" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </header>
    );
};

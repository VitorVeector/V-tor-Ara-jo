import "./style.scss";
import { Image } from '@phosphor-icons/react'

type FormationCardProps = {
    title: string;
    subtitle: string;
    content: string;
    imgLink?: string;
    certificate?: string
}

export const FormationCard = ({title, subtitle, imgLink, content, certificate}: FormationCardProps) => {
    return (
        <div className="formationcard-component">
            <div className="formationcard-img">
                {!imgLink ? <Image size={90}/> : <img width={90} src={imgLink} alt="" />} 
            </div>
            <div className="formationcard-content">
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                <p>
                    O ReactJS é uma biblioteca JavaScript de código aberto criada
                    pelo Facebook que é usada para construir interfaces de usuário
                    em aplicativos web. Ele permite a criação de interfaces de
                    usuário reativas e de alto desempenho usando uma abordagem
                    baseada em componentes.
                    <p>
                        A Rocketseat é uma das principais empresas de tecnologia e
                        educação do Brasil e oferece diversos cursos e treinamentos
                        em ReactJS. O objetivo dos cursos é ensinar a criar
                        interfaces de usuário modernas e responsivas usando React,
                        juntamente com outras ferramentas e tecnologias relevantes
                        para o desenvolvimento web, como Node.js, TypeScript, Redux,
                        entre outras.
                    </p>
                </p>
            </div>
        </div>
    );
};

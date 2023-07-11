import "./style.scss";
import { Image } from '@phosphor-icons/react'

type FormationCardProps = {
    title: string;
    subtitle: string;
    content: string;
    imgLink?: string;
    certificate?: string
}

export const ExperienceCard = ({title, subtitle, imgLink, content, certificate}: FormationCardProps) => {
    return (
        <div className="experienceCard-component">
            <div className="experienceCard-img">
                {!imgLink ? <Image size={90}/> : <img width={90} src={imgLink} alt="" />} 
            </div>
            <div className="experienceCard-content">
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                <p>{content}</p>
            </div>
        </div>
    );
};

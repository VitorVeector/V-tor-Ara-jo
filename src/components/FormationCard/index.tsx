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
                <p>{content}</p>
            </div>
        </div>
    );
};

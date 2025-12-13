import { useNavigate, useParams } from "react-router-dom";
import styles from "./BannerWorkWithUs.module.css";
import trabalheConoscoImg from "@/utils/assets/trabalhe_conosco.png";

export default function BannerWorkWithUs({
    workWithUsImg = trabalheConoscoImg,
    noButton = false,
    noTitle = false,
    noResponsive = false,
    height
}) {

    const { empresa } = useParams();

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/contato`)
    }

    return (
        <div className={`
                ${styles.workWithUs}
                ${!noResponsive ? styles.responsive : ""}
            `}>
            <div 
                className={styles.wrapperImage}
                style={{ height }}    
            >
                <img src={workWithUsImg} alt="trabalhe conosco" />
            </div>
            <div className={styles.wrapperText}>
                {!noTitle && <h2>Trabalhe conosco</h2>}
                <p>Quer fazer parte do nosso time de campeões, clique no botão abaixo e faça sua inscrição para uma de nossas vagas disponíveis.</p>
                {!noButton && <button onClick={handleClick}>Quero me inscrever</button>}
            </div>
        </div>
    )
}
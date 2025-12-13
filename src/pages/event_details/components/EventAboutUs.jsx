import { data } from "react-router-dom";
import styles from "./EventAboutUs.module.css";

export default function EventAboutUs({
    name,
    data,
    unit
}) {
    return (
        <section 
            id="quemsomos"
            className={styles.aboutUs}
        >
            <div className={styles.title}>
                <h2>Saiba mais sobre a {name} - {unit.location.neighborhood}</h2>
            </div>
            <div className={styles.wrapperText}>
                <p>
                    {data.texts[1]}
                </p>
                <p>    
                    {data.texts[2]}     
                </p>
                <p>
                    {name}, o lugar perfeito para momentos inesquecíveis!
                </p>
            </div>
        </section>
    )
}
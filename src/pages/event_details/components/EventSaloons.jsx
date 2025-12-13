import defaultImage from "@/utils/assets/banner_image.jpeg" 
import styles from "./EventSaloons.module.css"
import { useEffect } from "react";

export default function EventSaloons({unit}) {

    const saloons = unit.info.saloons || [];

    useEffect(() => {
        const wrapper = document.querySelector(`.${styles.wrapperImages}`);
        if (!wrapper) return;

        const itens = wrapper.querySelectorAll(`.${styles.imageAndInfo}`);

        itens.forEach(item => item.classList.remove(styles.fullRow));

        if (itens.length % 2 !== 0 && itens.length >= 1) {
            itens[itens.length - 1].classList.add(styles.fullRow);
        }
    }, [saloons]);

    return (
        <section 
            id="capacidades"
            className={styles.wrapperInfoSaloons}
        >
            <div className={styles.title}>
                <h3>Conheça nossos salões</h3>
            </div>
            <div className={styles.wrapperImages}>
                {saloons.map((info, idx) => (
                    <div className={styles.imageAndInfo}>
                        <div className={styles.imagem}>
                            <img src={info.image.src} alt={info.image.alt} />
                        </div>
                        <div className={styles.title}>
                            <h3>{info.title.saloon}</h3>
                            <p>{info.title.quantity}</p>
                        </div>
                        <div className={styles.description}>
                            <p style={{ whiteSpace: "pre-line"}}>
                                {info.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
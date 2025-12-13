import styles from "./Highlights.module.css";
import food1 from "@/utils/assets/food_1.jpg";
import food2 from "@/utils/assets/food_2.jpg";
import food3 from "@/utils/assets/food_3.jpg";
import { useEffect, useRef, useState } from "react";

export default function Highlights({
    images = [{img: food1, alt: "food 1"}, {img: food2, alt: "food 2"}, {img: food3, alt: "food 3"}]
}) {

    const [visibleIndexes, setVisibleIndexes] = useState([]);
    const imgRefs = useRef([]);
    
    useEffect(() => {
        const observers = [];
        
        imgRefs.current.forEach((el, idx) => {
            if (!el) return;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    setVisibleIndexes((prev) => {
                        if (entry.isIntersecting) {
                            // adiciona indice se entrou na tela
                            if (!prev.includes(idx)) return [...prev, idx];
                        } else {
                            // remove indice se saiu da tela
                            return prev.filter((i) => i !== idx);
                        }
                        return prev
                    });
                });
            }, {
                threshold: 0.2,
            });

            observer.observe(el);
            observers.push(observer);
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

    return (
        <div className={styles.container}>
            <p className={styles.text}>Nossos</p>
            <h2 className={styles.high}>Destaques</h2>
            <div className={styles.wrapper}>
                {images.map((it, idx) => (
                    <img
                        ref={(el) => (imgRefs.current[idx] = el)} 
                        key={idx}
                        src={it.img} 
                        alt={it.alt} 
                        className={`
                            ${styles.img} 
                            ${visibleIndexes.includes(idx) ? styles.animateLeft : ""}
                        `}
                    />
                ))}
            </div>
        </div>
    );
}
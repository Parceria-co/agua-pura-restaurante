import styles from "./Card.module.css";
import restaurantImg from "@/utils/assets/inner_restaurant.jpg"
import ifoodImg from "@/utils/assets/ifood_banner.png"
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Card({
    data,
    img = restaurantImg,
    fstText = "Lorem ipsum elit",
    sndText = "Lorem",
    trdText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    linkText = "Faça Seu pedido",
    link,
    animate = {left: true}
}) {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link);
    }

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setIsVisible(entry.isIntersecting);
            });
        }, {
            // threshold: 0.2,
        });

        observer.observe(el);

        return () => {
            if (el) observer.unobserve(el);
            observer.disconnect();
        };
    }, []);

    // decide classes
    const directionClass =
        animate === "top" ? styles.animateTop : styles.animateLeft;

    return (
            <div 
                ref={cardRef}
                className={`${styles.card} 
                    ${isVisible ? styles.visible : ""} 
                    ${isVisible ? directionClass : ""}`}
                onClick={handleClick}
                >
                <img src={img} alt="card" className={styles.cardImage} />
                <div className={styles.gradient}></div>
                <div className={styles.texts}>
                    <p className={styles.fstText}>{fstText}</p>
                    <h2 className={styles.sndText}>{sndText}</h2>
                    <p className={styles.trdText}>{trdText}</p>
                    <Link 
                        to={link}
                        className={styles.btnCard}
                    >{linkText}</Link>
                </div>
            </div>

            // <div className={styles.card}>
            //     <img src={ifoodImg} alt="card" className={styles.cardImage} />
            //     <div className={styles.gradient}></div>
            //     <div className={styles.texts}>
            //         <p className={styles.fstText}>Peça pelo nosso</p>
            //         <h2 className={styles.sndText}>Delivery</h2>
            //         <p className={styles.trdText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            //         <button className={styles.btnCard}>Faça Seu pedido</button>
            //     </div>
            // </div>
    )
}
import { useParams } from "react-router-dom";
import styles from "./LilBanner.module.css";
import { useEffect, useRef } from "react";

export default function LilBanner({
    image,
    text,
    data
}) {

    const bgRef = useRef();

    useEffect(() => {
        if (!data?.themeColor || !bgRef.current) return;

        const hex = data.themeColor.replace("#", "");
        
        // Converte HEX → RGB
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
    
        bgRef.current.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.8)`;
    }, [data])

    return(
        <section className={styles.wrapperImg}>
            <img src={image} alt="" className={styles.img} />
            <div ref={bgRef} className={styles.backgroundImg}></div>
            <h1 className={styles.textImg}>{text}</h1>
        </section>
    )
}
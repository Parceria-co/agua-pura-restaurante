import { useEffect, useRef, useState } from "react";
import styles from "./EventHeader.module.css";

export default function EventHeader({
    isHeaderFixed
}) {
    const headerRef = useRef(null);
    // const [isFixed, setIsFixed] = useState(false);
    
    const options = [
        {text: "Inicio", value: "#inicio"},
        {text: "Pacotes", value: "#pacotes"},
        {text: "Salões e Capacidades", value: "#capacidades"},
        {text: "Diferenciais", value: "#diferenciais"},
        {text: "Quem Somos", value: "#quemsomos"}
    ];

    // useEffect(() => {

    //     const handleScroll = () => {
    //         const scrollY = window.scrollY;
    //         const navbarHeight = 78;
    
    //         setIsFixed(scrollY > navbarHeight);
    //     }
    
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, [])

    useEffect(() => {
        
        // if (!isFixed) return;
        if (!isHeaderFixed) return;

        const properties = {
            html: document.documentElement.style.scrollPaddingTop
        };
        document.documentElement.style.scrollPaddingTop = "52px"

        return () => document.documentElement.style.scrollPaddingTop = properties.html;

    }, [isHeaderFixed])

    return(
        <header 
            className={`${styles.header} ${isHeaderFixed ? styles.fixed : ""}`}
            ref={headerRef}
            >
            <ul className={styles.listHorizontal}>
                {options.map((opt) => (
                    <a href={opt.value}>
                    {opt.text}
                </a>
                ))}
            </ul>
        </header>
    )
};
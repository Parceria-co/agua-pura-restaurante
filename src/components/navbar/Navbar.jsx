import defaultLogo from "@/utils/assets/no_profile.png";
import styles from './Navbar.module.css';
import { useState, useEffect, useRef } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import { aguaPura } from "../../data/AguaPura";
import { Link } from "react-router-dom";

export default function Navbar({ 
    hideOnScroll = true, hideAfterScroll = false 
}) {

    const data = aguaPura;

	const links = [
		{ href: "home", label: "Início" },
        { href: "unidades", label: "Unidades" },
        { href: "cardapio", label: "Cardápio" },
        { href: "reservas", label: "Reservas" },
        { href: "eventos", label: "Eventos" },
        { href: "quem-somos", label: "Nossa História" },
        { href: "contato", label: "Contato" },
    ];

    const { width } = useWindowSize();
    const isMobile = width < 750;

    const [hide, setHide] = useState(false);

    const formatedLinks = links.map(link => ({
        ...link,
        href: `/${link.href}`
    }));

    useEffect(() => {
        if (!hideOnScroll) return;

        const handleScroll = () => {
            const scrolled = window.scrollY;
            const navbarHeight = 78;
            let shouldHide = false;
            
            if (scrolled > navbarHeight * 4 && !hideAfterScroll) {
                shouldHide = false;
            } else if (scrolled > navbarHeight) {
                shouldHide = true;
            }

            setHide(shouldHide);
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    
    }, [hideOnScroll, hideAfterScroll]);

    const temaClaro = data.theme.white

    return (
        <header 
            className={`${styles.container} ${hide ? styles.hide : ""} ${temaClaro ? styles.lightTheme : ""}`}
            style={{ backgroundColor: data.color.navbar ?? "#fff"}}    
        >
            <div className={styles.wrapper}>
                <Link to="/home" className={styles.logo}>
                    <img src={data.logo} alt={`logo ${data.name}`} />
                </Link>
                {isMobile ? (
                    <NavbarMobile links={formatedLinks} />
                ) : (
                    <NavbarDesktop links={formatedLinks} />
                )}
            </div>
        </header>
    );
};

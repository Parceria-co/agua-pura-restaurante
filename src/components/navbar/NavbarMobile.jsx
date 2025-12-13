import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useRef, useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function NavbarMobile({ links, textColor }) {
    const [isVisibleList, setIsVisibleList] = useState(false);
    const navRef = useRef(null);

    const handleClickOutside = e => {
        if (navRef.current && !navRef.current.contains(e.target)) setIsVisibleList(false);
    };

    useEffect(() => {

        const overflowProperties= {
            body: document.body.style.overflow,
            html: document.documentElement.style.overflow
        };

        if (isVisibleList) {
            document.addEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        }
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = overflowProperties.body;
            document.documentElement.style.overflow = overflowProperties.html;
        };
    }, [isVisibleList]);

    return (
        <>
        {isVisibleList ? (
            <div className={styles.navBurguer}>
                <div className={styles.backgroudNavBurguer} ref={navRef}>
                    <button className={`${styles.btnCloseBurguer} ${styles.btnBurguer}`} onClick={() => setIsVisibleList(false)}>
                        <IoClose />
                    </button>
                    <ul className={styles.list}>
                    {links.map(link => (
                        <Link key={link.href} to={link.href}>
                            {link.label}
                        </Link>
                    ))}
                    </ul>
                </div>
            </div>
        ) : (
            <button className={styles.btnBurguer} onClick={() => setIsVisibleList(true)}>
                <RxHamburgerMenu />
            </button>
        )}
        </>
    );
}

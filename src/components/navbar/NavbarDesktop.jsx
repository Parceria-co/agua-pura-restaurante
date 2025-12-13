import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import styles from "./Navbar.module.css";
import { useRef, useState, useEffect } from "react";

export default function NavbarDesktop({ links, textColor }) {
    const listRef = useRef(null);
    const [visibleLinks, setVisibleLinks] = useState(links);
    const [overflowLinks, setOverflowLinks] = useState([]);
    const [isVisibleOverflowList, setIsVisibleOverflowList] = useState(false);

    useEffect(() => {
        const calc = () => {
            const list = listRef.current;
            
            if (!list) return;
            const listWidth = list.offsetWidth;
            let totalWidth = 0;
            let lastVisibleIndex = links.length - 1;

            for (let i = 0; i < links.length; i++) {
                totalWidth += list.children[i]?.offsetWidth + 32 || 0;
                if (totalWidth > listWidth) {
                    lastVisibleIndex = i - 1;
                    break;
                }
            }

            setVisibleLinks(links.slice(0, lastVisibleIndex + 1));
            setOverflowLinks(links.slice(lastVisibleIndex + 1));
        };

        calc();
        window.addEventListener("resize", calc);
        
        return () => window.removeEventListener("resize", calc);
    }, []);

    return (
        <ul className={styles.list} ref={listRef}>
        {visibleLinks.map(link => (
            <Link key={link.href} to={link.href}>{link.label}</Link>
        ))}
        {overflowLinks.length > 0 && (
            <div className={styles.dropdown}>
                <button className={styles.btnPlus} onClick={() => setIsVisibleOverflowList(!isVisibleOverflowList)}>
                    <FaPlus />
                </button>
                {isVisibleOverflowList && (
                    <ul className={styles.overflowList}>
                    {overflowLinks.map(link => (
                        <Link key={link.href} to={link.href}>{link.label}</Link>
                    ))}
                    </ul>
                )}
            </div>
        )}
        </ul>
    );
}

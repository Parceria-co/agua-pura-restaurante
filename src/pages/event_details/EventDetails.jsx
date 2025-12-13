import EventBudget from "./components/EventBudget.jsx";
import EventSaloons from "./components/EventSaloons.jsx";
import EventPackages from "./components/EventPackages.jsx";
import EventDifferences from "./components/EventDifferences.jsx";
import EventAboutUs from "./components/EventAboutUs.jsx";
import EventHeader from "./components/EventHeader.jsx";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar.jsx";
import bannerImage from "@/utils/assets/banner_image.jpeg"
import Footer from "../../components/footer/Footer.jsx";
import useWindowSize from "../../hooks/useWindowSize.jsx";
import { useEffect, useState } from "react";
import styles from "./EventDetails.module.css";
import { aguaPura } from "../../data/AguaPura.js";

export default function EventDetails() {

    const data = aguaPura;
    const name = data.name;
    const unit = data.units.find(it => it.value === useParams().name) || data.units[0];    


    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    
    const { width }  = useWindowSize(); 
    

    const isMobile = width < 750;
    
    useEffect(() => { 
        window.scrollTo(0, 0); 

        if (isMobile) return;
    
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const navbarHeight = 78;
    
            setIsHeaderFixed(scrollY > navbarHeight);
        }
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); 



    return (
        <>
            <Navbar hideAfterScroll={true} />
            {!isMobile && <EventHeader isHeaderFixed={isHeaderFixed} />}

            <main 
                className={`
                    ${styles.container} 
                    ${isHeaderFixed ? styles.marginTopToHeader : ""}
                    ${isMobile ? styles.marginToNavbar : ""}    
                `}
            >
                <EventBudget 
                    name={name}
                    selectedOption={unit.location.neighborhood}
                    isHeaderFixed={isHeaderFixed}
                />
                <EventPackages 
                    name={name}
                />
                <section 
                    className={styles.eventos}
                    style={{ backgroundImage: `url(${data.images[1]})` }}
                >
                    <div className={styles.background}></div>
                    <div className={styles.info}>
                        <h3>Seu evento no {name} {unit.location.neighborhood !== "" ? `- ${unit.location.neighborhood}` : ""}</h3>
                        <div className={styles.wrapperText}>
                            <p> 
                                Nossos espaços foram projetados para oferecer conforto e flexibilidade 
                                em qualquer ocasião. Os ambientes com uma atmosfera agradável e acolhedora para 
                                grupos de todos os tamanhos.
                            </p>
                            <p className={styles.smallText}>
                                Além disso, nossa equipe está sempre disponível para apoiar na organização e 
                                ajustar os serviços conforme cada necessidade, garantindo praticidade, 
                                qualidade e uma experiência positiva para todos os que escolhem nossos espaços.
                            </p>
                        </div>
                    </div>
                </section>
                <EventSaloons
                    unit={unit}
                />
                <EventDifferences 
                    data={data}
                    unit={unit}
                />
                <EventAboutUs
                    name={name}
                    data={data}
                    unit={unit}
                />
            </main>
            
            <Footer />
        </>
    );
}
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import restaurantImg from "@/utils/assets/restaurant.jpeg"
import styles from "./Units.module.css";
import image from "@/utils/assets/banner_image.jpeg"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { aguaPura } from "../../data/AguaPura";


export default function Units() {
    
    const data = aguaPura; 

    function buildOptionGroups(units) {
        const groups = {};

        units.forEach((unit) => {
            const state = unit.location.state.extended;      
            const value = unit.value;                        
            const neighborhood = unit.location.neighborhood;

            if (!groups[state]) {
                groups[state] = [];
            }

            groups[state].push({
                label: neighborhood,
                value: value,
            });
        });

        return groups;
    }


    const options = buildOptionGroups([...data.units].sort((a, b) => a.name.localeCompare(b.name)));

    const formatLink = (cidade) => {
        return `/unidade/${cidade}`;
    };
    

    const imageUnits = data.images;

    const navigate = useNavigate();

    const handleChange = (e) => {
        const option = e.target.value;

        navigate(formatLink(option));
    }

    const quantityUnits = data.units.length;

    useEffect(() => {
        if (data.units.length === 1) {
            navigate(formatLink(""));
        }
    }, [])

    return (
        <>
            <Navbar />
            <main className={styles.container}>
                <section className={styles.wrapper}>
                    <div className={styles.wrapperInfoText}>
                        <div className={styles.wrapperText}>
                            <h1 className={styles.textHigh}>Encontre a unidade <br />mais perto de você</h1>
                            <p className={styles.text}>Temos {quantityUnits} lojas espalhadas em todo o país.</p>
                        </div>
                        <div className={styles.division}></div>
                        <select
                            className={styles.select}
                            onChange={handleChange}
                        >
                            <option defaultChecked>Selecione a unidade desejada</option>
                            {Object.entries(options).map(([state, cities]) => (
                                <optgroup key={state} label={state}>
                                    {cities.map((city, idx) => (
                                        <option key={idx} value={city.value} >
                                            {city.label}
                                        </option>
                                    ))}
                                </optgroup>
                            ))}
                        </select>
                    </div>

                    <div className={styles.wrapperImg}>
                        {imageUnits.length > 1 ? (
                            imageUnits.map(img => (
                                <img 
                                    src={img} 
                                    alt="restaurant" 
                                    className={`
                                        ${styles.img}
                                        ${styles.absoluteImage}
                                    `}/>
                            ))
                        ) : (
                            <img src={imageUnits} alt="restaurant" className={styles.img} />
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>

    )
}
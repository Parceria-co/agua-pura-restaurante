import { FaMapMarkerAlt } from "react-icons/fa";
import styles from "./WineSection.module.css";
import { GiGrapes } from "react-icons/gi";
import { MdWaterDrop } from "react-icons/md";
import ReactCountryFlag from "react-country-flag";

export default function WineSection({
    info,
    onClick,
    sectionRefs,
    ref
}) {

    return (
        <section className={styles.wineMenu}>
            {info && info.map((it, idx) => (
                <div 
                    key={it.id}
                    className={styles.cotainerWines}
                    ref={(el) => (sectionRefs.current[idx] = el)}
                >
                    <div className={styles.titleWines}>
                        <p>{it.category}</p>
                    </div>
                            
                    <div className={styles.wines}>
                        {it.itens.map((wine) => (
                            <div 
                                className={`${styles.cardWine} /*selected ? styles.highlights : ""*/`}
                                onClick={() => { /*handleSelectWine(wine)*/ onClick(wine) }}
                                ref={(el) => (ref.current[wine.id] = el)}
                            >
                                <div className={styles.wrapperImage}>
                                    <img src={wine.image} alt="comida" />
                                </div>
                                <div className={styles.wrapperInfoWine}>
                                    <h3 className={styles.title}>{wine.name}</h3>
                                    <div className={styles.priceAndCode}>
                                        <p className={styles.price}>
                                            {wine.price.formatted} - {wine?.volume  }
                                        </p>
                                        <p className={styles.code}>
                                            Cód: {wine.id}
                                        </p>
                                    </div>
                                    <p className={styles.description}>
                                        {wine.description}
                                    </p>
                                    <div className={styles.wrapperTag}>
                                        {wine?.country && 
                                            <div>
                                                <ReactCountryFlag 
                                                    svg
                                                    countryCode={wine.country.code}
                                                    className={styles.icon}
                                                /> {wine.country.name}
                                            </div>
                                        }
                                        {wine?.type &&
                                            <div>
                                                <span 
                                                    className={styles.color}
                                                    style={{ backgroundColor: wine.type.color }}
                                                ></span>
                                                {wine.type.name}
                                            </div>
                                        }
                                        {wine?.grape && 
                                            <div className={styles.grape}><GiGrapes className={styles.icon}/> 
                                                <span>
                                                    {wine.grape}
                                                </span>
                                            </div>
                                        }
                                        {wine?.alcohol &&
                                            <div><MdWaterDrop className={styles.icon}/>
                                                {wine.alcohol}
                                            </div>
                                        }
                                        {wine?.location && 
                                            <div><FaMapMarkerAlt className={styles.icon}/> 
                                                {wine.location}
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            ))}
        </section>
    )
}
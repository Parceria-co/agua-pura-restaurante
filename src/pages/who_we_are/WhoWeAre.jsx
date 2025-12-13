import LilBanner from "../../components/lil_banner/LilBanner";
import Navbar from "../../components/navbar/Navbar";
import styles from "./WhoWeAre.module.css";
import img from "@/utils/assets/quem_somos.PNG";
import companyImg from "@/utils/assets/company.jpeg";
import firstImage from "@/utils/assets/banner_image.jpeg";
import secondImage from "@/utils/assets/banner_image_2.jpeg";
import outSideRestaurant from "@/utils/assets/outter_restaurant.jpg";
import Footer from "../../components/footer/Footer";
import { aguaPura } from "../../data/AguaPura";



export default function WhoWeAre() {
    const data = aguaPura;

    const images = [...data.images].slice(1, 4);

    return(
        <>
            <Navbar />
            <main className={styles.container}>
                <LilBanner
                    data={data}
                    image={data.images[1]}
                    text={"Quem Somos"}
                />
                <section className={styles.background}>
                    <div className={styles.wrapper}>
                        <div className={styles.wrapperText}>
                            <h1>{data.texts[3]}</h1>
                            
                            <p>
                                {data.texts[4]}
                            </p>
                                    
                            <p>
                                {data.texts[5]}
                            </p>

                            <p>
                                {data.texts[6]}
                            </p>
                                    
                            <p>
                                {data.texts[7]}
                            </p>
                        </div>
                        <div className={styles.wrapperImage}>
                            <h2>Visite-nos e encante-se!</h2>
                            <div className={styles.images}>
                                {images && images.map(it => (
                                    <img src={it} alt={it.alt} />
                                ))}
                            </div>
                        </div>

                    </div>
                </section>
                <section className={styles.history}>
                        <h2>Conheça nossa linha do tempo de sucesso!</h2>
                        <div className={styles.divisor}>
                            {data.history && data.history.map((it, idx) => (
                                <div 
                                    key={idx}
                                    className={`
                                        ${styles.wrapperCardHistory}
                                        ${(idx % 2 == 0) ? styles.reverse : ""}
                                    `}  // Nesse codigo posso tanto usar essa condição para revesar os lados das imagens quanto alternar o class.fstStyle e sndStyle
                                >
                                    <div className={`
                                        ${styles.wrapperCard}
                                        ${(idx % 2 == 0) ? styles.reverse : ""}
                                    `}>
                                        <div className={styles.cardHistory}>
                                            <h3>{it.title}</h3>
                                            <p>{it.text}</p>
                                            <img src={it.image.src} alt={it.image.alt} />
                                        </div>
                                    </div>

                                    <p>{it.year}</p>
                                    
                                    <div className={styles.hideCard} ></div>
                                </div>
                            ))}
                        </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
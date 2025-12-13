import defaultImage from "@/utils/assets/banner_image.jpeg"
import styles from "./EventPackages.module.css";
import { aguaPura } from "../../../data/AguaPura";

export default function EventPackages() {

    const data = aguaPura;

    const imagesFoods = [data.images[9], data.images[10], data.images[8]];

    return (
        <section 
            id="pacotes"
            className={styles.packages}
        >
            {/* 
                # SE A EMPRESA TIVER PACOTE, FUTURAMENTE SUJESTÃO PARA EMPRESA 

            <div className={styles.title}>
                <h2>Conheça nossos pacotes</h2>
            </div>
            <div className={styles.wrapperOptions}>
                <button>
                    <p>Sala vip</p>
                </button>
                <button>
                    <p>Geral</p>
                </button>
                <button>
                    <p>Casamento</p>
                </button>
                <button>
                    <p>Aniversário</p>
                </button>
            </div> */}
            <div className={styles.wrapperFlavor}>
                <h2>O sabor sem igual do nosso cardápio</h2>
            </div>
            <div className={styles.wrapperFlavorImages}>
                {imagesFoods.map((img, idx) => 
                    <div 
                        key={idx}
                        className={styles.image}
                    >
                        <img src={img} alt="" />
                    </div>    
                )}
            </div>
            <div className={styles.description}>
                <p>
                    {data.texts[0]}
                </p>
            </div>
        </section>
    )
}
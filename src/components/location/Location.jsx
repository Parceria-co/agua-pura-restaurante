import styles from "./Location.module.css";
import bannerImage2 from '@/utils/assets/banner_image_2.jpeg';


export default function Location({
    img = bannerImage2,
    text = "Encontre um restaurante próximo a você"
}) {
    return (
        <div className={styles.container}>
            <h2 className={styles.text}>{text}</h2>
            <img src={img} alt="location" className={styles.img}/>
        </div>
    )
};
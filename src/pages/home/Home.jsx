import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import styles from "./Home.module.css";
import restaurantImg from "@/utils/assets/inner_restaurant.jpg"
import ifoodImg from "@/utils/assets/ifood_banner.png"
import Location from "../../components/location/Location";
import Highlights from "../../components/highlights/Highlights";
import Footer from "../../components/footer/Footer";
import { data, useParams } from "react-router-dom";
import { aguaPura } from "../../data/AguaPura";

export default function Home() {
    const data = aguaPura;

    const bannerImages = [...data.banners];

    const highlightImages = data.highlights.map((img, idx) => ({
        img: img,
        alt: `highlight ${idx + 1}`,
    }));

    return(
        <>
            <Navbar />
            <main className={styles.container}>
                <section className={styles.sectionBanner}>
                    <Banner 
                        draggable={false}
                        timeTransition={5000}
                        height={"calc(100% - 78px)"}
                        images={bannerImages}
                    />

                </section>
                <section className={styles.sectionCards}>
                    <Card 
                        data={data}
                        img={data.cards[0]}
                        fstText="Faça sua"
                        sndText="Reserva"
                        trdText="Realizando a Reserva Online você garante seu lugar com segurança."
                        linkText="Faça sua reserva"
                        link="/reservas"
                    />
                    <Card 
                        data={data}
                        img={ifoodImg}
                        fstText="Peça pelo nosso"
                        sndText="Delivery"
                        trdText="Coma o melhor do EmpresaX em qualquer lugar! Peça nossos pratos no conforto da sua casa."
                        linkText="Faça seu pedido"
                        animate="top"
                    />
                </section>
                <section className={styles.sectionHighlights}>
                    <Highlights 
                        images={highlightImages}
                    />
                </section>
            </main>
            <Footer />
        </>
    )
}
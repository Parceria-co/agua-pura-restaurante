import { useState } from "react";
import Form from "../../components/form/Form";
import Map from "../../components/map/Map";
import BannerWorkWithUs from "../../components/banner_work_with_us/BannerWorkWithUs";
import instagramIcon from "@/utils/assets/instagram.png"
import facebookIcon from "@/utils/assets/facebook.png";
import { Link, useNavigate, useParams } from "react-router-dom";

import styles from "./UnitDetails.module.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ImageModal from "../../components/modals/image_modal/ImageModal";
import { useToast } from "../../hooks/useModalUtils";
import Toast from "../../components/toast/Toast";
import { aguaPura } from "../../data/AguaPura";

export default function UnitDetails() {

    const { name } = useParams();
    const data = aguaPura;
    const unit = data.units.find(it => it.value === name) || data.units[0];    

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [indexImageSelected, setIndexImageSelected] = useState(null);

    const navigate = useNavigate();

    const images = [...unit.images].reverse();

    const { toastVisible, toastMsg, showToast, setToastVisible } = useToast();

    const handleNavigate = (info) => {
        if (info === "whatsapp") {
            window.open(data.links.whatsapp, "_blank");
        } else {

            navigate(`/${info}`);
        }
    }

    const handleClickImage = (index) => {
        setIndexImageSelected(index);
        setIsModalOpen(true);
    }

    const showToastForm = (message) => {
        showToast(message);
    }

    return (
        <>
        <Navbar />
        <main className={styles.container}>
            <div className={styles.title}>
                <h1>Bem-vindo(a) à {unit.name}</h1>
            </div>
            <section className={styles.wrapper}>
                <div className={styles.imagem}>
                    <img src={images[1]} alt="banner" />
                </div>
                <div className={styles.wrapperDivs}>
                    <div className={styles.darkerDiv}>
                        <h2>Faça sua reserva</h2>
                        <button onClick={() => handleNavigate("reservas")}>
                            Reservar agora
                        </button>
                    </div>
                    <div className={styles.lighterDiv}>
                        <h2>Nosso Cardápio</h2>
                        <button onClick={() => handleNavigate("cardapio")}>
                            Acessar cardápio
                        </button>
                    </div>
                    <div className={styles.lighterDiv}>
                        <h2>Faça seu evento aqui</h2>
                        <button onClick={() => handleNavigate("evento")}>
                            Orçamento de evento
                        </button>
                    </div>
                    <div className={styles.darkerDiv}>
                        <h2>Fale conosco</h2>
                        <button onClick={() => handleNavigate("whatsapp")}>
                            WhatsApp
                        </button>
                    </div>

                </div>
            </section>
            <section className={styles.wrapperImages}>
                <div className={styles.images}>
                    {images.map((imgSrc, index) => (
                        <div key={index} className={styles.imageContainer} onClick={() => handleClickImage(index)}>
                            <img src={imgSrc} alt={`Gallery ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div className={styles.wrapperInfo}>
                    <p>Essa loja está localizada na {unit.location.extended}</p>
                    <p>Entre os diferenciais da casa, incluem-se</p>

                    <h3>Gastronomia de Excelência</h3>
                    
                    <p>
                        Nossa culinária combina tradição e criatividade para entregar experiências
                        marcantes em cada prato. Ingredientes selecionados, técnicas refinadas e
                        um cuidado especial com apresentação fazem de cada refeição um momento
                        único. Aqui, sabor, aroma e estética se encontram para surpreender todos
                        os sentidos.
                    </p>

                    <h3>Ambiente Sofisticado</h3>

                    <p>
                        Cada detalhe do nosso espaço foi pensado para oferecer conforto, bem-estar
                        e uma atmosfera acolhedora. A harmonia entre iluminação, decoração e música
                        ambiente cria o cenário perfeito para encontros especiais, celebrações ou
                        momentos de tranquilidade ao lado de quem você gosta.
                    </p>

                    <p>Horário de funcionamento:</p>
                    <p>{unit.hourly}</p>
                    <p>Telefone: {data.phone}</p>
                    <p>Contato: {data.email}</p>
                    <p>CNPJ: {data.cnpj.formatted}</p>
                </div>
                <div className={styles.socialMidias}>
                    <h2>Visite nossas redes sociais</h2>
                    <div className={styles.wrapperSocial}>
                        <Link 
                            to={data.links.facebook} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.imageIcon}    
                        >
                            <img src={facebookIcon} alt="Facebook" />
                        </Link>
                        <Link 
                            to={data.links.instagram} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.imageIcon}    
                        >
                            <img src={instagramIcon} alt="Instagram" />
                        </Link>
                    </div>
                </div>
            </section>
            <section className={styles.backgroundContactUs}>
                <div className={styles.wrapperContactUs}>
                    <BannerWorkWithUs noResponsive={false}/>

                    <div className={styles.divisor}></div>

                    <h2>Fale conosco</h2>
                    <div className={styles.wrapperMapAndForm}>
                        <div className={styles.wrapperMap}>
                            <div className={styles.map}>
                                <Map
                                    src={unit.location.linkMap}
                                />
                            </div>
                        </div>
                        <div className={styles.wrapperForm}>
                            <Form
                                fieldTermOn={true}
                                showToast={showToastForm}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
        {isModalOpen && 
            <ImageModal 
                images={images} 
                index={indexImageSelected}
                onClose={() => setIsModalOpen(false)}
            />

        }
        <Toast
            message={toastMsg}
            visible={toastVisible}
            onClose={() => setToastVisible(false)}
        />

        <Footer />
        </>
    )
}


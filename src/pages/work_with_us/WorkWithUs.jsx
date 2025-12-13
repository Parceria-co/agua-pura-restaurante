import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styles from "./WorkWithUs.module.css";
import companyImg from "@/utils/assets/company.jpeg";
import trabalheConoscoImg from "@/utils/assets/trabalhe_conosco.png";
import LilBanner from "../../components/lil_banner/LilBanner";
import BannerWorkWithUs from "../../components/banner_work_with_us/BannerWorkWithUs";
import Form from "../../components/form/Form";
import { useToast } from "../../hooks/useModalUtils";
import Toast from "../../components/toast/Toast";
import { aguaPura } from "../../data/AguaPura";


// essa tela tem que ter uma integração para enviar email

export default function WorkWithUs() {

    const data = aguaPura;

    const { toastVisible, toastMsg, showToast, setToastVisible } = useToast();
    
    const showToastForm = (message) => {
        showToast(message);
    }

    return(
        <>
            <Navbar />
            <main className={styles.container}>
                <LilBanner
                    data={data} 
                    image={ data.images[2] }
                    text={"Fale conosco"}
                />

                <section className={styles.wrapper}>
                    <div className={styles.wrapperForm}>
                        <h2>Dúvidas, críticas ou sugestões, entre em contato conosco.</h2>
                        <p>Para reservas, acesse a página Unidades e selecione a unidade mais próxima ou uma de sua escolha.</p>
                        
                        <Form 
                            showToast={showToastForm}
                        />

                    </div>
                    <div className={styles.wrapperBanner}>
                        <h2>Trabalhe conosco</h2>
                        <BannerWorkWithUs 
                            noButton
                            noTitle 
                            noResponsive 
                            height={104}
                        />
                    </div>
                </section>

            </main>
            <Toast
                message={toastMsg}
                visible={toastVisible}
                onClose={() => setToastVisible(false)}
            />
            <Footer />
        </>
    )
}
import { useState } from "react";
import styles from "./Footer.module.css";
import instagramIcon from "@/utils/assets/instagram.png"
import whatsappIcon from "@/utils/assets/whatsapp.png";
import { Link, useParams } from "react-router-dom";
import { aguaPura } from "../../data/AguaPura";
import { formatPhone, isValidEmail, isValidPhone } from "../../hooks/useInputUtils";
import { useToast } from "../../hooks/useModalUtils";
import Toast from "../toast/Toast";

export default function Footer() {

    const data = aguaPura;
    const img = data.logo;

    const [inputValue, setInputValue] = useState("+55 ");
    const { toastVisible, toastMsg, showToast, setToastVisible } = useToast();
    
    
    const handleClick = () => {
        
        if (!isValidPhone(inputValue)) {
            showToast("Número de telefone inválido.", 3000);
            return;
        }


        let whatsappMessage = "Olá Água Pura, quero receber suas promoções!";
        let whatsappMessageLink = `${data.links.whatsapp}&text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappMessageLink, '_blank');
        
        showToast(
            "Reserva realizada com sucesso!",
            3000
        );

    }

    const themeColor = data.themeColor;
    themeColor && document.documentElement.style.setProperty("--redColor", themeColor) 

    return (
        <footer className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.wrapperText}>
                    <div className={styles.redirections}>
                        <ul className={styles.list}>
                            <li>
                                <Link to={`/unidades`}>Unidades</Link>
                            </li>
                            <li>
                                <Link to={`/eventos`}>Eventos</Link>
                            </li>
                            <li>
                                <Link to={`/contato`}>Contato</Link>
                            </li>
                            <li>
                                <Link to={`/cardapio`}>Cardápio</Link>
                            </li>
                        </ul>
                    {/* </div> */}
                    {/* <div className={styles.politycies}> */}
                        <ul className={styles.list}>
                            {/* <li>
                                <Link to="/contato">Trabalhe conosco</Link>
                            </li> */}
                            <li>
                                <Link to={`/politica-privacidade`}>Política de privacidade</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.information}>
                        <label htmlFor="apresentacao" className={styles.label}>Receba ofertas exclusivas no WhatsApp</label>
                        <div className={styles.inputWrapper}>
                            <input
                                id="apresentacao"
                                className={styles.input}
                                type="text"
                                value={inputValue}
                                onChange={e => setInputValue(formatPhone(e.target.value)) }
                                placeholder="+55 (11) 9 8765-4321"
                            />
                            <button className={styles.button} onClick={e => { handleClick(e) }}>Receber</button>
                        </div>
                    </div>
                </div>
                <div className={styles.wrapperImageAndSocial}>
                    <img className={styles.logo} src={img} alt="imagem" />
                    <ul className={styles.socialList}>
                        <li>
                            <Link 
                                to={data.links.instagram} 
                                target="_blank"
                            >
                                <img src={instagramIcon} alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link to={data.links.whatsapp}
                                target="_blank"
                            >
                                <img src={whatsappIcon} alt="" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Toast
                message={toastMsg}
                visible={toastVisible}
                onClose={() => setToastVisible(false)}
            />
        </footer>
    )
};
import styles from "./EventBudget.module.css";
import defaultImage from "@/utils/assets/banner_image.jpeg"
import { useState } from "react";
import { data, Link, useParams } from "react-router-dom";
import { formatDate, formatPhone, isValidEmail, isValidPhone } from "../../../hooks/useInputUtils";
import { useToast } from "../../../hooks/useModalUtils";
import Toast from "../../../components/toast/Toast";
import { emailService } from "../../../services/emailService";
import { aguaPura } from "../../../data/AguaPura";

export default function EventBudget({ name, selectedOption }) {

    const data = aguaPura;

    const [dateValue, setDateValue] = useState("");
    const [numberValue, setNumberValue] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("+55 ");
    const [emailValue, setEmailValue] = useState("");
    const [textareaValue, setTextareaValue] = useState("");
    const [verificationValue, setVerificationValue] = useState("");
    const [eventType, setEventType] = useState("");
    const [meal, setMeal] = useState("")
    const [loading, setLoading] = useState(null);

    const [ policyPrivacyLink  ] = useState(`/politica-privacidade`);
    
    const quantity = "8 a 16";

    const { toastVisible, toastMsg, showToast, setToastVisible } = useToast()

    const isEmptyText = (value) => {
        return !value || !value.trim();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true)

        if (
            isEmptyText(dateValue) ||
            isEmptyText(numberValue) ||
            isEmptyText(nameValue) ||
            isEmptyText(emailValue) ||
            isEmptyText(phoneValue) ||
            isEmptyText(meal) ||
            isEmptyText(eventType) ||
            isEmptyText(verificationValue)
        ) {
            showToast("Por favor, preencha todos os campos obrigatórios.", 3000);
            setLoading(false);
            return;
        }

        if (!isValidPhone(phoneValue)) {
            showToast("Número de telefone inválido.", 3000);
            setLoading(false);
            return;
        }

        if (verificationValue != 16) {
            showToast("Campo de verificação errado!", 3000)
            setLoading(false);
            return;
        }

        if (!isValidEmail(emailValue)) {
            showToast("Digite um email válido.", 3000);
            setLoading(false);
            return;
        }
    
        const message = `
            <p style="font-size:18px; color:#000; line-height:1.5">
                <strong>Detalhes do Evento</strong><br>
                Tipo de evento: ${eventType}<br>
                Data desejada: ${dateValue}<br>
                Número estimado de convidados: ${numberValue}<br>
                Serviço de refeição selecionado: ${meal}<br>
            </p>
            <br>
            <p style="font-size:18px; color:#000; line-height:1.5">
                <strong>Observações adicionais</strong><br>
                ${textareaValue}
            </p>
        `;

        const res = await emailService({
            templateId: import.meta.env.VITE_EMAIL_TEMPLATE_CONTACTUS_ID,
            params: {
                name: nameValue,
                title: "Confirmação de Evento",
                email_user: emailValue,
                email_client: data.email,
                phone: phoneValue,
                subject: `Evento - ${data.name} - ${dateValue}`,
                message: message,
            }
        });

        showToast(
            res.success ? 
            "Reserva realizada com sucesso!" : 
            "Erro ao enviar a mensagem. Tente novamente.",
            3000
        );

        if (res.success) {
            setDateValue("")
            setNumberValue("")
            setNameValue("")
            setPhoneValue("+ 55")
            setEmailValue("")
            setTextareaValue("")
            setVerificationValue("")
            setEventType("")
            setMeal("")
        }

        setLoading(false);

    };


  return (
    <section 
        id="inicio"
        className={styles.backgroundInfoOrcamento}
        style={{ backgroundImage: `url(${data.images[1]})` }}    
    >
        <div className={styles.background}></div>
        
        <div className={styles.wrapperInfoOrcamento}> 
            <div className={styles.infoOrcamento}>
                <div className={styles.title}>
                    <h1>{name}</h1>
                    <p>{selectedOption}</p>
                </div>
                <div className={styles.text}>
                    <h2>
                        Eventos com a qualidade que você e seus convidados merecem
                    </h2>
                    <div className={styles.orcamento}>
                        <div className={styles.round}>
                            <p> 
                                A partir de <b>
                                    R$ <span className={styles.price}>80</span>.90
                                </b> Por pessoa
                            </p>
                        </div>
                        <div className={styles.textInfo}>
                            <p>Espaços amplos, com capacidade para receber de {quantity} pessoas</p>
                            <p>Salões equipados com sistema de som, projetores.</p>
                            <p>Privacidade: ambientes climatizados, espaçoso e aconchegante.</p>
                        </div>
                    </div>
                    <p className={styles.policy}>
                        Ao enviar seus dados, você concorda com nossa <br />
                        <Link to={policyPrivacyLink} className={styles.linkPrivacyPolicy}>
                            Politica de Privacidade
                        </Link>
                    </p>
                </div>
            </div>
            <div className={styles.wrapperInfoInput}>
                <div className={styles.title}>
                    <h3>Fale com nossos especialistas!</h3>
                    <p>Preencha o formulário e aguarde nosso contato.</p>
                </div>
                <div className={styles.wrapperInput}>
                    <div className={styles.field}>
                        <label htmlFor="tipoEvento">Tipo de Evento*</label>
                        <select id="tipoEvento" className={styles.input} onChange={e => setEventType(e.target.value)}>
                            <option>Selecione</option>
                            <option value={"Noivado/Casamento"}>Noivado/Casamento</option>
                            <option value={"Evento Corporativo"}>Evento Corporativo (Privado ou Público)</option>
                            <option value={"Aniversário ou Comemoração"}>Aniversário ou Comemoração</option>
                            <option value={"Confraternização de Trabalho"}>Confraternização de Trabalho</option>
                            <option value={"Formatura"}>Formatura</option>
                            <option value={"Outro"}>Outro</option>
                        </select>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="refeicao">Almoço ou Jantar*</label>
                        <select id="refeicao" className={styles.input} onChange={e => setMeal(e.target.value)}>
                            <option>Selecione</option>
                            <option value={"Almoço"}>Almoço</option>
                            <option value={"Jantar"}>Jantar</option>
                        </select>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="dataEvento">Data do Evento ex.: 00/00/0000*</label>
                        <input id="dataEvento" type="text" className={styles.input} placeholder="00/00/0000" value={dateValue} onChange={e => setDateValue(formatDate(e.target.value))} />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="convidados">Nº de convidados*</label>
                        <input id="convidados" type="number" className={styles.input} value={numberValue} onChange={e => setNumberValue(e.target.value)}/>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="nome">Nome*</label>
                        <input id="nome" type="text" className={styles.input} value={nameValue} onChange={e => setNameValue(e.target.value)}/>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="email">Email*</label>
                        <input id="email" type="email" className={styles.input} value={emailValue} onChange={e => setEmailValue(e.target.value)} />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="telefone">Telefone*</label>
                        <input 
                            id="telefone" 
                            type="tel" 
                            className={styles.input} 
                            value={phoneValue} 
                            placeholder="(xx) xxxxx-xxxx"
                            onChange={(e) => setPhoneValue(formatPhone(e.target.value))}
                        />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="particularidades">Particularidade do seu Evento</label>
                        <textarea id="particularidades" className={styles.textarea} rows="2" value={textareaValue} onChange={e => setTextareaValue(e.target.value)}></textarea>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="verificacao">7 + 9 = ?</label>
                        <input id="verificacao" type="text" className={styles.input} value={verificationValue} onChange={e => setVerificationValue(e.target.value)}/>
                    </div>

                    <button className={styles.button} onClick={handleSubmit}>{loading ? "Enviando..." : "Receber Orçamento"}</button>
                </div>
            </div>
        </div>
        <Toast
            message={toastMsg}
            visible={toastVisible}
            onClose={() => setToastVisible(false)}
        />
    </section>
  );
}

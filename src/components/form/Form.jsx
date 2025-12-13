import { useState } from "react";
import styles from "./Form.module.css";
import { emailService } from "../../services/emailService";
import { formatPhone, isValidEmail, isValidPhone } from "../../hooks/useInputUtils";
import { aguaPura } from "../../data/AguaPura";

export default function Form({
    fieldUnitOn = false,
    fieldTermOn = false,
    showToast = null,
}) {

    const data = aguaPura;
    
    const [validated, setValidated] = useState(false);
    const [loading, setLoading] = useState(false);

    const [phoneValue, setPhoneValue] = useState("+55");
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [subjectValue, setSubjectValue] = useState("");
    const [unitValue, setUnitValue] = useState("");
    const [messageValue, setMessageValue] = useState("");
    const [checkedTermValue, setCheckedTermValue] = useState(false);

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        // Verifica erros nativos HTML
        if (
            !form.checkValidity() ||
            !nameValue || !nameValue.trim() ||
            !emailValue || !emailValue.trim() ||
            !phoneValue || !phoneValue.trim() ||
            !messageValue || !messageValue.trim() ||
            !subjectValue || !subjectValue.trim()
        ) {
            e.stopPropagation();
            
            setValidated(true);

            showToast("Preencha todos os campos.");
            return;
        }

        if (fieldTermOn && !checkedTermValue) {
            showToast("Você precisa aceitar os termos.")
            return;
        }

        if (!isValidEmail(emailValue)) {
            showToast("Digite um email válido.");
            return;
        }

        if (!isValidPhone(phoneValue)) {
            showToast("Número de telefone inválido.");
            return;
        }

        setValidated(false);
        setLoading(true);

        const res = await emailService({
            templateId: import.meta.env.VITE_EMAIL_TEMPLATE_CONTACTUS_ID,
            params: {
                title: "Notificação de Contato",
                name: nameValue,
                email_user: emailValue,
                email_client: data.email,
                phone: phoneValue,
                subject: subjectValue,
                unit: unitValue,
                message: messageValue,
            }
        });
        
        showToast(
            res.success ? 
            "Mensagem enviada com sucesso!" : 
            "Erro ao enviar a mensagem. Tente novamente.",
            3000
        );

        if (res.success) {
            // console.log(res);
            
            setNameValue("");
            setPhoneValue("+55");
            setEmailValue("");
            setSubjectValue("");
            setUnitValue("");
            setMessageValue("");
            setCheckedTermValue(false);
    
            form.reset();
        }

        setLoading(false);
    };

    return (
        <form 
            className={`${styles.form} ${validated ? styles.wasValidated : ""}`} 
            onSubmit={handleSubmit}
            noValidate
        >
            <div className={styles.group}>
                <label htmlFor="name">Seu nome *</label>
                <input 
                    id="name" 
                    type="text" 
                    name="name" 
                    required
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                />
            </div>

            <div className={styles.group}>
                <label htmlFor="phone">Número de telefone *</label>
                <input 
                    id="phone" 
                    type="tel" 
                    name="phone" 
                    placeholder="+55"
                    required
                    value={phoneValue}
                    onChange={(e) => setPhoneValue(formatPhone(e.target.value))}
                />
            </div>

            <div className={styles.group}>
                <label htmlFor="email">Seu e-mail *</label>
                <input 
                    id="email" 
                    type="email" 
                    name="email" 
                    required
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                />
            </div>

            <div className={styles.group}>
                <label htmlFor="subject">Assunto *</label>
                <input 
                    id="subject" 
                    type="text" 
                    name="subject" 
                    required
                    value={subjectValue}
                    onChange={(e) => setSubjectValue(e.target.value)}
                />
            </div>

            { fieldUnitOn && (
                <div className={styles.group}>
                    <label htmlFor="unit">Unidade *</label>
                    <select 
                        id="unit" 
                        name="unit" 
                        required
                        value={unitValue}
                        onChange={(e) => setUnitValue(e.target.value)}
                    >
                        <option value="">Selecione</option>
                        <option value="unidade1">Unidade 1</option>
                        <option value="unidade2">Unidade 2</option>
                    </select>
                </div>
            )}

            <div className={`${styles.group} ${styles.menssagem}`}>
                <label htmlFor="message">Sua mensagem *</label>
                <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows="3"
                    value={messageValue}
                    onChange={(e) => setMessageValue(e.target.value)}
                />
            </div>

            { fieldTermOn && (
                <div className={styles.group}>
                    <label htmlFor="term">Concordo *</label>
                    <div className={styles.wrapperTerm}>
                        <input 
                            type="checkbox" 
                            name="term" 
                            id="term"
                            required
                            checked={checkedTermValue}
                            onChange={(e) => setCheckedTermValue(e.target.checked)}
                        />
                        <p>Ao preencher este formulário você concorda com o armazenamento e tratamento dos seus dados pela nossa equipe.</p>
                    </div>
                </div>
            )}

            <div className={styles.wrapperButton}>
                <button type="submit" disabled={loading}>
                    {loading ? "Enviando..." : "Enviar"}
                </button> 

                {validated && (
                    <p className={styles.errorMessage}>X Preencha o formulário corretamente.</p>
                )}
            </div>
        </form>
    );
}

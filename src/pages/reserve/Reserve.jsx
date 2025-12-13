import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Reserve.module.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Select from "../../components/select/Select";
import { IoCalendarNumberOutline, IoPersonAdd, IoPersonAddOutline, IoPersonOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { FiEdit2 } from "react-icons/fi";
import Toast from "../../components/toast/Toast";
import { useToast } from "../../hooks/useModalUtils";
import InputText from "../../components/input/InputText";
import { BsPhone } from "react-icons/bs";
import { VscMail } from "react-icons/vsc";
import { useNavigate, useParams } from "react-router-dom";
import { formatPhone, isValidEmail, isValidPhone } from "../../hooks/useInputUtils";
import { emailService } from "../../services/emailService";
import { aguaPura } from "../../data/AguaPura";

export default function Reserve() {
    const data = aguaPura;

    const name = data.name;

    const { toastVisible, toastMsg, showToast, setToastVisible } = useToast();

    const [loading, setLoading] = useState(false);

    function validate() {
        let errorMessage;

        // Email
        if (!isValidEmail(inputEmailValue)) {
            errorMessage = "Email inválido.";
        }
        
        // Nome
        if (!inputNameValue.trim() || inputNameValue.trim().split(" ").length < 2) {
            errorMessage = "Informe nome e sobrenome.";
        }
        
        // Telefone brasileiro
        if (!isValidPhone(inputNumberValue)) {
            errorMessage = "Número de telefone inválido.";
        }

        return errorMessage;
    }

    function generateReservationDays() {
        const days = [];
        const today = new Date();
        const endDate = new Date();
        endDate.setMonth(today.getMonth() + 2);

        const options = { day: "2-digit", month: "long", year: "numeric", weekday: "long" };

        let currentDate = new Date(today);

        while (currentDate <= endDate) {
            const formattedDate = currentDate.toLocaleDateString("pt-BR", options); // "28 January 2026, Wednesday"
            days.push(formattedDate);
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return days;
    }

    function generatePartySizes() {
        const sizes = [];
        for (let i = 1; i <= 20; i++) {
            sizes.push(`${i.toString()} pessoa${i > 1 ? "s" : ""}`);
        }
        return sizes;
    }

    // tenho que arrumar isso
    function generateHourlyOptions() {
        const options = [];
        
        const now = new Date();
        let hour = now.getHours();
        let minute = now.getMinutes();

        // arrendoda para o pŕoximo intervalo de 30 min
        if (minute < 30) minute = 30;
        else {
            minute = 0;
            hour += 1 
        }
        
        // força mínimo 18:00
        if (hour < 18) {
            hour = 18;
            minute = 0;
        }

        // gera até 00:00 (meia-noite)
        while (hour < 24) {
            const h = String(hour).padStart(2, '0');
            const m = String(minute).padStart(2, '0');

            options.push(`${h}:${m}`);

            minute += 30;
            if (minute === 60) {
                minute = 0
                hour += 1
            }
        }
        return options;
    }

    const [selectedCity, setSelectedCity] = useState("");
    const [selectedLocation, setSelectedLocation] = useState(data.units.length <= 1 ? data.units[0].location : null);

    const [step, setStep] = useState(data.units.length > 1 ? 1 : 2);

    const reservationDays = generateReservationDays();
    const partySizes = generatePartySizes();
    const hourlyOptions = generateHourlyOptions();

    const [selectedReservationDay, setSelectedReservationDay] = useState(null);
    const [selectedPartySize, setSelectedPartySize] = useState(null);
    const [selectedHourly, setSelectedHourly] = useState(null);

    const [inputOptionalValue, setInputOptionalValue] = useState("");
    const [inputNumberValue, setInputNumberValue] = useState("+55 ");
    const [inputNameValue, setInputNameValue] = useState("");
    const [inputEmailValue, setInputEmailValue] = useState("");

    const [openSelectReservationDay, setOpenSelectReservationDay] = useState(false);
    const [openSelectPartySize, setOpenSelectPartySize] = useState(false);
    const [openSelectHourly, setOpenSelectHourly] = useState(false);
    const [whatsappMessageLink, setWhatsappMessageLink] = useState(null);
    const [isWhatsappConfirmed, setIsWhatappConfirmed] = useState(true);
    const [isOpenInfoModal, setIsOpenInfoModal] = useState(false);
    const [timer, setTimer] = useState(null);

    // Gera lista única e ordena por UF (abreviação do estado)
    const locationsSorted = data.units
    .sort((a, b) => a.name.localeCompare(b.name)
    );

  const filtered =
    selectedCity === ""
      ? data.units
      : data.units.filter((l) => l.name === selectedCity);

    const handleSelectLocation = (location) => {
        setSelectedLocation(location);
        nextStep();
    }

    const handleBackClick = () => {
        prevStep();
    }

    const handleNextClick = () => {
        if (!selectedReservationDay || !selectedPartySize || !selectedHourly) {
            showToast("Por favor, preencha os campos antes de continuar");
            return;
        }
        nextStep();
    }

    const handleReserveClick = async () => {
        const errorMessage = validate();
        if (errorMessage) {
            showToast("Por favor, corrija os erros antes de continuar " + errorMessage, 3000);
            return;
        } 

        setLoading(true);

        const res = await emailService({
            templateId: import.meta.env.VITE_EMAIL_TEMPLATE_RESERVE_ID,
            params: {
                name: inputNameValue,
                email_user: inputEmailValue,
                phone: inputNumberValue,
                company: name,
                email_client: data.email,
                date: selectedReservationDay,
                hourly: selectedHourly,
                quantity: selectedPartySize,
                observations: inputOptionalValue,
            }
        });

        if (!res.success) {
            showToast(
                "Erro ao enviar a mensagem. Tente novamente.",
                3000
            );
            setLoading(false);
            return;
        }

        setIsWhatappConfirmed(false);
        
        const whatsappMessage = `
            Olá! Quero confirmar minha reserva:

            • Nome: ${inputNameValue}
            • Telefone: ${inputNumberValue}
            • Data: ${selectedReservationDay}
            • Horário: ${selectedHourly}
            • Quantidade de pessoas: ${selectedPartySize}
            • Observações: ${inputOptionalValue || "Nenhuma"}

            Reservado pelo site do ${name}.
        `;

        let whatsappMessageLink = `${data.links.whatsapp}&text=${encodeURIComponent(whatsappMessage)}`;
        
        setWhatsappMessageLink(whatsappMessageLink);
        setIsOpenInfoModal(true);
        
        let countDown = 3;
        setTimer(countDown);

        const interval = setInterval(() => {
            countDown -= 1;
            setTimer(countDown);

            if (countDown === 0) {
                clearInterval(interval);
                handleWhatsappConfirm(whatsappMessageLink);
            }
        }, 1000);

        showToast(
            "Reserva realizada com sucesso!",
            3000
        );
    
    }
    
    const handleWhatsappConfirm = (link) => {        
        window.open(link, '_blank');
        
        setIsOpenInfoModal(false);
        setLoading(false);

        setSelectedReservationDay(null);
        setSelectedPartySize(null);
        setSelectedHourly(null);
        setInputOptionalValue("");
        setInputNumberValue("+55 ");
        setInputNameValue("");
        setInputEmailValue("");

        setStep(data.units.quantity > 1 ? 1 : 2);            
    };

    const nextStep = () => {
        setStep(prev => prev + 1);
    }

    const prevStep = () => {
        setStep(prev => prev - 1);
    }

    const handleKeyDownNext = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleNextClick();
        }
    }

    const handleKeyDownReserve = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleReserveClick();
        }
    }

    useEffect(() => {
        if (isOpenInfoModal) {
            const properties = {
                body: document.body.style.overflow,
                html: document.documentElement.style.overflow
            };

            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";

            return () => {
                document.body.style.overflow = properties.body;
                document.documentElement.style.overflow = properties.html;
            }
        }
    }, [isOpenInfoModal])

  return (
    <>
        <Navbar 
            hideAfterScroll={true}
        />
        <main className={styles.container}>
            <div className={styles.wrapperImage}>
                <img
                    src={data.cards[0]}
                    alt="Restaurant"
                    className={styles.image}
                />
            </div>

            {step == 1 ? (
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        Qual unidade da {name} você prefere?
                    </h2>

                    {/* Select */}
                    <div className={styles.selectWrapper}>
                        <select
                            className={styles.select}
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                        >
                            <option value="">Selecione a unidade</option>
                            {locationsSorted.map((unit, idx) => (
                                <option key={idx} value={unit.name}>
                                    {unit.location.neighborhood} - {unit.location.state.abbreviation}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Locations */}
                    <div className={styles.locations}>
                    {filtered.map((unit, i) => (
                        <div 
                            key={i} 
                            className={styles.locationItem}
                            onClick={() => handleSelectLocation(unit.location)}
                        >
                            <FaMapMarkerAlt className={styles.icon} />
                            <div>
                                <div className={styles.locationName}>{unit.name}</div>
                                <div className={styles.locationCity}>
                                    {unit.location.city} • {unit.location.state.abbreviation}
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            ) : (
                <div className={styles.contentReserve}>
                    <div 
                        className={styles.buttonBack}
                        onClick={handleBackClick}
                    >
                        <IoIosArrowBack /> 
                        <p>voltar</p>
                    </div>
                    <div className={styles.titleAndCity}>
                        <h2 className={styles.title}>
                            {name}
                        </h2>
                        <p className={styles.city}>{selectedLocation.city} <span>-</span> {selectedLocation.state?.abbreviation}</p>
                    </div>

                    {step === 2 ? (
                        <div className={styles.wrapperOption}>
                            <Select
                                options={reservationDays}
                                selectedOption={selectedReservationDay}
                                setSelectedOption={setSelectedReservationDay}
                                openSelect={openSelectReservationDay}
                                setOpenSelect={setOpenSelectReservationDay}
                                text="Dia de reserva"
                                placeholder="Selecione o dia"
                                icon={<IoCalendarNumberOutline />}
                            />      
                            
                            <Select
                                options={partySizes}
                                selectedOption={selectedPartySize}
                                setSelectedOption={setSelectedPartySize}
                                openSelect={openSelectPartySize}
                                setOpenSelect={setOpenSelectPartySize}
                                text="Tamanho da festa"
                                placeholder="Selecione o tamanho"
                                icon={<IoPersonAddOutline />}
                            />
    
                            <Select 
                                options={hourlyOptions}
                                selectedOption={selectedHourly}
                                setSelectedOption={setSelectedHourly}
                                openSelect={openSelectHourly}
                                setOpenSelect={setOpenSelectHourly}
                                text="Horario"
                                placeholder="Selecione o horário"
                                icon={<RxCounterClockwiseClock />}
                            />
                            <InputText
                                label="Você precisa de algo especial?"
                                type="text"
                                value={inputOptionalValue}
                                onChange={(e) => setInputOptionalValue(e.target.value)}
                                placeholder="Ex: Aniversário, Ocasiões especiais, etc."
                                icon={<FiEdit2 />}
                                isOptional={true}
                                onKeyDown={handleKeyDownNext}
                            />
                        </div>
                        
                    ) : (
                        <div className={styles.contentInputs}>
                            <InputText
                                label="Número de Telefone"
                                value={inputNumberValue}
                                onChange={(e) => setInputNumberValue(formatPhone(e.target.value))}
                                placeholder="(00) 1 2345-6789"
                                icon={<BsPhone />}
                            />
                            <InputText
                                label="Nome e sobrenome"
                                value={inputNameValue}
                                onChange={(e) => setInputNameValue(e.target.value)}
                                placeholder="Ex: Henrique Freitas"
                                icon={<IoPersonOutline />}
                            />
                            <InputText
                                label="Email"
                                value={inputEmailValue}
                                onChange={(e) => setInputEmailValue(e.target.value)}
                                placeholder="Ex: henriquefreitas@gmail.com"
                                icon={<VscMail />}
                                onKeyDown={handleKeyDownReserve}
                            />
                        </div>
                        
                    )}
                    <button 
                            className={`${styles.buttonNext}`}
                            onClick={step == 2 ? handleNextClick : handleReserveClick}
                        >
                            {step === 2 ? "Próximo" : loading ? "Reservando..." : "Reservar"}
                    </button>
                    </div>
            )}
            <Toast 
                message={toastMsg}
                visible={toastVisible}
                onClose={() => setToastVisible(false)}
            />
        </main>
        <Footer />
        {isOpenInfoModal && 
            <div className={styles.background}>
                <p className={styles.timer}>{timer}</p>
                <div className={styles.info_modal}>
                    <h2>Redirencionando para confirmar a <b>Reserva no WhatsApp</b></h2>
                    <button className={styles.buttonWhats} onClick={() => handleWhatsappConfirm(whatsappMessageLink)}>
                        Confirmar no WhatsApp
                    </button>
                </div>
            </div>
        }
    </>
  );
}


//https://www.youtube.com/watch?v=imiPCepUsfI&list=RDkFfLhteT2P4&index=7
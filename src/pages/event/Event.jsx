import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer.jsx"
import Navbar from "../../components/navbar/Navbar.jsx"
import styles from "./Event.module.css";
import defaultImage from "@/utils/assets/banner_image.jpeg"
import { useEffect } from "react";
import { aguaPura } from "../../data/AguaPura.js";

export default function Event() {

    const data = aguaPura;

    const navigate = useNavigate();
    const infos = [
        {
            image: {src: data.images[2], alt: "Casa Pellegrini Imagem" },
            title: "Eventos Corporativos",
            text: `Reuniões externas entre empresas e profissionais são bastante comuns. Sendo assim, há necessidade de um espaço amplo e confortável pararealização de diversas atividades que contribuem para o desenvolvimento corporativo. Conte com a estrutura dos restaurantes ${name} para conceder eventos com o que há de melhor em culinária para seus funcionários, parceiros e convidados.`,
            reverse: {column: false, row: true},
            imageFree: true
        },
        {
            image: {src: data.images[1], alt: "Casa Pellegrini Imagem" },
            title: "Confraternizações",
            text: `Sabe aqueles momentos entre amigos e/ou familiares que ficam guardados na memória? Pois é, muitos deles ocorrem aqui no ${name}. Com um espaço acolhedor e uma culinária praticamente perfeita em sabor, fica difícil esquecer. Traga sua confraternização para um de nossos restaurantes. Sinta a verdadeira alegria e tenha ótimas recordações.`,
            reverse: {column: false, row: false}
        },
        {
            image: {src: data.images[0], alt: "Casa Pellegrini Imagem" },
            title: "Aniversário",
            text: `A comemoração da chegada de mais um ano para viver, com certeza, é digna de uma grande festa. E para acompanhá-la, além de um espaço requintado e confortável, nada melhor que as delícias dos pratos ${name}. Nossos restaurantes estão plenamente disponíveis para receber o aniversariante e seus convidados para, juntos, realizarmos um evento inesquecível.`,
            reverse: {column: true, row: true}
        },
        {
            image: {src: data.images[2], alt: "Casa Pellegrini Imagem" },
            title: "Casamentos",
            text: `Em uma festa de matrimônio refinada, um buffet sofisticado, com entradas, pratos principais e sobremesas de sabor ímpar, é algo imprescindível. Portanto, o ${name} está ao seu lado no objetivo de deixar o casal e seus convidados plenamente satisfeitos. Realize sua festa de casamento em um dos nossos restaurantes e conceda a todos os presentes uma experiência que irá engrandecer ainda mais este momento tão especial.`,
            reverse: {column: false, row: false}
        },
    ];

    const formatLink = (option) => {
        return `/evento/${option}`;
    };


    const sortOptionsbyCity = (options) => {
        const sortedOptions = {};

        Object.entries(options).forEach(([estado, cidades]) => {
            const sortedCidades = cidades.sort((a, b) => a.value.localeCompare(b.value));
            sortedOptions[estado] = sortedCidades;
        });

        return sortedOptions;
    }


    function buildOptionGroups(units) {
        const groups = {};

        units.forEach((unit) => {
            const state = unit.location.state.extended;      
            const value = unit.value;                        
            const neighborhood = unit.location.neighborhood;

            if (!groups[state]) {
                groups[state] = [];
            }

            groups[state].push({
                label: neighborhood,
                value: value,
            });
        });

        return groups;
    }

    const options = buildOptionGroups([...data.units].sort((a, b) => a.name.localeCompare(b.name)));

    const sortedOptions = sortOptionsbyCity(options);
    

    const handleSelect = (e) => {
        const link = e.target.value;

        if (data.units.length > 1) {
            navigate(formatLink(link));
            return;
        }
        navigate(formatLink(""))
    }

    useEffect(() => {
        if (data.units.length == 1) navigate(formatLink(""))
    }, [])

    return (
        <>
            <Navbar />

            <main 
                className={styles.container}
            > 
                {infos.map((info, idx) => (
                    <div className={`
                        ${styles.wrapper} 
                        ${info.reverse.column ? styles.reverseColumn : ""}
                        ${info.reverse.row ? styles.reverseRow : ""}
                    `} key={idx}>
                        <div className={`
                            ${styles.wrapperImage}
                            ${info.imageFree ? styles.imageFree : ""}
                        `}>
                            <img src={info.image.src} alt={info.image.alt} />
                        </div>
                        <div className={styles.wrapperInfo}>
                            <h2>{info.title}</h2>
                            <p>
                                {info.text}
                            </p>
                            <select
                                className={styles.select}
                                onChange={handleSelect}
                            >
                                <option defaultChecked>Selecione a unidade</option>
                                {Object.entries(sortedOptions).map(([state, cities]) => (
                                    <optgroup key={state} label={state}>
                                        {cities.map((city, idx) => (
                                            <option key={idx} value={city.value} >
                                                {city.label}
                                            </option>
                                        ))}
                                    </optgroup>
                                ))}
                            </select>
                        </div>
                    </div>
                ))}
            </main>
            <Footer />
        </>
    )
}
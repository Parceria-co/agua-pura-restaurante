import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import styles from "./Menu.module.css";
import bannerImage from '@/utils/assets/banner_image.jpeg';
import bannerImage2 from '@/utils/assets/banner_image_2.jpeg';
import food1 from "@/utils/assets/food_1.jpg";
import food2 from "@/utils/assets/food_2.jpg";
import food4 from "@/utils/assets/food_4.jpg";
import wineIcon from "@/utils/assets/wine.png";
import wineImage from "@/utils/assets/wine_image.png"; 

import Banner from "../../components/banner/Banner";
import { useEffect, useRef, useState } from "react";
import DishModal from "../../components/modals/dish_modal/DishModal";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import WineModal from "../../components/modals/wine_modal/WineModal";
import WineSection from "../../components/wine_section/WineSection";
import DishSection from "../../components/dish_section/DishSection";
import FilterModal from "../../components/modals/filter_modal/FilterModal";
import { aguaPura } from "../../data/AguaPura";

export default function Menu() {
    const data = aguaPura;

    const itens = data.menuItens;
    const infoWines = data.wines;

    const navigate = useNavigate();

    const navRef = useRef(null);
    
    const dishRef = useRef([]);
    const wineRef = useRef([])
    
    const sectionDishesRefs = useRef([]);
    const sectionWinesRefs = useRef([]);
    
    const originalNavTopRef = useRef(null);
    const isFixedRef = useRef(false);

    const [filterOpen, setFilterOpen] = useState(false);
    const [selected, setSelected] = useState(0);
    const [isFixed, setIsFixed] = useState(false);
    const [navHeight, setNavHeight] = useState(0);
    const [isClicking, setIsClicking] = useState(false);
    const [selectedDish, setSelectedDish] = useState(null);
    const [selectedWine, setSelectedWine] = useState(null);
    const [linkProcessed, setLinkProcessed] = useState(false);
    const [navPosition, setNavPosition] = useState(null);

    const [showWineMenu, setShowWineMenu] = useState(false);

    const [searchParams] = useSearchParams();
    const itemParam = searchParams.get("item");
    const wineParam = searchParams.get("wine");

    const ulRef = useRef(null);
    const liRefs = useRef([]);
    liRefs.current = [];

    const [currentFilters, setCurrentFilters] = useState({
        text: "",
        countries: [],
        types: [],
        grapes: [],
        volumes: [],
        priceRange: [0, Math.max(...infoWines.flatMap(group => group.itens.map(w => w.price.value)))]
    });

    const [filteredWines, setFilteredWines] = useState(infoWines);

    const bannerImages = [data.images[5], data.images[0], data.images[4]];

    const handleFilter = (filters) => {
        setCurrentFilters(filters);
        const { text, countries, types, grapes, volumes, priceRange } = filters;
        const [minPrice, maxPrice] = priceRange;

        const filtered = infoWines.map(group => {
            const winesFiltered = group.itens.filter(wine => {
                const matchText =
                    !text ||
                    wine.name.toLowerCase().includes(text.toLowerCase()) ||
                    wine.description.toLowerCase().includes(text.toLowerCase());

                const matchCountry =
                    countries?.length === 0 || countries.includes(wine?.country?.name);

                const matchType =
                    types?.length === 0 || types.includes(wine?.type?.name);

                const matchGrape =
                    grapes?.length === 0 ||
                    grapes?.some(g =>
                        wine?.grape?.toLowerCase().includes(g.toLowerCase())
                    );

                const matchVolume =
                    volumes?.length === 0 || volumes?.includes(wine?.volume);

                const matchPrice = wine.price.value >= minPrice && wine.price.value <= maxPrice;

                return (
                    matchText &&
                    matchCountry &&
                    matchType &&
                    matchGrape &&
                    matchVolume &&
                    matchPrice
                );
            });

            return { ...group, itens: winesFiltered };
        }).filter(group => group.itens.length > 0);

        setFilteredWines(filtered);
        setFilterOpen(false); // fecha o modal
    };

    const handleCloseModal = () => {
        setSelectedDish(null);
        setSelectedWine(null);

        // Remove o parâmetro dish da URL sem recarregar a página
        const params = new URLSearchParams(searchParams);
        params.delete("item");
        navigate({ search: params.toString() }, { replace: true });
    };

    const handleSelectDish = (dish) => {
        setSelectedDish(dish);
    }

    const handleClick = (index) => {
        const element = sectionDishesRefs.current[index];
        const offset = -100;
        
        const top = element.getBoundingClientRect().top + window.scrollY + offset;

        scrollOnItem(element, top, index);
    };

    const handleSelectWine = (wine) => {
        setSelectedWine(wine);
    }

    const handleClickWine = (index) => {
        const element = sectionWinesRefs.current[index];        
        const offset = -140;

        const top = element.getBoundingClientRect().top + window.scrollY + offset;

        scrollOnItem(element, top, index);
    }

    const scrollOnItem = (element, top, index) => {
        if (!element) return;

        setSelected(index);
        setIsClicking(true);

        window.scrollTo({
            top,
            behavior: "smooth"
        })

        setTimeout(() => setIsClicking(false), 500);
    }

    const handleCloseWineMenu = (argument) => {
        
        setShowWineMenu(argument);
    }

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;
        setNavPosition(nav.getBoundingClientRect().top + window.scrollY);
    }, []);

    const linkHandler = (param, infos, ref, types, offset, functionSelected, functionOptional) => {
        if (!param) return;

        if (functionOptional) functionOptional(true);
        
        // Achar o prato com base no ID da URL
        console.log();
        
        const found = infos.flatMap(cat => cat[types]).find(d => d.id == param);
        if (!found) return
            
        // Rolar até a categoria do prato
        if (ref.current[param]) {
            const el = ref.current[param];
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            setTimeout(() => {
                window.scrollTo({ top, behavior: "smooth" });
            }, 300);
        }

            // Esperar rolar e abrir o modal
        setTimeout(() => {
            functionSelected(found)
            setLinkProcessed(true);
        }, 600);
    }

    useEffect(() => {
        if (linkProcessed) return;
        
        linkHandler(
            itemParam,
            itens, 
            dishRef,
            "itens",
            320,
            setSelectedDish
        );

        linkHandler(
            wineParam,
            infoWines,
            wineRef,
            "wines",
            200,
            setSelectedWine,
            setShowWineMenu
        )
        
    }, [itemParam, wineParam, itens, infoWines]);

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        setTimeout(() => {
            originalNavTopRef.current = nav.getBoundingClientRect().top + window.scrollY;
            setNavHeight(nav.offsetHeight);
        }, 100);
    }, [showWineMenu]);

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;       

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const navTop = nav.getBoundingClientRect().top + window.scrollY;

            // só recalcula quando não está fixo
            if (!isFixedRef.current && Math.abs(navTop - (originalNavTopRef.current || 0)) > 5) {
                originalNavTopRef.current = navTop;
            }

            const shouldBeFixed = scrollY >= (originalNavTopRef.current || 0);
            if (shouldBeFixed !== isFixedRef.current) {
                isFixedRef.current = shouldBeFixed;
                setIsFixed(shouldBeFixed);
            }

            if (isClicking) return;

            const refs = showWineMenu ? sectionWinesRefs.current : sectionDishesRefs.current;
            refs.forEach((section, idx) => {
                if (!section) return;
                const offset = -150;
                const top = section.getBoundingClientRect().top + window.scrollY + offset;
                const bottom = top + section.offsetHeight;
                if (window.scrollY >= top && window.scrollY < bottom) setSelected(idx);
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isClicking, showWineMenu]);

    // 👉 Quando troca o menu, sobe até o nav
    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        setTimeout(() => {
            
            if (window.scrollY > navPosition + 10) {
                window.scrollTo({
                    top: Math.max(0, navPosition - 60), // ajusta -60 se quiser mostrar um espacinho
                    behavior: "smooth"
                });
            }
        }, 200);
    }, [showWineMenu]);

    useEffect(() => {
        if (!ulRef.current || !liRefs.current[selected]) return;
        
        const item = liRefs.current[selected];

        item.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "nearest"
        });

    }, [selected])

    // fazer uma função para a pessoa clicar na imagem e abrir ela completa, mas em imagens especifica tipo a da cobrança com  couver artistico

    return (
        <>
            <Navbar 
                hideAfterScroll={true}
            />
            <main className={styles.container}>
                <section className={styles.banner}>
                    <Banner 
                        height={"400px"}
                        timeTransition={5000}
                        transitionDurationMs={300}
                        images={bannerImages}
                        arrowOn={false}
                   />
                </section>
                <section className={styles.cardapio}>
                    <div 
                        ref={navRef} 
                        className={`
                            ${styles.wrapperNav} 
                            ${isFixed ? styles.fixed : ""}
                            ${showWineMenu ? styles.block : ""}`}
                    >
                        {!showWineMenu && <div className={styles.lineTop}></div>}
                        <div className={showWineMenu ? styles.wrapperWineNav : ""}>
                            <div className={styles.wineTitle}>
                                <button 
                                    className={`${styles.wineButton} ${!showWineMenu ? styles.wineButtonAbsolute : ""}`}
                                    onClick={() => handleCloseWineMenu(!showWineMenu)}
                                >
                                    <img src={wineIcon} alt="wine" />
                                </button>
                                {showWineMenu &&
                                    <p>
                                        Carta de Vinhos {name}  
                                    </p>
                                }
                            </div>
                            {showWineMenu &&
                                <div className={styles.settingAndClose}>
                                    <VscSettings 
                                        className={styles.setting}
                                        onClick={() => setFilterOpen(true)}
                                    />
                                    <IoClose 
                                        onClick={() => handleCloseWineMenu(false)}
                                    />
                                </div>
                            }
                        </div>
                        {!showWineMenu && itens ? (
                            <ul ref={ulRef} className={styles.navbar}>
                                {itens.map((it, idx) => (
                                    <li 
                                        key={idx}
                                        ref={el => liRefs.current[idx] = el}
                                        onClick={() => handleClick(idx)}
                                    >
                                        <a 
                                            className={selected == idx ? styles.active : ""}
                                        >
                                            {it.category}
                                            <div className={selected == idx ? styles.border : ""}></div>
                                        </a>
                                    </li>

                                ))

                                }
                            </ul>
                        ) : (
                            <ul className={styles.navbarWine}>
                                {filteredWines.map((it, idx) => (
                                    <li
                                        key={idx}
                                        onClick={() => handleClickWine(idx)}
                                        className={`
                                            ${styles.wineSelected} 
                                            ${selected == idx ? styles.active : ""}`}
                                    >
                                        {it.category}
                                    </li>
                                ))}
                            </ul>
                        )

                        }
                        {!showWineMenu && <div className={styles.lineBottom}></div>}
                    </div>

                    {isFixed && <div style={{ height: navHeight + 16}}></div>}
                    {!showWineMenu ? (
                        <DishSection 
                            info={itens}
                            onClick={handleSelectDish}
                            sectionRefs={sectionDishesRefs}
                            ref={dishRef}
                        />
                    ) : (
                        <WineSection 
                            info={filteredWines}
                            onClick={handleSelectWine}
                            sectionRefs={sectionWinesRefs}
                            ref={wineRef}
                        />
                    )}
                </section>
                {selectedDish && (
                    <DishModal 
                        info={selectedDish}
                        onClose={handleCloseModal}
                    />
                ) || selectedWine && (
                    <WineModal
                        {...selectedWine}
                        onClose={handleCloseModal}
                    />
                ) || filterOpen && (
                    <FilterModal 
                        countries={[
                            ...new Map(
                            infoWines
                                .flatMap(group => group.itens)
                                .map(wine => [wine?.country?.code, wine?.country])
                            ).values()
                        ].sort((a, b) => a.name.localeCompare(b.name))}

                        types={[
                            ...new Map(
                            infoWines
                                .flatMap(group => group.itens)
                                .map(wine => [wine?.type?.name, wine?.type])
                            ).values()
                        ].sort((a, b) => a.name.localeCompare(b.name))}

                        grapes={[
                            ...new Set(
                                infoWines
                                .flatMap(group => group.itens)
                                .flatMap(wine =>
                                    wine?.grape
                                    ?.replace(/ e /gi, ",")     // troca " e " por vírgula
                                    ?.split(",")                // separa por vírgula
                                    ?.map(g => g.trim())        // remove espaços
                                    ?.filter(g => g.length > 0) // remove strings vazias
                                )
                            )
                        ].sort((a, b) => a.localeCompare(b))}


                        volumes={[
                            ...new Set(
                            infoWines
                                .flatMap(group => group.itens)
                                .map(wine => wine?.volume?.trim())
                            )
                        ].sort((a, b) => a.localeCompare(b))}

                        maxPrice={Math.max(...infoWines.flatMap(group => group.itens.map(w => w.price.value)))

                        }

                        initialFilters={currentFilters}
                        onFilter={handleFilter}
                        onClose={() => setFilterOpen(false)}
                    />
                )}
            </main>
            <Footer />
        </>
    )
}
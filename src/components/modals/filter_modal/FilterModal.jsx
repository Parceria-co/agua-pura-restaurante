//www.youtube.com/watch?v=zuna5JVN99I&list=RDApCXqBj98VE&index=4

import { IoClose, IoShareSocialOutline } from "react-icons/io5";
import styles from "./FilterModal.module.css";
import { useEffect, useRef, useState } from "react";
import { useModalHandlers } from "../../../hooks/useModalUtils";
import ReactCountryFlag from "react-country-flag";

export default function FilterModal({
    countries, 
    types, 
    grapes,
    volumes,
    maxPrice,
    initialFilters,
    onFilter,
    onClose
}) {

    const { modalRef, translateY, transitionEnabled, visible, closing, animationDone, closeByDrag, handleMouseDown, handleTouchStart,  handleAnimationEnd, closeModal } = useModalHandlers(onClose);

    const listCountriesRef = useRef(null);
    const listTypesRef = useRef(null);
    const listGrapesRef = useRef(null);
    const listVolumesRef = useRef(null);
    
    const [visibleCountries, setVisibleCountries] = useState(countries);
    const [isSeeAllCountries, setIsSeeAllCountries] = useState(null);
    
    const [visibleGrapes, setVisibleGrapes] = useState(grapes);
    const [isSeeAllGrapes, setIsSeeAllGrapes] = useState(null);
    
    const [visibleTypes, setVisibleTypes] = useState(types);
    const [isSeeAllTypes, setIsSeeAllTypes] = useState(null);
    
    const [visibleVolumes, setVisibleVolumes] = useState(volumes);
    const [isSeeAllVolumes, setIsSeeAllVolumes] = useState(null);
    
    const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);

    const [activeThumb, setActiveThumb] = useState(null);

    const [overlayActive, setOverlayActive] = useState(false);

    const [selectedCountries, setSelectedCountries] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedGrapes, setSelectedGrapes] = useState([]);
    const [selectedVolumes, setSelectedVolumes] = useState([]);
    const [priceRange, setPriceRange] = useState([0, maxPrice]);
    const [text, setText] = useState("");

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), priceRange[1] - 1);
        setPriceRange(prev => [value, prev[1]]);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), priceRange[0] + 1);
        setPriceRange(prev => [prev[0], value]);
    };

    const toggleSelect = (item, selectedList, setSelectedList) => {
        if (selectedList.includes(item)) {
            setSelectedList(selectedList.filter(i => i !== item));
        } else {
            setSelectedList([...selectedList, item]);
        }
    };

    const handleClearFilters = () => {
        const clearedFilters = {
            text: "",
            countries: [],
            types: [],
            grapes: [],
            volumes: [],
            priceRange: [0, maxPrice],
        };

        setSelectedCountries([]);
        setSelectedTypes([]);
        setSelectedGrapes([]);
        setSelectedVolumes([]);
        setText("");
        setPriceRange([0, maxPrice]);

        // Aplica imediatamente os filtros limpos
        onFilter(clearedFilters);
    };

    const handleApplyFilters = () => {
        const filters = {
            text: text.trim(),
            countries: selectedCountries,
            types: selectedTypes,
            grapes: selectedGrapes,
            volumes: selectedVolumes,
            priceRange: priceRange,
        };

        onFilter(filters);
    };

    const totalSelected =
        selectedCountries.length +
        selectedTypes.length +
        selectedGrapes.length +
        selectedVolumes.length;

    const hasActiveFilter =
        text.trim() !== "" ||
        selectedCountries.length > 0 ||
        selectedTypes.length > 0 ||
        selectedGrapes.length > 0 ||
        selectedVolumes.length > 0 ||
        isAdvancedSearch;

    const handleSeeAll = (field) => {
        switch (field) {
            case "countries":
                setVisibleCountries(countries);
                setIsSeeAllCountries(false);
                break;
            case "types":
                setVisibleTypes(types);
                setIsSeeAllTypes(false);
                break;
            case "grapes":
                setVisibleGrapes(grapes);
                setIsSeeAllGrapes(false);
                break;
            case "volumes":
                setVisibleVolumes(volumes);
                setIsSeeAllVolumes(false);
                break;
            default:
                break;
        }
    }


    useEffect(() => {
        setSelectedCountries(initialFilters.countries);
        setSelectedTypes(initialFilters.types);
        setSelectedGrapes(initialFilters.grapes);
        setSelectedVolumes(initialFilters.volumes);
        setPriceRange(initialFilters.priceRange);
        setText(initialFilters.text);
    }, [initialFilters]);
    
    const calculateVisible = (list, setVisible, itens, setIsSeeAllItens) => {
        if (!list) return;
        
        const listWidth = list.offsetWidth;
        const children = Array.from(list.children);
        
        let totalWidth = 0;
        let lastVisibleIndex = children.length - 1;
        
        for (let i = 0; i < children.length; i++) {
            totalWidth += children[i].offsetWidth + 8;
            if (totalWidth > listWidth) {
                lastVisibleIndex = i - 1;
                break;
            }
        }
        
        setVisible(itens.slice(0, lastVisibleIndex + 1));
        
        if (lastVisibleIndex < children.length - 1) {
            setIsSeeAllItens(true);
        } else setIsSeeAllItens(false);
    };
            
    useEffect(() => {
        const handleResize = () => {
            calculateVisible(
                listCountriesRef?.current,
                setVisibleCountries,
                countries,
                setIsSeeAllCountries
            );
    
            calculateVisible(
                listTypesRef?.current,
                setVisibleTypes,
                types,
                setIsSeeAllTypes
            );
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    },[]);

    useEffect(() => {
        const handleResize = () => {
            calculateVisible(
                listGrapesRef?.current,
                setVisibleGrapes,
                grapes,
                setIsSeeAllGrapes
            );
    
            calculateVisible(
                listVolumesRef?.current,
                setVisibleVolumes,
                volumes,
                setIsSeeAllVolumes
            );
        }
        
        window.addEventListener("resize", handleResize);
        handleResize();
        
        return () => window.removeEventListener("resize", handleResize);
    },[isAdvancedSearch]);

    useEffect(() => {
        if (activeThumb) {
            setOverlayActive(true);
            document.body.style.cursor = "grabbing";
        } else {
            setOverlayActive(false);
            document.body.style.cursor = "";
        }
    }, [activeThumb]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!activeThumb) return;

            const slider = document.querySelector(`.${styles.sliderWrapper}`);
            if (!slider) return;
            
            const rect = slider.getBoundingClientRect();
            const percent = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
            
            const value = Math.round(percent * maxPrice);

            if (activeThumb === "min" && value < priceRange[1]) {
                setPriceRange(prev => [value, prev[1]]);
            } 
            
            if (activeThumb === "max" && value > priceRange[0]) {
                setPriceRange(prev => [prev[0], value]);
            }
        };

        const handleMouseUp = () => {
            setActiveThumb(null);
            document.body.classList.remove("dragging");
            window.removeEventListener("pointermove", handleMouseMove);
            window.removeEventListener("pointerup", handleMouseUp);
        };

        if (activeThumb) {
            document.body.classList.add("dragging");
            window.addEventListener("pointermove", handleMouseMove);
            window.addEventListener("pointerup", handleMouseUp);
        }

        return () => {
            document.body.classList.remove("dragging");
            window.removeEventListener("pointermove", handleMouseMove);
            window.removeEventListener("pointerup", handleMouseUp);
        };
    }, [activeThumb, priceRange, maxPrice]);

  return (
    <>
        {overlayActive && <div className={styles.dragOverlay}></div>}  
        <div className={`${styles.container} ${visible ? styles.show : styles.hide}`}>
        <div
            className={`
                ${styles.modalWrapper} 
                ${closing && !closeByDrag ? styles.animateBottomOut : ""}
                ${!animationDone && !closing ? styles.animateBottomIn : ""}
            `}
            style={{
                transform: `translateY(${translateY}px)`,
                transition: transitionEnabled ? "transform 0.6s ease" : "none",
            }}
            ref={modalRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onAnimationEnd={handleAnimationEnd}
        >
            <div className={styles.modalHandle} onMouseDown={handleMouseDown} onTouchStart={handleTouchStart}></div>

            <div className={styles.modal}>
                <div className={styles.headerModal}>
                    <p>Filtro</p>
                    <IoClose 
                        onClick={onClose}
                        className={styles.buttonclose}
                    />
                </div>
                <div className={styles.wrapperInputText}>
                    <input 
                        type="text" 
                        value={text} 
                        onChange={e => setText(e.target.value)}
                        placeholder="Pesquisar vinho"
                        className={styles.input}
                    />

                </div>
                <div className={styles.wrapper}>
                    <div>
                        <p>País</p>
                        {isSeeAllCountries && <button onClick={ () => handleSeeAll("countries")}>Ver todos</button>}
                    </div>
                    <ul ref={listCountriesRef}>
                        {countries && visibleCountries.map((it, idx) => (
                            <li 
                                key={idx}
                                onClick={() => toggleSelect(it?.name, selectedCountries, setSelectedCountries)}
                                className={selectedCountries.includes(it?.name) ? styles.selected : ""}
                            >
                                <ReactCountryFlag 
                                    svg
                                    countryCode={it?.code} 
                                    className={styles.countryIcon}
                                />
                                {it?.name}
                            </li>
                        ))
                    }
                    </ul>
                </div>
                <div className={styles.wrapper}>
                    <div>
                        <p>Tipo</p>
                        {isSeeAllTypes && <button onClick={ () => handleSeeAll("types")}>Ver todos</button>}
                    </div>
                    <ul ref={listTypesRef}>
                        {types && visibleTypes.map((it, idx) => (
                            <li 
                                key={idx}
                                onClick={() => toggleSelect(it?.name, selectedTypes, setSelectedTypes)}
                                className={selectedTypes.includes(it?.name) ? styles.selected : ""}
                            >
                                <span 
                                    className={styles.color}
                                    style={{ backgroundColor: it?.color }}
                                ></span>
                                {it?.name}
                            </li>
                        ))}
                    </ul>
                </div>
                {!isAdvancedSearch ? (
                    <div className={styles.wrapperAdvanced}>
                        <button onClick={() => setIsAdvancedSearch(true)}>
                            Busca avançada
                        </button>
                    </div>
                ) : (
                    <>
                        <div className={styles.wrapper}>
                            <div>
                                <p>Uva</p>
                                {isSeeAllGrapes && <button onClick={ () => handleSeeAll("grapes")}>Ver todos</button>}
                            </div>
                            <ul ref={listGrapesRef}>
                                {grapes && visibleGrapes.map((grape, idx) => (
                                    <li 
                                        key={idx}
                                        onClick={() => toggleSelect(grape, selectedGrapes, setSelectedGrapes)}
                                        className={selectedGrapes.includes(grape) ? styles.selected : ""}
                                    >
                                        {grape}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.wrapper}>
                            <div>
                                <p>Volume</p>
                                {isSeeAllVolumes && <button onClick={ () => handleSeeAll("volumes")}>Ver todos</button>}
                            </div>
                            <ul ref={listVolumesRef}>
                                {volumes && visibleVolumes.map((volume, idx) => (
                                    <li 
                                        key={idx}
                                        onClick={() => toggleSelect(volume, selectedVolumes, setSelectedVolumes)}
                                        className={selectedVolumes.includes(volume) ? styles.selected : ""}
                                    >
                                        {volume}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.wrapper}>
                            <div>
                                <p>Preço</p>
                                R$ {priceRange[0]} - R$ {priceRange[1]}
                            </div>

                            <div 
                                className={styles.sliderWrapper}
                            >
                                <div className={styles.rangeTrackBackground}></div>
                                <div 
                                    className={styles.rangeTrack}
                                    style={{
                                        left: `${(priceRange[0] / maxPrice) * 100}%`,
                                        right: `${100 - (priceRange[1] / maxPrice) * 100}%`,
                                    }}    
                                ></div>

                                <input
                                    type="range"
                                    min="0"
                                    max={maxPrice}
                                    value={priceRange[0]}
                                    onChange={handleMinChange}
                                    className={styles.rangeInput}
                                />
                                <input
                                    type="range"
                                    min="0"
                                    max={maxPrice}
                                    value={priceRange[1]}
                                    onChange={handleMaxChange}
                                    className={styles.rangeInput}
                                />

                                <button 
                                    className={styles.thumb}
                                    style={{ left: `${(priceRange[0] / maxPrice) * 100}%` }}
                                    onPointerDown={(e) => {
                                        e.stopPropagation();
                                        setActiveThumb("min");
                                    }}
                                ></button>
                                <button
                                    className={styles.thumb}
                                    style={{ left: `${(priceRange[1] / maxPrice) * 100}%` }}
                                    onPointerDown={(e) => {
                                        e.stopPropagation();
                                        setActiveThumb("max");
                                    }}
                                ></button>
                            </div>
                        </div>
                    </>
                )}
                <div className={styles.wrapperButtons}>
                    <button 
                        className={`${styles.buttonClear} ${hasActiveFilter ? styles.buttonActive : ""}`}
                        onClick={() => handleClearFilters()}
                    >
                        Limpar filtros
                    </button>
                    <button 
                        className={`${styles.buttonFilter} ${hasActiveFilter ? styles.buttonActive : ""}`}
                        onClick={() => handleApplyFilters()}
                    >
                        Filtrar
                        {totalSelected > 0 && (
                            <span className={styles.badge}>{totalSelected}</span>
                        )}
                    </button>
                </div>

            </div>
        </div>
        </div>
    </>
  );
}

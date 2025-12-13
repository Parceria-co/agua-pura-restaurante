import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import styles from "./ImageModal.module.css";
import { useEffect, useRef, useState } from "react";

export default function ImageModal({
    images = [],
    index = 0,
    onClose
}) {

    const [current, setCurrent] = useState(index + 1);
    const [isAnimating, setIsAnimating] = useState(false);

    const sliderRef = useRef(null);
    
    const transitionDurationMs = 300;
    const extendedSlides = [images[images.length - 1], ...images, images[0]];


    const setSliderTransform = (index, withTransition = true) => { 
        if (sliderRef.current) { 
            sliderRef.current.style.transition = withTransition ? `transform ${transitionDurationMs}ms ease` : "none"; 
            sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
        }
    }

    const nextSlide = () => {
        if (isAnimating) return; 
        setIsAnimating(true); 
        
        let next = current + 1; 
        setCurrent(next); 
        setSliderTransform(next); 
        
        setTimeout(() => { 
            
            if (next > images.length) { 
                next = 1; 
                setCurrent(next); 
                setSliderTransform(next, false);
            }
            setIsAnimating(false); 
        
        }, transitionDurationMs);
    };

    const prevSlide = () => {
        if (isAnimating) return; 
        setIsAnimating(true); 
        
        let prev = current - 1; 
        setCurrent(prev); 
        setSliderTransform(prev); 
        
        setTimeout(() => { 
        
            if (prev <= 0) { 
                prev = images.length; 
                setCurrent(prev); 
                setSliderTransform(prev, false);
            } 
            setIsAnimating(false); 
        
        }, transitionDurationMs);
    };

    useEffect(() => {
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

    }, []);
    
    useEffect(() => {
        setSliderTransform(current, false);
    }, []);


    return (
        <div className={styles.modal} >
            <div className={styles.background} onClick={onClose}></div>
            <IoClose className={styles.close} onClick={onClose}/>
            
            <div className={styles.wrapperImage}>
                <div
                    className={styles.slider}
                    ref={sliderRef}
                >
                    {extendedSlides.map((img, idx) => (
                        <img 
                            src={img} 
                            alt="imagem" 
                            className={styles.image} 
                            key={idx}
                            draggable={false}
                        />
                    ))}
                    
                </div>

            </div>

            <button
                onClick={prevSlide}
                className={`${styles.arrow} ${styles.arrowPrev}`}
            >
                <IoIosArrowBack />
            </button>
            
            <button
                onClick={nextSlide}
                className={`${styles.arrow} ${styles.arrowNext}`}
            >
                <IoIosArrowForward />
            </button>
        </div>
    )
}
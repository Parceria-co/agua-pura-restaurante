import { useEffect, useRef, useState } from 'react';
import styles from './Banner.module.css';
import bannerImage from '@/utils/assets/banner_image.jpeg';
import bannerImage2 from '@/utils/assets/banner_image_2.jpeg';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Banner({
    images = [],
    height,
    margin,
    animationOn = true,
    arrowOn = true,
    timeTransition = 4000,
    transitionDurationMs = 900,
    draggable = true
}) {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [current, setCurrent] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);
    
    const currentRef = useRef(current);
    const sliderRef = useRef(null);


    const activeIndex = ((current - 1) % images.length + images.length) % images.length;
    const extendedSlides = [images[images.length - 1], ...images, images[0]];

    const setSliderTransform = (index, withTransition = true) => { 
        if (sliderRef.current) { 
            sliderRef.current.style.transition = withTransition ? `transform ${transitionDurationMs}ms ease` : "none"; 
            sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
        }
     }

     const handleTouchStart = (e) => {
        if (isAnimating) return;

        const touch = e.touches[0];
        setIsDragging(true);
        setStartX(touch.pageX);
        setSliderTransform(currentRef.current, false);
    }

    const handleTouchMove = (e) => {
        if (!isDragging || isAnimating) return;

        const touch = e.touches[0];
        const walk = (touch.pageX - startX);
        const movePercentage = (walk / sliderRef.current.offsetWidth) * 100;
        
        const maxIndex = extendedSlides.length - 1;
        let targetIndex = currentRef.current - movePercentage / 100;

        // LIMITA para não extrapolar o clone inicial e final
        if (targetIndex < 0) targetIndex = 0;
        if (targetIndex > maxIndex) targetIndex = maxIndex;

        setSliderTransform(targetIndex, false);
    }

    const handleTouchEnd = (e) => {
        if (!isDragging) return;
        setIsDragging(false);
    
        const touch = e.changedTouches[0];
        const walk = touch.pageX - startX;
        const threshold = sliderRef.current.offsetWidth / 3;
        
        if (walk < -threshold) nextSlide();
        else if (walk > threshold) prevSlide();
        else setSliderTransform(currentRef.current, true);
    }

    const handleMouseDown = (e) => {
        if (isAnimating) return;

        setIsDragging(true);
        setStartX(e.pageX);
        setSliderTransform(currentRef.current, false);
    };

    const handleMouseLeave = () => {
        if (isDragging) handleMouseUp({ pageX: startX });
    }

    const handleMouseUp = (e) => {
        if (!isDragging) return;
        setIsDragging(false);
    
        const walk = e.pageX - startX;
        const threshold = sliderRef.current.offsetWidth / 3;

        if (walk < -threshold) {
            nextSlide();
        } else if (walk > threshold) {
            prevSlide();
        } else {
            setSliderTransform(currentRef.current, true);
        }
    }

    const handleMouseMove = (e) => {
        if (!isDragging || isAnimating) return;

        e.preventDefault();
        
        const walk = (e.pageX - startX);
        const movePercentage = (walk / sliderRef.current.offsetWidth) * 100;
        
        const maxIndex = extendedSlides.length - 1;
        let targetIndex = currentRef.current - movePercentage / 100;

        // LIMITA para não extrapolar o clone inicial e final
        if (targetIndex < 0) targetIndex = 0;
        if (targetIndex > maxIndex) targetIndex = maxIndex;

        setSliderTransform(targetIndex, false);
    }

    const nextSlide = () => {
        if (isAnimating) return; 
        setIsAnimating(true); 
        
        const next = currentRef.current + 1; 
        currentRef.current = next; 
        setCurrent(next); 
        setSliderTransform(next); 
        
        setTimeout(() => { 
            
            if (currentRef.current > images.length) { 
                currentRef.current = 1; 
                setCurrent(1); 
                setSliderTransform(1, false);
            }
            setIsAnimating(false); 
        
        }, transitionDurationMs);

    };

    const prevSlide = () => {
        if (isAnimating) return; 
        setIsAnimating(true); 
        
        const prev = currentRef.current - 1; 
        currentRef.current = prev; 
        setCurrent(prev); 
        setSliderTransform(prev); 
        
        setTimeout(() => { 
        
            if (currentRef.current <= 0) { 
                currentRef.current = images.length; 
                setCurrent(images.length); 
                setSliderTransform(images.length, false);
            } 
            setIsAnimating(false); 
        
        }, transitionDurationMs);
    };

    useEffect(() => {
        if (!animationOn || isDragging) return;

        const interval = setInterval(() => nextSlide(), timeTransition);
        
        return () => clearInterval(interval)
    }, [animationOn, isDragging]);

    // fazer uma função para a pessoa clicar na imagem e abrir ela completa, mas em imagens especifica tipo a da cobrança com  couver artistico



    return (
        <div 
            className={styles.container}
            style={{ height, margin }}    
            onMouseDown={e => e.preventDefault()}
        >
            <div
                ref={sliderRef}
                className={styles.slider}
                
                onMouseDown={draggable ? handleMouseDown : undefined}
                onMouseLeave={draggable ? handleMouseLeave : undefined}
                onMouseUp={draggable ? handleMouseUp : undefined}
                onMouseMove={draggable ? handleMouseMove : undefined}
            
                onTouchStart={draggable ? handleTouchStart : undefined}
                onTouchMove={draggable ? handleTouchMove : undefined}
                onTouchEnd={draggable ? handleTouchEnd : undefined}
            >
                {extendedSlides.map((img, idx) => (
                    <a className={styles.wrapperImage}>
                        <img 
                            src={img} 
                            alt="banner" 
                            className={styles.bannerImage} 
                            key={idx}
                            draggable={false}

                        />
                    </a>
                ))}
                
            </div>
            {arrowOn && (
                <>
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
                </>
            )}

            <ul className={styles.indicators}>
                {images.map((s, idx) => (
                    <li 
                        key={idx}
                        className={`${styles.dot} ${idx === activeIndex ? styles.active : ""}`}
                        onClick={() => {
                            currentRef.current = idx + 1;
                            setCurrent(idx + 1);
                            setSliderTransform(idx + 1, true);
                        }}
                    />
                ))}
            </ul>
        </div>
    )
}
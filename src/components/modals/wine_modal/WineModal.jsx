import { IoShareSocialOutline } from "react-icons/io5";
import styles from "./WineModal.module.css";
import { useEffect, useRef, useState } from "react";
import Toast from "../../toast/Toast";
import { FaFlag, FaMapMarkerAlt } from "react-icons/fa";
import { GiGrapes, GiWineGlass } from "react-icons/gi";
import { MdWaterDrop } from "react-icons/md";
import { useModalHandlers, useToast, handleShare } from "@/hooks/useModalUtils";
import ReactCountryFlag from "react-country-flag";

export default function WineModal({
    price, 
    description, 
    image, 
    id, 
    name, 
    onClose,
    alcohol,
    volume,
    grape,
    location,
    type,
    country

}) {

    const { toastVisible, toastMsg, showToast, setToastVisible } = useToast();
    const { modalRef, translateY, transitionEnabled, visible, closing, animationDone, closeByDrag, handleMouseDown, handleTouchStart,  handleAnimationEnd, closeModal } = useModalHandlers(onClose);
    const onShare = () => handleShare({ id, name, description, showToast });

  return (
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
          <div className={styles.wrapperImage}>
            <img src={image} alt="comida" draggable={false} />
          </div>
          <div className={styles.wrapperWine}>
            <div className={styles.wrapperInfo}>
                <div className={styles.wrapperTitle}>
                  <h3>{name}</h3>
                  <IoShareSocialOutline
                    size={24}
                    color="gray"
                    className={styles.share}
                    onClick={onShare}
                  />
                </div>
                <p className={styles.description}>{description}</p>
                <div className={styles.wrapperTag}>
                    <div>
                        <ReactCountryFlag 
                            svg
                            countryCode={country.code}
                            className={styles.icon}
                        /> {country.name}
                    </div>
                    <div>
                        <span 
                          className={styles.color}
                          style={{ backgroundColor: type.color }}
                        ></span>
                        {type.name}
                      </div>
                    <div><GiGrapes className={styles.icon}/> {grape}</div>
                    <div><MdWaterDrop className={styles.icon}/> {alcohol}</div>
                    <div><FaMapMarkerAlt className={styles.icon}/> {location}</div>
                </div>
            </div>
            <div className={styles.selectVolume}>
                <p>Escolha o volume</p>
            </div>
            <div className={styles.wrapperInfo}>
                <div className={styles.volumeAndPrice}>
                    <p className={styles.volume}>{volume}</p>
                    <p className={styles.price}>
                        {price?.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                    </p>
                </div>
                <p className={styles.code}>Cód: {id}</p>
            </div>
          </div>
          <Toast
            message={toastMsg}
            visible={toastVisible}
            onClose={() => setToastVisible(false)}
          />
        </div>
      </div>
    </div>
  );
}

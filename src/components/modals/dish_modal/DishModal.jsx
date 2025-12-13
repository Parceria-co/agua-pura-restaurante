import { IoShareSocialOutline } from "react-icons/io5";
import styles from "./DishModal.module.css";
import { useEffect, useRef, useState } from "react";
import Toast from "../../toast/Toast";
import { handleShare, useModalHandlers, useToast } from "../../../hooks/useModalUtils";
import { useParams } from "react-router-dom";

export default function DishModal({ info, onClose }) {
	
	const { empresa } = useParams();

	const { toastVisible, toastMsg, showToast, setToastVisible } = useToast();
	const { modalRef, translateY, transitionEnabled, visible, closing, animationDone, closeByDrag, handleMouseDown, handleTouchStart,  handleAnimationEnd, closeModal } = useModalHandlers(onClose);
	const onShare = () => handleShare({ id: info.id, name: info.name, description: info.description, empresa, showToast });

	const hasMoreThanOne = info.options?.length > 1;


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
			<img src={info.image} alt="comida" draggable={false} />
		  </div>
			{!hasMoreThanOne ? (
			  <div className={styles.wrapperInfo}>
				<div className={styles.wrapperTitle}>
				  <h3>{info.name} {info?.measure?.formatted}{/*info.options?.[0].weight*/}</h3>
				  <IoShareSocialOutline 
					size={24} 
					color="gray" 
					className={styles.share} 
					onClick={onShare}  
				  />
				</div>
				<p className={styles.price}>
					{info.price.formatted}
				  {/* {info.options?.[0].price?.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} */}
				</p>
				<p className={styles.description}>{info.description}</p>
				<p className={styles.code}>Cód: {info.id}</p>
			  </div>
			) : (
			  <div className={styles.wrapper}> 
				<div className={styles.wrapperInfo}>
				  <div className={styles.wrapperTitle}>
					<h3>{info.name} {info?.options[0]?.measure && ( info?.options[0]?.measure?.formatted.split(" ")[0] + "/" + info?.options[1]?.measure?.formatted )}</h3>
					<IoShareSocialOutline 
					  size={24} 
					  color="gray" 
					  className={styles.share} 
					  onClick={onShare}  
					/>
				  </div>
				  <p className={styles.description}>{info.description}</p>
				</div>
				<div className={styles.divName}>
				  <p>{info.name}</p>
				</div>
				<div className={styles.wrapperOptions}>
				  {info.options.map(opt => (
					<div className={styles.nameAndPrice}>
					  <p className={styles.nameAndLabel}>
						{info.name} {opt.label}
					  </p>
					  <p className={styles.price}>
						{opt.price.formatted}
					  </p>

					</div>

				  ))}
				</div>
				<div className={styles.wrapperCode}>
				  <p className={styles.code}>
					Cód: {info.options.map(opt => (opt.id)).join(" - ")}
				  </p>
				</div>
			  </div>
			)}
  
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

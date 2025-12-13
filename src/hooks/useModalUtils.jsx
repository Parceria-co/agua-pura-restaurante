import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

export function useToast() {
const [toastVisible, setToastVisible] = useState(false);
const [toastMsg, setToastMsg] = useState("");

const showToast = (msg, duration = 1500) => {
	setToastMsg(msg);
	setToastVisible(true);
	setTimeout(() => setToastVisible(false), duration);
};

return { toastVisible, toastMsg, showToast, setToastVisible };
}

export function useModalHandlers(onClose) {
const modalRef = useRef(null);
const [translateY, setTranslateY] = useState(0);
const [transitionEnabled, setTransitionEnabled] = useState(false);
const [modalHeight, setModalHeight] = useState(0);
const [visible, setVisible] = useState(false);
const [closing, setClosing] = useState(false);
const [animationDone, setAnimationDone] = useState(false);
const [closeByDrag, setCloseByDrag] = useState(false);

const closeModal = () => {
	setTransitionEnabled(true);
	setTranslateY(modalHeight);
	setClosing(true);
	setTimeout(() => onClose?.(), 600);
};

const handleClickOutside = (e) => {
	if (modalRef.current && !modalRef.current.contains(e.target)) closeModal();
};

const handleMouseDown = (e) => {
	const target = e.target.tagName.toLowerCase();
	if (["input", "button", "select", "textarea", "label"].includes(target)) return;
	
	e.preventDefault();
	const startY = e.clientY;

	const handleMouseMove = (e) => {
	const diff = e.clientY - startY;
	setTranslateY(diff > 0 ? diff : 0);
	};

	const handleMouseUp = (e) => {
	const diff = e.clientY - startY;
	if (diff > modalHeight * 0.3) {
		setCloseByDrag(true);
		closeModal();
	} else {
		setTranslateY(0);
		setCloseByDrag(false);
	}

	document.removeEventListener("mousemove", handleMouseMove);
	document.removeEventListener("mouseup", handleMouseUp);
	};

	document.addEventListener("mousemove", handleMouseMove);
	document.addEventListener("mouseup", handleMouseUp);
};

const handleTouchStart = (e) => {
    const target = e.target.tagName.toLowerCase();
    if (["input", "button", "select", "textarea", "label"].includes(target)) return;

    const startY = e.touches[0].clientY;

    const handleTouchMove = (e) => {
        const diff = e.touches[0].clientY - startY;
        setTranslateY(diff > 0 ? diff : 0);
    };

    const handleTouchEnd = (e) => {
        const endY = e.changedTouches[0].clientY;
        const diff = endY - startY;

        if (diff > modalHeight * 0.3) {
            setCloseByDrag(true);
            closeModal();
        } else {
            setTranslateY(0);
            setCloseByDrag(false);
        }

        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);
};

const handleAnimationEnd = () => setAnimationDone(true);

useEffect(() => {
	setVisible(true);
	if (modalRef.current) setModalHeight(modalRef.current.offsetHeight);

	document.addEventListener("mousedown", handleClickOutside);

	const originalStyle = {
	body: window.getComputedStyle(document.body).overflow,
	html: window.getComputedStyle(document.documentElement).overflow,
	};

	document.body.style.overflow = "hidden";
	document.documentElement.style.overflow = "hidden";

	return () => {
	document.body.style.overflow = originalStyle.body;
	document.documentElement.style.overflow = originalStyle.html;
	document.removeEventListener("mousedown", handleClickOutside);
	};
}, [translateY]);

return {
	modalRef,
	translateY,
	transitionEnabled,
	visible,
	closing,
	animationDone,
	closeByDrag,
	handleMouseDown,
	handleTouchStart,
	handleAnimationEnd,
	closeModal,
};
}

export async function handleShare({ id, name, description, empresa, showToast }) {
	const isGithubPages = window.location.hostname.includes("github.io"); 
	const baseURL = import.meta.env.BASE_URL

	const url = isGithubPages 
	? `${window.location.origin}${baseURL}#/cardapio?item=${id}`
	: `${window.location.origin}${baseURL}${empresa}/cardapio?item=${id}`;

	if (navigator.share) {
		try {
			await navigator.share({ title: name, text: description, url });
			showToast("Link compartilhado com sucesso!");
		} catch {}
	} else {
		try {
			await navigator.clipboard.writeText(url);
			showToast("Link copiado para a área de transferência!");
		} catch {
			showToast("Erro ao copiar link.");
		}
	}
}

import { useEffect } from "react";
import styles from "./Toast.module.css";

export default function Toast({
    message,
    visible,
    onClose
}) {

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {}, 300);
            return ()=> clearTimeout(timer);
        }
    }, [visible])

    if (!visible) return null;
    return (
        <div className={`${styles.toast} ${visible ? styles.show : ""}`}>
            {message}
            <button
                onClick={onClose}
                className={styles.buttonClose}
            >
                ×
            </button>
        </div>
    )
}
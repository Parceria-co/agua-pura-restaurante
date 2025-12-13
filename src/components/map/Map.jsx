import styles from "./Map.module.css";

export default function Map({
    src = "",
    fullScreen = "",
    loading = "lazy",
    referrerPolicy = "no-referrer-when-downgrade"
}) {
    return (
        <iframe 
            src={src} 
            allowFullScreen={fullScreen}
            loading={loading}
            referrerPolicy={referrerPolicy}
            className={styles.map}
        ></iframe>
    )
}
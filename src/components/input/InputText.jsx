import styles from "./InputText.module.css";

export default function InputText({
    label,
    type = "text",
    placeholder = "",
    value,
    onChange,
    disabled = false,
    error = "",
    icon,
    isOptional = false,
    onKeyDown
}) {            
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.text}>
                <p>{label} {isOptional && <span className={styles.optional}> (opcional)</span>}</p>
                <input 
                    type="text"
                    className={styles.input} 
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    onKeyDown={onKeyDown}
                />
            </div>
        </div>
    )
}
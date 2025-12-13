import styles from "./NotFound.module.css";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <h1>404 - Página Não Encontrada</h1>
            <p>Desculpe, a página que você está procurando não existe.</p>
        </div>
    );

}
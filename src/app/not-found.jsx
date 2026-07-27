import styles from './not-found.module.css';
import Link from 'next/link';

export default function notfound() {
    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <div>
                    <h1 className={styles.titulo}>Erro 404</h1>
                </div>
            </div>
                <Link href="/">Volte para a tela inicial</Link>
        </main>
    );
}

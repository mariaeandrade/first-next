import styles from './page.module.css';

export default function Home() {
    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Next.jsx</h1>
                <h3 className={styles.subtitle}>O que é?</h3>

                <p className={styles.tagline}>
                    O Next.js é um framework React para a criação de aplicações web full-stack. Você
                    utiliza componentes React para construir interfaces de usuário e o Next.js para
                    recursos e otimizações adicionais. Ele também configura automaticamente
                    ferramentas de baixo nível, como empacotadores (bundlers) e compiladores. Assim,
                    você pode focar na construção do seu produto e em lançá-lo rapidamente. Seja
                    você um desenvolvedor individual ou parte de uma equipe maior, o Next.js pode
                    ajudá-lo a criar aplicações React interativas, dinâmicas e rápidas.
                </p>
            </div>
        </main>
    );
}

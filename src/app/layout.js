import './globals.css';

export const metadata = {
    title: 'Next.js',
    description: 'Next.js e erro 404',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    );
}

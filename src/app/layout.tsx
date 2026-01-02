import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const cairo = Cairo({
    subsets: ['arabic', 'latin'],
    variable: '--font-cairo',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'AL-NAQLA - Transportation Management System',
    description: 'Comprehensive Flutter app for managing iron and steel transportation operations',
    keywords: 'Flutter, Transportation, Management System, Iron Delivery, Steel Transport, Mobile App',
    openGraph: {
        title: 'AL-NAQLA - Transportation Management System',
        description: 'Comprehensive Flutter app for managing iron and steel transportation operations',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ar" dir="rtl" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/icons/truck.ico" />
                <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
            </head>
            <body className={`${inter.variable} ${cairo.variable}`}>
                {children}
            </body>
        </html>
    );
}

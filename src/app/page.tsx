'use client';

import { useState, useEffect } from 'react';
import { Language } from '@/lib/translations';
import {
    Navbar,
    HeroSection,
    AboutSection,
    ScreenshotsSection,
    DownloadSection,
    Footer,
} from '@/components/landing';

export default function HomePage() {
    const [lang, setLang] = useState<Language>('ar');

    useEffect(() => {
        // Load saved language preference
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang && (savedLang === 'ar' || savedLang === 'en')) {
            setLang(savedLang);
        }
    }, []);

    const handleLanguageChange = (newLang: Language) => {
        setLang(newLang);
        localStorage.setItem('language', newLang);

        // Update document direction
        document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', newLang);
    };

    useEffect(() => {
        // Set initial direction
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', lang);
    }, [lang]);

    return (
        <>
            <Navbar lang={lang} onLanguageChange={handleLanguageChange} />
            <main>
                <HeroSection lang={lang} />
                <AboutSection lang={lang} />
                <ScreenshotsSection lang={lang} />
                <DownloadSection lang={lang} />
            </main>
            <Footer lang={lang} />
        </>
    );
}

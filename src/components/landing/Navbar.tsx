'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Truck } from 'lucide-react';
import { Language, t } from '@/lib/translations';
import { cn } from '@/lib/utils';

interface NavbarProps {
    lang: Language;
    onLanguageChange: (lang: Language) => void;
}

export function Navbar({ lang, onLanguageChange }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const tr = t(lang);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#home', label: tr('nav_home') },
        { href: '#about', label: tr('nav_about') },
        { href: '#screenshots', label: tr('nav_screenshots') },
        { href: '#download', label: tr('nav_download') },
        { href: '#documentation', label: tr('nav_docs') },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-white/98 shadow-lg backdrop-blur-md'
                    : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 text-primary-600 font-bold text-xl lg:text-2xl">
                        <Truck className="w-7 h-7 lg:w-8 lg:h-8" />
                        <span>{tr('app_name')}</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        {/* Language Switcher */}
                        <div className="flex gap-1">
                            <button
                                onClick={() => onLanguageChange('en')}
                                className={cn(
                                    'px-3 py-1.5 rounded-md text-sm font-semibold transition-all',
                                    lang === 'en'
                                        ? 'bg-primary-600 text-white'
                                        : 'border-2 border-gray-200 text-gray-600 hover:border-primary-600 hover:text-primary-600'
                                )}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => onLanguageChange('ar')}
                                className={cn(
                                    'px-3 py-1.5 rounded-md text-sm font-semibold transition-all',
                                    lang === 'ar'
                                        ? 'bg-primary-600 text-white'
                                        : 'border-2 border-gray-200 text-gray-600 hover:border-primary-600 hover:text-primary-600'
                                )}
                            >
                                العربية
                            </button>
                        </div>

                        {/* Login Button - Desktop */}
                        <Link
                            href="/login"
                            className="hidden lg:inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                        >
                            {tr('nav_login')}
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-gray-700 hover:text-primary-600"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-100">
                        <div className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <Link
                                href="/login"
                                className="mt-2 inline-flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                            >
                                {tr('nav_login')}
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

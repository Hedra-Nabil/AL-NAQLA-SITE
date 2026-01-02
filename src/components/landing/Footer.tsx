'use client';

import Link from 'next/link';
import { Truck, Github, Mail, Phone } from 'lucide-react';
import { Language, t } from '@/lib/translations';

interface FooterProps {
    lang: Language;
}

export function Footer({ lang }: FooterProps) {
    const tr = t(lang);

    return (
        <footer className="bg-gray-900 text-white py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-10 mb-10">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 text-2xl font-bold mb-4">
                            <Truck className="w-8 h-8 text-primary-400" />
                            <span>{tr('app_name')}</span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed max-w-md">
                            {tr('footer_desc')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                                    {tr('nav_home')}
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                                    {tr('nav_about')}
                                </a>
                            </li>
                            <li>
                                <a href="#download" className="text-gray-400 hover:text-white transition-colors">
                                    {tr('nav_download')}
                                </a>
                            </li>
                            <li>
                                <a href="#documentation" className="text-gray-400 hover:text-white transition-colors">
                                    {tr('nav_docs')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4 text-lg">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-gray-400">
                                <Mail className="w-4 h-4" />
                                <a href="mailto:developer@al-naqla.com" className="hover:text-white transition-colors">
                                    developer@al-naqla.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-gray-400">
                                <Phone className="w-4 h-4" />
                                <span>+20 1064456538</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-400">
                                <Github className="w-4 h-4" />
                                <a
                                    href="https://github.com/Hedra-Nabil"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    {tr('footer_copyright')}
                </div>
            </div>
        </footer>
    );
}

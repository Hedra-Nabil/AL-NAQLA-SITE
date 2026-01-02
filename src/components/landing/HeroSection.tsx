'use client';

import { Smartphone, Globe, Cloud, Download, Info } from 'lucide-react';
import { Language, t } from '@/lib/translations';

interface HeroSectionProps {
    lang: Language;
}

export function HeroSection({ lang }: HeroSectionProps) {
    const tr = t(lang);

    const features = [
        { icon: Smartphone, text: tr('hero_feature_1') },
        { icon: Globe, text: tr('hero_feature_2') },
        { icon: Cloud, text: tr('hero_feature_3') },
    ];

    return (
        <section
            id="home"
            className="min-h-screen flex items-center bg-hero relative overflow-hidden pt-20"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%201000%201000%22%3E%3Cpolygon%20fill%3D%22rgba(255%2C255%2C255%2C0.03)%22%20points%3D%220%2C1000%201000%2C0%201000%2C1000%22/%3E%3C/svg%3E')] bg-cover" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <div className="text-white animate-fade-in-up">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                            {tr('hero_title')}
                        </h1>
                        <p className="text-lg sm:text-xl mb-8 opacity-90 leading-relaxed">
                            {tr('hero_subtitle')}
                        </p>

                        {/* Features */}
                        <div className="flex flex-col gap-4 mb-10">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <feature.icon className="w-5 h-5 text-accent-400 flex-shrink-0" />
                                    <span className="text-base sm:text-lg">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#download"
                                className="btn btn-primary"
                            >
                                <Download className="w-5 h-5" />
                                <span>{tr('download_now')}</span>
                            </a>
                            <a
                                href="#about"
                                className="btn btn-secondary"
                            >
                                <Info className="w-5 h-5" />
                                <span>{tr('learn_more')}</span>
                            </a>
                        </div>
                    </div>

                    {/* Phone Mockup */}
                    <div className="flex justify-center lg:justify-end animate-fade-in-right">
                        <div className="phone-mockup">
                            <div className="phone-frame">
                                <div className="phone-notch" />
                                <div className="phone-screen bg-gradient-to-br from-primary-500 to-secondary-500">
                                    {/* Status Bar */}
                                    <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-5 py-2 text-white text-sm font-semibold bg-black/30 backdrop-blur-sm z-10">
                                        <span className="font-bold">9:41</span>
                                        <div className="flex gap-1.5">
                                            <div className="w-4 h-3 bg-white/80 rounded-sm" />
                                            <div className="w-4 h-3 bg-white/80 rounded-sm" />
                                            <div className="w-5 h-3 bg-white/80 rounded-sm" />
                                        </div>
                                    </div>

                                    {/* App Icon Preview */}
                                    <div className="flex flex-col items-center justify-center h-full text-white">
                                        <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm">
                                            <Smartphone className="w-10 h-10" />
                                        </div>
                                        <h4 className="text-lg font-semibold">{tr('app_name')}</h4>
                                        <p className="text-sm opacity-70 mt-1">Transportation System</p>
                                    </div>
                                </div>
                                <div className="phone-home-indicator" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

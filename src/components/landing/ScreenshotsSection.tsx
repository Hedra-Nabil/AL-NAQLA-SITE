'use client';

import { Home, Users, Truck, BarChart3 } from 'lucide-react';
import { Language, t } from '@/lib/translations';

interface ScreenshotsSectionProps {
    lang: Language;
}

export function ScreenshotsSection({ lang }: ScreenshotsSectionProps) {
    const tr = t(lang);

    const screenshots = [
        { icon: Home, title: tr('screenshot_dashboard'), desc: tr('screenshot_dashboard_desc') },
        { icon: Users, title: tr('screenshot_customers'), desc: tr('screenshot_customers_desc') },
        { icon: Truck, title: tr('screenshot_trips'), desc: tr('screenshot_trips_desc') },
        { icon: BarChart3, title: tr('screenshot_reports'), desc: tr('screenshot_reports_desc') },
    ];

    return (
        <section id="screenshots" className="py-20 lg:py-28 bg-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="section-header">
                    <h2>{tr('screenshots_title')}</h2>
                    <p>{tr('screenshots_subtitle')}</p>
                </div>

                {/* Screenshots Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    {screenshots.map((screenshot, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center group relative overflow-hidden"
                        >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                            {/* Screenshot Placeholder */}
                            <div className="aspect-[9/16] bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl mb-6 flex flex-col items-center justify-center text-white shadow-inner">
                                <screenshot.icon className="w-12 h-12 mb-3 opacity-90" />
                                <span className="text-sm font-medium">{screenshot.title}</span>
                            </div>

                            <h4 className="text-lg font-semibold text-gray-900 mb-2">{screenshot.title}</h4>
                            <p className="text-gray-500 text-sm">{screenshot.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

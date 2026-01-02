'use client';

import {
    Lightbulb,
    Target,
    Users,
    Smartphone,
    Monitor,
    FileSpreadsheet,
    Printer,
    CloudCog,
    Layers
} from 'lucide-react';
import { Language, t } from '@/lib/translations';

interface AboutSectionProps {
    lang: Language;
}

export function AboutSection({ lang }: AboutSectionProps) {
    const tr = t(lang);

    const aboutCards = [
        { icon: Lightbulb, title: tr('about_vision_title'), desc: tr('about_vision_desc') },
        { icon: Target, title: tr('about_mission_title'), desc: tr('about_mission_desc') },
        { icon: Users, title: tr('about_team_title'), desc: tr('about_team_desc') },
    ];

    const stats = [
        { value: tr('stat_downloads'), label: tr('stat_downloads_label') },
        { value: tr('stat_users'), label: tr('stat_users_label') },
        { value: tr('stat_rating'), label: tr('stat_rating_label') },
        { value: tr('stat_support'), label: tr('stat_support_label') },
    ];

    const offerings = [
        { icon: Smartphone, title: tr('mobile_app_title'), desc: tr('mobile_app_desc') },
        { icon: Monitor, title: tr('desktop_dashboard_title'), desc: tr('desktop_dashboard_desc') },
        { icon: FileSpreadsheet, title: tr('excel_integration_title'), desc: tr('excel_integration_desc') },
        { icon: Printer, title: tr('printing_support_title'), desc: tr('printing_support_desc') },
        { icon: CloudCog, title: tr('cloud_sync_title'), desc: tr('cloud_sync_desc') },
        { icon: Layers, title: tr('multi_platform_title'), desc: tr('multi_platform_desc') },
    ];

    return (
        <section id="about" className="py-20 lg:py-28 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="section-header">
                    <h2>{tr('about_title')}</h2>
                    <p>{tr('about_subtitle')}</p>
                </div>

                {/* Vision, Mission, Team */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {aboutCards.map((card, index) => (
                        <div key={index} className="card text-center group">
                            <div className="card-icon group-hover:scale-110 transition-transform duration-300">
                                <card.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                                {stat.value}
                            </div>
                            <div className="text-gray-500 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* What We Offer */}
                <div className="mt-20">
                    <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-12">
                        {tr('what_we_offer')}
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offerings.map((offering, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4">
                                    <offering.icon className="w-7 h-7 text-white" />
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">{offering.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{offering.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

'use client';

import { Language, t } from '@/lib/translations';

interface DownloadSectionProps {
    lang: Language;
}

// Icon components using inline SVG
const AndroidIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M17.6,11.4V9.7c0-0.5-0.4-0.9-0.9-0.9h-0.2V7c0-1.5-1.1-2.8-2.5-3.1l0.7-1.3c0.1-0.2,0-0.5-0.2-0.6 c-0.2-0.1-0.5,0-0.6,0.2l-0.8,1.5c-0.4-0.1-0.7-0.1-1.1-0.1s-0.8,0-1.1,0.1L10.1,2.2c-0.1-0.2-0.4-0.3-0.6-0.2 c-0.2,0.1-0.3,0.4-0.2,0.6l0.7,1.3C8.6,4.2,7.5,5.5,7.5,7v1.8H7.3c-0.5,0-0.9,0.4-0.9,0.9v1.7c0,0.5,0.4,0.9,0.9,0.9h0.2v5.5 c0,0.8,0.7,1.5,1.5,1.5h0.8v2c0,0.6,0.4,1,1,1s1-0.4,1-1v-2h0.4v2c0,0.6,0.4,1,1,1s1-0.4,1-1v-2h0.8c0.8,0,1.5-0.7,1.5-1.5v-5.5 h0.2C17.2,12.3,17.6,11.9,17.6,11.4z M9.5,7c0-0.8,0.7-1.5,1.5-1.5h2c0.8,0,1.5,0.7,1.5,1.5v1.8h-5V7z" />
    </svg>
);

const AppleIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
    </svg>
);

const WindowsIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M3,12V6.75L9,5.43V11.91L3,12M20,3V11.75L10,11.9V5.21L20,3M3,13L9,13.09V19.9L3,18.75V13M20,13.25V22L10,20.09V13.1L20,13.25Z" />
    </svg>
);

export function DownloadSection({ lang }: DownloadSectionProps) {
    const tr = t(lang);

    const downloads = [
        {
            platform: 'Android',
            Icon: AndroidIcon,
            label: tr('download_android'),
            version: 'APK v1.2.2',
            href: 'https://github.com/Hedra-Nabil/tran_x_project/releases',
            color: 'text-green-400',
        },
        {
            platform: 'iOS',
            Icon: AppleIcon,
            label: tr('download_ios'),
            version: 'iOS v1.2.0',
            href: '#',
            color: 'text-gray-300',
        },
        {
            platform: 'Windows',
            Icon: WindowsIcon,
            label: tr('download_windows'),
            version: 'EXE v1.2.1',
            href: 'https://github.com/Hedra-Nabil/tran_x_project/releases/windows',
            color: 'text-blue-400',
        },
    ];

    return (
        <section id="download" className="py-20 lg:py-28 bg-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">{tr('download_title')}</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">{tr('download_subtitle')}</p>
                </div>

                {/* Download Options */}
                <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {downloads.map((download, index) => (
                        <a
                            key={index}
                            href={download.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 bg-white/10 hover:bg-white/20 border-2 border-white/10 hover:border-white/30 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
                        >
                            <download.Icon className={`w-8 h-8 ${download.color}`} />
                            <div className="text-start">
                                <div className="font-semibold">{download.label}</div>
                                <div className="text-sm text-gray-400">{download.version}</div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

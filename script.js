// Language data
const translations = {
    en: {
        app_name: "AL-NAQLA",
        nav_home: "Home",
        nav_features: "Features",
        nav_screenshots: "Screenshots",
        nav_download: "Download",
        nav_docs: "Documentation",
        
        hero_title: "AL-NAQLA Transportation Management System",
        hero_subtitle: "A comprehensive Flutter-based mobile application for managing iron and steel transportation operations efficiently.",
        hero_feature_1: "Cross-Platform Mobile App",
        hero_feature_2: "Bilingual Support (Arabic/English)",
        hero_feature_3: "Cloud-Based Management",
        download_now: "Download Now",
        learn_more: "Learn More",
        
        features_title: "Key Features",
        features_subtitle: "Powerful tools designed specifically for transportation management",
        
        feature_customer_title: "Customer Management",
        feature_customer_desc: "Comprehensive customer profiles with payment tracking, order history, and contact management.",
        feature_trip_title: "Trip Management",
        feature_trip_desc: "Track and manage all transportation trips with detailed pickup and delivery information.",
        feature_reports_title: "Reporting & Analytics",
        feature_reports_desc: "Generate detailed reports and view analytics dashboard for business insights.",
        feature_notifications_title: "Smart Notifications",
        feature_notifications_desc: "Real-time notifications for order updates, delivery status, and important alerts.",
        feature_settings_title: "Flexible Settings",
        feature_settings_desc: "Customizable app settings, user preferences, and system configurations.",
        feature_sync_title: "Auto Updates",
        feature_sync_desc: "Automatic app updates and real-time data synchronization across all devices.",
        
        screenshots_title: "App Screenshots",
        screenshots_subtitle: "Take a look at the clean and intuitive interface",
        screenshot_dashboard: "Dashboard",
        screenshot_customers: "Customers",
        screenshot_trips: "Trips",
        screenshot_reports: "Reports",
        screenshot_dashboard_desc: "Main control panel overview",
        screenshot_customers_desc: "Customer management system",
        screenshot_trips_desc: "Transportation trip tracking",
        screenshot_reports_desc: "Analytics and reporting tools",
        
        download_title: "Download AL-NAQLA",
        download_subtitle: "Get started with the most comprehensive transportation management solution",
        download_android: "Download for Android",
        download_source: "View Source Code",
        github_repo: "GitHub Repository",
        
        requirements_title: "System Requirements",
        req_android: "Android 5.0+ (API 21)",
        req_ram: "2GB RAM minimum",
        req_storage: "100MB free storage",
        req_internet: "Internet connection",
        
        app_preview: "App Preview",
        video_not_supported: "Your browser doesn't support video playback",
        
        docs_title: "Documentation & Setup",
        docs_subtitle: "Everything you need to get started with AL-NAQLA",
        doc_quickstart_title: "Quick Start Guide",
        doc_quickstart_desc: "Get up and running with AL-NAQLA in minutes",
        doc_development_title: "Development Setup",
        doc_development_desc: "Set up your development environment",
        doc_api_title: "API Reference",
        doc_api_desc: "Comprehensive API documentation",
        read_more: "Read More",
        
        quickstart_title: "🚀 Quick Start Guide",
        step_1: "Download the latest APK from the releases page",
        step_2: "Enable 'Install from Unknown Sources' in your Android settings",
        step_3: "Install the APK file on your Android device",
        step_4: "Launch AL-NAQLA and create your account",
        step_5: "Start managing your transportation operations!",
        
        dev_setup_title: "🛠️ Development Setup",
        prerequisites_title: "Prerequisites",
        prereq_flutter: "Flutter SDK (3.8.1 or higher)",
        prereq_dart: "Dart SDK",
        prereq_android: "Android Studio with Android SDK",
        prereq_firebase: "Firebase project setup",
        prereq_supabase: "Supabase project configuration",
        installation_title: "Installation",
        
        tech_stack_title: "🔧 Technology Stack",
        
        footer_desc: "Transportation Management System for efficient iron and steel delivery operations.",
        footer_product: "Product",
        footer_resources: "Resources",
        footer_support: "Support",
        footer_copyright: "© 2025 AL-NAQLA. All rights reserved. Built with Flutter."
    },
    ar: {
        app_name: "النقلة",
        nav_home: "الرئيسية",
        nav_features: "المميزات",
        nav_screenshots: "لقطات الشاشة",
        nav_download: "تحميل",
        nav_docs: "الوثائق",
        
        hero_title: "النقلة - نظام إدارة النقل",
        hero_subtitle: "تطبيق محمول شامل مبني بـ Flutter لإدارة عمليات نقل الحديد والصلب بكفاءة.",
        hero_feature_1: "تطبيق محمول متعدد المنصات",
        hero_feature_2: "دعم ثنائي اللغة (العربية/الإنجليزية)",
        hero_feature_3: "إدارة سحابية",
        download_now: "تحميل الآن",
        learn_more: "اعرف أكثر",
        
        features_title: "المميزات الرئيسية",
        features_subtitle: "أدوات قوية مصممة خصيصاً لإدارة النقل",
        
        feature_customer_title: "إدارة العملاء",
        feature_customer_desc: "ملفات شاملة للعملاء مع تتبع المدفوعات وتاريخ الطلبات وإدارة جهات الاتصال.",
        feature_trip_title: "إدارة الرحلات",
        feature_trip_desc: "تتبع وإدارة جميع رحلات النقل مع معلومات مفصلة عن التحميل والتوصيل.",
        feature_reports_title: "التقارير والتحليلات",
        feature_reports_desc: "إنشاء تقارير مفصلة وعرض لوحة التحليلات للحصول على رؤى الأعمال.",
        feature_notifications_title: "إشعارات ذكية",
        feature_notifications_desc: "إشعارات فورية لتحديثات الطلبات وحالة التوصيل والتنبيهات المهمة.",
        feature_settings_title: "إعدادات مرنة",
        feature_settings_desc: "إعدادات تطبيق قابلة للتخصيص وتفضيلات المستخدم وتكوين النظام.",
        feature_sync_title: "تحديثات تلقائية",
        feature_sync_desc: "تحديثات تطبيق تلقائية ومزامنة البيانات في الوقت الفعلي عبر جميع الأجهزة.",
        
        screenshots_title: "لقطات شاشة التطبيق",
        screenshots_subtitle: "ألق نظرة على الواجهة النظيفة والبديهية",
        screenshot_dashboard: "لوحة القيادة",
        screenshot_customers: "العملاء",
        screenshot_trips: "الرحلات",
        screenshot_reports: "التقارير",
        screenshot_dashboard_desc: "نظرة عامة على لوحة التحكم الرئيسية",
        screenshot_customers_desc: "نظام إدارة العملاء",
        screenshot_trips_desc: "تتبع رحلات النقل",
        screenshot_reports_desc: "أدوات التحليل والتقارير",
        
        download_title: "تحميل النقلة",
        download_subtitle: "ابدأ مع الحل الأكثر شمولاً لإدارة النقل",
        download_android: "تحميل لأندرويد",
        download_source: "عرض الكود المصدري",
        github_repo: "مستودع GitHub",
        
        requirements_title: "متطلبات النظام",
        req_android: "أندرويد 5.0+ (API 21)",
        req_ram: "2 جيجابايت رام كحد أدنى",
        req_storage: "100 ميجابايت مساحة فارغة",
        req_internet: "اتصال بالإنترنت",
        
        app_preview: "معاينة التطبيق",
        video_not_supported: "متصفحك لا يدعم تشغيل الفيديو",
        
        docs_title: "الوثائق والإعداد",
        docs_subtitle: "كل ما تحتاجه للبدء مع النقلة",
        doc_quickstart_title: "دليل البدء السريع",
        doc_quickstart_desc: "ابدأ واعمل مع النقلة في دقائق",
        doc_development_title: "إعداد التطوير",
        doc_development_desc: "إعداد بيئة التطوير الخاصة بك",
        doc_api_title: "مرجع API",
        doc_api_desc: "وثائق API شاملة",
        read_more: "اقرأ المزيد",
        
        quickstart_title: "🚀 دليل البدء السريع",
        step_1: "تحميل أحدث APK من صفحة الإصدارات",
        step_2: "تفعيل 'التثبيت من مصادر غير معروفة' في إعدادات أندرويد",
        step_3: "تثبيت ملف APK على جهاز أندرويد الخاص بك",
        step_4: "تشغيل النقلة وإنشاء حسابك",
        step_5: "ابدأ في إدارة عمليات النقل الخاصة بك!",
        
        dev_setup_title: "🛠️ إعداد التطوير",
        prerequisites_title: "المتطلبات المسبقة",
        prereq_flutter: "Flutter SDK (3.8.1 أو أحدث)",
        prereq_dart: "Dart SDK",
        prereq_android: "أندرويد ستوديو مع Android SDK",
        prereq_firebase: "إعداد مشروع Firebase",
        prereq_supabase: "تكوين مشروع Supabase",
        installation_title: "التثبيت",
        
        tech_stack_title: "🔧 المكدس التقني",
        
        footer_desc: "نظام إدارة النقل للعمليات الفعالة لتوصيل الحديد والصلب.",
        footer_product: "المنتج",
        footer_resources: "الموارد",
        footer_support: "الدعم",
        footer_copyright: "© 2025 النقلة. جميع الحقوق محفوظة. مبني بـ Flutter."
    }
};

// Language management
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'en';
        this.init();
    }

    init() {
        this.updateLanguage(this.currentLang);
        this.bindEvents();
    }

    bindEvents() {
        console.log('Binding language buttons...'); // Log binding process
        const buttons = document.querySelectorAll('.lang-btn');
        console.log('Found buttons:', buttons); // Log the buttons found
        
        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                console.log(`Button clicked: ${e.target.dataset.lang}`); // Log the button click event
                this.updateLanguage(lang);
            });
        });
    }

    updateLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        
        // Update text content
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            } else {
                console.warn(`Missing translation for key: ${key} in language: ${lang}`);
            }
        });

        // Update document direction and font
        const body = document.body;
        const html = document.documentElement;
        
        if (lang === 'ar') {
            body.setAttribute('dir', 'rtl');
            html.setAttribute('dir', 'rtl');
            html.setAttribute('lang', 'ar');
        } else {
            body.setAttribute('dir', 'ltr');
            html.setAttribute('dir', 'ltr');
            html.setAttribute('lang', 'en');
        }

        // Update active language button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        console.log(`Language changed to: ${lang}`);
        console.log('Updating language to:', lang); // Log the language being updated
        console.log('Current translations:', translations[lang]); // Log the translations for the selected language
    }
}

// Navigation management
class NavigationManager {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.init();
    }

    init() {
        this.bindEvents();
        this.handleScroll();
    }

    bindEvents() {
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Mobile menu toggle
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // Scroll spy
        window.addEventListener('scroll', () => {
            this.handleScroll();
            this.updateActiveNavLink();
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navMenu.contains(e.target) && !this.hamburger.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
    }

    handleScroll() {
        const scrollY = window.scrollY;
        
        if (scrollY > 50) {
            this.navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            this.navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            this.navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            this.navbar.style.boxShadow = '0 1px 0 rgba(0, 0, 0, 0.1)';
        }
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
        
        let current = '';
        const scrollY = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    }

    toggleMobileMenu() {
        this.navMenu.classList.toggle('active');
        this.hamburger.classList.toggle('active');
    }

    closeMobileMenu() {
        this.navMenu.classList.remove('active');
        this.hamburger.classList.remove('active');
    }
}

// Animation management
class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.observeElements();
    }

    observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe elements that should animate in
        document.querySelectorAll('.feature-card, .doc-card, .screenshot-item, .tech-item').forEach(el => {
            el.classList.add('animate-ready');
            observer.observe(el);
        });
    }
}

// Theme management (for future dark mode)
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
    }
}

// Utility functions
const utils = {
    // Debounce function for performance optimization
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Animate number counting
    animateNumber(element, start, end, duration = 2000) {
        const startTime = performance.now();
        const range = end - start;

        function updateNumber(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentValue = Math.floor(start + (range * progress));
            
            element.textContent = currentValue.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            }
        }
        
        requestAnimationFrame(updateNumber);
    }
};

// Performance monitoring
class PerformanceMonitor {
    constructor() {
        this.loadTime = performance.now();
        this.init();
    }

    init() {
        window.addEventListener('load', () => {
            this.logLoadTime();
        });
    }

    logLoadTime() {
        const loadTime = performance.now() - this.loadTime;
        console.log(`Page loaded in ${Math.round(loadTime)}ms`);
    }
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('Script error:', e.error);
});

// Initialize all managers when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all managers
    new LanguageManager();
    new NavigationManager();
    new AnimationManager();
    new ThemeManager();
    new PerformanceMonitor();

    // Force Arabic as the default language
    document.querySelector('.lang-btn[data-lang="ar"]').click();
    
    // Add loading state removal
    document.body.classList.remove('loading');
    
    // Initialize any additional interactive features
    initializeInteractiveFeatures();
});

// Additional interactive features
function initializeInteractiveFeatures() {
    // Add hover effects to cards
    document.querySelectorAll('.feature-card, .doc-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
        });
    });

    // Add click tracking for analytics (if needed)
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const platform = this.classList.contains('android') ? 'Android' : 'GitHub';
            console.log(`Download clicked: ${platform}`);
        });
    });

    // Add form submission handling (if forms are added later)
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle form submission
            console.log('Form submitted');
        });
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
        // Handle keyboard shortcuts
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case 'k':
                    e.preventDefault();
                    // Focus search if available
                    break;
            }
        }
    });

    // Ensure language buttons have proper data-lang attributes
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (!btn.dataset.lang) {
            console.error('Language button missing data-lang attribute:', btn);
        }
    });
}

// Service Worker registration (for PWA features in the future)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
/////
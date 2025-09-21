// Language data
const translations = {
    en: {
        app_name: "AL-NAQLA",
        nav_home: "Home",
        nav_about: "About",
        nav_features: "Features", 
        nav_screenshots: "Screenshots",
        nav_download: "Download",
        nav_docs: "Documentation",
        
        hero_title: "AL-NAQLA Transportation Management System",
        hero_subtitle: "A comprehensive multi-platform solution with mobile app, desktop dashboard, Excel integration and printing capabilities for managing iron and steel transportation operations efficiently.",
        hero_feature_1: "Multi-Platform Support (Mobile, Desktop, Tablet)",
        hero_feature_2: "Dashboard + Excel Integration + Printing",
        hero_feature_3: "Cloud-Based Management",
        download_now: "Download Now",
        learn_more: "Learn More",
        
        // About Section
        about_title: "About AL-NAQLA",
        about_subtitle: "Comprehensive multi-platform transportation management system",
        
        // What We Offer
        what_we_offer: "What We Offer",
        mobile_app_title: "Mobile Application",
        mobile_app_desc: "Complete mobile app for Android with comprehensive transportation management features",
        desktop_dashboard_title: "Desktop Dashboard",
        desktop_dashboard_desc: "Advanced Windows desktop application with powerful analytics and management tools",
        excel_integration_title: "Excel Integration",
        excel_integration_desc: "Full Excel integration for data import/export, automated reporting and seamless workflows",
        printing_support_title: "Professional Printing",
        printing_support_desc: "High-quality printing support for invoices, reports, delivery receipts and documentation",
        cloud_sync_title: "Cloud Synchronization",
        cloud_sync_desc: "Real-time cloud sync across all devices ensuring data consistency and accessibility",
        multi_platform_title: "Multi-Platform Support",
        multi_platform_desc: "Available on Mobile, Desktop, Tablet with consistent experience across all platforms",
        
        // All Features
        all_features: "All Features & Capabilities",
        customer_management_title: "Customer Management",
        customer_management_desc: "Complete customer profiles, payment tracking, order history and contact management",
        trip_management_title: "Trip Management", 
        trip_management_desc: "Full trip tracking, route optimization, delivery status and driver management",
        inventory_management_title: "Inventory Management",
        inventory_management_desc: "Real-time inventory tracking for iron and steel materials with automated alerts and stock management",
        financial_management_title: "Financial Management",
        financial_management_desc: "Complete invoicing system, payment tracking, profit analysis and comprehensive financial reporting",
        reporting_analytics_title: "Business Intelligence & Reports",
        reporting_analytics_desc: "Advanced analytics dashboard with customizable reports, KPI tracking and business intelligence insights",
        driver_management_title: "Driver & Vehicle Management", 
        driver_management_desc: "Complete driver profiles, vehicle tracking, performance monitoring and route optimization for efficient operations",
        about_subtitle: "Comprehensive transportation management system with advanced technology",
        about_vision_title: "Our Vision",
        about_vision_desc: "Developing innovative technical solutions to improve transportation and delivery efficiency in the Middle East",
        about_mission_title: "Our Mission", 
        about_mission_desc: "Providing an integrated multi-platform system with mobile app, desktop dashboard, Excel integration and printing support for managing iron and steel transport operations accurately and effectively",
        about_team_title: "Our Team",
        about_team_desc: "Professional developers specialized in Flutter applications and smart business solutions",
        
        // Statistics
        stat_downloads: "500+",
        stat_downloads_label: "Downloads",
        stat_users: "100+", 
        stat_users_label: "Active Users",
        stat_rating: "4.8",
        stat_rating_label: "User Rating",
        stat_support: "24/7",
        stat_support_label: "Technical Support",
        
        features_title: "Technical Features",
        features_subtitle: "Advanced technical capabilities and platform integrations for seamless business operations",
        
        feature_multi_platform_title: "Multi-Platform Support",
        feature_multi_platform_desc: "Seamless experience across Mobile (Android), Desktop (Windows), and Tablet devices with unified data.",
        feature_excel_printing_title: "Excel Integration & Printing",
        feature_excel_printing_desc: "Complete Excel integration for data import/export and professional printing support for all documents.",
        feature_cloud_sync_title: "Cloud Synchronization",
        feature_cloud_sync_desc: "Real-time cloud synchronization ensuring your data is always up-to-date across all devices.",
        feature_notifications_title: "Smart Notifications",
        feature_notifications_desc: "Intelligent notification system for orders, deliveries, payments, and critical business alerts.",
        feature_auto_updates_title: "Auto Updates & Backup",
        feature_auto_updates_desc: "Automatic system updates and secure data backup to ensure optimal performance and data safety.",
        feature_customization_title: "Advanced Customization",
        feature_customization_desc: "Flexible system configuration, user permissions, and customizable workflows to fit your business needs.",
        
        screenshots_title: "App Screenshots",
        screenshots_subtitle: "Take a look at the clean and intuitive interface",
        screenshot_dashboard: "Dashboard",
        screenshot_dashboard_desc: "Main control panel overview",
        screenshot_customers: "Customers", 
        screenshot_customers_desc: "Customer management system",
        screenshot_trips: "Trips",
        screenshot_trips_desc: "Transportation trip tracking",
        screenshot_reports: "Reports",
        screenshot_reports_desc: "Analytics and reporting tools",
        
        // Device Labels
        tablet_feature: "Tablet View",
        laptop_feature: "Laptop View",
        tablet_preview: "Tablet Preview",
        laptop_preview: "Laptop Preview",
        video_not_supported: "Your browser doesn't support video playback",
        
        download_title: "Download AL-NAQLA",
        download_subtitle: "Get started with the most comprehensive multi-platform transportation management solution with mobile, desktop, Excel integration and printing support",
        download_android: "Download for Android",
        download_ios: "Download for iPhone/iPad",
        download_windows: "Download for Windows",
        
        requirements_title: "System Requirements",
        android_requirements: "Android Requirements",
        ios_requirements: "iOS Requirements", 
        windows_requirements: "Windows Requirements",
        
        req_android: "Android 5.0+ (API 21)",
        req_android_ram: "2GB RAM minimum",
        req_android_storage: "100MB free storage",
        req_internet: "Internet connection required",
        
        req_ios: "iOS 12.0 or later",
        req_ios_device: "Compatible with iPhone, iPad, and iPod touch",
        req_ios_storage: "120MB free storage",
        
        req_windows: "Windows 10 or later (64-bit)",
        req_windows_ram: "4GB RAM minimum",
        req_windows_storage: "500MB free storage",
        req_windows_excel: "Microsoft Excel 2016+ (optional)",
        
        docs_title: "Documentation & Setup",
        docs_subtitle: "Everything you need to get started with AL-NAQLA",
        doc_quickstart_title: "Quick Start Guide",
        doc_quickstart_desc: "Get up and running with AL-NAQLA in minutes",
        doc_api_title: "API Reference", 
        doc_api_desc: "Comprehensive API documentation",
        read_more: "Read More",
        quickstart_title: "🚀 Quick Start Guide",
        quickstart_intro: "Get started with AL-NAQLA in just a few simple steps. Choose your platform below and follow the detailed setup guide.",
        
        // Platform-specific setup
        android_setup_title: "📱 Android Setup",
        android_setup_desc: "Complete setup guide for Android devices",
        ios_setup_title: "🍎 iOS Setup", 
        ios_setup_desc: "Complete setup guide for iOS devices",
        windows_setup_title: "🖥️ Windows Setup",
        windows_setup_desc: "Complete setup guide for Windows desktop",

        // Android Steps
        android_step_1_title: "Download Application",
        android_step_1_desc: "Download the latest AL-NAQLA APK file from our official release page",
        android_step_1_note: "File size: ~25MB | Version: 2.1.0",
        android_step_2_title: "Enable Installation",
        android_step_2_desc: "Go to Settings → Security → Enable \"Install from Unknown Sources\"",
        android_step_2_warning: "This is safe for AL-NAQLA installation",
        android_step_3_title: "Install Application",
        android_step_3_desc: "Tap the downloaded APK file and follow installation prompts",
        android_step_4_title: "Launch & Setup",
        android_step_4_desc: "Open AL-NAQLA, create your account, and complete the initial setup wizard",
        android_step_5_title: "Start Managing",
        android_step_5_desc: "Begin managing your transportation operations with our comprehensive tools",

        // iOS Steps
        ios_step_1_title: "Request Access",
        ios_step_1_desc: "Contact our team to request access to the iOS beta version",
        ios_step_1_note: "Processing time: 24-48 hours",
        ios_step_2_title: "Install TestFlight",
        ios_step_2_desc: "Download TestFlight from the App Store if not already installed",
        ios_step_3_title: "Accept Invitation",
        ios_step_3_desc: "Open the TestFlight invitation link sent to your email",
        ios_step_4_title: "Install AL-NAQLA",
        ios_step_4_desc: "Install AL-NAQLA through TestFlight",
        ios_step_5_title: "Setup Account",
        ios_step_5_desc: "Create your account and start managing your transportation business",

        // Windows Steps
        windows_step_1_title: "Download Installer",
        windows_step_1_desc: "Download the AL-NAQLA Windows installer (.exe file)",
        windows_step_1_note: "File size: ~45MB | Windows 10+ Required",
        windows_step_2_title: "Run Installer",
        windows_step_2_desc: "Right-click the installer and select \"Run as administrator\"",
        windows_step_3_title: "Follow Setup Wizard",
        windows_step_3_desc: "Complete the installation wizard with default settings",
        windows_step_4_title: "Launch Application",
        windows_step_4_desc: "Open AL-NAQLA from the desktop shortcut or Start menu",
        windows_step_5_title: "Configure & Sync",
        windows_step_5_desc: "Set up your workspace, connect to cloud services, and sync your data",

        // Quick Tips
        quick_tips_title: "💡 Quick Tips",
        tip_1_title: "Data Sync",
        tip_1_desc: "Your data automatically syncs across all platforms",
        tip_2_title: "Secure Backup", 
        tip_2_desc: "All data is securely backed up in the cloud",
        tip_3_title: "24/7 Support",
        tip_3_desc: "Get help anytime through our support channels",
        tech_stack_title: "🔧 Technology Stack",
        
        // Platforms
        request_custom_version: "Request Custom Version",
        request_custom_version_desc: "Get a customized version that suits your specific transportation management needs",
        ios: "iOS",
        ios_desc: "Optimized app for iPhone and iPad devices",
        android: "Android", 
        android_desc: "Mobile app + Desktop dashboard with Excel integration and printing support",
        linux: "Linux",
        linux_desc: "Desktop version for Linux system with dashboard and Excel features",
        windows: "Windows",
        windows_desc: "Complete desktop solution with dashboard, Excel integration and printing capabilities",
        
        // Contact Section
        contact_title: "Contact Us",
        contact_subtitle: "We're here to help you get the best solution for your needs",
        discord: "Discord",
        discord_desc: "Live chat",
        linkedin: "LinkedIn", 
        linkedin_desc: "Professional network",
        whatsapp: "WhatsApp",
        whatsapp_desc: "Quick messages",
        email: "Email",
        email_desc: "Official contact",
        
        // Developer Info
        developer_title: "Lead Developer",
        developer_name_value: "Hedra Nabil",
        developer_bio: "Flutter app developer specialized in business solutions",
        developer_email_value: "developer@al-naqla.com",
        developer_phone_value: "+20 1064456538",
        
        footer_desc: "Transportation Management System for efficient iron and steel delivery operations.",
        footer_product: "Product",
        footer_resources: "Resources",
        github_repo: "GitHub",
        footer_support: "Support",
        footer_copyright: "© 2025 AL-NAQLA. All rights reserved. Built with Flutter."
    },
    ar: {
        app_name: "النقلة",
        nav_home: "الرئيسية",
        nav_about: "حولنا",
        nav_features: "المزايا",
        nav_screenshots: "لقطات الشاشة", 
        nav_download: "تحميل",
        nav_docs: "التوثيق",
        
        hero_title: "نظام النقلة لإدارة النقل",
        hero_subtitle: "حل شامل متعدد المنصات يضم تطبيق موبايل، داش بورد سطح المكتب، تكامل مع إكسل وإمكانيات طباعة لإدارة عمليات نقل الحديد والصلب بكفاءة عالية.",
        hero_feature_1: "دعم متعدد المنصات (موبايل، سطح المكتب، تابلت)",
        hero_feature_2: "داش بورد + تكامل إكسل + طباعة",
        hero_feature_3: "إدارة سحابية",
        download_now: "تحميل الآن",
        learn_more: "اعرف المزيد",
        
        // About Section
        about_title: "حول AL-NAQLA",
        about_subtitle: "نظام شامل متعدد المنصات لإدارة النقل والتوصيل",
        
        // What We Offer
        what_we_offer: "ما نقدمه",
        mobile_app_title: "تطبيق الموبايل",
        mobile_app_desc: "تطبيق موبايل كامل لأندرويد مع جميع ميزات إدارة النقل الشاملة",
        desktop_dashboard_title: "داش بورد سطح المكتب",
        desktop_dashboard_desc: "تطبيق متقدم لسطح المكتب (ويندوز) مع أدوات تحليل وإدارة قوية",
        excel_integration_title: "تكامل مع إكسل",
        excel_integration_desc: "تكامل كامل مع إكسل لاستيراد/تصدير البيانات، تقارير تلقائية وسير عمل سلس",
        printing_support_title: "دعم طباعة احترافي",
        printing_support_desc: "دعم طباعة عالي الجودة للفواتير، التقارير، إيصالات التوصيل والوثائق",
        cloud_sync_title: "مزامنة سحابية",
        cloud_sync_desc: "مزامنة سحابية فورية عبر جميع الأجهزة لضمان تطابق البيانات وسهولة الوصول",
        multi_platform_title: "دعم متعدد المنصات",
        multi_platform_desc: "متاح على الموبايل وسطح المكتب والتابلت مع تجربة متسقة عبر جميع المنصات",
        
        // All Features  
        all_features: "جميع المزايا والقدرات",
        customer_management_title: "إدارة العملاء",
        customer_management_desc: "ملفات عملاء كاملة، تتبع المدفوعات، سجل الطلبات وإدارة جهات الاتصال",
        trip_management_title: "إدارة الرحلات",
        trip_management_desc: "تتبع كامل للرحلات، تحسين المسارات، حالة التوصيل وإدارة السائقين",
        inventory_management_title: "إدارة المخزون",
        inventory_management_desc: "تتبع فوري للمخزون من مواد الحديد والصلب مع تنبيهات تلقائية وإدارة المخزون",
        financial_management_title: "الإدارة المالية",
        financial_management_desc: "نظام فوترة كامل، تتبع المدفوعات، تحليل الأرباح وتقارير مالية شاملة",
        reporting_analytics_title: "ذكاء الأعمال والتقارير",
        reporting_analytics_desc: "داش بورد تحليلات متقدم مع تقارير قابلة للتخصيص، تتبع المؤشرات الرئيسية ورؤى ذكاء الأعمال",
        driver_management_title: "إدارة السائقين والمركبات",
        driver_management_desc: "ملفات سائقين كاملة، تتبع المركبات، مراقبة الأداء وتحسين المسارات لعمليات فعالة",
        about_subtitle: "نظام شامل لإدارة النقل والتوصيل بتقنيات متقدمة",
        about_vision_title: "رؤيتنا",
        about_vision_desc: "تطوير حلول تقنية مبتكرة تساعد في تحسين كفاءة عمليات النقل والتوصيل في الشرق الأوسط",
        about_mission_title: "مهمتنا",
        about_mission_desc: "توفير نظام متكامل متعدد المنصات يضم تطبيق موبايل، داش بورد سطح المكتب، تكامل مع إكسل ودعم الطباعة لإدارة عمليات نقل الحديد والصلب بدقة وفعالية",
        about_team_title: "فريقنا", 
        about_team_desc: "مطورون محترفون متخصصون في تطبيقات Flutter وحلول الأعمال الذكية",
        
        // Statistics
        stat_downloads: "500+",
        stat_downloads_label: "تحميل",
        stat_users: "100+",
        stat_users_label: "مستخدم نشط",
        stat_rating: "4.8",
        stat_rating_label: "تقييم المستخدمين",
        stat_support: "24/7",
        stat_support_label: "دعم فني",
        
        features_title: "المزايا التقنية",
        features_subtitle: "إمكانيات تقنية متقدمة وتكامل المنصات لعمليات تجارية سلسة",
        
        feature_multi_platform_title: "دعم متعدد المنصات",
        feature_multi_platform_desc: "تجربة سلسة عبر الموبايل (أندرويد) وسطح المكتب (ويندوز) والتابلت مع بيانات موحدة.",
        feature_excel_printing_title: "تكامل إكسل والطباعة",
        feature_excel_printing_desc: "تكامل كامل مع إكسل لاستيراد/تصدير البيانات ودعم طباعة احترافي لجميع المستندات.",
        feature_cloud_sync_title: "مزامنة سحابية",
        feature_cloud_sync_desc: "مزامنة سحابية فورية تضمن أن بياناتك محدثة دائماً عبر جميع الأجهزة.",
        feature_notifications_title: "إشعارات ذكية",
        feature_notifications_desc: "نظام إشعارات ذكي للطلبات والتوصيل والمدفوعات والتنبيهات التجارية الهامة.",
        feature_auto_updates_title: "تحديثات تلقائية ونسخ احتياطي",
        feature_auto_updates_desc: "تحديثات تلقائية للنظام ونسخ احتياطي آمن للبيانات لضمان الأداء الأمثل وأمان البيانات.",
        feature_customization_title: "تخصيص متقدم",
        feature_customization_desc: "تكوين مرن للنظام وصلاحيات المستخدمين وسير عمل قابل للتخصيص ليناسب احتياجات عملك.",
        
        screenshots_title: "لقطات شاشة التطبيق",
        screenshots_subtitle: "ألق نظرة على الواجهة النظيفة والبديهية",
        screenshot_dashboard: "لوحة القيادة",
        screenshot_dashboard_desc: "نظرة عامة على لوحة التحكم الرئيسية",
        screenshot_customers: "العملاء",
        screenshot_customers_desc: "نظام إدارة العملاء", 
        screenshot_trips: "الرحلات",
        screenshot_trips_desc: "تتبع رحلات النقل",
        screenshot_reports: "التقارير",
        screenshot_reports_desc: "أدوات التحليلات والتقارير",
        
        // Device Labels
        tablet_feature: "عرض التابلت",
        laptop_feature: "عرض اللابتوب",
        tablet_preview: "معاينة التابلت",
        laptop_preview: "معاينة اللابتوب",
        video_not_supported: "متصفحك لا يدعم تشغيل الفيديو",
        
        download_title: "تحميل AL-NAQLA",
        download_subtitle: "ابدأ مع الحل الأكثر شمولية متعدد المنصات لإدارة النقل مع الموبايل وسطح المكتب وتكامل إكسل ودعم الطباعة",
        download_android: "تحميل لنظام Android",
        download_ios: "تحميل للايفون/الايباد",
        download_windows: "تحميل للويندوز",
        
        requirements_title: "متطلبات النظام",
        android_requirements: "متطلبات الأندرويد",
        ios_requirements: "متطلبات iOS",
        windows_requirements: "متطلبات الويندوز",
        
        req_android: "Android 5.0+ (API 21)",
        req_android_ram: "2 جيجا بايت رام كحد أدنى", 
        req_android_storage: "100 ميجا بايت مساحة فارغة",
        req_internet: "اتصال بالإنترنت مطلوب",
        
        req_ios: "iOS 12.0 أو أحدث",
        req_ios_device: "متوافق مع الايفون والايباد والايبود تتش",
        req_ios_storage: "120 ميجا بايت مساحة فارغة",
        
        req_windows: "Windows 10 أو أحدث (64-bit)",
        req_windows_ram: "4 جيجا بايت رام كحد أدنى",
        req_windows_storage: "500 ميجا بايت مساحة فارغة", 
        req_windows_excel: "Microsoft Excel 2016+ (اختياري)",
        
        docs_title: "التوثيق والإعداد",
        docs_subtitle: "كل ما تحتاجه للبدء مع AL-NAQLA",
        doc_quickstart_title: "دليل البدء السريع",
        doc_quickstart_desc: "البدء والتشغيل مع AL-NAQLA في دقائق",
        doc_api_title: "مرجع API",
        doc_api_desc: "وثائق API شاملة",
        read_more: "اقرأ المزيد",
        quickstart_title: "🚀 دليل البدء السريع",
        quickstart_intro: "ابدأ مع AL-NAQLA في خطوات بسيطة. اختر منصتك أدناه واتبع دليل الإعداد المفصل.",
        
        // إعداد المنصات
        android_setup_title: "📱 إعداد أندرويد",
        android_setup_desc: "دليل الإعداد الكامل لأجهزة أندرويد",
        ios_setup_title: "🍎 إعداد آيفون", 
        ios_setup_desc: "دليل الإعداد الكامل لأجهزة آيفون",
        windows_setup_title: "🖥️ إعداد ويندوز",
        windows_setup_desc: "دليل الإعداد الكامل لسطح المكتب",

        // خطوات أندرويد
        android_step_1_title: "تحميل التطبيق",
        android_step_1_desc: "حمل أحدث ملف AL-NAQLA APK من صفحة الإصدارات الرسمية",
        android_step_1_note: "حجم الملف: ~25 ميجابايت | الإصدار: 2.1.0",
        android_step_2_title: "تفعيل التثبيت",
        android_step_2_desc: "اذهب إلى الإعدادات ← الأمان ← فعل \"التثبيت من مصادر غير معروفة\"",
        android_step_2_warning: "هذا آمن لتثبيت AL-NAQLA",
        android_step_3_title: "تثبيت التطبيق",
        android_step_3_desc: "اضغط على ملف APK المُحمل واتبع تعليمات التثبيت",
        android_step_4_title: "التشغيل والإعداد",
        android_step_4_desc: "افتح AL-NAQLA، أنشئ حسابك، وأكمل معالج الإعداد الأولي",
        android_step_5_title: "ابدأ الإدارة",
        android_step_5_desc: "ابدأ في إدارة عمليات النقل بأدواتنا الشاملة",

        // خطوات iOS
        ios_step_1_title: "طلب الوصول",
        ios_step_1_desc: "تواصل مع فريقنا لطلب الوصول لنسخة iOS التجريبية",
        ios_step_1_note: "وقت المعالجة: 24-48 ساعة",
        ios_step_2_title: "تثبيت TestFlight",
        ios_step_2_desc: "حمل TestFlight من App Store إذا لم يكن مثبتاً بعد",
        ios_step_3_title: "قبول الدعوة",
        ios_step_3_desc: "افتح رابط دعوة TestFlight المرسل لبريدك الإلكتروني",
        ios_step_4_title: "تثبيت AL-NAQLA",
        ios_step_4_desc: "ثبت AL-NAQLA من خلال TestFlight",
        ios_step_5_title: "إعداد الحساب",
        ios_step_5_desc: "أنشئ حسابك وابدأ في إدارة أعمال النقل",

        // خطوات Windows
        windows_step_1_title: "تحميل المثبت",
        windows_step_1_desc: "حمل مثبت AL-NAQLA لويندوز (ملف .exe)",
        windows_step_1_note: "حجم الملف: ~45 ميجابايت | يتطلب ويندوز 10+",
        windows_step_2_title: "تشغيل المثبت",
        windows_step_2_desc: "اضغط كليك يمين على المثبت واختر \"تشغيل كمسؤول\"",
        windows_step_3_title: "اتبع معالج الإعداد",
        windows_step_3_desc: "أكمل معالج التثبيت بالإعدادات الافتراضية",
        windows_step_4_title: "تشغيل التطبيق",
        windows_step_4_desc: "افتح AL-NAQLA من اختصار سطح المكتب أو قائمة ابدأ",
        windows_step_5_title: "التكوين والمزامنة",
        windows_step_5_desc: "اضبط مساحة العمل، اتصل بخدمات السحابة، وزامن بياناتك",

        // نصائح سريعة
        quick_tips_title: "💡 نصائح سريعة",
        tip_1_title: "مزامنة البيانات",
        tip_1_desc: "بياناتك تتزامن تلقائياً عبر جميع المنصات",
        tip_2_title: "نسخ احتياطي آمن", 
        tip_2_desc: "جميع البيانات محفوظة بأمان في السحابة",
        tip_3_title: "دعم 24/7",
        tip_3_desc: "احصل على المساعدة في أي وقت عبر قنوات الدعم",
        tech_stack_title: "🔧 المكدس التقني",
        
        // Platforms
        request_custom_version: "طلب نسخة مخصصة",
        request_custom_version_desc: "احصل على نسخة مخصصة تناسب احتياجاتك الخاصة في إدارة النقل",
        ios: "iOS",
        ios_desc: "تطبيق محسن لأجهزة iPhone و iPad",
        android: "Android",
        android_desc: "تطبيق موبايل + داش بورد سطح المكتب مع تكامل إكسل ودعم الطباعة",
        linux: "Linux", 
        linux_desc: "إصدار سطح المكتب لنظام Linux مع داش بورد ومزايا إكسل",
        windows: "Windows",
        windows_desc: "حل كامل لسطح المكتب مع داش بورد وتكامل إكسل وإمكانيات الطباعة",
        
        // Contact Section
        contact_title: "تواصل معنا",
        contact_subtitle: "نحن هنا لمساعدتك في الحصول على أفضل حل لاحتياجاتك",
        discord: "ديسكورد",
        discord_desc: "دردشة مباشرة",
        linkedin: "لينكدإن",
        linkedin_desc: "شبكة مهنية",
        whatsapp: "واتساب",
        whatsapp_desc: "رسائل سريعة",
        email: "البريد الإلكتروني",
        email_desc: "تواصل رسمي",
        
        // Developer Info
        developer_title: "المطور الرئيسي",
        developer_name_value: "هدرا نبيل ",
        developer_bio: "مطور تطبيقات Flutter متخصص في حلول الأعمال",
        developer_email_value: "developer@al-naqla.com",
        developer_phone_value: "+20 1064456538",
        
        footer_desc: "نظام إدارة النقل لعمليات توصيل الحديد والصلب بكفاءة.",
        footer_product: "المنتج",
        footer_resources: "الموارد",
        github_repo: "GitHub",
        footer_support: "الدعم",
        footer_copyright: "© 2025 AL-NAQLA. جميع الحقوق محفوظة. مبني بـ Flutter."
    }
};

// Language management
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'ar';
        this.init();
    }

    init() {
        this.updateLanguage(this.currentLang);
        this.bindEvents();
    }

    bindEvents() {
        const buttons = document.querySelectorAll('.lang-btn');
        
        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
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
                element.textContent = key;
            }
        });

        // Update active language button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Update document direction
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', lang);

        console.log(`Language changed to: ${lang}`);
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
                    const offsetTop = target.offsetTop - 80;
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

        // Scroll handling
        window.addEventListener('scroll', () => {
            this.handleScroll();
            this.updateActiveNavLink();
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.navMenu && this.hamburger) {
                if (!this.navMenu.contains(e.target) && !this.hamburger.contains(e.target)) {
                    this.closeMobileMenu();
                }
            }
        });
    }

    handleScroll() {
        if (!this.navbar) return;
        
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
        if (this.navMenu && this.hamburger) {
            this.navMenu.classList.toggle('active');
            this.hamburger.classList.toggle('active');
        }
    }

    closeMobileMenu() {
        if (this.navMenu && this.hamburger) {
            this.navMenu.classList.remove('active');
            this.hamburger.classList.remove('active');
        }
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
        document.querySelectorAll('.feature-card, .doc-card, .screenshot-item, .about-card, .platform-item').forEach(el => {
            el.classList.add('animate-ready');
            observer.observe(el);
        });
    }
}

// Initialize all managers when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all managers
    new LanguageManager();
    new NavigationManager();
    new AnimationManager();
    
    // Add loading state removal
    document.body.classList.remove('loading');
    
    // Initialize interactive features
    initializeInteractiveFeatures();
});

// Additional interactive features
function initializeInteractiveFeatures() {
    // Add hover effects to cards
    document.querySelectorAll('.feature-card, .doc-card, .about-card, .platform-item').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click tracking for download buttons
    document.querySelectorAll('.download-btn, .contact-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Button clicked:', this.textContent.trim());
        });
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close mobile menu if open
            const navManager = new NavigationManager();
            navManager.closeMobileMenu();
        }
    });

    // Quick Start Guide Platform Switcher
    const platformTabs = document.querySelectorAll('.platform-tab');
    const platformContents = document.querySelectorAll('.platform-content');

    platformTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            
            // Remove active class from all tabs and contents
            platformTabs.forEach(t => t.classList.remove('active'));
            platformContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(platform + '-setup').classList.add('active');
        });
    });
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('Script error:', e.error);
});

console.log('AL-NAQLA website loaded successfully!');
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    Truck,
    User,
    Mail,
    Phone,
    Lock,
    Eye,
    EyeOff,
    Loader2,
    Building2,
    MapPin,
    Briefcase
} from 'lucide-react';
import { api, endpoints } from '@/lib/api';
import { cn } from '@/lib/utils';

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
        // Company info
        company_name: '',
        company_address: '',
        activity_type: 'logistics',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [step, setStep] = useState(1); // 1 = Personal, 2 = Company

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (step === 1) {
            // Validate step 1
            if (!formData.name || !formData.email || !formData.phone || !formData.password) {
                setError('يرجى ملء جميع الحقول المطلوبة');
                return;
            }
            if (formData.password !== formData.password_confirmation) {
                setError('كلمة المرور غير متطابقة');
                return;
            }
            if (formData.password.length < 8) {
                setError('كلمة المرور يجب أن تكون 8 أحرف على الأقل');
                return;
            }
            setError('');
            setStep(2);
            return;
        }

        // Submit registration
        setError('');
        setIsLoading(true);

        try {
            // Step 1: Register user
            const registerResponse = await api.post(endpoints.auth.register, {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                password: formData.password,
                password_confirmation: formData.password_confirmation,
            });

            // Save token
            if (registerResponse.data.token) {
                localStorage.setItem('auth_token', registerResponse.data.token);
            }

            // Step 2: Create company
            await api.post(endpoints.company.create, {
                name: formData.company_name,
                address: formData.company_address,
                activity_type: formData.activity_type,
                phone: formData.phone,
                profile: {
                    contact_email: formData.email,
                    contact_phone: formData.phone,
                },
            });

            // Redirect to dashboard
            router.push('/dashboard');
        } catch (err: any) {
            setError(err.response?.data?.message || 'فشل التسجيل. يرجى المحاولة مرة أخرى.');
        } finally {
            setIsLoading(false);
        }
    };

    const activityTypes = [
        { value: 'logistics', label: 'خدمات لوجستية' },
        { value: 'transport', label: 'نقل بضائع' },
        { value: 'construction', label: 'مقاولات وبناء' },
        { value: 'steel', label: 'تجارة الحديد والصلب' },
        { value: 'other', label: 'أخرى' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center p-4">
            <div className="w-full max-w-lg">
                {/* Logo */}
                <div className="text-center mb-6">
                    <Link href="/" className="inline-flex items-center gap-2 text-white text-3xl font-bold">
                        <Truck className="w-10 h-10" />
                        <span>AL-NAQLA</span>
                    </Link>
                    <p className="text-white/80 mt-2">انضم إلينا وابدأ في إدارة عمليات النقل</p>
                </div>

                {/* Registration Card */}
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    {/* Progress Steps */}
                    <div className="flex items-center justify-center mb-8">
                        <div className="flex items-center gap-3">
                            <div className={cn(
                                'w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors',
                                step >= 1 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-500'
                            )}>
                                1
                            </div>
                            <div className={cn(
                                'w-16 h-1 rounded transition-colors',
                                step >= 2 ? 'bg-primary-600' : 'bg-gray-200'
                            )} />
                            <div className={cn(
                                'w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors',
                                step >= 2 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-500'
                            )}>
                                2
                            </div>
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
                        {step === 1 ? 'إنشاء حساب جديد' : 'معلومات الشركة'}
                    </h1>
                    <p className="text-gray-500 text-center mb-6">
                        {step === 1 ? 'أدخل بياناتك الشخصية' : 'أدخل معلومات شركتك'}
                    </p>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {step === 1 ? (
                            <>
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                                        الاسم الكامل <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={cn(
                                                'w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl',
                                                'focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
                                                'placeholder:text-gray-400 transition-colors'
                                            )}
                                            placeholder="أحمد محمد"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                                        البريد الإلكتروني <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={cn(
                                                'w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl',
                                                'focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
                                                'placeholder:text-gray-400 transition-colors'
                                            )}
                                            placeholder="email@company.com"
                                            required
                                            dir="ltr"
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                                        رقم الهاتف <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={cn(
                                                'w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl',
                                                'focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
                                                'placeholder:text-gray-400 transition-colors'
                                            )}
                                            placeholder="+20 1xx xxx xxxx"
                                            required
                                            dir="ltr"
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                                        كلمة المرور <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className={cn(
                                                'w-full pr-10 pl-12 py-3 border border-gray-300 rounded-xl',
                                                'focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
                                                'placeholder:text-gray-400 transition-colors'
                                            )}
                                            placeholder="8 أحرف على الأقل"
                                            required
                                            minLength={8}
                                            dir="ltr"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </div>

                                {/* Confirm Password */}
                                <div>
                                    <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700 mb-1.5">
                                        تأكيد كلمة المرور <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            id="password_confirmation"
                                            name="password_confirmation"
                                            value={formData.password_confirmation}
                                            onChange={handleChange}
                                            className={cn(
                                                'w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl',
                                                'focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
                                                'placeholder:text-gray-400 transition-colors'
                                            )}
                                            placeholder="أعد كتابة كلمة المرور"
                                            required
                                            dir="ltr"
                                        />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Company Name */}
                                <div>
                                    <label htmlFor="company_name" className="block text-sm font-medium text-gray-700 mb-1.5">
                                        اسم الشركة <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Building2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            id="company_name"
                                            name="company_name"
                                            value={formData.company_name}
                                            onChange={handleChange}
                                            className={cn(
                                                'w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl',
                                                'focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
                                                'placeholder:text-gray-400 transition-colors'
                                            )}
                                            placeholder="شركة النقل السريع"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Company Address */}
                                <div>
                                    <label htmlFor="company_address" className="block text-sm font-medium text-gray-700 mb-1.5">
                                        عنوان الشركة <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            id="company_address"
                                            name="company_address"
                                            value={formData.company_address}
                                            onChange={handleChange}
                                            className={cn(
                                                'w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl',
                                                'focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
                                                'placeholder:text-gray-400 transition-colors'
                                            )}
                                            placeholder="المنطقة الصناعية، القاهرة"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Activity Type */}
                                <div>
                                    <label htmlFor="activity_type" className="block text-sm font-medium text-gray-700 mb-1.5">
                                        نوع النشاط <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Briefcase className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <select
                                            id="activity_type"
                                            name="activity_type"
                                            value={formData.activity_type}
                                            onChange={handleChange}
                                            className={cn(
                                                'w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl',
                                                'focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
                                                'transition-colors appearance-none bg-white'
                                            )}
                                            required
                                        >
                                            {activityTypes.map((type) => (
                                                <option key={type.value} value={type.value}>
                                                    {type.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Back Button */}
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="w-full py-3 px-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                                >
                                    الرجوع للخطوة السابقة
                                </button>
                            </>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={cn(
                                'w-full py-3 px-4 bg-primary-600 text-white rounded-xl font-semibold',
                                'hover:bg-primary-700 focus:ring-4 focus:ring-primary-500/50',
                                'transition-all duration-200 flex items-center justify-center gap-2',
                                isLoading && 'opacity-70 cursor-not-allowed'
                            )}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>جاري إنشاء الحساب...</span>
                                </>
                            ) : step === 1 ? (
                                <span>التالي</span>
                            ) : (
                                <span>إنشاء الحساب</span>
                            )}
                        </button>
                    </form>

                    {/* Login Link */}
                    <div className="mt-6 text-center text-sm text-gray-600">
                        لديك حساب بالفعل؟{' '}
                        <Link href="/login" className="text-primary-600 hover:text-primary-700 font-semibold">
                            تسجيل الدخول
                        </Link>
                    </div>

                    {/* Back to Home */}
                    <div className="mt-4 text-center">
                        <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                            ← العودة للصفحة الرئيسية
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

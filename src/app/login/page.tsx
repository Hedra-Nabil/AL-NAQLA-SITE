'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Truck, Mail, Lock, Eye, EyeOff, Loader2 } from 'lucide-react';
import { auth } from '@/lib/api';
import { cn } from '@/lib/utils';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            await auth.login(email, password);
            router.push('/dashboard');
        } catch (err: any) {
            setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 text-white text-3xl font-bold">
                        <Truck className="w-10 h-10" />
                        <span>AL-NAQLA</span>
                    </Link>
                    <p className="text-white/80 mt-2">Transportation Management System</p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">
                        تسجيل الدخول
                    </h1>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                                البريد الإلكتروني
                            </label>
                            <div className="relative">
                                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={cn(
                                        'w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl',
                                        'focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
                                        'placeholder:text-gray-400 transition-colors'
                                    )}
                                    placeholder="admin@example.com"
                                    required
                                    dir="ltr"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                                كلمة المرور
                            </label>
                            <div className="relative">
                                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={cn(
                                        'w-full pr-10 pl-12 py-3 border border-gray-300 rounded-xl',
                                        'focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
                                        'placeholder:text-gray-400 transition-colors'
                                    )}
                                    placeholder="••••••••"
                                    required
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
                                    <span>جاري تسجيل الدخول...</span>
                                </>
                            ) : (
                                <span>تسجيل الدخول</span>
                            )}
                        </button>
                    </form>

                    {/* Register Link */}
                    <div className="mt-6 text-center text-sm text-gray-600">
                        ليس لديك حساب؟{' '}
                        <Link href="/register" className="text-primary-600 hover:text-primary-700 font-semibold">
                            إنشاء حساب جديد
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

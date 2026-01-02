import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

// Create axios instance
const apiClient: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
    (config) => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('auth_token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Handle unauthorized - redirect to login
            if (typeof window !== 'undefined') {
                localStorage.removeItem('auth_token');
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);

// API endpoints
export const endpoints = {
    // Auth
    auth: {
        login: '/auth/login',
        register: '/auth/register',
        logout: '/auth/logout',
        profile: '/auth/profile',
        sendOtp: '/auth/send-otp',
        verifyOtp: '/auth/verify-otp',
    },
    // Dashboard
    dashboard: {
        statistics: '/dashboard/statistics',
        recentActivities: '/dashboard/recent-activities',
        topCustomers: '/dashboard/top-customers',
        driverPerformance: '/dashboard/driver-performance',
    },
    // Financial
    financial: {
        summary: '/financial/summary',
        cashFlow: '/financial/cash-flow',
        expenseBreakdown: '/financial/expense-breakdown',
        paymentAnalysis: '/financial/payment-analysis',
    },
    // Trips
    trips: {
        list: '/trips',
        search: '/trips/search',
        create: '/trips',
        show: (id: string | number) => `/trips/${id}`,
        update: (id: string | number) => `/trips/${id}`,
        delete: (id: string | number) => `/trips/${id}`,
        byCustomer: (customerId: string | number) => `/customers/${customerId}/trips`,
        byVehicle: (vehicleNumber: string) => `/vehicles/${vehicleNumber}/trips`,
    },
    // Customers
    customers: {
        list: '/customers',
        create: '/customers',
        update: (id: string | number) => `/customers/${id}`,
        delete: (id: string | number) => `/customers/${id}`,
        balance: (id: string | number) => `/customers/${id}/balance`,
    },
    // Drivers
    drivers: {
        list: '/drivers',
        create: '/drivers',
        show: (id: string | number) => `/drivers/${id}`,
        update: (id: string | number) => `/drivers/${id}`,
        delete: (id: string | number) => `/drivers/${id}`,
    },
    // Vehicles
    vehicles: {
        list: '/vehicles',
        create: '/vehicles',
        show: (vehicleNumber: string) => `/vehicles/${vehicleNumber}`,
        update: (vehicleNumber: string) => `/vehicles/${vehicleNumber}`,
        delete: (vehicleNumber: string) => `/vehicles/${vehicleNumber}`,
    },
    // Contractors
    contractors: {
        list: '/contractors',
        create: '/contractors',
        show: (id: string | number) => `/contractors/${id}`,
        update: (id: string | number) => `/contractors/${id}`,
        delete: (id: string | number) => `/contractors/${id}`,
        trips: (id: string | number) => `/contractors/${id}/trips`,
        payments: (id: string | number) => `/contractors/${id}/payments`,
        balance: (id: string | number) => `/contractors/${id}/balance`,
    },
    // Payments
    payments: {
        list: '/payments',
        create: '/payments',
        show: (id: string | number) => `/payments/${id}`,
        settlement: '/payments/settlement',
    },
    // Company
    company: {
        create: '/company',
        join: '/company/join',
        settings: '/company/settings',
        updateLogicMap: '/company/logic/map',
        createInviteCode: '/company/invite-codes',
        consumeInviteCode: '/company/invite-codes/consume',
    },
    // Notifications
    notifications: {
        list: '/notifications',
        markAsRead: (id: string | number) => `/notifications/${id}/read`,
        markAllAsRead: '/notifications/read-all',
        delete: (id: string | number) => `/notifications/${id}`,
    },
    // Upload
    upload: {
        upload: '/upload',
        delete: '/upload',
        list: '/uploads',
    },
    // Admin
    admin: {
        plans: '/admin/plans',
        features: '/admin/features',
        companies: '/admin/companies',
        subscriptions: '/admin/subscriptions',
        systemHealth: '/admin/system/health',
    },
};

// API helper functions
export const api = {
    get: <T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> =>
        apiClient.get(url, config),

    post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> =>
        apiClient.post(url, data, config),

    put: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> =>
        apiClient.put(url, data, config),

    patch: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> =>
        apiClient.patch(url, data, config),

    delete: <T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> =>
        apiClient.delete(url, config),
};

// Auth helpers
export const auth = {
    login: async (email: string, password: string) => {
        const response = await api.post(endpoints.auth.login, { email, password });
        if (response.data.token) {
            localStorage.setItem('auth_token', response.data.token);
        }
        return response.data;
    },

    register: async (data: { name: string; email: string; phone: string; password: string; password_confirmation: string }) => {
        const response = await api.post(endpoints.auth.register, data);
        if (response.data.token) {
            localStorage.setItem('auth_token', response.data.token);
        }
        return response.data;
    },

    logout: async () => {
        await api.post(endpoints.auth.logout);
        localStorage.removeItem('auth_token');
    },

    getProfile: async () => {
        const response = await api.get(endpoints.auth.profile);
        return response.data;
    },

    isAuthenticated: () => {
        if (typeof window !== 'undefined') {
            return !!localStorage.getItem('auth_token');
        }
        return false;
    },
};

export default apiClient;

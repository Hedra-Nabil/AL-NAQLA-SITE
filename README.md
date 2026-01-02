# AL-NAQLA - Next.js Frontend

نظام النقلة لإدارة النقل - واجهة المستخدم

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local
# Edit .env.local with your API URL

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Landing page
│   ├── login/             # Login page
│   └── dashboard/         # Dashboard pages
├── components/
│   └── landing/           # Landing page components
├── lib/
│   ├── api.ts            # API client & endpoints
│   ├── translations.ts   # i18n translations
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Features

- 🌐 Bilingual support (Arabic/English)
- 🔐 Authentication with Laravel Sanctum
- 📊 Dashboard with statistics
- 📱 Responsive design
- 🎨 TailwindCSS styling

## Backend API

This frontend connects to a Laravel backend. See `/backend` for the API.

API URL: `http://localhost:8000/api/v1`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

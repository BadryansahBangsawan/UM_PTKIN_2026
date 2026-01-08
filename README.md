# uin-samata

This project was created with [Better-T-Stack](https://github.com/AmanVarshney01/create-better-t-stack), a modern TypeScript stack that combines Next.js, Express, ORPC, and more.

## Features

- **TypeScript** - For type safety and improved developer experience
- **Next.js** - Full-stack React framework
- **TailwindCSS** - Utility-first CSS for rapid UI development
- **shadcn/ui** - Reusable UI components
- **Express** - Fast, unopinionated web framework
- **oRPC** - End-to-end type-safe APIs with OpenAPI integration
- **Node.js** - Runtime environment
- **Drizzle** - TypeScript-first ORM
- **PostgreSQL** - Database engine
- **Turborepo** - Optimized monorepo build system

## Getting Started

First, install the dependencies:

```bash
npm install
```

## Database Setup

This project uses PostgreSQL with Drizzle ORM.

1. Make sure you have a PostgreSQL database set up.
2. Update your `apps/server/.env` file with your PostgreSQL connection details.

3. Apply the schema to your database:

```bash
npm run db:push
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser to see the web application.
The API is running at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
uin-samata/
├── apps/
│   ├── web/         # Frontend application (Next.js)
│   └── server/      # Backend API (Express, ORPC)
├── packages/
│   ├── api/         # API layer / business logic
│   └── db/          # Database schema & queries
```

## Available Scripts

- `npm run dev`: Start all applications in development mode
- `npm run build`: Build all applications
- `npm run dev:web`: Start only the web application
- `npm run dev:server`: Start only the server
- `npm run check-types`: Check TypeScript types across all apps
- `npm run db:push`: Push schema changes to database
- `npm run db:studio`: Open database studio UI

---

## 🎓 UM-PTKIN 2026 Implementation

Website modern untuk pendaftaran Ujian Masuk Perguruan Tinggi Keagamaan Islam Negeri (UM-PTKIN) 2026.

### 🚀 Fitur UM-PTKIN

#### Beranda
- **Hero Section** dengan countdown timer (hingga 30 Mei 2026, 16:00 WIT)
- **Info Tabs** dengan konten lengkap:
  - Pengantar
  - Ketentuan Umum
  - Jadwal Pelaksanaan
  - Biaya Pendaftaran
  - Alur Pendaftaran
  - Materi Ujian
  - Video Tutorial
  - FAQ
- **Auth Boxes** untuk pendaftaran dan login
- **Helpdesk info** dengan nomor kontak
- **Responsive design** untuk mobile dan desktop

#### Program Studi
- **Daftar 58 PTKIN** lengkap dengan informasi:
  - Nama dan kode PTKIN
  - Alamat lengkap
  - Website
  - Kontak (telp, fax, email)
  - Timezone (WIB/WITA/WIT)
- **Search & Filter**:
  - Cari berdasarkan nama, kode, atau provinsi
  - Filter berdasarkan provinsi
  - Filter berdasarkan timezone
- **Pagination** untuk navigasi halaman
- **Modal Daya Tampung** untuk melihat detail program studi
- **Responsive grid layout** (1, 2, atau 3 kolom)

### 🎨 Design System

- **Primary color**: `#214160` (OKLCH: `oklch(0.40 0.07 255)`)
- **Font**: Poppins (Google Fonts)
- **Modern UI** dengan shadcn/ui components
- **Dark mode support**
- **Smooth animations** dan transitions
- **Mobile-first responsive design**

### 📦 Struktur File UM-PTKIN

```
apps/web/src/
├── app/
│   ├── program-studi/      # Halaman Program Studi
│   │   └── page.tsx
│   ├── layout.tsx          # Root layout dengan navigation & footer
│   └── page.tsx            # Beranda
├── components/             # UM-PTKIN Components
│   ├── navigation.tsx      # Navigation bar dengan helpdesk info inline
│   ├── hero-section.tsx    # Hero dengan countdown
│   ├── info-tabs.tsx       # Tabs untuk konten informasi
│   ├── auth-boxes.tsx      # Register & Login modals
│   ├── footer.tsx          # Footer dengan kontak
│   ├── ptkin-card.tsx     # Card PTKIN
│   ├── ptkin-modal.tsx    # Modal daftar prodi
│   ├── search-bar.tsx      # Search input
│   ├── pagination.tsx      # Pagination controls
│   └── countdown.tsx       # Countdown timer
├── data/                   # Mock Data UM-PTKIN
│   ├── ptkin-data.ts      # Data 58 PTKIN
│   ├── prodi-data.ts       # Mock data program studi
│   └── info-content.ts     # Konten untuk tabs
└── index.css              # Global styles dengan primary color #214160
```

### 📄 Data Mock

- **PTKIN**: 58 PTKIN lengkap dengan kontak dan informasi
- **Prodi**: Mock data program studi dengan daya tampung
- **Info Content**: Konten HTML untuk setiap tab informasi

### 📞 Helpdesk UM-PTKIN

- **Phone**: 081578901030
- **WA**: 081578901030
- **Email**: info@um.ptkin.ac.id
- **Website**: https://um.ptkin.ac.id

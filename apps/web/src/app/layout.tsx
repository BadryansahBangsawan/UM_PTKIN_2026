import type { Metadata } from "next";

import { Poppins } from "next/font/google";

import "../index.css";
import Providers from "@/components/providers";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "UM-PTKIN 2026 - Ujian Masuk Perguruan Tingssgi Keagamaan Islam Negeri",
  description:
    "Pendaftaran Ujian Masuk Perguruan Tinggi Keagamaan Islam Negeri 2026. Informasi lengkap tentang persyaratan, jadwal, biaya, dan alur pendaftaran.",
  icons: {
    icon: "/Logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`} suppressHydrationWarning>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main
              className="flex-1 pt-[var(--navbar-height)]"
              style={{ paddingTop: 'var(--navbar-height)' }}
            >
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Blog da Lívia — Entre Bits e Primeiros Passos",
  description: "Meu diário de bordo na tecnologia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="border-b border-[var(--color-ring)] bg-white/70 backdrop-blur">
          <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">
            <Link href="/" className="font-semibold">
              Blog da Lívia — Meu diário de bordo na tecnologia 💻
            </Link>
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-[var(--color-muted)] hover:text-[var(--color-mauve)]"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-[var(--color-muted)] hover:text-[var(--color-mauve)]"
              >
                Sobre
              </Link>
            </div>
          </nav>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>

        <footer className="border-t border-[var(--color-ring)]">
          <div
            className="max-w-7xl mx-auto px-4 py-6 text-center text-sm"
            style={{ color: "var(--color-muted)" }}
          ></div>
        </footer>
      </body>
    </html>
  );
}

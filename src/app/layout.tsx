import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CaloIO — Suivi nutrition simple et privé",
  description:
    "Suivez vos calories, macros, hydratation et jeûne intermittent. Aucun compte requis. Vos données restent sur votre appareil.",
  openGraph: {
    title: "CaloIO — Suivi nutrition simple et privé",
    description:
      "Suivez vos calories, macros, hydratation et jeûne intermittent. Aucun compte requis.",
    type: "website",
  },
};

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-bold tracking-tight">
          Calo<span className="text-[var(--color-accent)]">IO</span>
        </a>
        <nav className="flex items-center gap-6 text-sm text-[var(--color-text-secondary)]">
          <a href="/#features" className="hover:text-white transition-colors">
            Fonctionnalités
          </a>
          <a href="/privacy" className="hover:text-white transition-colors">
            Confidentialité
          </a>
          <a href="/support" className="hover:text-white transition-colors">
            Support
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="text-lg font-bold">
              Calo<span className="text-[var(--color-accent)]">IO</span>
            </p>
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              Suivi nutrition simple et privé.
            </p>
          </div>
          <div className="flex gap-12 text-sm text-[var(--color-text-secondary)]">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-white">Légal</p>
              <a href="/privacy" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Conditions d&apos;utilisation
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-white">Aide</p>
              <a href="/support" className="hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
        <p className="mt-10 text-xs text-[var(--color-text-secondary)]">
          &copy; {new Date().getFullYear()} CaloIO. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main className="pt-[73px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-32 md:py-44">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.08),transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 inline-block rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5 text-xs font-medium text-[var(--color-accent)]">
            100% privé &middot; Aucun compte requis
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Votre nutrition,
            <br />
            <span className="text-[var(--color-accent)]">simplifiée.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--color-text-secondary)]">
            Suivez vos calories, macros, hydratation et jeûne intermittent — le
            tout sans compte, sans cloud. Vos données restent sur votre
            appareil.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="https://apps.apple.com"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-black transition-transform hover:scale-105"
            >
              <svg className="h-5 w-5" viewBox="0 0 384 512" fill="currentColor">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-62.6 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              App Store
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Tout ce qu&apos;il vous faut
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-[var(--color-text-secondary)]">
            Des fonctionnalités essentielles, sans superflu.
          </p>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="📊"
              title="Suivi des macros"
              description="Calories, protéines, glucides, lipides, fibres — tout est suivi automatiquement."
            />
            <FeatureCard
              icon="📷"
              title="Scan de codes-barres"
              description="Scannez un produit pour retrouver instantanément ses informations nutritionnelles."
            />
            <FeatureCard
              icon="💧"
              title="Hydratation"
              description="Suivez votre consommation d'eau quotidienne et atteignez vos objectifs."
            />
            <FeatureCard
              icon="⏱"
              title="Jeûne intermittent"
              description="Gérez vos sessions de jeûne avec un timer intuitif et un historique complet."
            />
            <FeatureCard
              icon="🎯"
              title="Objectifs personnalisés"
              description="Calculez vos besoins avec l'équation de Mifflin-St Jeor et ajustez vos macros."
            />
            <FeatureCard
              icon="🔒"
              title="100% privé"
              description="Aucun compte, aucun cloud. Toutes vos données restent stockées localement."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-12 text-center md:p-16">
            <h2 className="text-3xl font-bold">
              Prêt à reprendre le contrôle ?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[var(--color-text-secondary)]">
              Téléchargez CaloIO gratuitement et commencez à suivre votre
              nutrition dès aujourd&apos;hui.
            </p>
            <a
              href="https://apps.apple.com"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-6 py-3 font-semibold text-black transition-transform hover:scale-105"
            >
              Télécharger sur l&apos;App Store
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:bg-[var(--color-surface-hover)]">
      <span className="text-2xl">{icon}</span>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {description}
      </p>
    </div>
  );
}

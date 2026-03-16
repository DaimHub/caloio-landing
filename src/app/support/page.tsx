import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — CaloIO",
};

export default function Support() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold md:text-4xl">Support</h1>
      <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
        Besoin d&apos;aide ? Nous sommes là pour vous.
      </p>

      <div className="mt-12 space-y-8">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
          <h2 className="text-xl font-semibold">Contactez-nous</h2>
          <p className="mt-3 text-[var(--color-text-secondary)]">
            Pour toute question, problème technique ou suggestion, envoyez-nous
            un email :
          </p>
          <a
            href="mailto:contact@caloio.app"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-5 py-2.5 font-semibold text-black transition-transform hover:scale-105"
          >
            contact@caloio.app
          </a>
        </div>

        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
          <h2 className="text-xl font-semibold">Questions fréquentes</h2>
          <div className="mt-6 space-y-6 text-[var(--color-text-secondary)]">
            <div>
              <h3 className="font-medium text-white">
                Mes données sont-elles sauvegardées dans le cloud ?
              </h3>
              <p className="mt-1">
                Non. Toutes vos données sont stockées localement sur votre
                appareil. Nous n&apos;avons aucun accès à vos informations
                nutritionnelles.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-white">
                Comment exporter mes données ?
              </h3>
              <p className="mt-1">
                Allez dans Paramètres &gt; Exporter les données. Vous pouvez
                choisir la période et le type de données à exporter au format
                CSV.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-white">
                Le scan de codes-barres ne fonctionne pas
              </h3>
              <p className="mt-1">
                Assurez-vous d&apos;avoir autorisé l&apos;accès à la caméra dans
                les réglages iOS &gt; CaloIO &gt; Caméra. Si le produit
                n&apos;est pas reconnu, il se peut qu&apos;il ne soit pas encore
                dans la base Open Food Facts.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-white">
                Comment supprimer toutes mes données ?
              </h3>
              <p className="mt-1">
                La suppression de l&apos;application supprime toutes les données
                associées, car elles sont stockées uniquement sur votre appareil.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-white">
                L&apos;application est-elle gratuite ?
              </h3>
              <p className="mt-1">
                Oui, CaloIO est entièrement gratuite et sans publicité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

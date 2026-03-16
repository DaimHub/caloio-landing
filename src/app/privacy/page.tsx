import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — CaloIO",
};

export default function Privacy() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold md:text-4xl">
        Politique de confidentialité
      </h1>
      <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
        Dernière mise à jour : 16 mars 2026
      </p>

      <div className="mt-12 space-y-10 text-[var(--color-text-secondary)] leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">
        <section>
          <h2>Introduction</h2>
          <p>
            CaloIO (&laquo;&nbsp;l&apos;Application&nbsp;&raquo;) est une
            application de suivi nutritionnel conçue avec la confidentialité au
            cœur de son fonctionnement. Cette politique explique comment nous
            traitons vos informations.
          </p>
        </section>

        <section>
          <h2>Données collectées</h2>
          <p>
            CaloIO est une application &laquo;&nbsp;local-first&nbsp;&raquo;.
            Toutes vos données personnelles (repas, objectifs, consommation
            d&apos;eau, sessions de jeûne) sont stockées <strong className="text-white">exclusivement
            sur votre appareil</strong> et ne sont jamais envoyées vers nos
            serveurs.
          </p>
          <p className="mt-3">
            Les données stockées localement incluent :
          </p>
          <ul>
            <li>Vos entrées de repas et aliments sauvegardés</li>
            <li>Vos recettes personnalisées</li>
            <li>Vos logs d&apos;hydratation</li>
            <li>Vos sessions de jeûne intermittent</li>
            <li>Vos objectifs et paramètres de macros</li>
            <li>Vos préférences de notifications</li>
          </ul>
        </section>

        <section>
          <h2>Données d&apos;analyse</h2>
          <p>
            Nous utilisons PostHog, un service d&apos;analyse hébergé dans
            l&apos;Union Européenne (eu.i.posthog.com), pour collecter des
            données d&apos;utilisation anonymisées. Ces données nous aident à
            comprendre comment l&apos;application est utilisée et à améliorer
            l&apos;expérience utilisateur.
          </p>
          <p className="mt-3">Les données d&apos;analyse incluent :</p>
          <ul>
            <li>Événements de navigation dans l&apos;application</li>
            <li>Interactions avec les fonctionnalités (sans contenu personnel)</li>
            <li>Informations techniques sur l&apos;appareil (modèle, version iOS)</li>
          </ul>
          <p className="mt-3">
            Les textes et contenus personnels sont masqués dans les replays de
            session. Aucune donnée nutritionnelle personnelle n&apos;est
            transmise.
          </p>
        </section>

        <section>
          <h2>Services tiers</h2>
          <p>
            L&apos;application utilise l&apos;API d&apos;
            <strong className="text-white">Open Food Facts</strong> pour
            rechercher les informations nutritionnelles des produits alimentaires
            via scan de codes-barres ou recherche textuelle. Ces requêtes
            contiennent uniquement le code-barres ou le terme de recherche —
            aucune donnée personnelle n&apos;est partagée.
          </p>
        </section>

        <section>
          <h2>Apple Health</h2>
          <p>
            Si vous choisissez d&apos;activer la synchronisation avec Apple
            Health, l&apos;application peut lire et écrire des données
            nutritionnelles et d&apos;activité. Cette synchronisation est
            entièrement optionnelle et contrôlée par les autorisations iOS.
            Aucune donnée Health n&apos;est envoyée à nos serveurs.
          </p>
        </section>

        <section>
          <h2>Autorisations de l&apos;appareil</h2>
          <ul>
            <li>
              <strong className="text-white">Caméra :</strong> utilisée uniquement pour
              scanner les codes-barres des produits alimentaires et prendre des
              photos de repas.
            </li>
            <li>
              <strong className="text-white">Photothèque :</strong> utilisée pour
              sélectionner des images de repas depuis votre galerie.
            </li>
            <li>
              <strong className="text-white">Notifications :</strong> utilisées pour
              les rappels de repas, d&apos;hydratation et de jeûne.
            </li>
          </ul>
        </section>

        <section>
          <h2>Conservation des données</h2>
          <p>
            Vos données sont conservées sur votre appareil tant que
            l&apos;application est installée. La suppression de
            l&apos;application entraîne la suppression de toutes les données
            locales. Vous pouvez également exporter vos données au format CSV
            depuis les paramètres de l&apos;application.
          </p>
        </section>

        <section>
          <h2>Sécurité</h2>
          <p>
            Vos données étant stockées localement sur votre appareil, elles
            bénéficient des protections de sécurité intégrées à iOS (chiffrement
            du stockage, verrouillage de l&apos;appareil, etc.).
          </p>
        </section>

        <section>
          <h2>Données des enfants</h2>
          <p>
            CaloIO n&apos;est pas destinée aux enfants de moins de 13 ans. Nous
            ne collectons pas sciemment de données auprès d&apos;enfants.
          </p>
        </section>

        <section>
          <h2>Modifications</h2>
          <p>
            Nous pouvons mettre à jour cette politique de confidentialité. Toute
            modification sera publiée sur cette page avec une date de mise à
            jour révisée.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Pour toute question concernant cette politique de confidentialité,
            contactez-nous à :{" "}
            <a
              href="mailto:contact@caloio.app"
              className="text-[var(--color-accent)] hover:underline"
            >
              contact@caloio.app
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}

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
        Dernière mise à jour : 24 juillet 2026
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
            Elle n&apos;a ni compte utilisateur ni serveur. Toutes vos données
            personnelles sont stockées{" "}
            <strong className="text-white">
              exclusivement sur votre appareil
            </strong>{" "}
            et ne sont jamais envoyées vers nos serveurs.
          </p>
          <p className="mt-3">Les données stockées localement incluent :</p>
          <ul>
            <li>Vos entrées de repas, aliments sauvegardés et combos</li>
            <li>Vos logs d&apos;hydratation</li>
            <li>Vos sessions de jeûne intermittent</li>
            <li>Votre historique de poids et vos mensurations corporelles</li>
            <li>Vos photos de repas et vos photos de progression corporelle</li>
            <li>Vos objectifs et paramètres de macros</li>
            <li>Vos préférences de notifications</li>
          </ul>
        </section>

        <section>
          <h2>Données d&apos;analyse</h2>
          <p>
            Nous utilisons PostHog, un service d&apos;analyse hébergé dans
            l&apos;Union Européenne (eu.i.posthog.com), pour comprendre comment
            l&apos;application est utilisée et corriger les problèmes. Cette
            collecte est{" "}
            <strong className="text-white">
              activée par défaut et désactivable à tout moment
            </strong>{" "}
            dans Réglages &rsaquo; Confidentialité &rsaquo; Partager les données
            d&apos;usage. La désactiver arrête immédiatement toute collecte.
          </p>
          <p className="mt-3">Les événements enregistrent :</p>
          <ul>
            <li>
              Les écrans consultés et les fonctionnalités utilisées — donc{" "}
              <strong className="text-white">ce que vous faites</strong>, jamais{" "}
              <strong className="text-white">ce que vous saisissez</strong>.
            </li>
            <li>
              Les noms d&apos;aliments, termes de recherche, codes-barres, poids,
              calories et macros sont retirés avant l&apos;envoi.
              L&apos;application applique pour cela une liste blanche de champs
              autorisés, plutôt que de faire confiance à chaque écran.
            </li>
            <li>
              Des informations techniques sur l&apos;appareil (modèle, version du
              système).
            </li>
          </ul>
          <p className="mt-3">
            Aucun nom, e-mail, numéro de téléphone, identifiant publicitaire ni
            localisation précise n&apos;est collecté. Les données d&apos;analyse
            sont rattachées à un identifiant aléatoire, pas à votre identité.
          </p>
          <p className="mt-3">
            <strong className="text-white">
              Enregistrements de session :
            </strong>{" "}
            PostHog enregistre également les écrans que vous parcourez. Les
            écrans affichant des données de santé — saisie du poids, mensurations
            corporelles, photos de progression et questions de profil de
            l&apos;onboarding — sont masqués et n&apos;apparaissent pas dans ces
            enregistrements. Les autres écrans, y compris votre journal
            alimentaire, y apparaissent tels qu&apos;ils s&apos;affichent à
            l&apos;écran. Si vous préférez qu&apos;aucun enregistrement ne soit
            réalisé, désactivez le partage des données d&apos;usage dans les
            réglages.
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
            aucune donnée personnelle n&apos;est partagée, et aucun identifiant
            ne vous y rattache.
          </p>
        </section>

        <section>
          <h2>Apple Health</h2>
          <p>
            Si vous choisissez d&apos;activer la synchronisation avec Apple
            Health, l&apos;application lit votre dépense énergétique active, vos
            pas et votre poids pour les afficher à côté de votre journal. Avec la
            synchronisation intelligente activée, elle écrit en retour les
            calories, protéines, glucides, lipides et l&apos;eau que vous
            enregistrez. Cet échange a lieu directement entre l&apos;application
            et le magasin Santé de votre appareil. Aucune donnée Health
            n&apos;est envoyée à nos serveurs ni à un tiers, et vous pouvez
            révoquer l&apos;autorisation à tout moment dans les réglages iOS.
          </p>
        </section>

        <section>
          <h2>Autorisations de l&apos;appareil</h2>
          <ul>
            <li>
              <strong className="text-white">Caméra :</strong> utilisée uniquement
              pour scanner les codes-barres, lire les étiquettes nutritionnelles
              et prendre des photos de repas ou de progression.
            </li>
            <li>
              <strong className="text-white">Photothèque :</strong> utilisée pour
              sélectionner des images depuis votre galerie.
            </li>
            <li>
              <strong className="text-white">Notifications :</strong> utilisées
              pour les rappels de repas, d&apos;hydratation et de jeûne.
            </li>
          </ul>
        </section>

        <section>
          <h2>Conservation des données</h2>
          <p>
            Vos données sont conservées sur votre appareil tant que
            l&apos;application est installée. La suppression de
            l&apos;application entraîne la suppression de toutes les données
            locales, sans possibilité de récupération de notre part. Vous pouvez
            exporter vos données au format CSV depuis Réglages &rsaquo; Données
            &rsaquo; Exporter, et nous vous recommandons de le faire avant tout
            changement d&apos;appareil.
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
          <h2>Vos droits</h2>
          <p>
            Votre journal se trouvant sur votre appareil, vous le détenez déjà :
            vous pouvez le consulter, le modifier, l&apos;exporter et
            l&apos;effacer depuis l&apos;application à tout moment. Pour les
            données d&apos;analyse décrites plus haut, vous pouvez retirer votre
            consentement via le réglage Confidentialité, et vous pouvez demander
            l&apos;accès à ces données ou leur suppression en nous contactant.
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
            modification sera publiée sur cette page avec une date de mise à jour
            révisée. Si le changement affecte ce qui quitte votre appareil, il
            sera également annoncé dans l&apos;écran des nouveautés de
            l&apos;application.
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

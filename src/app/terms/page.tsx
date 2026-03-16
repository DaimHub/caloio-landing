import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions d'utilisation — CaloIO",
};

export default function Terms() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold md:text-4xl">
        Conditions d&apos;utilisation
      </h1>
      <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
        Dernière mise à jour : 16 mars 2026
      </p>

      <div className="mt-12 space-y-10 text-[var(--color-text-secondary)] leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mb-3">
        <section>
          <h2>Acceptation des conditions</h2>
          <p>
            En téléchargeant ou en utilisant CaloIO
            (&laquo;&nbsp;l&apos;Application&nbsp;&raquo;), vous acceptez
            d&apos;être lié par les présentes conditions d&apos;utilisation. Si
            vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser
            l&apos;Application.
          </p>
        </section>

        <section>
          <h2>Description du service</h2>
          <p>
            CaloIO est une application de suivi nutritionnel qui vous permet de
            suivre vos calories, macronutriments, hydratation et sessions de
            jeûne intermittent. L&apos;application fonctionne principalement en
            mode hors ligne avec stockage local des données.
          </p>
        </section>

        <section>
          <h2>Utilisation acceptable</h2>
          <p>Vous vous engagez à :</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Utiliser l&apos;Application conformément aux lois en vigueur</li>
            <li>
              Ne pas tenter de désassembler, décompiler ou rétro-ingéniérer
              l&apos;Application
            </li>
            <li>
              Ne pas utiliser l&apos;Application à des fins illégales ou non
              autorisées
            </li>
          </ul>
        </section>

        <section>
          <h2>Avertissement médical</h2>
          <p>
            CaloIO est un outil de suivi informatif uniquement.
            L&apos;Application <strong className="text-white">ne fournit pas de
            conseils médicaux, diététiques ou nutritionnels</strong>.
            Consultez toujours un professionnel de santé qualifié avant de
            modifier votre alimentation ou de commencer un programme de jeûne.
          </p>
        </section>

        <section>
          <h2>Données nutritionnelles</h2>
          <p>
            Les informations nutritionnelles des produits proviennent de la base
            de données Open Food Facts, une base collaborative. Bien que nous
            nous efforcions d&apos;assurer leur exactitude, nous ne garantissons
            pas que ces données soient complètes, exactes ou à jour.
          </p>
        </section>

        <section>
          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;Application et son contenu original, ses fonctionnalités et
            son design sont la propriété de CaloIO et sont protégés par les lois
            sur la propriété intellectuelle.
          </p>
        </section>

        <section>
          <h2>Limitation de responsabilité</h2>
          <p>
            CaloIO est fournie &laquo;&nbsp;en l&apos;état&nbsp;&raquo;, sans
            garantie d&apos;aucune sorte. En aucun cas, CaloIO ne pourra être
            tenu responsable de dommages directs, indirects, accessoires ou
            consécutifs résultant de l&apos;utilisation ou de
            l&apos;impossibilité d&apos;utiliser l&apos;Application.
          </p>
        </section>

        <section>
          <h2>Modifications</h2>
          <p>
            Nous nous réservons le droit de modifier ces conditions à tout
            moment. Les modifications prendront effet dès leur publication sur
            cette page.
          </p>
        </section>

        <section>
          <h2>Droit applicable</h2>
          <p>
            Les présentes conditions sont régies par le droit français. Tout
            litige sera soumis à la juridiction des tribunaux compétents en
            France.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Pour toute question, contactez-nous à :{" "}
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

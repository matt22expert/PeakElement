# 🏆 Votez pour le meilleur élément

Application web permettant aux visiteurs de voter (3 votes chacun, à répartir
librement) pour l'élément chimique qu'ils préfèrent, avec classement en direct,
tableau périodique interactif des 118 éléments et statistiques globales.

Stack : **React + TypeScript + Tailwind CSS + Supabase + Vercel**.

---

## 1. Structure du projet

```
votez-meilleur-element/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── .env.example
├── src/
│   ├── main.tsx
│   ├── App.tsx              # toute l'application (accueil, top 10,
│   │                         # tableau périodique, modale élément,
│   │                         # classement complet, statistiques)
│   ├── index.css
│   ├── data/
│   │   └── elements.ts      # les 118 éléments (nom, symbole, catégorie…)
│   └── lib/
│       └── supabase.ts      # client Supabase + logique de vote
└── supabase/
    ├── schema.sql           # tables, fonction de vote atomique, RLS
    └── seed.sql             # insertion des 118 éléments
```

---

## 2. Installation locale

```bash
npm install
cp .env.example .env.local
# puis renseignez .env.local avec vos identifiants Supabase (étape 3)
npm run dev
```

L'application est alors disponible sur `http://localhost:5173`.

---

## 3. Configuration de Supabase

1. Créez un projet sur [supabase.com](https://supabase.com).
2. Dans **SQL Editor**, exécutez dans l'ordre :
   1. Le contenu de `supabase/schema.sql` (tables `elements`, `voters`,
      `vote_events`, fonction `cast_vote`, règles RLS).
   2. Le contenu de `supabase/seed.sql` (insertion des 118 éléments).
3. Dans **Project Settings → API**, récupérez :
   - `Project URL` → `VITE_SUPABASE_URL`
   - `anon public` key → `VITE_SUPABASE_ANON_KEY`
4. Renseignez ces deux valeurs dans `.env.local` (en local) et dans les
   variables d'environnement de votre projet Vercel (en production).

### Comment le système de vote empêche la triche

- Chaque visiteur reçoit un `voter_id` (UUID) stocké dans son navigateur
  (`localStorage`) et enregistré côté serveur avec `remaining = 3`.
- Voter appelle la fonction PostgreSQL `cast_vote(voter_id, symbol)`, qui
  vérifie et décrémente `remaining` **de façon atomique côté serveur**
  (verrou de ligne `for update`), incrémente le compteur de l'élément, puis
  journalise l'événement.
- Rafraîchir la page ne réinitialise donc jamais les votes : le solde vit
  dans la base de données, pas dans le navigateur.
- Les règles RLS interdisent toute mise à jour directe des tables `voters`
  et `elements` depuis le client : seule la fonction `cast_vote` (en mode
  `security definer`) peut les modifier.

> Pour une protection renforcée contre un utilisateur qui effacerait son
> `localStorage` pour revoter, vous pouvez ajouter une contrainte
> supplémentaire côté Supabase (ex. limite par adresse IP via une Edge
> Function, ou authentification anonyme Supabase Auth).

---

## 4. Déploiement sur Vercel

1. Poussez ce dossier sur un dépôt GitHub/GitLab.
2. Sur [vercel.com](https://vercel.com), cliquez sur **Add New → Project**
   et importez le dépôt.
3. Vercel détecte Vite automatiquement :
   - Build Command : `npm run build`
   - Output Directory : `dist`
4. Dans **Settings → Environment Variables**, ajoutez :
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. Cliquez sur **Deploy**. Votre site est en ligne à l'URL fournie par Vercel.

---

## 5. Notes

- Les 118 éléments (nom, symbole, numéro atomique, catégorie, position dans
  le tableau, description) sont définis dans `src/data/elements.ts` et repris
  dans `supabase/seed.sql`.
- Le design (tableau de bord type « classement e-sport », tableau périodique
  coloré par famille, animations de survol) est entièrement dans `src/App.tsx`
  et peut être ajusté sans toucher à la logique de vote.
- Une version de démonstration interactive et immédiatement testable de
  cette application (sans installation) est fournie séparément.

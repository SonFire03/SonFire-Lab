# SonFire Lab

Laboratoire web personnel de Sofiane Dehimi : outils de navigateur, mémo Linux interactif, mini jeux, portfolio et générateurs créatifs. « Des outils utiles. Des idées moins sérieuses. » Le site est statique, en français, et les saisies restent dans le navigateur.

## Développement

Prérequis : Node.js 20 ou plus récent et npm.

```sh
npm ci
npm run dev
```

Vérifications et build : `npm run typecheck`, `npm run lint`, `npm test`, `npm run build`. Le build de production est généré dans `dist/`; `npm run preview` permet de le consulter localement.

## Organisation

- `src/shell/` : navigation, accueil, mémo et portfolio.
- `src/tools/`, `src/games/`, `src/generators/` : interfaces chargées à la demande.
- `src/lib/core.ts` : fonctions métier indépendantes de l’interface.
- `src/data/` : catalogue Linux, projets portfolio.
- `src/style.css` : thèmes, composants et responsive.
- `public/` : favicon et visuel de partage.

Ajout d’un outil : ajouter les calculs dans `src/lib/core.ts` si réutilisables, créer son formulaire dans `src/tools/Tools.tsx`, puis l’inscrire dans `toolNames` dans `src/shell/App.tsx`. Ajout d’une fiche Linux : compléter `rows` dans `src/data/linux.ts` avec commande, objectif, syntaxe, exemple, options et niveau de prudence. Ajout d’une question : ajouter une entrée à `quiz` dans `src/games/Games.tsx` avec une réponse correcte unique et une explication. Ajout d’un projet : modifier `src/data/projects.ts`; ne renseigner que les capacités et technologies vérifiées dans le dépôt public.

## Données locales et confidentialité

Le navigateur conserve uniquement thème, favoris, records et historique limité des rubriques. Les enregistrements sont versionnés et les données illisibles sont ignorées. Les entrées d’outils, JSON, mots de passe générés, fichiers, empreintes et valeurs réseau ne sont pas sauvegardés automatiquement. La réinitialisation en pied de page demande confirmation. Ces données ne sont pas synchronisées. Les générateurs et tous les outils fonctionnent localement.

## GitHub Pages

Vite utilise la base `/SonFire-Lab/`; le routage est par hash. Le workflow `.github/workflows/pages.yml` vérifie les pull requests sans publier, et déploie après un push sur `main`. Si votre branche par défaut porte un autre nom, mettez à jour `branches` dans le workflow.

Dans les réglages du dépôt GitHub, ouvrez **Settings → Pages** et choisissez **GitHub Actions** comme source de publication. Après le premier workflow vert, le site sera disponible à l’adresse : <https://sonfire03.github.io/SonFire-Lab/>.

Le dossier Git présent dans l’environnement était vide et en lecture seule; aucun commit ni déploiement n’a été effectué depuis cet environnement.

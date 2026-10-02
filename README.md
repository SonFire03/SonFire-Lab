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
- `src/data/` : catalogue Linux (base et fiches complémentaires), projets et contenus portfolio vérifiés.
- `src/lib/generators.ts` : conversions de couleurs et génération de styles testées.
- `src/style.css` : thèmes, composants et responsive.
- `public/` : favicon, visuel de partage et illustration PNG transparente du moustique.

Ajout d’un outil : ajouter les calculs dans `src/lib/core.ts` si réutilisables, créer son formulaire dans `src/tools/Tools.tsx`, puis l’inscrire dans `toolNames` dans `src/shell/App.tsx`. Ajout d’une fiche Linux : compléter `src/data/linux-extra.ts` en donnant catégorie, syntaxe, options, prérequis et niveau de prudence. Ajout d’une question : ajouter une entrée à `quiz` dans `src/games/Games.tsx` avec une réponse correcte unique et une explication. Ajout d’un projet : modifier `src/data/projects.ts`; ne renseigner que les capacités et technologies vérifiées dans le dépôt public.

Pour ajouter un générateur, ajouter son identifiant et son nom au catalogue `gens` dans `src/shell/App.tsx`, puis router son interface dans `src/generators/GeneratorRouter.tsx`. Les fonctions de calcul réutilisables vont dans `src/lib/` avec leurs tests Vitest.

## Données locales et confidentialité

Le navigateur conserve uniquement thème, favoris, records et historique limité des rubriques. Les enregistrements sont versionnés et les données illisibles sont ignorées. Les entrées d’outils, JSON, mots de passe générés, fichiers, empreintes et valeurs réseau ne sont pas sauvegardés automatiquement. La réinitialisation en pied de page demande confirmation. Ces données ne sont pas synchronisées. Les générateurs et tous les outils fonctionnent localement.

## GitHub Pages

Vite utilise la base `/SonFire-Lab/`; le routage est par hash. Le workflow `.github/workflows/pages.yml` vérifie les pull requests sans publier et déploie après un push sur la branche par défaut actuelle `codex/sonfire-lab`. Si la branche par défaut change, mettez à jour `branches` dans le workflow.

Dans les réglages du dépôt GitHub, ouvrez **Settings → Pages** et choisissez **GitHub Actions** comme source de publication. Après le premier workflow vert, le site sera disponible à l’adresse : <https://sonfire03.github.io/SonFire-Lab/>.

Les projets et certificats TryHackMe présentés sont sélectionnés depuis les README des dépôts publics et la page publique des certificats de Sofiane. La liste est volontairement éditoriale : le profil GitHub permet de consulter l’ensemble des dépôts.

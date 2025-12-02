# Portfolio - Tom Amaru

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)

Bienvenue sur le repository de mon portfolio personnel. Ce site présente mon parcours, mes compétences et les projets que j'ai réalisés durant ma formation en Bachelor Informatique à Ynov Campus Aix-en-Provence.

🌐 **Voir le site en ligne :** [amarutom.vercel.app](https://amarutom.vercel.app)

## 👤 À propos

Je m'appelle **Tom AMARU**, je suis étudiant en 2ème année de Bachelor Informatique. Passionné par le développement web et logiciel, ce portfolio a été conçu pour mettre en avant mon profil polyvalent et ma rigueur.

Je suis actuellement à la recherche :

- D'un **stage de 2 mois** (juin à août).
- D'une **alternance** pour la rentrée de septembre (Bac+3).

## 🛠️ Stack Technique

Ce projet a été construit avec les dernières technologies du développement web moderne :

- **Framework :** [Next.js 16](https://nextjs.org/) (App Router)
- **Langage :** [TypeScript](https://www.typescriptlang.org/)
- **UI/Styling :** [Tailwind CSS 4](https://tailwindcss.com/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Animations :** [Framer Motion](https://www.framer.com/motion/) & [Typewriter Effect](https://github.com/TJ-Wu/react-typewriter-effect)
- **Fonctionnalités :**
  - Visualisation PDF avec `@react-pdf/renderer` & `react-pdf`
  - Formulaire de contact fonctionnel avec `@emailjs/browser`

## 📂 Contenu du Portfolio

L'application est structurée en plusieurs sections clés :

- **Hero :** Présentation animée.
- **À propos :** Mon parcours et mes soft skills.
- **Compétences :** Liste technique (Python, Golang, Next.js, Docker, SQL, etc.).
- **Projets :** Showcase interactif de mes réalisations.
- **Contact :** Formulaire direct et coordonnées.
- **CV :** Page dédiée pour visualiser et télécharger mon CV.

## 🚀 Installation et Démarrage

Si vous souhaitez lancer ce projet localement :

1.  **Cloner le repository :**

    ```bash
    git clone https://github.com/Shiokaa/portfolio.git
    ```

2.  **Installer les dépendances :**

    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Lancer le serveur de développement :**

    ```bash
    npm run dev
    ```

4.  Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## ⚠️ Configuration (EmailJS)

Le formulaire de contact utilise **EmailJS**.
Actuellement, les clés d'API (`ServiceID`, `TemplateID`, `PublicKey`) sont configurées directement dans le fichier `components/home/Contact.tsx`.

> **Note :** Si vous clonez ce projet pour votre propre usage, pensez à remplacer ces identifiants par les vôtres ou à configurer des variables d'environnement si vous souhaitez rendre le formulaire fonctionnel pour votre compte.

## © Droits d'utilisation

Ce code est fourni en open source. Vous êtes libre de vous en inspirer pour votre propre portfolio.

Cependant, si vous utilisez ce code ou une partie significative de celui-ci, **je vous demande de bien vouloir me créditer** en ajoutant un lien vers mon portfolio ([amarutom.vercel.app](https://amarutom.vercel.app)) ou vers mon profil GitHub.

---

_Réalisé par Tom Amaru - 2025_

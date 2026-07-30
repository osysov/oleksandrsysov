const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {
    navLinks.classList.toggle("active");
};

const languageIcon = document.querySelector("#language-icon");

let currentLanguage = "en";
const downloadEN = document.querySelector("#cv-btn-en")
const downloadFR = document.querySelector("#cv-btn-fr")

const translations = {
    en: {
        "nav-about": "About",
        "nav-experience": "Experience",
        "nav-projects": "Projects",
        "github-btn": "Visit Github",

        "about-hi": "Hi, I'm",
        "about-role": "Game Developer",

        "about-description":
            "An aspiring IT specialist eager for career growth and practical experience. Quick to learn new tools, approach tasks responsibly, and work well in a team. I am motivated to grow in a professional environment, learn from experienced colleagues, and contribute to the company.",

        "cv-btn-en": "Download CV",
        "contact-btn": "Contact",

        "experience-title": "Experience",

        "exp1-title": "IT Technician",
        "exp1-years": "4 Years",
        "exp1-description-1":
            "- Testing and functional verification of laptops and desktop computers prior to sale.",
        "exp1-description-2":
            "- Preparation of products for sale (installation, configuration, quality control)",
        "exp1-description-3":
            "- Fault diagnosis and management of defective devices, with referral to the maintenance team or repair where possible.",
        "exp1-description-4":
            "- Product photography to showcase items, online listings, and store communications.",

        "exp2-title": "To Be Continued...",

        "projects-title": "Projects",

        "project1-description":
            "The first game I've ever made. It was one of the projects for game development courses I attended when I was at school. A simple game about stacking square and round objects on top of each other. Unfortunately, its source code has been lost to time.",
        "project2-description":
            "Project Description. This is placeholder text.",
        "project-btn": "Github Repo",

        "nav-aboutf": "About",
        "nav-experiencef": "Experience",
        "nav-projectsf": "Projects",
        "copyright":
            "© All Rights Reserved | Oleksandr Sysov"
    },

    fr: {
        "nav-about": "À propos",
        "nav-experience": "Expérience",
        "nav-projects": "Projets",
        "github-btn": "Voir GitHub",

        "about-hi": "Bonjour, je suis",
        "about-role": "Développeur de jeux",

        "about-description":
            "Spécialiste informatique en devenir, motivé à acquérir de l'expérience pratique et à évoluer professionnellement. J'apprends rapidement de nouveaux outils, j'aborde les tâches avec sérieux et j'apprécie le travail en équipe. Je souhaite évoluer dans un environnement professionnel, apprendre auprès de collègues expérimentés et contribuer au succès de l'entreprise.",

        "cv-btn-fr": "Télécharger le CV",
        "contact-btn": "Contact",

        "experience-title": "Expérience",

        "exp1-title": "Technicien informatique",
        "exp1-years": "4 ans",
        "exp1-description-1":
            "- Test et vérification du bon fonctionnement des ordinateurs portables et fixes avant leur mise en vente.",
        "exp1-description-2":
            "- Préparation des produits destinés à la vente : installation, configuration et contrôle qualité.",
        "exp1-description-3":
            "- Diagnostic des pannes et gestion des appareils défectueux, avec transmission à l’équipe de maintenance ou réparation lorsque cela est possible.",
        "exp1-description-4":
            "- Prise de photos des produits pour valoriser les articles, créer des annonces en ligne et contribuer à la communication du magasin.",

        "exp2-title": "À suivre...",

        "projects-title": "Projets",

        "project1-description":
            "Description du projet. Ceci est un texte temporaire.",
        "project2-description":
            "Description du projet. Ceci est un texte temporaire.",
        "project-btn": "Dépôt GitHub",

        "nav-aboutf": "À propos",
        "nav-experiencef": "Expérience",
        "nav-projectsf": "Projets",
        "copyright":
            "© Tous droits réservés | Oleksandr Sysov"
    }
};

function setLanguage(lang) {
    document.documentElement.lang = lang;

    for (const id in translations[lang]) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = translations[lang][id];
        }
    }

    currentLanguage = lang;
    localStorage.setItem("language", lang);
}

languageIcon.addEventListener("click", () => {
    setLanguage(currentLanguage === "en" ? "fr" : "en");
    downloadEN.classList.toggle("disabled");
    downloadFR.classList.toggle("active");
});

const savedLanguage = localStorage.getItem("language") || "en";
setLanguage(savedLanguage);

if (savedLanguage == "fr") {
    downloadEN.classList.toggle("disabled");
    downloadFR.classList.toggle("active");
}
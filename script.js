const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {
    navLinks.classList.toggle("active");
};

const languageIcon = document.querySelector("#language-icon");

let currentLanguage = "en";

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

        "cv-btn": "Download CV",
        "contact-btn": "Contact",

        "experience-title": "Experience",

        "exp1-title": "IT Technician",
        "exp1-years": "4 Years",
        "exp1-description":
            "Placeholder text. I probably should put a description of what I did there.",

        "exp2-title": "To Be Continued...",

        "projects-title": "Recent Projects",

        "project1-description":
            "Project Description. This is placeholder text.",
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

        "cv-btn": "Télécharger le CV",
        "contact-btn": "Contact",

        "experience-title": "Expérience",

        "exp1-title": "Technicien informatique",
        "exp1-years": "4 ans",
        "exp1-description":
            "Texte provisoire. Je devrais probablement décrire ce que j'ai réalisé à ce poste.",

        "exp2-title": "À suivre...",

        "projects-title": "Projets récents",

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
});

const savedLanguage = localStorage.getItem("language") || "en";
setLanguage(savedLanguage);
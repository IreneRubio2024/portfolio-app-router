"use client";

import { createContext, useState, useEffect } from "react";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [heroVersion, setHeroVersion] = useState("A");

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Mera",
      description:
        "Staff scheduling platform for small businesses — managers can build teams, assign shifts, and manage weekly employee schedules in one place.",
      image: "mera.png",
      url: "https://mera-5q2i-5ujktwvwu-irenes-projects-21de3997.vercel.app/",
      stack: ["Next.js", "React", "Tailwind", "Docker", "AWS"],
    },
    {
      id: 2,
      name: "E-commerce monorepo",
      description:
        "Full-stack e-commerce platform covering product catalogue, content management, and end-to-end shopping flows across a shared codebase.",
      image: "e.comerce.png",
      url: "https://e-commerce-monorepo-j4ysleskr-irenes-projects-21de3997.vercel.app/",
      stack: ["React", "Strapi", "Monorepo", "REST API"],
    },
    {
      id: 3,
      name: "Media DB",
      description:
        "Movie and TV discovery app with searchable listings, detail pages, and a clean browsing experience.",
      image: "mediaDB.png",
      url: "https://chas-amazon-news-site-main-5.vercel.app/movie",
      stack: ["React", "Routing", "REST API", "Responsive UI"],
    },
    {
      id: 4,
      name: "Oscar's 2025 Quiz",
      description:
        "Interactive quiz about the 2025 Oscar nominations — progressive questions, instant feedback, and score tracking.",
      image: "Oscars.webp",
      url: "https://quiz-seven-omega-89.vercel.app/",
      stack: ["React", "State Management", "UI Logic", "Responsive Design"],
    },
    {
      id: 5,
      name: "Gemini AI app",
      description:
        "AI-powered recipe generator — describe what you have and get tailored meal suggestions in seconds.",
      image: "Foody-Goody.png",
      url: "https://workshop-ai-website-theta.vercel.app/",
      stack: ["React", "AI API", "Async Flows", "UX States"],
    },
    {
      id: 6,
      name: "Take M Home",
      description:
        "Mobile marketplace for circular consumption — users offer items they no longer need, others browse, reserve, and arrange in-person pickup.",
      image: "take.png",
      imagePosition: "top",
      url: "https://take-m-home-4k1eqbdt2-irenes-projects-21de3997.vercel.app",
      stack: ["React Native", "Mobile-first", "P2P"],
      mobileOnly: true,
    },
  ]);

  const [techSkills, setTechSkills] = useState([
    { name: "Html 5", src: "/html.png" },
    { name: "JS", src: "/javascript.png" },
    { name: "React", src: "/react.png" },
    { name: "Node.js", src: "/nodejs.png" },
    { name: "CSS", src: "/css.png" },
    { name: "Git Hub", src: "/github.png" },
    { name: "Linux", src: "/image.png" },
    { name: "Express", src: "/express-logo.png" },
    { name: "TS", src: "/typesc.webp" },
    { name: "Next.js", src: "/Next.js.svg" },
    { name: "Docker", src: "/docker-mark-blue.png" },
    { name: "MySQL", src: "/Mysql-png.png" },
    { name: "Strapi", src: "/strapi.svg" },
    { name: "Tanstack", src: "/tanstack.png" },
    { name: "Angular", src: "/angular.svg" },
    { name: "Playwright", src: "/play.png" },
    { name: "Claude", src: "/claude.svg" },
    { name: "Codex", src: "/codex.svg" },
    { name: "Bitbucket", src: "/bitbucket.jpeg" },
    { name: "Jira", src: "/jira2.jpeg" },
    { name: "React Native", src: "/reactNative.png" },
  ]);

  // const [newProject, setNewProject] = useState({
  //   name: "",
  //   description: "",
  //   tech: "",
  //   link: "",
  // });

  // useEffect(() => {
  //   const storedProjects = localStorage.getItem("projects");
  //   const storedTechSkills = localStorage.getItem("techSkills");

  //   if (storedProjects) {
  //     setProjects(JSON.parse(storedProjects));
  //   }
  //   if (storedTechSkills) {
  //     setTechSkills(JSON.parse(storedTechSkills));
  //   } else {
  //     setTechSkills([
  //       { name: "Html 5", src: "/html.png" },
  //       { name: "JS", src: "/javascript.png" },
  //       { name: "React", src: "/react.png" },
  //       { name: "Node.js", src: "/nodejs.png" },
  //       { name: "CSS", src: "/css.png" },
  //       { name: "Git Hub", src: "/github.png" },
  //     ]);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("projects", JSON.stringify(projects));
  // }, [projects]);

  // useEffect(() => {
  //   localStorage.setItem("techSkills", JSON.stringify(techSkills));
  // }, [techSkills]);

  useEffect(() => {
    const saved = localStorage.getItem("heroVersionV2");
    if (saved === "A" || saved === "B") {
      setHeroVersion(saved);
    }
    // default is "A" (light) — no system preference fallback
  }, []);

  useEffect(() => {
    localStorage.setItem("heroVersionV2", heroVersion);
  }, [heroVersion]);

  function toggleHeroVersion() {
    setHeroVersion((current) => (current === "A" ? "B" : "A"));
  }

  function addProject(newProject) {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
  }

  function deleteProject(id) {
    setProjects(projects.filter((project) => project.id !== id));
  }

  function addSkill(newSkill) {
    setTechSkills([...techSkills, newSkill]);
  }

  function deleteSkill(skillName) {
    setTechSkills(techSkills.filter((s) => s.name !== skillName));
  }

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        setProjects,
        techSkills,
        setTechSkills,
        deleteSkill,
        addSkill,
        deleteProject,
        addProject,
        heroVersion,
        setHeroVersion,
        toggleHeroVersion,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;

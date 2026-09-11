export const projects = [
  {
    id: "kompetensprofilen",
    type: "caseStudy",
    label: "Exjobb / Degree Project",
    name: "Kompetensprofilen",
    summary:
      "Quality assurance and UX validation project completed during LIA at Arbetsformedlingen for Min kompetensprofil, a new Angular service for job seekers.",
    logo: "/images/ArbetsLogo.png",
    tagline: "Testing and evaluating the app experience",
    tags: [
      "Public service QA",
      "Angular frontend",
      "Playwright E2E",
      "Jira / Xray",
    ],
    sections: [
      {
        title: "Problem",
        body: "The team needed reliable QA coverage for a critical transition from the legacy profile flow to Min kompetensprofil, with focus on real user journeys and release quality.",
      },
      {
        title: "What I delivered",
        body: "I designed and executed 100+ test cases, documented bugs and UX inconsistencies in Jira/Xray with clear reproduction steps, and implemented an initial Playwright E2E validation flow.",
      },
      {
        title: "Outcome",
        body: "I surfaced and communicated high-priority cases (PRPO-345, PRPO-263, PRPO-313, PRPO-268), enabling clearer prioritization and improving release confidence from a user perspective.",
      },
    ],
  },
  {
    id: 1,
    type: "project",
    name: "Mera",
    description:
      "Staff scheduling platform for small businesses — managers can build teams, assign shifts, and manage weekly employee schedules in one place.",
    image: "/images/mera.png",
    url: "https://mera-5q2i.vercel.app/",
    stack: ["Next.js", "React", "Tailwind", "Docker", "AWS"],
  },
  {
    id: 2,
    type: "project",
    name: "E-commerce monorepo",
    description:
      "Full-stack e-commerce platform covering product catalogue, content management, and end-to-end shopping flows across a shared codebase.",
    image: "/images/e.comerce.png",
    url: "https://e-commerce-monorepo-web.vercel.app/",
    stack: ["React", "Strapi", "Monorepo", "REST API"],
  },
  {
    id: 3,
    type: "project",
    name: "Media DB",
    description:
      "Movie and TV discovery app with searchable listings, detail pages, and a clean browsing experience.",
    image: "/images/mediaDB.png",
    url: "https://chas-amazon-news-site-main-5.vercel.app/movie",
    stack: ["React", "Routing", "REST API", "Responsive UI"],
  },
  {
    id: 4,
    type: "project",
    name: "Oscar's 2025 Quiz",
    description:
      "Interactive quiz about the 2025 Oscar nominations — progressive questions, instant feedback, and score tracking.",
    image: "/images/Oscars.webp",
    url: "https://quiz-seven-omega-89.vercel.app/",
    stack: ["React", "State Management", "UI Logic", "Responsive Design"],
  },
  {
    id: 5,
    type: "project",
    name: "Gemini AI app",
    description:
      "AI-powered recipe generator — describe what you have and get tailored meal suggestions in seconds.",
    image: "/images/Foody-Goody.png",
    url: "https://workshop-ai-website-theta.vercel.app/",
    stack: ["React", "AI API", "Async Flows", "UX States"],
  },
  {
    id: 6,
    type: "project",
    name: "Take Me Home",
    description:
      "Mobile marketplace for circular consumption — users offer items they no longer need, others browse, reserve, and arrange in-person pickup.",
    image: "/images/take.png",
    imagePosition: "top",
    url: "https://take-m-home.vercel.app",
    stack: ["React Native", "Mobile-first", "P2P"],
    mobileOnly: true,
  },
];

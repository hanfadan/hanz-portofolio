import type {
  ExperienceEntry,
  HeroStat,
  ProjectEntry,
  ServiceEntry,
  SkillGroup,
} from "./types";

export const typingText =
  "Software Engineer | Web, Mobile & Scalable Backend Systems";

export const heroStats: HeroStat[] = [
  {
    value: "5+",
    label: "Professional Software Engineering Experience",
  },
  {
    value: "100+",
    label: "Delivered Across Freelance & Enterprise Environments",
  },
  {
    value: "Thousands",
    label: "Daily Users Served by Systems in Production",
  },
];

export const aboutParagraphs = [
  "I am a results-driven Software Engineer specializing in scalable web and mobile systems.",
  "My background in Computer Science and hands-on industry experience allows me to bridge the gap between business requirements and technical implementation.",
  "I do not just build features - I build systems that grow with the business.",
];

export const aboutHighlights = [
  "Large-scale e-commerce platforms",
  "High-traffic ordering systems",
  "Enterprise B2B services",
  "Automation tools and real-time systems",
  "Clean and maintainable architecture",
  "Performance optimization",
  "Long-term scalability",
  "Clear documentation and structured workflows",
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend Engineering",
    items: [
      "Java (Spring Boot), Go, Node.js",
      "REST API architecture & microservices",
      "Authentication & authorization systems",
      "Background jobs & queue processing",
      "Database design & optimization",
    ],
  },
  {
    title: "Frontend Engineering",
    items: [
      "Vue.js / Nuxt 3 (SPA & SSR)",
      "React & modern UI architecture",
      "Enterprise dashboards",
      "State management & performance tuning",
    ],
  },
  {
    title: "Mobile Development",
    items: [
      "Flutter",
      "React Native",
      "Android app development",
      "API-connected real-time mobile apps",
    ],
  },
  {
    title: "DevOps & Infrastructure",
    items: [
      "Docker & containerized deployment",
      "CI/CD pipeline configuration",
      "Git-based collaboration workflows",
      "Production monitoring & debugging",
    ],
  },
];

export const serviceEntries: ServiceEntry[] = [
  {
    title: "Scalable Web Applications",
    description:
      "Enterprise-ready web systems with clean architecture and maintainable code.",
  },
  {
    title: "Backend System Design",
    description:
      "API development, authentication systems, automation services, and microservices architecture.",
  },
  {
    title: "Mobile Applications",
    description:
      "Cross-platform mobile apps with strong backend integration and real-time capabilities.",
  },
  {
    title: "System Optimization & Refactoring",
    description:
      "Performance tuning, architecture improvement, and production debugging.",
  },
];

export const storyParagraphs = [
  "My journey in software development began during my university years through freelance and internship projects. Those early opportunities strengthened my foundation in HTML, CSS, JavaScript, and practical problem-solving for real users.",
  "As my scope expanded, I moved from small websites to full application development, including backend services with Node.js, Go, and Java, plus relational database work with MySQL and PostgreSQL.",
  "Today, I focus on building efficient and scalable systems that deliver measurable business value and reliable user experience.",
];

export const experienceEntries: ExperienceEntry[] = [
  {
    title: "Web Order Engineer - Alfagift (Global Loyalty Indonesia)",
    meta: "Full-time | May 2023 - Present | Kota Tangerang Selatan, Banten, Indonesia (On-site)",
    points: [
      "Built and maintained high-performance web ordering services used by thousands of daily users.",
      "Improved system reliability and frontend responsiveness.",
      "Integrated Vue-based frontend services with Go backend systems.",
      "Collaborated with backend, QA, and product teams to deliver stable production releases.",
    ],
    skills: "Vue.js, Go, Java",
  },
  {
    title: "Software Developer - Freelance",
    meta: "Remote | Mar 2020 - Present",
    points: [
      "Delivered 100+ web and mobile projects across client and freelance engagements.",
      "Built custom business systems for various operational needs.",
      "Provided academic technical mentoring and implementation guidance.",
      "Designed scalable backend architecture for startup and custom projects.",
    ],
  },
  {
    title: "Junior Programmer - DartMedia",
    meta: "Contract | Apr 2022 - Dec 2022 | West Jakarta, Jakarta, Indonesia (On-site)",
    points: [
      "Assisted in building client-focused enterprise applications.",
      "Resolved server-level production issues to maintain service continuity.",
      "Conducted data analysis to generate actionable business insights.",
      "Supported backend development using Spring Boot.",
    ],
    skills:
      "IT Hardware Support, Computer Hardware Troubleshooting, Spring Boot, Java",
  },
  {
    title: "Software Developer - Universitas Pakuan",
    meta: "Internship | Jul 2021 - Dec 2021 | Bogor, West Java, Indonesia (On-site)",
    points: [
      "Developed Android-based learning media applications for online learning.",
      "Analyzed data and generated application reports.",
      "Supported collaboration initiatives with partner schools.",
    ],
    skills: "Unity, Systems Analysis",
  },
  {
    title: "Web Developer - SMAN 10 Bogor",
    meta: "Internship | Jul 2019 - Sep 2019 | Bogor, West Java, Indonesia (On-site)",
    points: [
      "Created BDR rooms to support distance learning.",
      "Troubleshot network and computer connectivity in BDR rooms.",
      "Built an e-learning website as a learning medium.",
    ],
    skills: "HTML, PHP, Systems Analysis",
  },
];

export const projectEntries: ProjectEntry[] = [
  {
    id: "project1",
    title: "APO - Online Ordering Application",
    summary:
      "Designed and implemented checkout and tracking modules with optimized state management and stable API integration. Focused on performance, scalability, and seamless user experience.",
    imageSrc: "projects/apo-online-ordering.png",
    imageAlt: "APO online ordering application logo",
    role: "Web Developer (Vue.js)",
    stack: "Vue.js, Pinia, BootstrapVue, REST API",
    contributions: [
      "Developed ordering, checkout, and tracking UI end-to-end.",
      "Implemented efficient state management for smoother UX.",
      "Improved page load performance significantly.",
      "Collaborated with backend team for stable API integration.",
    ],
  },
  {
    id: "project2",
    title: "Alfagift - Online Grocery App",
    summary:
      "Contributed to a large-scale retail platform serving thousands of users daily with responsive UI modules and stable transaction flows.",
    imageSrc: "projects/alfagift-online-grocery.png",
    imageAlt: "Alfagift logo",
    role: "Frontend Engineer",
    stack: "JavaScript, Vue, REST API",
    contributions: [
      "Built key e-commerce features including product catalogue, cart, and promotions.",
      "Ensured responsive and consistent performance across devices.",
      "Supported UI/UX optimization for a large-scale retail web app.",
    ],
  },
  {
    id: "project3",
    title: "Bhargava Bot - Telegram Automation Tool",
    summary:
      "Built modular automation workflows with resilient API integration and task schedulers, designed for scalability and automated monitoring.",
    imageSrc: "projects/bhargava-bot-telegram.jpg",
    imageAlt: "Bhargava bot project preview",
    role: "Full-Stack Developer",
    stack: "Node.js, Telegram API",
    contributions: [
      "Created automation features including task handling and schedulers.",
      "Implemented stable error handling and improved API responsiveness.",
      "Built a modular, scalable bot structure.",
    ],
  },
  {
    id: "project4",
    title: "V-Fluid - Mobile App (Unity)",
    summary:
      "Developed sensor-based interactive mobile features optimized for low-spec devices, with focus on performance efficiency and real-time interaction.",
    imageSrc: "projects/v-fluid-mobile-app.png",
    imageAlt: "V-Fluid mobile app logo",
    role: "Mobile Developer",
    stack: "C#, Unity",
    contributions: [
      "Developed interactive mobile features using Unity engine.",
      "Integrated sensor-based interactions.",
      "Optimized performance for low-spec devices.",
    ],
  },
];

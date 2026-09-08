import EditoImg from '../images/Edito.png';
import AetherImg from '../images/Aether1.png';
import PasswordManger from '../images/PasswordManager.png';
import Netflix from '../images/Netflix.png';
import Spotify from '../images/Spotify.png';

export const Bio = {
  name: "Mayur Hegde",
  title: "Software Engineer",
  summary:
    "Full-stack Software Engineer with 2+ years of production experience shipping web applications in React, TypeScript, Angular, and Node.js on serverless AWS. At Simplilearn, contributed to platforms serving 70,000+ monthly learners and 2M+ registered users. Currently at Techpearl building B2B SaaS event systems with real-time analytics and secure API design.",
  github: "https://github.com/Mayuurrr",
  resume: "https://drive.google.com/file/d/13e3Lr2DcPQ1zXeNgk1q39xXiFM4NxaFp/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/mayurhegde",
  email: "mayurhegde11@gmail.com",
  phone: "+91 9019238681",
  location: "Bengaluru, Karnataka, India",
  stats: [
    { label: "Production Experience", value: "2+ Years", detail: "Full Stack & Cloud" },
    { label: "Flagship Projects", value: "5+ Shipped", detail: "Real-time & Distributed" },
    { label: "Core Architecture", value: "React & Node", detail: "TypeScript & Next.js" },
    { label: "Cloud & APIs", value: "AWS Serverless", detail: "Lambda, DynamoDB & REST" },
  ],
};

export const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "Java", "Python", "SQL"],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Angular",
      "Redux",
      "Tailwind CSS",
      "Vite",
      "Chart.js",
      "Socket.IO",
      "Performance Tuning",
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "JWT Auth",
      "Middleware",
    ],
  },
  {
    category: "Cloud & Databases",
    items: [
      "AWS Lambda",
      "DynamoDB",
      "API Gateway",
      "S3",
      "CloudWatch",
      "MongoDB",
      "MySQL",
      "Redis",
      "AES-256 Encryption",
    ],
  },
  {
    category: "Architecture & Systems",
    items: [
      "Microservices",
      "Serverless Architecture",
      "System Design",
      "Component Architecture",
      "Data Structures & Algorithms",
    ],
  },
  {
    category: "Tools & Testing",
    items: [
      "Git & Bitbucket",
      "Docker",
      "CI/CD",
      "Postman",
      "Jest",
      "React Testing Library",
      "Agile & Code Reviews",
    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: "Software Engineer",
    company: "Techpearl Software",
    subCompany: "B2B SaaS Event Management Platform",
    location: "Bengaluru, Karnataka",
    date: "June 2025 - Present",
    points: [
      "Engineered real-time event analytics dashboards with Chart.js on a serverless microservices architecture (AWS Lambda, DynamoDB), eliminating a ~25-minute manual data export process per event for the operations team.",
      "Secured PII for more than 20,000 attendee records in API payloads using AES-256 envelope encryption across DynamoDB event and registration tables.",
      "Built a reusable Angular select-data component in TypeScript adopted across 4 portal modules, eliminating duplicate implementations across the codebase.",
    ],
    skills: [
      "AWS Lambda",
      "DynamoDB",
      "API Gateway",
      "TypeScript",
      "Angular",
      "React",
      "Chart.js",
      "AES-256",
    ],
  },
  {
    id: 1,
    role: "Software Development Engineer 1",
    company: "Simplilearn",
    subCompany: "EdTech Platform (70K+ MAU, 2M+ Users)",
    location: "Bengaluru, Karnataka",
    date: "Aug 2024 - Jun 2025",
    points: [
      "Built the React course player and dashboard for a platform with 70,000+ monthly active learners and 2M+ registered users, applying Redux, code-splitting, lazy loading, and memoization to optimize rendering speed.",
      "Designed and built over 10 RESTful API endpoints in Express.js for course delivery, progress tracking, and certifications, introducing centralized error-handling middleware that standardized responses across 15 routes.",
      "Built the progress-tracking UI used across 15+ programs, tracking completion over sessions, practice, and capstones with unlock logic requiring 70%+ watch time and capstone validation.",
    ],
    skills: [
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Jest",
      "Performance",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer Intern",
    company: "SwipeGen",
    subCompany: "Enterprise SaaS & Web Solutions",
    location: "Bengaluru, Karnataka",
    date: "Feb 2024 - Jul 2024",
    points: [
      "Migrated 25+ admin panel pages and components to Tailwind CSS, eliminating recurring global CSS conflicts.",
      "Designed Express.js REST APIs for auth, content workflows, and dashboard operations, implementing JWT-based auth with token-validation middleware that secured 15+ protected routes.",
      "Cut bundle size by 40% and improved page-load performance using lazy-loaded routes, dynamic imports, and Vite dependency pruning.",
    ],
    skills: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "JWT Auth",
      "Vite",
      "REST APIs",
    ],
  },
];

export const education = [
  {
    id: 0,
    school: "Vemana Institute of Technology",
    degree: "Bachelor of Engineering in Computer Science",
    location: "Bengaluru, Karnataka",
    date: "2020 - 2024",
    grade: "Distinction",
    desc: "Built a strong foundation in Data Structures, Algorithms, OOP, Operating Systems, Computer Networks, and DBMS. Completed final-year capstone projects in Blockchain and AI/ML.",
    highlights: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Computer Networks"],
  },
  {
    id: 1,
    school: "St. Joseph's Pre-University College",
    degree: "Pre-University Education (PCMCs)",
    location: "Bengaluru, Karnataka",
    date: "2018 - 2020",
    grade: "First Class",
    desc: "Completed secondary education in Physics, Chemistry, Mathematics, and Computer Science, building the analytical foundation for a Computer Science engineering degree.",
    highlights: ["Computer Science", "Mathematics", "Physics", "Problem Solving"],
  },
];

export const projects = [
  {
    id: 0,
    title: "Real-Time Collaborative Code Editor",
    date: "2024",
    category: "Full Stack",
    subtitle: "WebSockets, Room Isolation & Presence Tracking",
    description:
      "A multi-user browser code editor supporting 4+ programming languages with live code synchronization over WebSockets, sub-50ms sync latency, and room-based session isolation.",
    points: [
      "Sub-50ms real-time sync latency via room-based Socket.IO architecture for session isolation and presence tracking.",
      "Sign-up-free architecture with no cap on concurrent rooms, last-write-wins conflict resolution, and Jest unit tests for edge cases.",
      "Client-side syntax highlighting, multi-language mode switching, and automatic session reconnection handling.",
    ],
    image: EditoImg,
    tags: ["React", "Vite", "Socket.IO", "Express.js", "Node.js", "Jest", "WebSockets"],
    github: "https://github.com/Mayuurrr/Edito",
    webapp: "https://edito-client.onrender.com/",
  },
  {
    id: 1,
    title: "E-Commerce Application",
    date: "2024",
    category: "Full Stack",
    subtitle: "MERN Commerce Engine with Optimistic State & JWT",
    description:
      "A full-stack commerce engine featuring JWT auth with secure refresh-token rotation, Redux store for optimistic cart updates, and compound MongoDB indexes cutting query latency by 2x.",
    points: [
      "Built with JWT auth and refresh-token rotation, using Redux for cart and order state management with optimistic UI updates.",
      "MongoDB document schema with compound indexes on high-frequency search fields, cutting query response time by 2x.",
      "Transactional checkout pipeline with inventory validation, server-side error mapping, and responsive catalog browsing.",
    ],
    image: AetherImg,
    tags: ["MERN", "React", "Redux", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
    github: "https://github.com/Mayuurrr/FcukEcommerce",
    webapp: "https://aether-essentials.vercel.app/",
  },
  {
    id: 2,
    title: "Modern Password Manager",
    date: "2023",
    category: "Full Stack",
    subtitle: "Encrypted Credential Vault with Instant Search",
    description:
      "A credential vault built with React, Vite, Express.js, and MongoDB. Securely encrypts, stores, and organizes credentials with fast search and instant clipboard copy.",
    points: [
      "Secure credential encryption with RESTful backend in Express.js and MongoDB.",
      "Clean dashboard interface with instant search and one-click clipboard copy.",
      "Modular schema design for user secrets with secure local memory clearing on inactivity.",
    ],
    image: PasswordManger,
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Vite"],
    github: "https://github.com/Mayuurrr/React-Passwd-Manager",
    webapp: "https://github.com/Mayuurrr/React-Passwd-Manager",
  },
  {
    id: 3,
    title: "Netflix Clone",
    date: "2023",
    category: "Frontend",
    subtitle: "Media Catalog Interface & Responsive Layout",
    description:
      "A responsive web application replicating the Netflix browse homepage, demonstrating semantic layout, media rows, and clean responsive CSS styling.",
    points: [
      "Structured video banner showcase with responsive category carousel rails.",
      "Modern CSS layout recreating the entertainment streaming experience across all viewports.",
      "Custom video modal preview playback and smooth hover preview micro-animations.",
    ],
    image: Netflix,
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    github: "https://github.com/Mayuurrr/Fcuk-Netflix",
    webapp: "https://github.com/Mayuurrr/Fcuk-Netflix",
  },
  {
    id: 4,
    title: "Spotify Clone",
    date: "2023",
    category: "Frontend",
    subtitle: "Web Audio Player & Playlist Architecture",
    description:
      "An interactive music streaming player simulating Spotify's core playback controls, album art presentation, volume normalization, and playlist queuing.",
    points: [
      "Interactive media controls with audio element state management, progress seeking, and volume control.",
      "Dynamic track list queueing, album artwork rendering, and responsive playback bar.",
      "Keyboard shortcut integration for play/pause and track navigation.",
    ],
    image: Spotify,
    tags: ["JavaScript", "HTML5 Audio", "CSS3", "Media Controls"],
    github: "https://github.com/Mayuurrr/Fcuk-Spotify",
    webapp: "https://github.com/Mayuurrr/Fcuk-Spotify",
  },
];

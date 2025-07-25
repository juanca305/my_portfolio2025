import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs_1,
  three,
  nextjs,
  expressjs,
  github,
  materialui,
  stripe,
  Dave_Gray_MERN,
  OpenAI,
  juanca_social1,
  memories,
  ecommerce_1,
  ecommerce_2,
  girl_gym,
  hoobank,
  gpt3,
  gericht,
  fitness_1,
  youtube,
  portfolio2,
  icon_experience_1,
  icon_experience_2,
  icon_experience_3,
  icon_experience_4,
  icon_react,
  icon_mern,
  icon_github,
  icon_meta,
  freecodecamp,
  icon_jsmastery,
  icon_book
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front end Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: materialui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: three,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "Stripe",
    icon: stripe,
  },
];



const experiences = [
  {
    title: "Frontend Developer & Open Source Contributor",
    company_name: "Freelance | GitHub",
    icon: icon_react, // Use one of your new icons here
    iconBg: "#383E56",
    date: "Jan 2015 – Present",
    points: [
      "Developing responsive React.js websites for small businesses and personal clients.",
      "Contributing to open-source projects, enhancing accessibility and performance.",
      "Implementing custom UI components using Tailwind CSS and Material UI.",
      "Translating Figma mockups into interactive, pixel-perfect interfaces.",
    ],
  },
  {
    title: "Learning Modern Web Technologies",
    company_name: "MERN Stack & Beyond",
    icon: icon_mern, // New icon showing learning stack or book
    iconBg: "#E6DEDD",
    date: "2022 – Present",
    points: [
      "Deepening knowledge in the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Building full-stack apps with Stripe, Sanity, Next.js, and APIs.",
      "Completing advanced courses by Dave Gray and JavaScript Mastery.",
      "Mastering Git, deployment (Vercel, Render), and real-world project structure.",
    ],
  },
  {
    title: "Volunteer Contributor",
    company_name: "Open Source | GitHub Community",
    icon: icon_github, // Community or GitHub-style icon
    iconBg: "#383E56",
    date: "2020 – Present",
    points: [
      "Fixed bugs and submitted PRs to popular community-driven repositories.",
      "Engaged in issue discussions, feature suggestions, and UI polishing tasks.",
      "Used tools like Postman, Thunder Client, and GitHub Projects.",
      "Advocated for clean, readable code and accessibility best practices.",
    ],
  },
  {
    title: "Web Developer (Full-Time)",
    company_name: "Government Sector | Havana, Cuba",
    icon: html, // Historical icon (briefcase or terminal)
    iconBg: "#E6DEDD",
    date: "Sept 1988 – June 2015",
    points: [
      "Created and maintained dynamic web applications using HTML, CSS, JS, jQuery, and ASP.NET.",
      "Collaborated with designers and backend developers to optimize UX.",
      "Participated in multiple government software projects and training sessions.",
      "Introduced OOP and C# practices within legacy environments.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Full Stack MERN Social App",
    date: "2024-10-01",
    description:
      "Frontend: React Router (Navigation), Formik + Yup (Form Validation), REDUX TOOLKIT (State). Light/Dark mode. BACKEND: Node.js, Express.js, Mongoose, JWT (Authentication).",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "jwt",
        color: "blue-text-gradient",
      },
    ],
    image: juanca_social1,
    source_code_link: "https://github.com/juanca305/Juanca_MERN_Social_V2",
    live_site_link: "https://juanca-mern-social.com/",
  },
  {
    name: "Dave Gray's 8 Hours Complete MERN Course",
    date: "2025-05-06",
    description:
      "Full Stack MERN Project. Redux Toolkit, JWT and bcrypt, endpoints with Express and MongoDB/Mongoose, secure routes, role-based access control, and API error handling.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "pink-text-gradient",
      },
    ],
    image: Dave_Gray_MERN,
    source_code_link: "https://github.com/juanca305/technotes",
    live_site_link: "https://technotes-fw2e.onrender.com/",
  },
  {
    name: "Full Stack OpenAI Image Generation",
    date: "2024-04-21",
    description:
      "Complete responsive Full Stack AI MERN Project with Tailwind CSS, OpenAI DALL - E model and Cloudinary. Deployed in Render.com. (05/07/2025). Backend: 'https://juanca-dall-e-app.onrender.com.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "cloudinary",
        color: "pink-text-gradient",
      },
    ],
    image: OpenAI,
    source_code_link: "https://github.com/juanca305/juanca_dall-E_app",
    live_site_link: "https://juanca-dall-e-app-1-frontend.onrender.com/",
  },

  {
    name: "Full Stack MERN Memories",
    date: "2024-04-30",
    description:
      "Full stack MERN (with MUI) social app completely functional. Some of the features are: Google and JWT Authentication, Pagination, Likes, CRUD, Filter and Search functionality and Light/Dark mode.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "materialui",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "jwt",
        color: "blue-text-gradient",
      },
    ],
    image: memories,
    source_code_link: "https://github.com/juanca305/juanca_memories",
    live_site_link: "https://juanca-memories.xyz/",
  },

  {
    name: "Full Stack E-Commerce App",
    date: "2024-01-09",
    description:
      "Full stack e-commerce app with complete functionality. I use React.js, Next.js, Prisma, Mongodb, Firebase, TypeScript, Tailwind and Stripe. It has Login/Register and Reviews features.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: ecommerce_1,
    source_code_link:
      "https://github.com/juanca305/ecommerce_prisma_mongodb_stripe",
    live_site_link: "https://juanca-shop.vercel.app/",
  },

  {
    name: "Fully Responsive E-Commerce App",
    date: "2023-11-17",
    description:
      "This is an e-commerce app with complete functionality shopping cart and payment gateaway. I use React.js, Next.js, Sanity and Stripe among other features.",
    tags: [
      {
        name: "sanity",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
    ],
    image: ecommerce_2,
    source_code_link: "https://github.com/juanca305/ecommerce_sanity_stripe",
    live_site_link: "https://ecommerce-sanity-stripe-nine-orpin.vercel.app/",
  },
  {
    name: "Fully Responsive Gym Exercises App",
    date: "2023-08-08",
    description:
      "React JS fitness website. I use reusable react components, react router dom version 6, React Hooks (useState, UseEffect), Material UI, Tailwind, RapidAPI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "materialui",
        color: "green-text-gradient",
      },
      {
        name: "rapidapi",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
    ],
    image: girl_gym,
    source_code_link: "https://github.com/juanca305/gym_exercises",
    live_site_link: "https://jc-mygym-app.website/",
  },
  {
    name: "Fully Responsive Modern Bank App",
    date: "2023-07-23",
    description:
      "React.JS financial business landing page built from a Figma design. Reusable functional components, animations, Gradients, Media Queries for responsiveness and Tailwindcss.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: hoobank,
    source_code_link: "https://github.com/juanca305/hoobank_jc",
    live_site_link: "https://juanca305.github.io/hoobank_jc/",
  },
  {
    name: "Fully Responsive Modern UI/UX App",
    date: "2023-07-22",
    description:
      "Modern landing page built with React.JS from a Figma design. Reusable functional components, transitions, Flex, Grid, Animations, Gradients.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: gpt3,
    source_code_link: "https://github.com/juanca305/gpt3_jc",
    live_site_link: "https://juanca305.github.io/gpt3_jc/",
  },
  {
    name: "Fully Responsive Modern Restaurant App",
    date: "2023-07-21",
    description:
      "Modern restaurant landing page with React JS. Reusable functional components, Figma, Flex, Grid, Animations, Transitions, Gradients, CSS BEM Model and Media Queries.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: gericht,
    source_code_link: "https://github.com/juanca305/gericht_restaurant",
    live_site_link: "https://juanca305.github.io/gericht_restaurant/",
  },
  {
    name: "Fully Responsive Modern Fitness App",
    date: "2023-07-24",
    description:
      "React JS Fitness landing page. Reusable React Components, react router dom version 6, react hooks, react icons Library, Media Queries, CSS variables, Flex and Grid.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: fitness_1,
    source_code_link: "https://github.com/juanca305/myfitnessreactapp",
    live_site_link: "https://fitness-app-ye99.onrender.com/",
  },
  {
    name: "Fully Responsive Youtube Clone",
    date: "2023-08-06",
    description:
      "React JS Youtube clone. Reusable React components, react router dom 6, react hooks, react player, MaterialUI 5, Rapid API, AXIOS, media queries, CSS variables, Flex and Grid.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "materialui",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/juanca305/youtube_myclone",
    live_site_link: "https://youtube-myclone.onrender.com",
  },
  {
    name: "Fully Responsive Portfolio App",
    date: "2023-08-06",
    description:
      "This project in Next.JS, contains a recopilation of all the projects I've built until now. I used styled components this time. Reusable React components, react router dom 6 and react hooks are used as well..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "styledcomponents",
        color: "green-text-gradient",
      },
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio2,
    source_code_link: "https://github.com/juanca305/my_portfolio_app_1",
    live_site_link: "https://jc-myportfolio.online/",
  },
];

const learningNow = [
  {
    title: "Framer Motion",
    description:
      "Advanced animations for React components with motion and transitions.",
    icon: "/icons/framer.svg",
    progress: 75,
  },
  {
    title: "Three.js",
    description: "3D scenes, lighting and object animation in the browser.",
    icon: "/icons/threejs.svg",
    progress: 65,
  },
  {
    title: "GSAP",
    description:
      "Powerful timeline-based animation system, especially for SVGs and DOM.",
    icon: "/icons/gsap.svg",
    progress: 30,
  },
  {
    title: "Spline",
    description:
      "Visual 3D design and real-time collaboration for web experiences.",
    icon: "/icons/spline.svg",
    progress: 15,
  },
  {
    title: "Blender",
    description:
      "Creating 3D assets, models and animations for integration into web apps.",
    icon: "/icons/blender.svg",
    progress: 15,
  },
  {
    title: "AWS",
    description:
      "Learning cloud deployments, S3, EC2, and Lambda to host fullstack apps.",
    icon: "/icons/aws.svg",
    progress: 25,
  },
];

const completedCourses = [
  {
    title: "JavaScript Full Course",
    icon: javascript,
    instructor: "Dave Gray",
    description:
      "Covered ES6+, DOM manipulation, async/await, and modular structure. Completed all practice tasks.",
  },

  {
    title: "React JS Full Course",
    icon: reactjs,
    instructor: "Dave Gray",
    description:
      "Learned core React concepts including hooks, props, and routing. Project-based learning. No official certificate.",
  },

  {
    title: "NodeJS Full Course",
    icon: nodejs,
    instructor: "Dave Gray",
    description:
      "Learned core React concepts including hooks, props, and routing. Project-based learning. No official certificate.",
  },

  {
    title: "MERN Stack Full Course",
    icon: icon_mern,
    instructor: "Dave Gray",
    description:
      "Learned core React concepts including hooks, props, and routing. Project-based learning. No official certificate.",
  },

  {
    title: "Responsive Web Design",
    icon: freecodecamp,
    instructor: "FreeCodeCamp",
    description:
      "Completed the entire course on layouts, Flexbox, Grid, and media queries.",
  },

   {
    title: "ReactJS and full stack projects",
    icon: icon_jsmastery, // Add a custom icon for JavaScript Mastery
    instructor: "JavaScript Mastery (YouTube)",
    description:
      "Followed several very instructive project-based tutorials. Learned advanced React patterns, API integration, and modern UI/UX design."
  },

  {
    title: "React and Javascript Mastery",
    icon: icon_book, // Add a book icon
    instructor: "O'ReillyFederico Kereki, Robin Wieruch, Rob Percival",
    description:
      " Read multiple books to master React, Javascript and performance techniques. Built real-world apps while applying key concepts."
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  learningNow,
  completedCourses,
};

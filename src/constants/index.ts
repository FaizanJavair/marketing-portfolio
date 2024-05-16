// Contains constant data for using in website
// ! Don't remove anything from here if not sure

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
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";
import fascom from "../assets/company/fascom.png"
import comstar from "../assets/company/comstar.png"
import gerry from "../assets/company/gerry.jpeg"
import cube from "../assets/company/cube.jpeg"
import supernet from "../assets/company/super.png"
import tw from "../assets/company/tw1.jpeg"
import tes from "../assets/company/tes.jpeg"
import business from "../assets/skills/1.png"
import crm from "../assets/skills/2.png"
import max from "../assets/skills/3.png"
import graph from "../assets/skills/4.png"
import account from "../assets/skills/5.png"
import cloud from "../assets/skills/6.png"
import retention from "../assets/skills/7.png"
import team from "../assets/skills/8.png"
// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  // {
  //   id: "source-code",
  //   title: "Source Code",
  //   link: "http://www.github.com/sanidhyy/3d-portfolio/",
  // },
] as const;

// Services
export const SERVICES = [
  {
    title: "Sales Planning & Analysis",
    icon: max,
  },
  {
    title: "Business Acquisition",
    icon: business,
  },
  {
    title: "Maximizing Sales",
    icon: graph,
  },
  {
    title: "Account Management",
    icon: account,
  },
  {
    title: "Technology & Corporate Sales",
    icon: cloud,
  },
  {
    title: "Customer Relationship Management",
    icon: crm,
  },
  {
    title: "Customer Retention",
    icon: retention,
  },
  {
    title: "Team Leadership & Mentoring",
    icon: team,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Sales Executive",
    company_name: "Fascom Limited",
    icon: fascom,
    iconBg: "#ffffff",
    date: "Feb 1998 - Nov 1998",
    points: [
      "Identified potential market segments for Corporate Sales and Oversaw existing campaigns to grow key accounts",
      "Worked closely with the Head of Department to prospect, pitch & close new business and Liaised between the technical team and clients, as well as senior management.",
      "Addressed client concerns and ensure the resolution of issues in a timely manner.",
      "Retained accounts through the development of strong relationships with key decision makers.",
    ],
  },
  {
    title: "Marketing Manager",
    company_name: "Comstar Information Systems Associates",
    icon: comstar,
    iconBg: "#1d1928",
    date: "Dec 1998 - Jan 2004",
    points: [
      "Developed sales and marketing strategies and increased customer retention.",
      "Generated new business avenues and Ensured accomplishment of sales targets with smooth execution of services.",
      "Project Management including legal documentation and Facilitated recruitment of new employees and trained them to develop relevant knowledge & skills.",
    ],
  },
  {
    title: "Regional Manager Sales",
    company_name: "Gerry's Information Technology",
    icon: gerry,
    iconBg: "#ffffff",
    date: "Feb 2004 - Dec 2005",
    points: [
      "Leading a team of 22 members to drive revenue streams and generate new business avenues.",
      "Developed Sales & Marketing strategies and Ensured accomplishment of sales targets with smooth execution.",
      "Managed Wireless and Internet services and increased customer retention.",
      "Led recruitment of new employees and trained them to develop relevant knowledge & skills.",
    ],
  },
  {
    title: "Manager Corporate Sales",
    company_name: "CubeXS Weatherly",
    icon: cube,
    iconBg: "#ffffff",
    date: "Jan 2006 - Dec 2006",
    points: [
      "Managed TIER IV Data Center Wireless, DSL services and Designed Disaster Recovery and Business Continuity Solution.",
      "Developed Sales & Marketing strategies and Ensured accomplishment of sales targets with smooth execution of agreed services and planned annual budget.",
      "Project Management including legal documentation (local & international) and Led recruitment of new employees and trained them to develop relevant knowledge & skills.",
    ],
  },
  {
    title: "Manager Corporate Network Services",
    company_name: "Supernet Ltd.",
    icon: supernet,
    iconBg: "#ffffff",
    date: "Jan 2007 - May 2009",
    points: [
      "Directed and managed all corporate sales operations and Led an assigned Sales team comprising 15 sales personnel.",
      "Formulated  Sales Strategy and Ensured achievement of assigned corporate sales targets.",
      "Employee recruitment & training and budget planning to ensure a highly knowledgeable sales team with top-level performance in-result exceeded cumulative annual sales revenue by 10%.",
      "Increased Customer retention which resulted in the repetition of business every year.",
      "Designed and implemented sales and marketing plans for the corporate sector."
    ],
  },
  {
    title: "Regional Manager",
    company_name: "Transworld Associates",
    icon: tw,
    iconBg: "#ffffff",
    date: "Jan 2009 - Jan 2022",
    points: [
      "Developed strategy and launched a new division Transworld Enterprise Services which captured 100 top corporate customers in 18 months.",
      "Developed SOPs, business policies, and procedures while also ensuring the achievement of assigned sales targets of the regional sales team.",
      "Designed sales and marketing plans for the corporate sector and administered, budgeted, monitored, reported, communicated, and liaised with clientele.",
      "Developed account action plans with the sales team for aggressive revenue growth per year and margin/pricing expectations management.",
      "Responsible for recruitment as well as technical and professional development of the team, successful account planning, and accurate forecasting.",
    ],
  },
  {
    title: "General Manager Sales",
    company_name: "Transworld Enterprise Services",
    icon: tes,
    iconBg: "#ffffff",
    date: "Jan 2009 - Jan 2022",
    points: [
      "Planned and executed the  FTTX infrastructure and expansion in accordance with ARPU Management.",
      "Expanded the division to form a separate entity with over 300+ employees and Managed Enterprise Business Marketing Functions.",
      "Facilitate intradepartmental operations vis a vis pre-sales, service delivery, operations, and Managed new product development and market research in coordination with regional team heads.",
      "Assisted evaluation and development of sales operational strategy and performance in cooperation with the executive team.",
    ],
  },
  ,
  {
    title: "Senior Manager Sales",
    company_name: "Transworld Enterprise Services",
    icon: tes,
    iconBg: "#ffffff",
    date: "Jan 2009 - Jan 2022",
    points: [
      "Led the Sales and Operations and enhanced annual revenue by 20%.",
      "Hired and trained new management promotions and oversaw the company’s commercial operations.",
      "Guided Marketing and Product team to stay ahead in marketing competition.",
      "Devised new strategic initiatives regarding the company sales policies.",
    ],
  },
  {
    title: "Director Corporate Sales",
    company_name: "CubeXS Weatherly",
    icon: cube,
    iconBg: "#ffffff",
    date: "Feb 2022 - Present",
    points: [
      "Led Sales Teams to enhance new potential revenue which as a result increased annual revenue by 15%.",
      "Successfully managed Cloud, Collocation, and Corporate Internet and launched new products and services segment-wise.",
      "Hired and trained new management promotions and oversaw the company’s commercial operations.",
      "Facilitated Marketing and Product team to stay ahead in marketing competition and promoted company success.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Madiha Saeed",
    designation: "CHF",
    company: "Get Happified",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Disney+ Clone",
    description:
      "Disney+ is one of the biggest streaming platforms used by millions of people world-wide and allows us to stream high quality content in 4k and various other formats",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/sanidhyy/disney-clone",
    live_site_link: "https://clonedisneyplus.web.app/",
  },
  {
    name: "Golds Gym",
    description:
      "Web application that enables users to search for fitness exercises, effective personalized positions, and recommends new exercises based on their personal preferences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/sanidhyy/fitness-app",
    live_site_link: "https://fitness-gym-react.netlify.app/",
  },
  {
    name: "Shoppy",
    description:
      "The most personalised admin dashboard web application that allows enables users to choose customized themes and dark mode with different pages and variety of charts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/sanidhyy/admin-dashboard",
    live_site_link: "https://shoppy-dashboard-react.netlify.app/",
  },
  {
    name: "TikTok Clone",
    description:
      "A Next JS Web Application that enables users to upload videos of any length and size, create accounts and connect with other people just like any other social media.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/sanidhyy/tiktok-clone",
    live_site_link: "https://tiktok-clone-react.vercel.app/",
  },
  {
    name: "Cryptoverse",
    description:
      "Best Cryptocurrency web application that allows users to view price, market cap and daily change in realtime for almost every cryptocurrency in the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/sanidhyy/crypto-app",
    live_site_link: "https://reactjscryptoapp.netlify.app/",
  },
  {
    name: "Travel Advisor",
    description:
      "Web application that enables you to view your nearby restaurants, hotels and attractions which can be sorted by ratings, price and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/sanidhyy/travel-advisor",
    live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/@OPGAMER.",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/sanidhyy",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com/TechnicalShubam",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/sanidhyy",
  },
] as const;

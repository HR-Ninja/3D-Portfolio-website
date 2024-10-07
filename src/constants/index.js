import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Game Programmer Intern",
        company_name: "Pixel Mobs Studios",
        iconBg: "#accbe1",
        date: "Jan 2024 - Aug 2024",
        points: [
            "Programming Gameplay mechanics for the player.",
            "Implementing enemy AI mechanics.",
            "Implementing JSON save/load systems."
        ],
    },
    {
        title: "Managment Accountant",
        company_name: "Finance",
        iconBg: "#accbe1",
        date: "Aug 2017 - Dec 2023",
        points: [
            "Month end/Year end reporting.",
            "Budgeting and forecasting.",
            "Financial reconciliation and variance analysis."
        ],
    },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/HR-Ninja',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/haaris-riaz-b55827226/',
    }
];

export const projects = [
    {
        theme: 'btn-back-red',
        name: 'Compiler written in C++',
        description: 'This is a project i started to learn how Lexers and Parsers work, i plan to improve it so it outputs directly to LLVM IR, for now it just transpiles C++',
        link: 'https://www.youtube.com/watch?v=8rzazW8gJX8&ab_channel=GamingCrucible',
    },
    {
        theme: 'btn-back-green',
        name: 'A* Path finding algorithm',
        description: 'Made with C++ and Raylib, provides a visual representation of how the A* algorithm works.',
        link: 'https://www.youtube.com/watch?v=OWnbIpWthyo&ab_channel=GamingCrucible',
    },
    {
        theme: 'btn-back-blue',
        name: 'Unity FPS Player Controller',
        description: 'This project was purely made to help me learn how the mechanics of an FPS work together, things such as IK Rigging, procedural Animations, Player movement and complete customizablity through scriptable-objects',
        link: 'https://www.youtube.com/watch?v=p_iRdDzK_8k&ab_channel=GamingCrucible',
    },
    {
        theme: 'btn-back-pink',
        name: 'Tetris Clone in C++',
        description: 'This is a project recreating Tetris using only C++ and Raylib, this demonstrates my understanding of Game programming fundamentals',
        link: 'https://www.youtube.com/watch?v=HjWs9cH0lgg&ab_channel=GamingCrucible',
    },
    {
        theme: 'btn-back-black',
        name: 'Fully Customizable Platformer Movement System',
        description: 'In this project i created a fully customizable player controller for 2D platforming, with dashing, double jumps, wall slide/jumping and coyote time. All configurable through a scriptable object allowing for plenty of customizablity',
        link: 'https://www.youtube.com/watch?v=72i1ydPAXnY&ab_channel=GamingCrucible',
    },
    {
        theme: 'btn-back-yellow',
        name: 'Unity JSON Save/Load System',
        description: 'This was a project i worked on while interning, the task was to implement a solid easy to use Save/Load system with encryption and the ability for multiple saved files',
        link: 'https://www.youtube.com/watch?v=b3AIOBMZH98&ab_channel=GamingCrucible',
    }
];
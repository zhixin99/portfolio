export const projectsData = [
    {
        projectId: "tenzies",
        src: "/img/tenzies.png",
        alt: "Tenzies game",
        liveLink: "https://play-tenzie-game.netlify.app/",
        codeLink: "https://github.com/zhixin99/web-mini-projects/tree/main/tenzies",
        content: [
            { 
                type: "p", 
                text: "Tenzies is a dynamic dice game. To win the game, the player need to roll or hold the dices to make the pip of all the dices the same. " 
            },
            {
                type: "p",
                text: "This project is a deep dive into React's state synchronization, requiring 10 independent components to stay in sync with a central game engine."
            },
            { type: "h2", text: "State Management" },
            { 
                type: "list", 
                text: [
                    "Managed a shared state for 10 dice objects, utilizing the nanoid library for unique key tracking.",
                    "Implemented the game-over logic using the .every() method to validate matching values and 'held' status for all components."
                    ]
            },
            { type: "h2", text: "Responsive UI and Custom Logic"},
            {
                type: "list", 
                text: [
                    "Created a 'Dice Pip' system using CSS Grid, mapping numerical values to specific grid-area coordinates for better visual experience.",
                    "Developed a real-time game timer and 'Best Time' tracker using the useEffect hook and setInterval."
                    ]               
            },
            { type: "h2", text: "Performance and Accessibility" },
            { 
                type: "list", 
                text: [
                    "Optimized user experience by adding an 'automatic win' detection and confetti celebration via the react-confetti library.",
                    "Prioritized digital inclusion by implementing ARIA attributes (aria-live, aria-pressed) to make the game fully accessible to screen reader users.",
                ] 
            },
            { type: "h2", text: "Tools Used" },
            {
                type: "tools",
                text: [
                    "React", 
                    "JavaScript (ES6+)", 
                    "CSS Grid", 
                    "Flexbox", 
                    "Nanoid", 
                    "React Confetti", 
                    "Hooks (useState & useEffect)", 
                    "Web Accessibility (ARIA)"
                ]
            }
        ],
    }, 
    {
        projectId: "oldagram",
        src: "/img/oldagram-square.png",
        alt: "oldagram"
    }, 
    {   
        src: "/img/password-generator.jpg",
        alt: "password generator"
    }, 
    {
        src: "/img/meme-generator.jpg",
        alt: "tenzies game"
    }, 
    { 
        src: "/img/personal-dashboard.png",
        alt: "tenzies game"
    }, 
    {
        src: "/img/experiences.png",
        alt: "tenzies game"
    }
]
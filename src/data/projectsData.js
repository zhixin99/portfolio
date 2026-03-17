export const projectsData = [
    {
        projectId: "basketball-scoreboard",
        src: "/img/basketball-scoreboard.png",
        alt: "Basketball Scoreboard",
        liveLink: "https://basketball-scoreboard-timer.netlify.app/",
        codeLink: "https://github.com/zhixin99/web-mini-projects/tree/main/basketball-scoreboard",
        content: [
            { 
                type: "p", 
                text: "Basketball scoreboard app is my first solo project during my frontend studies at Scrimba." 
            },
            {
                type: "p",
                text: "This project uses vanilla Javascript, HTML and CSS for tracking and displaying basketball game scores in real-time. It allows users to start, pause and resume the game."
            },
            { type: "h2", text: "Key Learning Points" },
            { 
                type: "list", 
                text: [
                    "script tag",
                    "variables",
                    "numbers & strings",
                    "function",
                    "the DOM",
                    "getElementById",
                    "addEventListener",
                    "textContent",
                    "disabled",
                    "setInterval & clearInterval",
                    "@font-face & font-family"
                    ]
            },
            { type: "h2", text: "Tools Used" },
            {
                type: "tools",
                text: [
                    "JavaScript", 
                    "CSS", 
                    "Flexbox", 
                    "@font-face Integration",
                    "Asynchronous JavaScript",
                    "UX Design",
                    "Conditional Logic",
                    "String Formatting"
                ]
            }
        ],
    }, 
    {
        projectId: "password-generator",
        src: "/img/password-generator.png",
        alt: "Password Generator",
        liveLink: "https://random-password-generator-creator.netlify.app/",
        codeLink: "https://github.com/zhixin99/web-mini-projects/tree/main/02-password-generator",
        content: [
            { 
                type: "p", 
                text: "Password generator app is my 2nd solo project, where I practiced DOM manipulation, event handling, and responsive UI design while strengthening my frontend fundamentals." 
            },
            {
                type: "p",
                text: "This app generates 2 random passwords, and allows users to set the password length, copy passwords with one click, and toggle options to include numbers and symbols."
            },
            { type: "h2", text: "Key Learning Points" },
            { 
                type: "list", 
                text: [
                    "Conditional logic and logical operators",
                    "Loop-based password generation",
                    "Randomization using JavaScript Math functions",
                    "Interactive range slider UI",
                    "Toggle switches for password customization",
                    "Asynchronous UI feedback using setTimeout",
                    "Clipboard API integration for copy-to-clipboard functionality"
                    ]
            },
            { type: "h2", text: "Tools Used" },
            {
                type: "tools",
                text: [
                    "JavaScript", 
                    "CSS", 
                    "HTML", 
                    "DOM API",
                    "Clipboard API",
                    "setTimeout",
                    "Range Slider",
                    "Toggle Switches"
                ]
            }
        ],
    }, 
    {
        projectId: "tenzies",
        src: "/img/tenzies.png",
        alt: "Tenzies Game",
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
        ]
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
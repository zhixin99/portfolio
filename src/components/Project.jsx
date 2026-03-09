import ProjectItem from "./ProjectItem"
export default function Project() {
    const projectData = [
        {
            href: "project-tenzies.html", 
            src: "/img/tenzies.png",
            alt: "tenzies game"
        }, 
        {
            href: "project-tenzies.html", 
            src: "/img/oldagram-square.png",
            alt: "tenzies game"
        }, 
        {
            href: "project-tenzies.html", 
            src: "/img/password-generator.jpg",
            alt: "tenzies game"
        }, 
        {
            href: "project-tenzies.html", 
            src: "/img/meme-generator.jpg",
            alt: "tenzies game"
        }, 
        {
            href: "project-tenzies.html", 
            src: "/img/personal-dashboard.png",
            alt: "tenzies game"
        }, 
        {
            href: "project-tenzies.html", 
            src: "/img/experiences.png",
            alt: "tenzies game"
        }
    ]

    const projectEl = projectData.map(project => 
        <ProjectItem
            href={project.href}
            src={project.src}
            alt={project.alt}
        />
    )
    return (
        <div class="projects-collection">
            {projectEl}
        </div>

    )
}

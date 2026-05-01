import SoloProjectCard from "../layout/SoloProjectCard"
import { projectsData } from "../../data/projectsData.jsx"

export default function ProjectsSection() {
    const projectEl = projectsData.map(project => 
        <SoloProjectCard
            key={project.header}
            header={project.header}
            src={project.src}
            alt={project.alt}
            liveLink={project.liveLink}
            codeLink={project.codeLink}
            date={project.date}
            description={project.description}
            tags={project.tags}
            projectId={project.projectId}
        />
    )
    return (
        <div className="project__projects-container">
            {projectEl}
        </div>

    )
}

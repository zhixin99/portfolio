import { useParams } from "react-router-dom"
import { projectsData } from "../../data/projectsData"
import ProjectHeader from "../project/ProjectHeader"
import ProjectContent from "../project/ProjectContent"

export default function Project() {
    const { projectId } = useParams();

    const currentProject = projectsData.find(project => project.projectId === projectId);

    if (!currentProject) {
        return <h2 className="sec-pad">Project not found</h2>;
    }

    return (
        <main>
            <ProjectHeader
                header={currentProject.alt}
                src={currentProject.src}
                alt={currentProject.alt}
                liveLink={currentProject.liveLink}
                codeLink={currentProject.codeLink}
            />
            <ProjectContent
                content={currentProject.content}
            />
        </main>
    )
}
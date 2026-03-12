import { Link } from "react-router-dom"

export default function ProjectItem({projectId, src, alt}) {
    return (
        <Link to={`/project/${projectId}`} className="project-item" target="_blank">
            <img src={src} alt={alt} className="project-img" loading="lazy"/>
        </Link>
    ) 
}


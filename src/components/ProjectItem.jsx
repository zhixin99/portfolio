export default function ProjectItem({href, src, alt}) {
    return (
        <a href={href} className="project-item">
            <img src={src} alt={alt} className="project-img" />
        </a>
    ) 
}


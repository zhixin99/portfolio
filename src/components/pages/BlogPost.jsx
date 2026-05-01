import React from 'react'
import { renderMatches, useParams } from 'react-router-dom' 
import { projectsData } from '../../data/projectsData'

export default function BlogPost() {
    const { projectId } = useParams()
    const project = projectsData.find(p => p.projectId === projectId)
    console.log(project)

    if (!project) {
        return <div>Project not found.</div>
    }

    return (
        <article className="main-container blog__main">
            <div className="blog__main-img-container">
                <img className="blog__main-image"
                    src={project.src} 
                    alt={project.alt} 
                />
            </div>


            <div>
                <h1 className="blog__h1">{project.header}</h1>
                <time>
                    Published on {project.date}
                </time>
                <div className="blog__buttons">
                    <a
                        href={project.codeLink}
                        className="btn btn-med btn-blue"
                        target="_blank"
                    >
                        <i className="fab fa-github" aria-hidden="true"></i> View Code
                    </a>
                    <a
                        href={project.liveLink}
                        className="btn btn-med btn-blue"
                        target="_blank"
                        >
                        <i className="fas fa-eye" aria-hidden="true"></i> Live Demo
                    </a>
                </div>

            </div>

            <div>
                {project.contentBlocks.map((block, index) => {
                    switch (block.type) {
                        case 'h2':
                            return <h2 key={index} className="blog__h2">{block.text}</h2>
                        case 'p':
                            return <p key={index} className="blog__p">{block.text}</p>
                        case "list-summary":
                            return <p key={index} className="blog__list-summary">{block.text}</p>
                        case "h3":
                            return <h3 key={index} className="blog__h3">{block.text}</h3>
                        case "h4":
                            return <h4 key={index} className="blog__h4">{block.text}</h4>    
                        case "h5":
                            return <h5 key={index} className="blog__h5">{block.text}</h5>                           
                        case 'image':
                            return (
                                <figure key={index}>
                                    <img src={block.src} alt={block.alt} className="blog__image"/>
                                    {block.caption && <figcaption>{block.caption}</figcaption>}
                                </figure>
                            )
                        case 'list':
                            return (
                                <ul key={index} className="blog__list">
                                    {block.items.map((item, i) => <li key={i} className="blog__li">{item}</li>)}
                                </ul>
                            )
                        default:
                            return null
                    }
                })}
            </div>
        </article>
    )
}

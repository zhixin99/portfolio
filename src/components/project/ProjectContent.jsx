export default function ProjectContent({content}) {
    
    const contentEl = content.map(para => {
        if (para.type === "p") {
            return <p className="project-details__desc-para">{para.text}</p>
        } else if (para.type === "h2") {
            return <h2 className="section-title">{para.text}</h2>
        } else if (para.type === "list") {
            const listEl = para.text.map(list => <li className="project-details__desc-list">{list}</li>)
            return (
                <ul>
                    {listEl}
                </ul>
            )
        } else if (para.type === "tools") {
            const toolsEl = para.text.map(list => <div className="skills__skill">{list}</div>)
            return (
                <div className="skills">
                    {toolsEl}
                </div>
            )
        }
    }
    )

    return (
        <section className="project-details section-pink">
            <div className="main-container">
                <div className="project-details__content">
                    {contentEl}
                </div>
            </div>
        </section>
    )
}
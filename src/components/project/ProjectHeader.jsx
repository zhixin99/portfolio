export default function ProjectHeader({header, src, alt, liveLink, codeLink}) {
    return (
        <section>
            <div className="project-cs-hero__content">
                <img src={src} alt={alt} className="project-header-img" />
                <h1 className="heading-primary project-heading">
                    {header}
                </h1>
                <div className="project-live-button">
                    <a
                        href={liveLink}
                        className="btn btn--med btn-white project-details__links-btn"
                        target="_blank"
                        >
                        <i class="fas fa-eye"></i> Live Link
                    </a>
                    <a
                        href={codeLink}
                        className="btn btn--med btn-white project-details__links-btn"
                        target="_blank"
                    >
                        <i class="fab fa-github"></i> Code Link
                    </a>
                </div>
            </div>
        </section>
    )
}


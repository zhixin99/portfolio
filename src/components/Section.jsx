export default function Section({ bgColor, title, subtitle, textColor, children }) {

    return (
        <section className={`sec-pad section-${bgColor}`}>
            <div className="main-container">
                {title && (
                    <h2 className="heading-sec__mb-med">
                        <span className={`heading-sec__main ${textColor}-divider text-${textColor}`}>
                            {title}
                        </span>
                        {subtitle && (
                            <span className="heading-sec__sub">
                                {subtitle}
                            </span>
                        )}
                    </h2>
                )}
                
                {children}
            </div>
        </section>
    );
}
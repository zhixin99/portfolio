
import Hero from "../main/Hero"
import Section from "../main/Section"
import ProjectSection from "../main/ProjectSection"

export default function Main() {
    return (
        <main>
            <Hero/>
            <Section 
                title="Projects"
                subtitle="All my projects include links to the code and live version. Click the button to learn more about each one."
                bgColor="pink"
                textColor="black"
            >
                <ProjectSection />
            </Section>
            <Section 
                title="About Me"
                subtitle="Hello, I’m Zhixin, a frontend developer with a strategic background in marketing."
                bgColor="black"
                textColor="pink"
            >
            </Section>
            <Section 
                title="Contact"
                subtitle="Please reach out if you have any questions!"
                bgColor="pink"
                textColor="black"
            >
            </Section>
        </main>
    )
}
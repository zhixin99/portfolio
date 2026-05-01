
import Hero from "../home/Hero"
import Section from "../home/Section"
import ProjectsSection from "../home/ProjectsSection"
import { Link } from "react-router-dom"
import Experience from "../home/Experience"
import { experiences } from "../../data/experience"
import LearnJournalSection from "../home/LearnJournalSection"

export default function Home() {
    return (
        <main>
            <Hero/>
            <Section 
                key="about-me"
                title="About Me"
                description=""
                sectionColor="var(--color-raspberry)"
                id="about"
            >
                <div className="about-me__intro-container">
                    <div className="photo-container">
                        <img src="../../img/zhu-zhixin-photo.JPG" alt="A photo of Zhu Zhixin smiling."></img>
                    </div>

                    <div className="about-me__right-container">
                        <div className="intro-text-container">
                            <h3>My path to development. </h3>
                            <p>
                                After completing my Master's in Singapore, I joined a fast-paced MedTech startup. 
                            </p>
                            <p>
                                I started with managing social ads and data tracking, but soon I found my flow state in the <span className="text-highlight">the technical details.</span> While others focused on copywriting, I was diving into Shopify to tweak landing pages and troubleshooting pixel tracking. I realized that I truly loved the <span class="text-highlight">tangible act of building the interfaces</span>.
                            </p>
                            <p>
                                I knew that to become the developer I wanted to be, I needed to commit 100%. When I discovered the Netherlands' Search Year Visa, I saw it as the perfect window to pivot my career and immerse myself in technology. So here I am - learning, building, and ready for the next challenge.
                            </p>
                        </div>

                        <Experience experiences={experiences}/>
                    </div>


                </div>

            </Section>

            <Section 
                key="learning-journal"
                title="Learning Journal"
                description={
                    <>
                        I've completed the <span className="text-highlight">Frontend Career Path</span> on Scrimba. Here are 3 mini-projects that I created as part of my learning journey. Click the button below to <span className="text-highlight">view the whole journal</span>.
                    </>}
                sectionColor="var(--color-green)"
                id="journal"
            >   
                <LearnJournalSection />
                <Link to="/journal" className="btn btn-big btn-green-reverse">Read Full Learning Journal</Link>
            </Section>

            <Section 
                key="projects"
                title="Projects"
                description={
                    <>
                        These are some featured solo projects I’ve built so far. Click the <span className="text-highlight">Read Blog</span> button below to learn more about each project’s overview, tech stack, implementation details, and key takeaways.
                    </>
                }
                sectionColor="var(--color-blue)"
                id="projects"
            >   
                <ProjectsSection  />
            </Section>


            <Section 
                key="contact"
                title="Contact"
                description={
                    <>
                        Feel free to reach out at <a href="mailto:zhixin.zhu99@gmail.com" className="text-highlight email">zhixin.zhu99@gmail.com</a>.
                    </>}
                sectionColor="var(--color-pink)"
                id="contact"
            >
            </Section>
        </main>
    )
}
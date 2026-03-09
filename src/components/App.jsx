import Header from "./Header"
import Hero from "./Hero"
import Section from "./Section"
import Footer from "./Footer"
import Project from "./Project"

export default function App() {

	return (
		<>
			<Header />
			<Hero/>
			<Section 
				title="Projects"
				subtitle="All my projects include links to the code and live version. Click the button to learn more about each one."
				bgColor="pink"
				textColor="black"
			>
				<Project />
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

			<Footer/>
		</>
	)
}


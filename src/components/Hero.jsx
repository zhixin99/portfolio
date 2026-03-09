export default function Hero() {
	return (
		<section className="home-hero section-black">
				<div className="home-hero__content">
					<h1>Hey, I'm <span className="heading-primary">Zhu Zhixin</span></h1>
					
					<div className="home-hero__info">
						<p className="text-primary">
							I am a self-learning frontend developer based in the Netherlands. I have a passion for innovation and cutting-edge technology. I try my best to create things with love.
						</p>
					</div>
					
					<div className="home-hero__cta">
						<a href="./#projects" className="btn btn-pink btn--bg">See my projects</a>
					</div>
				</div>

			<div className="home-hero__socials">
				<div className="home-hero__social">
				<a href="https://www.linkedin.com/in/zhuzhixin-99/" className="home-hero__social-icon-link">
					<img
					src="/img/linkedin-ico.png"
					alt="icon"
					className="home-hero__social-icon"
					/>
				</a>
				</div>
				<div className="home-hero__social">
				<a href="https://github.com/zzx66699" className="home-hero__social-icon-link">
					<img
					src="/img/github-ico.png"
					alt="icon"
					className="home-hero__social-icon"
					/>
				</a>
				</div>
			</div>
			<div className="home-hero__mouse-scroll-cont">
				<div className="mouse"></div>
			</div>
		</section>
	) 
}


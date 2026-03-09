export default function Footer() {
    return (
        <footer className="main-footer section-black">
            <div className="main-container">
                <div className="main-footer__container">
                    <p className="main_footer__designer">Designed & Built by Zhu Zhixin</p>
                    <ul className="main-footer__social-list">
                        <li>
                            <a href="https://www.linkedin.com/in/zhuzhixin-99/">
                                <img
                                className="main-footer__icon"
                                src="/img/linkedin-ico.png"
                                alt="icon"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/zzx66699">
                                <img
                                className="main-footer__icon"
                                src="/img/github-ico.png"
                                alt="icon"
                                />
                            </a>  
                        </li>           
                    </ul>
                </div>
            </div>
        </footer>
    )
}
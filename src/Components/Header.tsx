function Header(){
    return (
        <header className="content--header ">
        <div className="content__top">
            <h1 className="main-title">Ali Abdi</h1>
            <p className="main-tagline">Software Engineering</p>
            <a className="force_underline wayne" target="_blank" href="https://wayne.edu/">WSU</a>
            <nav className="nav-container">
                <a className="nav-item nav-item--current" href="#top" id="nav-home">Home</a>
                <a className="nav-item" href="#projects" id="nav-projects">Projects</a>
                <a className="nav-item" href="#contact" id="nav-contact">Contact</a>
                <span className="divider"></span>
                <a className="nav-item" href="">Resume</a>
                <a className="nav-item" href="https://github.com/A2Abdi" target="_blank">Github</a>
                <a className="nav-item" href="https://devpost.com/alifeki45" target="_blank">Devpost</a>
            </nav>
        </div>
    </header>
    )
}
export default Header;
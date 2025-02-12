import '../Styles/Header.css';

const Header = () => {

    return (
    
    <header className="container_header" id = "home">
    
        <div className="content_main_header">

            <div className='content_main_hero'>
    
                <h1 className="main-title spacer">Ali Abdi</h1>
    
                <p className="main-tagline spacer">Software Engineering</p>
    
                <a className="main-content spacer" target="_blank" href="https://wayne.edu/" rel="noopener noreferrer">Wayne State University</a>
            
            </div>
    
            <nav className="nav-container">
    
                <a className="nav-item" href="#top">Home</a>
    
                <a className="nav-item" href="#projects">Projects</a>
    
                <a className="nav-item" href="#contact">Contact</a>
    
                <span className ="divider"></span>
    
                <a className="nav-item" href="https://drive.google.com/file/d/1z3ecMDlYeGc3ceNqq-QYMem6ICJVwYqv/view?usp=sharing" target = "_blank" rel="noopener noreferrer">Resume</a>
    
                <a className="nav-item" href="https://github.com/A2Abdi" target="_blank" rel="noopener noreferrer">Github</a>
    
                <a className="nav-item" href="https://devpost.com/alifeki45" target="_blank" rel="noopener noreferrer">Devpost</a>
    
            </nav>
    
        </div>
    
    </header>
    )
}
export default Header;
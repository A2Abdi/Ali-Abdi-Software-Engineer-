import Identify from './Images/Identify.png'
import DrawDoodle from './Images/DrawDoodle.png'
function Projects(){
    return(
        <section className="content content--section content--columns" id="projects">
            <h1>Projects</h1>
            <div className="projects-container">
                <div className="projects-item--container projects-item--first">
                    <a>
                        <div className="projects-item--img">
                            <img src={Identify} className="projects-item--img--anim"/>
                        </div>
                        IDENTIYY
                        <br/>
                    </a>
                <span className="text_secondary">An application that captures people when that captures cars and people when passing through .</span>
                    <div className="projects-item--tech">
                        <a href="https://opencv.org/" target='_blank'>OpenCV</a>
                        <a href="https://www.python.org/" target='_blank'>Python</a>
                        <a href="https://www.mongodb.com/atlas" target='_blank'>MongoDB Atlas</a>
                    </div>
                    <div className="projects-item--actions">
                        <a href="https://github.com/A2Abdi/Ali-Abdi-Software-Engineer-" className="projects-item--action">
                            <i className="icon-github"></i>
                        </a>
                        <a href="https://www.youtube.com/watch?v=Lvpf8e1QM44" className="projects-item--action">
                                <i className="icon-youtube"></i>
                            </a>
                    </div>
                    </div>
                <div className="projects-item--container">
                    <a>
                        <div className="projects-item--img">
                            <img src={DrawDoodle} className="projects-item--img--anim"/>
                        </div>
                        DrawDoodle
                        <br/>
                    </a>
                <span className="text_secondary">An application that captures and predicts numbers/drawings of other peoples Hand writing</span>
                    <div className="projects-item--tech">
                        <a href="https://www.python.org/" target='_blank'>Python</a>
                        <a href="https://www.anaconda.com/" target='_blank'>Anaconda</a>
                        <a href="https://www.redhat.com/en/blog/what-aiml-and-why-does-it-matter-your-business" target='_blank'>ML/AI</a>
                    </div>
                    <div className="projects-item--actions">
                        <a href="https://github.com/A2Abdi/Ali-Abdi-Software-Engineer-" className="projects-item--action">
                            <i className="icon-github"></i>
                        </a>
                        <a href="https://www.youtube.com/watch?v=Lvpf8e1QM44" className="projects-item--action">
                                <i className="icon-youtube"></i>
                            </a>
                    </div>
                </div>
            </div>
            </section>
    )
}
export default Projects
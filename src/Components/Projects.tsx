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
                        <a href = "https://github.com/A2Abdi/Hackaton" target='_blank'>IDENTIYY</a>
                        <br/>
                    </a>
                <span className="text_secondary">An application that captures people when that captures cars and people when passing through .</span>
                    <div className="projects-item--tech">
                        <a href="https://opencv.org/" target='_blank'>OpenCV</a>
                        <a href="https://www.python.org/" target='_blank'>Python</a>
                        <a href="https://www.mongodb.com/atlas" target='_blank'>MongoDB Atlas</a>
                    </div>
                    </div>
                <div className="projects-item--container">
                    <a>
                        <div className="projects-item--img">
                            <img src={DrawDoodle} className="projects-item--img--anim"/>
                        </div>
                        <a href = "https://github.com/A2Abdi" target="_blank">DrawDoodle</a>
                        <br/>
                    </a>
                <span className="text_secondary">An application that captures and predicts numbers/drawings of other peoples Hand writing</span>
                    <div className="projects-item--tech">
                        <a href="https://www.python.org/" target='_blank'>Python</a>
                        <a href="https://www.anaconda.com/" target='_blank'>Anaconda</a>
                        <a href="https://www.redhat.com/en/blog/what-aiml-and-why-does-it-matter-your-business" target='_blank'>ML/AI</a>
                    </div>
                </div>

                <div className="projects-item--container">
                    <a>
                        <div className="projects-item--img">
                            <img src={DrawDoodle} className="projects-item--img--anim"/>
                        </div>
                        <a href = "https://github.com/A2Abdi"target="_blank">MotoShop</a>
                        <br/>
                    </a>
                <span className="text_secondary">A web shop that sells motorcycle parts and maintainance equipment</span>
                    <div className="projects-item--tech">
                        <a href="https://angular.io/" target='_blank'>Angular</a>
                        <a href="https://nodejs.org/en" target='_blank'>NodeJS</a>
                        <a href="https://www.typescriptlang.org/" target='_blank'>Typescript</a>
                        <a href="https://firebase.google.com/" target='_blank'>Firebase</a>
                        <a href="https://www.redhat.com/en/blog/what-aiml-and-why-does-it-matter-your-business" target='_blank'>ML/AI</a>
                    </div>
                </div>
            </div>
            </section>
    )
}
export default Projects
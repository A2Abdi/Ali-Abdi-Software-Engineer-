function Projects(){
    return(
        <section className="content content--section content--columns" id="projects">
            <h1>Projects</h1>
            <div className="projects-container">
                <div className="projects-item--container projects-item--first">
                    <a>
                        <div className="projects-item--img">
                            <img src="img/projects/workway/workway.png" alt="Workway header" className="projects-item--img--anim"/>
                        </div>
                        Workway
                        <br/>
                    </a>
                        <span className="color_gold">WINNER</span>
                <span className="text_secondary">Android app incentivising users to share their work among their peers through the use a cryptocurrency.</span>
                    <div className="projects-item--tech">
                        <a href="https://www.android.com/">android</a>
                        <a href="https://kotlinlang.org/">kotlin</a>
                        <a href="http://reactivex.io/">rxjava</a>
                        <a href="https://www.mongodb.com/">mongodb</a>
                        <a href="https://firebase.google.com/">firebase</a>
                        <a href="https://www.algolia.com/">algolia_search</a>
                    </div>
                    <div className="projects-item--actions">
                        <a href="https://github.com/A2Abdi" className="projects-item--action">
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
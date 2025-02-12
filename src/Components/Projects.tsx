import projects from '../Data/projectsData';

import profile from '../Data/profileData';

import '../Styles/Projects.css';

function Projects() {
    return (
        <section className="container_projects" id="projects">
            
            <h1>Projects</h1>

            <div className="content_projects_main">

                {projects.map((project, index) => (

                    <div key={index} className="projects_item_container">

                        <div className="projects_item_img">

                            <img src={project.image} className="project_image" alt={project.name} />

                        </div>

                        <div className="project_name_container">

                            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project_name_link">

                                <img src={profile[0].Github} className="github_icon" alt="GitHub" />

                                {project.name}

                            </a>

                        </div>

                        <br />

                        <span className="text_secondary">{project.description}</span>

                        <br />

                        <div className="project_item_tech">

                            {project.technologies.map((tech, techIndex) => (

                                <a key={techIndex} href={tech.link} target="_blank" rel="noopener noreferrer">

                                    {tech.name}
                                </a>

                            ))}

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Projects;

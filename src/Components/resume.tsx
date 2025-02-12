import { skills, workExperience } from '../Data/resumeData';

import '../Styles/Resume.css';

const Resume = () => {

    return (

        <div className="container_resume">

            <span className="resume_intro">Hey There,</span>

            <p className="resume_context">

                I'm a software engineering student at Wayne State University with a strong passion for technology, 
                solving complex problems, and collaborating with others.
                <br />

                <b>Currently looking for Summer 2025 opportunities.</b>

            </p>

            <div className="resume_divider"></div>

            <span className="resume_skills">Skills</span>

            <div className="resume_context">

                {skills.map((skill, index) => (

                    <p key={index}>

                        <b>{skill.category}:</b> {skill.details}

                    </p>

                ))}

            </div>


            <span className="resume_skills">Work Experience</span>

            {workExperience.map((job, index) => (

                <div key={index} className="experience_container">

                    <p className="resume_context small-line-height">

                        <a className="experience_title" href={job.companyLink} target="_blank" rel="noopener noreferrer">

                            {job.company}

                        </a>
                        <span className="experience_middot">·</span>

                        <span className="experience_position">{job.position}</span>

                    </p>

                    <p className="resume_context">

                        <span className="experience_subtitle">{job.duration}</span>

                    </p>

                    <p className="resume_context">

                        {job.responsibilities.map((task, taskIndex) => (

                            <span key={taskIndex}>

                                {task} <br />

                            </span>

                        ))}

                    </p>

                </div>

            ))}

        </div>
    );
};

export default Resume;

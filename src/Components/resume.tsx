function Resume() {
    return(
        <div className="content--main-right_side">
            <span className="inverse-h1">Hey There,</span>
            <p className="inverse-body">
                    I'm a a&nbsp;software engineering student at Wayne state
                    University with a strong passion for technology, solving complex
                    problems, and collaborating with others.
                    <br/>
                    <b>Currently looking for Fall 2023 opportunities.</b>
                </p>
                <div className="inverse-divider"></div>
                <span className="inverse-h2">Skills</span>
                <span className="inverse-body">
                    I have extensive experience in <b>Web development</b> and <b>backend</b> development utilizing <b>Java, C, C++, and Python</b>. 
                    In addition to knowledge of databases like <b>MongoDB Atlas and Firebase </b>
                        <br/> <br/>
                    I have also experience in ML and Computer Vision using <b>TensorFlow, openCV, pandas, and Numpy </b> with <b>
                    <b>Python and some C++</b>
                        </b> 
                        <br/><br/>  
                        I&nbsp; also enjoy working with <b>React</b> in <b>TypeScript</b> to develop modern frontend interfaces.
                    </span>
                <span className="inverse-h2">Work Experience</span>
                <div className="content--experience-container">
                    <p className="inverse-body small-line-height">
                        <a className="content--experience-title" target="_blank"href="https://tech.wayne.edu/">Wayne State C&IT</a>
                        <span className="content--experience-middot">·</span>
                        <span className="content--experience-position">IT technician</span>
                    </p>
                    <p className="inverse-body">
                        <span className="content--experience-subtitle">Fall 2022 - Current</span>
                    </p>
                    <p className="inverse-body">
                        Diagnosing and troubleshooting hardware, software and network issues. <br/>
                        Configured hardware, devices, and software to set up work-stations for employees.<br/>
                        Monitored system performance to identify potential issues.
                    </p>
                </div>
                <div className="content--experience-container">
                    <p className="inverse-body small-line-height">
                        <a className="content--experience-title" target="_blank"href="https://library.wayne.edu/">Wayne State Libraries</a>
                        <span className="content--experience-middot">·</span>
                        <span className="content--experience-position">Student Assistant </span>
                    </p>
                    <p className="inverse-body">
                        <span className="content--experience-subtitle">Feb 2022 - Oct 2022</span>
                    </p>
                    <p className="inverse-body">
                        Assisted patrons with the use of library databases, computer equipment, software, and processed patrons' requested material.<br/>
                        Inducted, informed and supported new users with thorough library orientation</p>
                </div>
        </div>
    )
}
export default Resume;
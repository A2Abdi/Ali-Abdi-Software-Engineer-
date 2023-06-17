function Resume() {
    return(
        <div className="content--main-right_side">
            <span className="inverse-h1">Hey There,</span>
            <p className="inverse-body">
                    I'm a 3A&nbsp;software engineering student at the Wayne state
                    University with a strong passion for technology, solving complex
                    problems, and collaborating with others.
                    <br/>
                    <b>Currently looking for Fall 2023 opportunities.</b>
                </p>
                <div className="inverse-divider"></div>
                <span className="inverse-h2">Skills</span>
                <span className="inverse-body">
                    I have extensive experience in <b>Android</b> and <b>backend</b> development utilizing <b>Kotlin, Java, C, C++, and Python</b>.
                        <br/>
                        I&nbsp;enjoy working with <b>React</b> in <b>TypeScript</b> to develop modern frontend interfaces.
                    </span>
                <span className="inverse-h2">Work Experience</span>
                <div className="content--experience-container">
                    <p className="inverse-body small-line-height">
                        <a className="content--experience-title" href="https://construction.autodesk.com/">Autodesk</a>
                        <span className="content--experience-middot">·</span>
                        <span className="content--experience-position">Software Engineer Intern</span>
                    </p>
                    <p className="inverse-body">
                        <span className="content--experience-subtitle">Summer 2021</span>
                    </p>
                    <p className="inverse-body">
                        Currently working alongside the markups and annotations team to implement custom SVG and CSS parsing and
                        rendering on documents within the Plangrid app across all platforms (Web, Windows, iOS, and Android)
                    </p>
                </div>
                <div className="content--experience-container">
                    <p className="inverse-body small-line-height">
                        <a className="content--experience-title" href="https://corporate.ford.com/operations/autonomous-vehicles.html">Ford AV</a>
                        <span className="content--experience-middot">·</span>
                        <span className="content--experience-position">Autonomous Vehicles Software Engineering</span>
                    </p>
                    <p className="inverse-body">
                        <span className="content--experience-subtitle">Fall 2020</span>
                    </p>
                    <p className="inverse-body">
                        Worked alongside the Dispatch Optimizer team to provide a fully autonomous Robotaxi service, including routing, dispatch, and navigation of autonomous vehicles, queuing user requested trips while optimizing vehicle parameters (ETAs, wait time, current queue, etc.)
                    </p>
                </div>
                <div className="content--experience-container">
                    <p className="inverse-body small-line-height">
                        <a className="content--experience-title" href="https://www.traderev.com/">TradeRev</a>
                        <span className="content--experience-middot">·</span>
                        <span className="content--experience-position">Software Engineering</span>
                    </p>
                    <p className="inverse-body">
                        <span className="content--experience-subtitle">Winter 2020</span>
                    </p>
                    <p className="inverse-body">
                        Led effort to rewrite Android app and backend APIs from the ground up, leveraging Kotlin, Spring Boot, Kafka streams, and MVVM architecture resulting in a 13% increase in user retention through Android client.
                    </p>
                </div>
        </div>
    )
}
export default Resume;
const skills = [
    {
        category: "Languages",
        details: "Java, kotlin, Python, C, C++, JavaScript, Typescript, HTML/CSS, SQL, NOSQL"
    },
    {
        category: "Frameworks",
        details: "React, Spring Boot, ExpressJS, ThreeJS, Google API, Git, TensorFlow, OpenCV, Pandas, NumPy, CARLA, PostgreSQL, MongoDB Atlas, Firebase"
    },
    {
        category: "Operating Systems",
        details: "Linux(UBUNTU), Mac OS, Windows"
    }
];

const workExperience = [

    {
        company: "InterviewBuddies",
        companyLink: "",
        position: "Software Engineer Intern",
        duration: "June 2024 – September 2024",
        responsibilities: [
            "• Developed a scalable Spring Boot microservice to enable seamless communication with the OpenAI API, optimizing AI-driven interactions.",
            "• Architected and implemented a secure employee sign-in/sign-out system using Spring Boot, Spring Security, PostgreSQL, React, and Tailwind CSS, enhancing access management and user experience.",
            "• Integrated Spring Security with JWT authentication to enforce robust access controls, ensuring the confidentiality and integrity of sensitive data.",
            "• Collaborated closely with the development team to enhance backend performance, optimize API interactions, and ensure seamless integration between frontend and backend components."
        ]
    },
    {
        company: "Wayne State C&IT",
        companyLink: "https://tech.wayne.edu/",
        position: "IT Technician",
        duration: "Fall 2022 - spring 2024",
        responsibilities: [
            "• Diagnosed and resolved complex hardware, software, and network issues, ensuring optimal system performance and minimal downtime.",
            "• Administered and maintained Active Directory (AD), managing user account creation, modification, and deactivation while implementing Group Policies to enhance security and compliance.",
            "• Developed and deployed system imaging solutions, utilizing industry-standard tools to streamline workstation provisioning and ensure consistent configurations across multiple devices."
        ]
    },
    {
        company: "Wayne State Libraries",
        companyLink: "https://library.wayne.edu/",
        position: "Student Assistant",
        duration: "Feb 2022 - Oct 2022",
        responsibilities: [
            "• Assisted patrons with the use of library databases, computer equipment, and software.",
            "• Processed patrons' requested materials.",
            "• Inducted, informed, and supported new users with thorough library orientation."
        ]
    }
];

export { skills, workExperience };

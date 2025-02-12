import Identify from '../Images/Identifyy-logos.jpeg';
import DrawAI from '../Images/DrawAI-logos.jpeg';
import Mandelia from '../Images/mandelia.png';
import Portfolio from '../Images/Portfolio.webp';
import D3Port from '../Images/D3Port.png';
import Wallkey from '../Images/Wallkey.webp';
import TrackerApp from '../Images/TrackerApp.webp';
import PortWave from '../Images/PortWave.webp';

const projects = [
    {
        name: "Identify",
        image: Identify,
        description: "A computer vision-based application that detects and captures vehicles and pedestrians as they pass through designated areas. Utilizes OpenCV for image processing and MongoDB Atlas for efficient data storage.",
        repoLink: "https://github.com/A2Abdi/OPENCV-python",
        technologies: [
            { name: "OpenCV", link: "https://opencv.org/" },
            { name: "Python", link: "https://www.python.org/" },
            { name: "MongoDB Atlas", link: "https://www.mongodb.com/atlas" },
            { name: "GitHub", link: "https://github.com" }
        ]
    },
    {
        name: "DrawAI",
        image: DrawAI,
        description: "A deep learning-powered application that recognizes and predicts handwritten numbers and drawings. Employs neural networks for accurate classification and integrates with Anaconda for streamlined AI development.",
        repoLink: "https://github.com/A2Abdi/DrawIO",
        technologies: [
            { name: "Python", link: "https://www.python.org/" },
            { name: "Anaconda", link: "https://www.anaconda.com/" },
            { name: "Neural Networks", link: "https://www.ibm.com/topics/neural-networks" },
            { name: "ML/AI", link: "https://www.redhat.com/en/blog/what-aiml-and-why-does-it-matter-your-business" },
            { name: "GitHub", link: "https://github.com/" }
        ]
    },
    {
        name: "Mandelia",
        image: Mandelia,
        description: "A high-performance visualization tool for generating Mandelbrot and Julia fractal sets. Developed in C++ with SFML for rendering, optimized for computational efficiency and interactive exploration.",
        repoLink: "https://github.com/A2Abdi/mandelbrot_and_julia_sets_generator",
        technologies: [
            { name: "C++", link: "https://isocpp.org/" },
            { name: "SFML", link: "https://www.sfml-dev.org/" },
            { name: "verlet", link: "https://en.wikipedia.org/wiki/Verlet_integration"},
            { name: "Microsoft Visual Studio", link: "https://visualstudio.microsoft.com/" },
            { name: "Linux", link: "https://www.kernel.org/" },
            { name: "GitHub", link: "https://github.com/" }
        ]
    },
    {
        name: "Portfolio Website",
        image: Portfolio,
        description: "A personal portfolio website showcasing projects, skills, and experience. Built using React and TypeScript, with a responsive design and smooth user experience.",
        repoLink: "https://github.com/A2Abdi/Ali-Abdi-Software-Engineer-",
        technologies: [
            { name: "React", link: "https://react.dev/" },
            { name: "TypeScript", link: "https://www.typescriptlang.org/" },
            { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
            { name: "NodeJS", link: "https://nodejs.org/en" },
            { name: "GitHub", link: "https://github.com/" }
        ]
    },
    {
        name: "3D Portfolio Website",
        image: D3Port,
        description: "An interactive 3D portfolio website developed using React and Three.js. Features a visually engaging experience to present projects in a dynamic and immersive way.",
        repoLink: "https://github.com/A2Abdi/3D-port",
        technologies: [
            { name: "React", link: "https://react.dev/" },
            { name: "TypeScript", link: "https://www.typescriptlang.org/" },
            { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
            { name: "NodeJS", link: "https://nodejs.org/en" },
            { name: "ThreeJS", link: "https://threejs.org/" },
            { name: "GitHub", link: "https://github.com/" }
        ]
    },
    {
        name: "PortWave",
        image: PortWave,
        description: "A real-time audio communication system developed in C++ using PortAudio. Enables seamless audio transmission over a network in a Linux (Ubuntu) environment. Implements socket programming with UDP for low-latency streaming.",
        repoLink: "https://github.com/A2Abdi/PortWave",
        technologies: [
            { name: "C++", link: "https://isocpp.org/" },
            { name: "PortAudio", link: "http://www.portaudio.com/" },
            { name: "Ubuntu", link: "https://ubuntu.com/" },
            { name: "UDP Sockets", link: "https://en.wikipedia.org/wiki/User_Datagram_Protocol" },
            { name: "GitHub", link: "https://github.com/" }
        ]
    },
    {
        name: "Tracker App",
        image: TrackerApp,
        description: "A full-stack internship tracking web application built with React, Spring Boot, and PostgreSQL. Features OAuth2 authentication with Google API for secure Single Sign-On and a scheduled data ingestion pipeline for real-time internship listings.",
        repoLink: "https://github.com/A2Abdi/Tracker-App",
        technologies: [
            { name: "Java", link: "https://www.java.com/" },
            { name: "React", link: "https://react.dev/" },
            { name: "Spring Boot", link: "https://spring.io/projects/spring-boot" },
            { name: "PostgreSQL", link: "https://www.postgresql.org/" },
            { name: "Google Cloud", link: "https://cloud.google.com/" },
            { name: "AWS EC2", link: "https://aws.amazon.com/ec2/" },
            { name: "GitHub", link: "https://github.com/" }
        ]
    },
    {
        name: "WallKey",
        image: Wallkey,
        description: "A cross-platform digital wallet application that enables users to securely store cards and electronic keys via RFID tags. Built using React Native, Express.js, and MongoDB, with backend logic for secure credential management and dynamic ticket pricing.",
        repoLink: "https://github.com/A2Abdi/WallKey",
        technologies: [
            { name: "React Native", link: "https://reactnative.dev/" },
            { name: "ExpressJS", link: "https://expressjs.com/" },
            { name: "MongoDB", link: "https://www.mongodb.com/" },
            { name: "Android Studio", link: "https://developer.android.com/studio" },
            { name: "GitHub", link: "https://github.com/" }
        ]
    }
];

export default projects;

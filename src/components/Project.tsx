import React from "react";
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://library-manage-six.vercel.app/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://library-manage-six.vercel.app/" target="_blank" rel="noreferrer"><h2>Asetic Library Management</h2></a>
                <p>Bookwise is a comprehensive library management system built with React and Next.js. It provides users access to a vast collection of resources with authentication, allowing seamless management and organization of library materials.</p>
            </div>
            <div className="project">
                <a href="https://cheeky-gears.vercel.app/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://cheeky-gears.vercel.app/" target="_blank" rel="noreferrer"><h2>Cheeky Gears (Pirody Combat Gears display)</h2></a>
                <p>Cheeky Gears is an e-commerce platform specializing in tactical gear and military equipment for cats. Built with React and Vercel, it features a product catalog with items like the Purrtection Helmet, shopping cart functionality, and a modern responsive design.</p>
            </div>
            <div className="project">
                <a href="https://priyanshu-cell.github.io/My-Resume/" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://priyanshu-cell.github.io/My-Resume/" target="_blank" rel="noreferrer"><h2>Detailed Resume</h2></a>
                <p>Personal resume and portfolio website built with HTML, CSS, and JavaScript. Showcases various projects including sorting visualizers, calculator applications, post management systems, and interactive games. Demonstrates full-stack development capabilities and continuous learning.</p>
            </div>
            <div className="project">
                <a href="https://maharaja-frontend-5mt4.vercel.app/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://maharaja-frontend-5mt4.vercel.app/" target="_blank" rel="noreferrer"><h2>Maharaja Cuisine: Hotel Website</h2></a>
                <p>Maharaja Cuisine is a restaurant website for an authentic Indian restaurant in Landshut. Built with Next.js and React, features include menu browsing, table reservations, opening hours display, high-quality images, and customer reviews showcasing traditional Indian culinary excellence.</p>
            </div>
            <div className="project">
                <a href="https://go-social-seven.vercel.app/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://go-social-seven.vercel.app/" target="_blank" rel="noreferrer"><h2>Go Social (Just display API)</h2></a>
                <p>Go Social is a social media platform that enables users to create, browse, and interact with posts. Features include likes/dislikes reactions, category-based content filtering, user engagement analytics, and a modern responsive interface built with React and integrated with backend APIs.</p>
            </div>
            <div className="project">
                <a href="https://priyanshu-cell.github.io/My-Resume/Calculator-Project/" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://priyanshu-cell.github.io/My-Resume/Calculator-Project/" target="_blank" rel="noreferrer"><h2>Calculator Project</h2></a>
                <p>Built a calculator application with basic arithmetic operations using JavaScript, HTML, and CSS. This project demonstrates fundamental programming skills and user interface design.</p>
            </div>
            <div className="project">
                <a href="https://pass-generator-flax.vercel.app/" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://pass-generator-flax.vercel.app/" target="_blank" rel="noreferrer"><h2>Password Generator</h2></a>
                <p>Developed a password generator application that allows users to create secure passwords with customizable options. This project was built using JavaScript, HTML, and CSS.</p>
            </div>
            <div className="project">
                <a href="https://himalayan-web-tech-front-end-code-client.vercel.app/" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://himalayan-web-tech-front-end-code-client.vercel.app/" target="_blank" rel="noreferrer"><h2>Himalayan Web Tech</h2></a>
                <p>Developed a web application for Himalayan Web Tech, showcasing local products. This project was built using React and Node.js.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
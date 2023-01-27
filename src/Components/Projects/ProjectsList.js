import "./Projects.css";
import { FaYoutube, FaGithub } from "react-icons/fa"
import { HiCursorClick } from "react-icons/hi"

const ProjectsList = () => {
    const List = [
        {
            title: "Dairy Bike",
            sub_title: "Dairy Bike (Theme), e-Yantra, IIT Bombay",
            image: "",
            description: "Designed & Developed an automated self-balanced bike with an LQR controller which is used to deliver Dairy Products based on your order which is simulated in Real-time.",
            languages: "Lua",
            back_end: "",
            front_end: "",
            softwares: "CoppeliaSim, Octave",
            time: "Oct 2021 - March 2022",
            youtube: "https://youtu.be/5HIlILD5M3U3",
            github: "",
            browser: "",
        },
        {
            title: "Job Portal",
            sub_title: "Job Portal",
            image: "",
            description: "In this portal the company posts the requirements and students can easily access and browse those requirements based on their interests and apply to those jobs",
            languages: "",
            back_end: "PHP, MySql Database",
            front_end: "HTML/CSS, Bootstrap",
            softwares: "",
            time: "Dec 2021 - Jan 2022",
            youtube: "",
            github: "https://github.com/chsyam/Job-Portal",
            browser: "http://syamch.rf.gd/job-portal/",
        },
        {
            title: "VPMS",
            sub_title: "Vehicle Parking Management System",
            image: "",
            description: "Developed a web application that contains the data and shows the status of the vehicles that are parked.It tells us the total time that the vehicle has parked and generates the bill.",
            languages: "",
            back_end: "PHP, MySql Database",
            front_end: "HTML/CSS, Bootstrap",
            softwares: "",
            time: "Jan 2022 - Feb 2022",
            youtube: "",
            github: "https://github.com/chsyam/vehicle-Parking-Management-VPM",
            browser: "http://syamch.rf.gd/vps/index.php",
        }
    ]
    return (
        <div>
            <div className="sec-head">
                <h2>Projects</h2>
            </div>
            <div className="projects">
                <div className="items">
                    {
                        List.map((project) => (
                            <div className="item">
                                <table>
                                    <thead>
                                        <tr>
                                            <th colSpan="2">{project.title}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan="2">
                                                <span style={{ color: "red", textDecoration: "underline" }}>{project.sub_title}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <div className="description">
                                                    &nbsp;&nbsp;&nbsp; {project.description}
                                                </div>
                                            </td>
                                        </tr>
                                        {(project.languages.length > 0) &&
                                            <tr>
                                                <th>Languages:</th>
                                                <td>{project.languages}</td>
                                            </tr>
                                        }
                                        {
                                            (project.front_end.length > 0) &&
                                            <tr>
                                                <th>Front-End:</th>
                                                <td>{project.front_end}</td>
                                            </tr>
                                        }
                                        {
                                            (project.back_end.length > 0) &&
                                            <tr>
                                                <th>Back-End:</th>
                                                <td>{project.back_end}</td>
                                            </tr>
                                        }
                                        {
                                            (project.softwares.length > 0) &&
                                            <tr>
                                                <th>Softwares:</th>
                                                <td>{project.softwares}</td>
                                            </tr>
                                        }
                                        <tr>
                                            <th>Time:</th>
                                            <td>{project.time}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2" className="">
                                                <div className="external_links">
                                                    {(project.youtube.length > 0) &&
                                                        <a href={project.youtube} className="card-link">
                                                            <FaYoutube />
                                                        </a>
                                                    }
                                                    {(project.github.length > 0) &&
                                                        <a href={project.github} className="card-link">
                                                            <FaGithub />
                                                        </a>
                                                    }
                                                    {(project.browser.length > 0) &&
                                                        <a href={project.browser} className="card-link">
                                                            <HiCursorClick />
                                                        </a>
                                                    }
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        ))
                    }
                </div>
            </div >
        </div >
    );
}

export default ProjectsList;
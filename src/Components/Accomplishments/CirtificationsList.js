import React from "react";
import "./accomplishments.css";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";

const CirtificationsList = () => {
    const List =
        [
            {
                title: "Django for Python Developers",
                image: "nptel_cirtificate.png",
                github: "",
                linkedin: "",
                browser: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS26S44481592NPTEL2201092986",
                youtube: "",
                enlarge: "nptel_cirtificate.png",
            },
            {
                title: "The Ultimate MySQL Bootcamp : Go From SQL Beginner to Expert",
                image: "mysql_cirtificate.jpg",
                enlarge: "mysql_cirtificate_large.pdf",
                browser: "https://www.udemy.com/certificate/UC-e8628b69-f43e-4a69-a54e-8aaeb0072c55/",
                github: "",
                linkedin: "",
                youtube: "",
            },
            {
                title: "HTML, CSS, Javascript for Web Developers",
                image: "coursera_cirtificate.jpg",
                enlarge: "coursera_cirtificate.jpg",
                browser: "https://in.coursera.org/account/accomplishments/verify/7LWCPUYKVRYV",
                github: "",
                linkedin: "",
                youtube: "",
            },
            {
                title: "Dairy Bike | eYRC 2021-22",
                image: "e-Yantra_cirtificate.jpg",
                enlarge: "e-Yantra.pdf",
                browser: "http://certificate.e-yantra.org/validate/030309b1d89071aa42398d9ca2a833ede1521f9b",
                github: "",
                linkedin: "",
                youtube: "https://www.youtube.com/watch?v=5HIlILD5M3U&list=PLEZtyC48ICxNo5vxTgDw6R5Seq6-tthc3",
            },
            {
                title: "Industrial Program in Web Development | 1stop",
                image: "1stop_ai.jpg",
                enlarge: "1stop_ai.jpg",
                browser: "https://www.udemy.com/certificate/UC-e8628b69-f43e-4a69-a54e-8aaeb0072c55/",
                github: "",
                linkedin: "https://in.linkedin.com/in/syam-kumar-chintakayala-639850196",
                youtube: "",
            },
            {
                title: "Javascript Basics for Beginners",
                image: "JS.jpg",
                enlarge: "JS.jpg",
                browser: "https://www.udemy.com/certificate/UC-fd54b6c1-586d-42d7-9298-beb930eabbe2/",
                github: "",
                linkedin: "",
                youtube: "",
            },
        ];
    return (
        <div className="box">
            <div class="sec-head">
                <h2>Certifications</h2>
            </div>
            <div className="projects">
                <div className="items">
                    {List.map((cirtificate) => (
                        <div className="item">
                            <table>
                                <thead>
                                    <tr colspan="4">
                                        <th>{cirtificate.title}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan="4">
                                            <img src={require("../../Images/".concat(cirtificate.image))} height="150" alt="cirtificate"></img>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div style={{ borderTop: "1px solid black" }} className="external_links">
                                                {(cirtificate.enlarge.length > 0) && (
                                                    <a target="_blank" rel="noreferrer" href={require("../../Images/".concat(cirtificate.enlarge))}>
                                                        <BsArrowsAngleExpand />
                                                    </a>
                                                )}
                                                {(cirtificate.github.length > 0) && (
                                                    <a target="_blank" rel="noreferrer" href={cirtificate.github}>
                                                        <FaGithub />
                                                    </a>
                                                )}
                                                {(cirtificate.browser.length > 0) && (
                                                    <a target="_blank" rel="noreferrer" href={cirtificate.browser}>
                                                        <HiCursorClick />
                                                    </a>
                                                )}
                                                {(cirtificate.linkedin.length > 0) && (
                                                    <a target="_blank" rel="noreferrer" href={cirtificate.linkedin}>
                                                        <FaLinkedin />
                                                    </a>
                                                )}
                                                {(cirtificate.youtube.length > 0) && (
                                                    <a target="_blank" rel="noreferrer" href={cirtificate.youtube}>
                                                        <FaYoutube />
                                                    </a>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CirtificationsList;
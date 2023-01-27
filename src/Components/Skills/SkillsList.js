import React from "react";
import "./skills.css";

const SkillsList = () => {
    const List =
        [
            {
                image: "reactjs.png",
                name: "",
                level: "",
            },
            {
                image: "dsa.png",
                name: "",
                level: "",
            },
            {
                image: "python.png",
                name: "",
                level: "",
            },
            {
                image: "java.png",
                name: "",
                level: "",
            },
            {
                image: "django.png",
                name: "",
                level: "",
            },
            {
                image: "php.png",
                name: "",
                level: "",
            },
            {
                image: "MySQL.png",
                name: "",
                level: "",
            },
            {
                image: "html.png",
                name: "",
                level: "",
            },
            {
                image: "jquery.png",
                name: "",
                level: "",
            },
            {
                image: "tailwindcss.png",
                name: "",
                level: "",
            },
            {
                image: "bootstrap.png",
                name: "",
                level: "",
            },
            {
                image: "c.jpg",
                name: "",
                level: "",
            }
        ];
    return (
        <div className="">
            <div className="sec-head">
                <h2>Skills</h2>
            </div>
            <div className="container">
                <div className="skills">
                    {
                        List.map((skill) => (
                            <div className="skill_item">
                                <img src={require("../../Images/".concat(skill.image))} alt="myskill"></img>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default SkillsList;
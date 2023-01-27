import React from "react";
import "./Education.css";
import { FcCalendar } from "react-icons/fc";
import { MdCastForEducation } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";

const EducationDetails = () => {
    const List =
        [
            {
                title: "Bachelor of Technology",
                stream: "Computer Science & Engineering",
                college: "Gayatri Vidhya Parishad College of Engineering",
                place: "Visakhapatnam",
                map: "https://www.google.com/maps/place/Gayatri+Vidya+Parishad+College+of+Engineering+(Autonomous)+(GVP)+(GVPCE)/@17.8205584,83.3422622,21z/data=!4m5!3m4!1s0x0:0x87c06caab54e902a!8m2!3d17.8204597!4d83.342295",
                cgpa: "8.39 CGPA",
                time: "2019-2023",
            },
            {
                title: "Intermediate",
                stream: "PCM (Physics Chemistry Maths) Stream",
                college: "Vidya Vikas Jr. College",
                place: "Eluru",
                map: "https://www.google.com/maps/place/Vidhya+Vikas+Junior+College/@16.7090105,81.0709965,18.29z/data=!4m5!3m4!1s0x3a3613576cbd6991:0x735eb84eb6fad416!8m2!3d16.7088375!4d81.0718817",
                cgpa: "974/1000 Marks",
                time: "2017-2019",
            },
            {
                title: "SSC",
                stream: "",
                college: "Aadharsa Vidya Niketan High School",
                place: "Raghavapuram",
                map: "https://www.google.com/maps/place/Aadarsa+vidya+niketan/@17.1099218,80.9088813,18.39z/data=!4m13!1m7!3m6!1s0x3a3687362354c681:0x96c8e781e61e5abe!2sRaghavapuram,+Andhra+Pradesh+534460!3b1!8m2!3d17.1105253!4d80.9055645!3m4!1s0x3a36876447ca268b:0xc3b9df20cc2447bd!8m2!3d17.1098147!4d80.9089668",
                cgpa: "9.7 CGPA",
                time: "2016-2017",
            }
        ];
    return (
        <div>
            <div class="sec-head">
                <h2>Education Background</h2>
            </div>
            <div className="education">
                {List.map((education) => (
                    <table className="table">
                        <thead>
                            <th>{education.title}</th>
                        </thead>
                        <tbody className="tbody">
                            <tr>
                                <td>
                                    {
                                        (education.stream.length > 0) && (
                                            <MdCastForEducation />
                                        )
                                    }&nbsp;
                                    {
                                        (education.stream.length > 0) && (
                                            education.stream
                                        )
                                    }
                                    {
                                        (education.stream.length === 0) && (
                                            <br />
                                        )
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {
                                        (education.college.length > 0) && (
                                            <IoSchoolOutline />
                                        )
                                    }
                                    &nbsp;
                                    {
                                        (education.college.length > 0) && (
                                            education.college
                                        )
                                    }
                                    {/* {
                                        (education.map.length > 0) && (
                                            <a target="_blank" rel="noreferrer" href={education.map}><ImLocation /></a>
                                        )
                                    } */}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FcCalendar />&nbsp;{education.time}
                                </td>
                            </tr>

                            <tr className="score">
                                <td>
                                    {
                                        (education.cgpa.length > 0) &&
                                        education.cgpa
                                    }
                                    {
                                        (education.cgpa.length === 0) &&
                                        <br />
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                ))}
            </div >
        </div>
    );
}

export default EducationDetails;
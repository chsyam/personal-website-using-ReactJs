import Selfie from "../../Images/selfie.jpg";
import "./Body.css";
import { GrAttachment } from "react-icons/gr";
import { FaLinkedin, FaHackerrank, FaYoutube, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Body = () => {
    return (
        <div className="body">
            <div className="image">
                <img src={Selfie} alt="Owner"></img>
            </div>
            <div className="name">
                <span>Chintakayala Syam Kumar</span>
            </div>
            <div className="domains">
                <span>React JS | Full-Stack Web Developer</span>
            </div>
            <div className="social-media">
                <div className="icon"><a target="_blank" href="https://www.linkedin.com/in/chsyamkumar/" rel="noopener noreferrer"><FaLinkedin /></a></div>
                <div className="icon"><a target="_blank" href="https://www.hackerrank.com/Syam_190543" rel="noopener noreferrer"><FaHackerrank /></a></div>
                <div className="icon"><a target="_blank" href="https://leetcode.com/proSyam/" rel="noopener noreferrer"><SiLeetcode /></a></div>
                <div className="icon"><a target="_blank" href="mailto:syamkumar6845@gmail.com" rel="noopener noreferrer"><FaEnvelope /></a></div>
                <div className="icon"><a target="_blank" href="https://www.youtube.com/channel/UCsnGsqVWEl_37bGwA_MmAng" rel="noopener noreferrer"><FaYoutube /></a></div>
            </div>
            <div className="resume_link">
                <GrAttachment />&nbsp;<a target="_blank" rel="noreferrer" href={require("../../Resume/Resume.pdf")}>Resume</a>
            </div>
        </div>
    );
}

export default Body;
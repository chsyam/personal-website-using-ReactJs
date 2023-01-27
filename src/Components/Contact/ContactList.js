import React from "react";
import "./contact.css";

const ContactList = () => {
    const SocialMediaList = [
        {
            image: "LinkedIn.png",
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/chsyamkumar/",
        },
        {
            image: "github.png",
            name: "GitHub",
            url: "https://github.com/chsyam/",
        },
        {
            image: "twitter.png",
            name: "Twitter",
            url: "https://twitter.com/Syam_KumarCH/",
        },
        {
            image: "youtube.jpg",
            name: "YouTube",
            url: "https://www.youtube.com/channel/UCsnGsqVWEl_37bGwA_MmAng",
        },
    ];
    const CodingPlatformsList = [
        {
            image: "hackerrank.jpg",
            name: "HackerRank",
            url: "https://www.hackerrank.com/Syam_190543",
        },
        {
            image: "codechef.jpg",
            name: "CodeChef",
            url: "https://www.codechef.com/users/syam_kumar43",
        },
        {
            image: "leetcode.png",
            name: "LeetCode",
            url: "https://leetcode.com/proSyam/",
        },
        {
            image: "gfg.png",
            name: "GFG",
            url: "https://auth.geeksforgeeks.org/user/syamch",
        },
    ];
    return (
        <div className="contact">
            <div class="sec-head">
                <h2>Social Media</h2>
            </div>
            <div className="table">
                {
                    SocialMediaList.map((platform) => (
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <a target="_blank" rel="noreferrer" href={platform.url}>
                                            <img alt="social" src={require("../../Images/".concat(platform.image))} />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>{platform.name}</td>
                                </tr>
                            </tbody>
                        </table>
                    ))
                }
            </div>
            <div class="sec-head">
                <h2>Coding Platforms</h2>
            </div>
            <div className="table">
                {
                    CodingPlatformsList.map((platform) => (
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <a target="_blank" rel="noreferrer" href={platform.url}>
                                            <img alt="social" src={require("../../Images/".concat(platform.image))} />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>{platform.name}</td>
                                </tr>
                            </tbody>
                        </table>
                    ))
                }
            </div>
        </div>
    );
}

export default ContactList;
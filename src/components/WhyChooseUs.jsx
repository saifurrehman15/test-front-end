import React from "react";
import { FaMouse, FaBolt, FaFileAlt, FaShieldAlt, FaCommentDots, FaCloudDownloadAlt } from "react-icons/fa";
import bg2 from "../assets/images/bg2.png";
const features = [
    { icon: <FaMouse />, title: "Intuitive User Experience", desc: "Start a quick with a user-friendly interface designed for maximum ease and efficiency." },
    { icon: <FaBolt />, title: "Boost Productivity", desc: "Use pre-default transitions to save time and productivity." },
    { icon: <FaFileAlt />, title: "Customizable Templates", desc: "Get ready-made customizable templates for your projects." },
    { icon: <FaCommentDots />, title: "24/7 Support", desc: "Get instant assistance anytime with our intelligent, always-available assistant." },
    { icon: <FaShieldAlt />, title: "Data Security & Compliance", desc: "Safeguard your operations with industry-leading standards." },
    { icon: <FaCloudDownloadAlt />, title: "High-Quality Export", desc: "High-quality export options allow users to download their content in multiple formats." },
];

const WhyChooseUs = () => {
    return (
        <section className="why-choose-section pad-y position-relative">
            <img src={bg2} className="img-fluid bg-img" alt="" />
            <div className="why-choose-header text-center">
                <h2>Why choose <span>us</span></h2>
                <p className="para">Unlock the full potential of your business with exceptional features <br/> and unmatched performance.</p>
            </div>

            <div className="container why-choose-container">
                <div className="gradient-border"></div>
                <div className="row features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="col-lg-4 col-md-4 col-12 feature-box">
                            <div className="icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

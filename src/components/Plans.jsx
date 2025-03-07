import React from "react";
import plan1 from "../assets/images/plan1.png";
import plan2 from "../assets/images/plan2.png";
import icon1 from "../assets/images/plan-icon-1.png";
import icon2 from "../assets/images/plan-icon-2.png";

const plans = [
    {
        name: "Starter",
        price: "$0",
        monthly: "monthly",
        bg: plan1,
        description: "Perfect for custom animation and motion graphics.",
        features: [
            { icon: icon2, text: "Unlimited files" },
            { icon: icon2, text: "Unlimited editors" },
            { icon: icon2, text: "Export video, GIF, Lottie" },
            { icon: icon2, text: "720p, 30fps" },
            { icon: icon2, text: "Import from Figma" },
        ],
        buttonText: "Sign Up with Starter",
    },
    {
        name: "Professional",
        price: "$20",
        monthly: "monthly",
        bg: plan2,
        description: "Perfect for custom animation and motion graphics.",
        features: [
            { icon: icon1, text: "Unlimited files" },
            { icon: icon1, text: "Unlimited editors" },
            { icon: icon1, text: "Export video, GIF, Lottie" },
            { icon: icon1, text: "720p, 30fps" },
            { icon: icon1, text: "Import from Figma" },
        ],
        buttonText: "Sign Up with Professional",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        monthly: "",
        bg: plan1,
        description: "Perfect for custom animation and motion graphics.",
        features: [
            { icon: icon2, text: "Unlimited files" },
            { icon: icon2, text: "Unlimited editors" },
            { icon: icon2, text: "Export video, GIF, Lottie" },
            { icon: icon2, text: "720p, 30fps" },
            { icon: icon2, text: "Import from Figma" },
          
        ],
        buttonText: "Sign Up with Enterprise",
    },
    
];

const Plans = () => {
    return (
        <section className="plans-section">
            <div className="why-choose-header text-center">
                <h2>Explore all <span>plans</span></h2>
            </div>
            <div className="container">
                <div className="row mt-5">
                    {plans.map((plan, index) => (
                        <div className="col-lg-4 col-md-4 col-12"
                            key={index}
                        >
                            <div
                                className={` plan-card ${plan.popular ? "popular" : ""}`}
                                style={{ backgroundImage: `url(${plan.bg})` }}
                            >
                                <div className="plan-header">
                                    <h3>{plan.name}</h3>
                                    {plan.popular && <span className="badge-plan">Popular</span>}
                                </div>
                                <div className="plan-price">
                                    <h2>{plan.price}<span>/{plan.monthly}</span></h2>
                                </div>
                                <p className="plan-description">{plan.description}</p>
                                <button className="plan-button">{plan.buttonText}</button>

                                <ul className="plan-features">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="feature-item">
                                            {typeof feature === "object" ? (
                                                <>
                                                    <img src={feature.icon} alt="icon" className="feature-icon" />
                                                    <span>{feature.text}</span>
                                                </>
                                            ) : (
                                                <span>{feature}</span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Plans;

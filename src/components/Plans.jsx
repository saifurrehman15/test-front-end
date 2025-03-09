import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
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
        features: ["Unlimited files", "Unlimited editors", "Export video, GIF, Lottie", "720p, 30fps", "Import from Figma"],
        buttonText: "Sign Up with Starter",
    },
    {
        name: "Professional",
        price: "$20",
        monthly: "monthly",
        bg: plan2,
        description: "Perfect for custom animation and motion graphics.",
        features: ["Unlimited files", "Unlimited editors", "Export video, GIF, Lottie", "1080p, 60fps", "Priority support"],
        buttonText: "Sign Up with Professional",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        monthly: "",
        bg: plan1,
        description: "Perfect for businesses with advanced needs.",
        features: ["Custom solutions", "Dedicated support", "Unlimited storage", "API access", "Team management"],
        buttonText: "Contact Us",
    },
];

const TiltCard = ({ plan }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    return (
        <motion.div
            className={`plan-card ${plan.popular ? "popular" : ""}`}
            whileHover={{ scale: 1.05 }}
            style={{ rotateX, rotateY, backgroundImage: `url(${plan.bg})` }}
            onMouseMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                x.set(event.clientX - rect.left - rect.width / 2);
                y.set(event.clientY - rect.top - rect.height / 2);
            }}
            onMouseLeave={() => {
                x.set(0);
                y.set(0);
            }}
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
                        <img src={plan.popular ? icon1 : icon2} alt="icon" className="feature-icon" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

const Plans = () => {
    return (
        <section className="plans-section">
            <div className="why-choose-header text-center">
                <h2>Explore all <span>plans</span></h2>
            </div>
            <div className="container">
                <div className="row mt-5">
                    {plans.map((plan, index) => (
                        <div className="col-lg-4 mb-4 col-12" key={index}>
                            <TiltCard plan={plan} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Plans;

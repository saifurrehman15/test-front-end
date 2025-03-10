import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import ClientLogosSlider from "./components/LogoSlider";
import WhyChooseUs from "./components/WhyChooseUs";
import Plans from "./components/Plans";
import FAQs from "./components/Faqs";
import Testimonials from "./components/Testimonials";
import blur2 from "./assets/images/blur2.png";
import Editor from "./components/Editor";
import FeatureBenefits from "./components/feature-benefits";
import toolImg from "./assets/images/editor-img.png";

const FadeInSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9, rotateY: 90 }}
      animate={{
        opacity: isInView ? 1 : 0.5,
        y: isInView ? 0 : 50,
        scale: isInView ? 1 : 0.95,
        rotateY: isInView ? 0 : 45,
      }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};


function App() {
  return (
    <>
      <motion.section
        className="hero-banner"
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="text-center">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
                  className="primary-hd"
                >
                  Transform Concepts into, <br />
                  <span className="primary-color">Dynamic</span> Animations
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                  className="para"
                >
                  Unleash your creativity with our intuitive animation tool.
                  Create stunning <br /> videos and bring your vision to life in just a few clicks!
                </motion.p>
                <motion.div
                  className="d-flex gap-3 mt-4 justify-content-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.7 }}
                >
                  <a href="#" className="primary-btn pad glow">Try It now</a>
                  <a href="#" className="secondary-btn pad glow">Book Your Demo</a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <FadeInSection><Editor /></FadeInSection>
      <FadeInSection><FeatureBenefits /></FadeInSection>
      <FadeInSection><WhyChooseUs /></FadeInSection>
      <FadeInSection><Plans /></FadeInSection>
      <FadeInSection><FAQs /></FadeInSection>
      <FadeInSection><Testimonials /></FadeInSection>

      <motion.section
        className="hero-banner position-relative"
        initial={{ opacity: 0, y: 50, rotateX: 60 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: false }} // Now triggers every time it's in view
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <img src={blur2} className="img-fluid footer-img" alt="" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="text-center">
                <h1 className="primary-hd">Get Started</h1>
                <p className="para">
                  Holds no opinions on what’s and how’s. Build whatever <br /> makes sense to you.
                </p>
                <div className="d-flex gap-3 mt-4 justify-content-center">
                  <a href="#" className="primary-btn pad glow">Try It now</a>
                  <a href="#" className="secondary-btn pad glow">Book Your Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default App;

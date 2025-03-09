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
import toolImg from "./assets/images/editor-img.png"
// Fade-in effect with scale
const FadeInSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 50,
        scale: isInView ? 1 : 0.9,
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// Bubble Effect on Scroll
const BubbleEffect = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.8, 1], [0.5, 3, 6]);
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  return <motion.div className="bubble" style={{ scale, opacity }} />;
};

function App() {
  return (
    <>
      <BubbleEffect /> {/* Bubble Effect Background */}
      <motion.section
        className="hero-banner"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="text-center">
                <h1 className="primary-hd">
                  Transform Concepts into, <br />{" "}
                  <span className="primary-color">Dynamic</span> Animations
                </h1>
                <p className="para">
                  Unleash your creativity with our intuitive animation tool.
                  Create stunning <br /> videos and bring your vision to life in
                  just a few clicks!
                </p>
                <div className="d-flex gap-3 mt-4 justify-content-center">
                  <a href="#" className="primary-btn pad glow">
                    Try It now
                  </a>
                  <a href="#" className="secondary-btn pad glow">
                    Book Your Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Animated Sections */}
      {/* <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <img src={toolImg} alt="" className="editor-img" />
          </div>
        </div>
      </div> */}
      <FadeInSection>
        <Editor />
      </FadeInSection>
      <FadeInSection>
        <FeatureBenefits />
      </FadeInSection>
      <FadeInSection>
        <WhyChooseUs />
      </FadeInSection>
      <FadeInSection>
        <Plans />
      </FadeInSection>
      <FadeInSection>
        <FAQs />
      </FadeInSection>
      <FadeInSection>
        <Testimonials />
      </FadeInSection>
      <motion.section
        className="hero-banner position-relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img src={blur2} className="img-fluid footer-img" alt="" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="text-center">
                <h1 className="primary-hd">Get Started</h1>
                <p className="para">
                  Holds no opinions on what’s and how’s. Build whatever <br />{" "}
                  makes sense to you.
                </p>
                <div className="d-flex gap-3 mt-4 justify-content-center">
                  <a href="#" className="primary-btn pad glow">
                    Try It now
                  </a>
                  <a href="#" className="secondary-btn pad glow">
                    Book Your Demo
                  </a>
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

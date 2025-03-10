import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import align1 from "../assets/images/align-1.png";
import align2 from "../assets/images/align-2.png";
import align3 from "../assets/images/align-3.png";
import align4 from "../assets/images/align-4.png";
import ColorArea from "./color-box";

const DesignPanel = () => {
  const [squareProps, setSquareProps] = useState({
    x: 197,
    y: 806,
    width: 480,
    height: 320,
    angle: 0,
    radius: 0,
    opacity: 100,
    color: "#0095FF",
    opacity2: 100,
  });
  const [activeBtn2, setActive2] = useState("Design");

  // Handler to update properties
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSquareProps((prev) => ({
      ...prev,
      [name]: name === "opacity" ? Math.min(100, Math.max(0, value)) : value,
    }));
  };
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const handleColorChange = (e) => {
    console.log(e.target.value);

    setSquareProps((prev) => ({
      ...prev,
      color: e.target.value,
    }));
  };
  console.log(squareProps);

  const faqData = [
    {
      question: "Fill",
      answer: (
        <ColorArea
          squareProps={squareProps}
          handleChange={handleChange}
          handleColorChange={handleColorChange}
        />
      ),
    },
    {
      question: "Stroke",
      answer: "Yes! Animify offers a free plan with limited features.",
    },
    {
      question: "Shadow",
      answer:
        "Upgrading unlocks more export options, better quality, and more storage.",
    },
    {
      question: "Blur",
      answer:
        "Billing is based on the number of team members and the selected plan.",
    },
  ];

  return (
    <div className="design-panel-container">
      {/* Tabs */}
      <div className="tabs-area-2 mb-3">
        <button
          className={`tab-btn-2 ${activeBtn2 == "Design" && "active-tab"}`}
          onClick={() => setActive2("Design")}
        >
          Design
        </button>
        <button
          className={`tab-btn-2 ${activeBtn2 == "Animate" && "active-tab"}`}
          onClick={() => setActive2("Animate")}
        >
          Animate
        </button>
      </div>

      {/* Layout Section */}
      <div className="align-area mb-3">
        <div className="area-box-1">
          <button>
            <img src={align1} alt="" />
          </button>
          <button>
            <img src={align2} alt="" />
          </button>
          <button>
            <img src={align3} alt="" />
          </button>
        </div>
        <div className="area-box-1">
          <button>
            <img src={align4} alt="" />
          </button>
          <button>
            <img src={align2} alt="" />
          </button>
          <button>
            <img src={align3} alt="" />
          </button>
        </div>
      </div>
      <div className="divider"></div>
      <div className="section">
        <h3>Layout</h3>
        <div className="row">
          <div className="col-xl-6 col-12">
            <div className="input-group">
              <div className="input-item">
                <div className="row">
                  <div className="col-lg-4 col-12">
                    <label>X</label>
                  </div>
                  <div className="col-lg-8 col-12">
                    <input
                      type="number"
                      name="x"
                      value={squareProps.x}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="input-item">
                <div className="row">
                  <div className="col-lg-4 col-12">
                    <label>Y</label>
                  </div>
                  <div className="col-lg-8 col-12">
                    <input
                      type="number"
                      name="y"
                      value={squareProps.y}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-12">
            <div className="input-group">
              <div className="input-item">
                <div className="row">
                  <div className="col-lg-4 col-12">
                    <label>Width</label>
                  </div>
                  <div className="col-lg-8 col-12">
                    <input
                      type="number"
                      name="width"
                      value={squareProps.width}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="input-item">
                <div className="row">
                  <div className="col-lg-4 col-12">
                    <label>Height</label>
                  </div>
                  <div className="col-lg-8 col-12">
                    <input
                      type="number"
                      name="height"
                      value={squareProps.height}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-12">
            <div className="input-group">
              <div className="input-item ">
                <div className="row">
                  <div className="col-lg-4 col-12">
                    {" "}
                    <label>Angle</label>
                  </div>
                  <div className="col-lg-8 col-12">
                    <div className="angle-inp-group">
                      <input
                        type="text"
                        name="angle"
                        value={squareProps.angle + "°"}
                        onChange={handleChange}
                      />
                      <span className="angle-box-area">°</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-12">
            <div className="input-group">
              <div className="input-item">
                <div className="row">
                  <div className="col-lg-4 col-12">
                    <label>Radius</label>
                  </div>
                  <div className="col-lg-8 col-12">
                    <input
                      type="number"
                      name="radius"
                      value={squareProps.radius}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>

      {/* Opacity Section */}
      <div className="section mb-0 row align-items-center">
        <div className="col-lg-6 col-6">
          <h3>Opacity</h3>
        </div>
        <div className="col-lg-6 col-6 d-flex justify-content-end">
          <div className="input-group">
            <input
              type="number"
              name="opacity"
              value={squareProps.opacity}
              onChange={handleChange}
              min="0"
              max="100"
            />
          </div>
        </div>
      </div>
      <div className="divider"></div>

      {/* Fill Section */}

      <div className="accordion-area">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            className={`main-accordion ${
              openIndex === 0 && index === 0 && "rotate-class"
            } ${openIndex === index ? "open" : ""}`}
            whileTap={{ y: 1 }}
          >
            <div
              className={`faq-question faq-question-2 ${
                openIndex !== index ? "border-radius" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <h3>{faq.question}</h3>
              <div className="divider"></div>
              <span className="faq-toggle faq-toggle-2">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <div className="main-body">
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="faq-answer"
                  >
                    {faq.answer}
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DesignPanel;

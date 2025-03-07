import React, { useState } from "react";

const DesignPanel = () => {
  // State to manage the square's properties
  const [squareProps, setSquareProps] = useState({
    x: 197,
    y: 806,
    width: 480,
    height: 320,
    angle: 0,
    radius: 0,
    opacity: 100,
    color: "#0095FF",
  });

  // Handler to update properties
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSquareProps((prev) => ({
      ...prev,
      [name]: name === "opacity" ? Math.min(100, Math.max(0, value)) : value,
    }));
  };
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqData = [
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

  // Handler for color change
  const handleColorChange = (e) => {
    setSquareProps((prev) => ({
      ...prev,
      color: e.target.value,
    }));
  };

  return (
    <div className="design-panel-container">
      {/* Tabs */}
      <div className="tabs">
        <button className="tab active">Design</button>
        <button className="tab">Animate</button>
      </div>

      {/* Layout Section */}
      <div className="section">
        <h3>Layout</h3>
        <div className="layout-controls">
          <div className="layout-icons">
            <button className="icon-btn">↔</button>
            <button className="icon-btn">↕</button>
            <button className="icon-btn">↺</button>
          </div>
          <div className="layout-size">
            <span>
              {squareProps.width} x {squareProps.height}
            </span>
          </div>
          <div className="layout-align">
            <button className="icon-btn">⇤</button>
            <button className="icon-btn">↕</button>
            <button className="icon-btn">⇥</button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="input-group">
              <div className="input-item">
                <label>X</label>
                <input
                  type="number"
                  name="x"
                  value={squareProps.x}
                  onChange={handleChange}
                />
              </div>
              <div className="input-item">
                <label>Y</label>
                <input
                  type="number"
                  name="y"
                  value={squareProps.y}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="input-group">
              <div className="input-item">
                <label>Width</label>
                <input
                  type="number"
                  name="width"
                  value={squareProps.width}
                  onChange={handleChange}
                />
              </div>
              <div className="input-item">
                <label>Height</label>
                <input
                  type="number"
                  name="height"
                  value={squareProps.height}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="input-group">
              <div className="input-item">
                <label>Angle</label>
                <input
                  type="number"
                  name="angle"
                  value={squareProps.angle}
                  onChange={handleChange}
                />
                <span>°</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="input-group">
              <div className="input-item">
                <label>Radius</label>
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

      {/* Opacity Section */}
      <div className="section">
        <h3>Opacity</h3>
        <div className="input-group">
          <input
            type="number"
            name="opacity"
            value={squareProps.opacity}
            onChange={handleChange}
            min="0"
            max="100"
          />
          <span>%</span>
        </div>
      </div>

      {/* Fill Section */}
      <div className="section">
        <div className="section-header">
          <h3>Fill</h3>
          <button className="toggle-btn">-</button>
        </div>
        <div className="input-group color-group">
          <label>Color</label>
          <input
            type="color"
            name="color"
            value={squareProps.color}
            onChange={handleColorChange}
          />
          <input
            type="text"
            value={squareProps.color}
            onChange={handleColorChange}
          />
          <span>{squareProps.opacity}%</span>
        </div>
      </div>

      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`faq-item faq-item-2 ${openIndex === index ? "open" : ""}`}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-question">
            <h3>{faq.question}</h3>
            <span className="faq-toggle">
              {openIndex === index ? "−" : "+"}
            </span>
          </div>
          {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default DesignPanel;

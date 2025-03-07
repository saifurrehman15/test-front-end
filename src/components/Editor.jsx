import React, { useState } from "react";
import { motion } from "framer-motion";
import Select from "react-select";
import globeImg from "../assets/images/LooperGroup.png";
import bg2 from "../assets/images/bg2.png";
import Timeline from "./time-line";
import DesignPanel from "./design-panel";

const options = [
  { value: "screen1", label: "Screen 1" },
  { value: "screen2", label: "Screen 2" },
  { value: "screen3", label: "Screen 3" },
];
const Editor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: "100%", height: 320 });
  const [opacity, setOpacity] = useState(1);
  const [color, setColor] = useState("#0086FF");
  const [selectedOption, setSelectedOption] = useState(null);
  const [activeBtn, setActive] = useState("Layer");
  const [activeBtn2, setActive2] = useState("Design");

  return (
    <section className="editor-section pad-y">
      <div className="container position-relative ">
        <img src={bg2} className="img-fluid bg-img" alt="" />
        <div className="row">
          <div className="col-lg-3 col-md-3 col-12">
            <aside className="sidebar">
              <div className="d-flex gap-3 mb-3">
                <button
                  className={`tab-btn ${activeBtn == "Layer" && "active-tab"}`}
                  onClick={() => setActive("Layer")}
                >
                  Layer
                </button>
                <button
                  className={`tab-btn ${activeBtn == "Item" && "active-tab"}`}
                  onClick={() => setActive("Item")}
                >
                  Item
                </button>
              </div>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                className="screen-select"
              />
              <hr
                style={{
                  backgroundColor: "#fff",
                  height: "2px",
                }}
              />
              <ul className="item-list">
                <li>Rectangle</li>
                <li>User Interface</li>
                <li>Image</li>
              </ul>
            </aside>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="main-canvas">
              <motion.div
                className="animated-object"
                animate={{
                  x: position.x,
                  y: position.y,
                  width: size.width,
                  height: size.height,
                  opacity: opacity,
                }}
                transition={{ duration: 0.5 }}
              >
                <img src={globeImg} alt="" className="img-animated" />
              </motion.div>
              <div className="play-line-area">
                <p>0s</p>
                <div className="dots-sec">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
                <p>1s</p>

                <div className="dots-sec">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
                <p>2s</p>
                <div className="dots-sec">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
                <p>3s</p>
                <div className="dots-sec">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
                <p>4s</p>
                <div className="dots-sec">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
                <p>5s</p>
                <div className="dots-sec">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </div>
              <div className="position-relative box-time-zone">
                <div className="box-audio"></div>
                <div className="times-area">
                  <div className="timeline">
                    <div className="main-time-box">
                      <div className="time-marker">00:02</div>
                      <div className="time-line-stick"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <DesignPanel/>
            {/* <aside className="sidebar">
              <div className="tabs-area-2">
                <button
                  className={`tab-btn-2 ${
                    activeBtn2 == "Design" && "active-tab"
                  }`}
                  onClick={() => setActive2("Design")}
                >
                  Design
                </button>
                <button
                  className={`tab-btn-2 ${
                    activeBtn2 == "Animate" && "active-tab"
                  }`}
                  onClick={() => setActive2("Animate")}
                >
                  Animate
                </button>
              </div>
              <div className="align-area">
                <div className="area-box-1">
                  <button></button>
                  <button></button>
                  <button></button>
                </div>
              </div>
              <div className="layout-controls">
                <div className="control-row">
                  <label>X</label>
                  <input
                    type="number"
                    value={position.x}
                    onChange={(e) =>
                      setPosition({ ...position, x: Number(e.target.value) })
                    }
                  />
                  <label>Y</label>
                  <input
                    type="number"
                    value={position.y}
                    onChange={(e) =>
                      setPosition({ ...position, y: Number(e.target.value) })
                    }
                  />
                </div>

                <div className="control-row">
                  <label>Width</label>
                  <input
                    type="number"
                    value={size.width}
                    onChange={(e) =>
                      setSize({ ...size, width: Number(e.target.value) })
                    }
                  />
                  <label>Height</label>
                  <input
                    type="number"
                    value={size.height}
                    onChange={(e) =>
                      setSize({ ...size, height: Number(e.target.value) })
                    }
                  />
                </div>

                <div className="control-row">
                  <label>Opacity</label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={opacity}
                    onChange={(e) => setOpacity(Number(e.target.value))}
                  />
                </div>

                <div className="color-picker">
                  <label>Fill</label>
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
              </div>
            </aside> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Editor;

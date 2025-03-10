import React, { useState } from "react";
import { motion } from "framer-motion";
import Select from "react-select";
import globeImg from "../assets/images/LooperGroup.png";
import bg2 from "../assets/images/bg2.png";
import Timeline from "./time-line";
import DesignPanel from "./design-panel";
import img1 from "../assets/images/rectangle.png";
import img2 from "../assets/images/type-01.png";
import img3 from "../assets/images/image-03.png";
import selectImg from "../assets/images/scene-img.png";
import { PanelTopCloseIcon, X } from "lucide-react";
const options = [
  {
    value: "scene",
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={selectImg}
          alt="Scene"
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
        Scene
      </div>
    ),
  },
  { value: "screen1", label: "Screen 1" },
  { value: "screen2", label: "Screen 2" },
  { value: "screen3", label: "Screen 3" },
];
const Editor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: "100%", height: 350 });
  const [opacity, setOpacity] = useState(1);
  const [editorOpen, setEditorOpen] = useState(false);
  return (
    <section className="editor-section pad-y">
      <div className="container position-relative ">
        <img src={bg2} className="img-fluid bg-img bg-img-2" alt="" />
        <div className="row">
          <div className="col-lg-3 hide-column col-12">
            <SideBar2 />
          </div>
          <div className="col-lg-6 col-12">
            <button className="tool-btn" onClick={() => setEditorOpen(true)}>
              <PanelTopCloseIcon />
            </button>
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
          <div className="col-lg-3 hide-column col-12">
            <DesignPanel />
          </div>
        </div>
      </div>

      <div className={`side-bar-3 ${editorOpen ? "acitve-side" : ""}`}>
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-end">
              <button
                className="close-btns"
                onClick={() => setEditorOpen(false)}
              >
                <X size={20} />
              </button>
            </div>
            <SideBar2 />
            <DesignPanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Editor;

const SideBar2 = () => {
  const [color, setColor] = useState("#0086FF");
  const [activeBtn, setActive] = useState("Layer");
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [activeBtn2, setActive2] = useState("Design");

  return (
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
          backgroundColor: "#c1c1c1",
          color:"#000",
          height: "2px",
        }}
      />
      <ul className="item-list">
        <li className="active">
          <span className="icon-box">
            <img src={img1} className="img-fluid" alt="" />
          </span>
          Rectangle
        </li>
        <li>
          <span className="icon-box">
            <img src={img2} className="img-fluid" alt="" />
          </span>
          User Interface
        </li>
        <li>
          <span className="icon-box">
            <img src={img3} className="img-fluid" alt="" />
          </span>
          Image
        </li>
      </ul>
    </aside>
  );
};

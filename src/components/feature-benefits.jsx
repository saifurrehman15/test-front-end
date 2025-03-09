import img from "../assets/images/Arrow-1.svg";
import card1Img1 from "../assets/images/Filled.png";
import card1Img2 from "../assets/images/card-img-1.png";

// import card1Img2 from "../assets/images/img-card-1-img-1.png";
import card1Img3 from "../assets/images/card1Img2.png";
import card2Img1 from "../assets/images/customer.png";
import card3Img1 from "../assets/images/cloud-img.png";
import card4Img1 from "../assets/images/last-card-img.png";
import biggerCircle from "../assets/images/bigger-ellipse.png";
import dots from "../assets/images/texture.png";
import circle from "../assets/images/half-blurred.png";
import circle2 from "../assets/images/top-blured.png";
import card1Abs1Img from "../assets/images/side-blur.png";
import card1Abs2Img from "../assets/images/side-blur-1.png";
import card1Abs3Img from "../assets/images/circle-ellipse.png";
import card3Abs1Img from "../assets/images/card-3-blur-1.png";
import card3Abs2Img from "../assets/images/card-3-blur-2.png";

const FeatureBenefits = () => {
  const features = [
    {
      cardTitle: "Easy-to-Use Interface",
      cardDesc: `Users can quickly start using the platform without ${"\n"} needing a steep learning curve.`,
      cardSideImg: [card1Img2],
    },
    {
      cardTitle: "Collaboration Tools",
      cardDesc:
        "Users can quickly start using the platform without needing a steep learning curve.",
      cardSideImg: [card2Img1],
    },
    {
      cardTitle: "Easy-to-Use Interface",
      cardDesc:
        "Users can quickly start using the platform without needing a steep learning curve.",
      cardSideImg: [card3Img1],
    },
    {
      cardTitle: "Easy-to-Use Interface",
      cardDesc:
        "Users can quickly start using the platform without needing a steep learning curve.",
      cardSideImg: [card4Img1],
    },
  ];
  return (
    <section className="feature-sec">
      <img src={biggerCircle} className="big-ellipse" alt="" />
      <div className="container padding-container">
        <div className="row">
          <div className="col-12 mb-5">
            <div className="why-choose-header text-center">
              <h2>Features and benefits</h2>
              <p className="para">
                Create, customize, and collaborate effortlessly with our
                intuitive platform.
                <br /> From simple edits to complex designs, bring your vision
                to life in no time.
              </p>
            </div>
          </div>
          {features.map((elem, i) => (
            <div
              key={i}
              className={`mb-4 col-md-6 ${
                (i === 0 && "col-lg-7") || (i === 1 && "col-lg-5") || "col-lg-6"
              }`}
            >
              <div className={`features-card ${i == 1 ? "half-blur" : ""}`}>
                {/* Absolute Images */}
                {i === 0 && (
                  <>
                    <img
                      src={card1Abs1Img}
                      className="card-One-abs-1 abs-imgs"
                      alt=""
                    />
                    <img
                      src={card1Abs2Img}
                      className="card-One-abs-2 abs-imgs"
                      alt=""
                    />
                    <img
                      src={card1Abs3Img}
                      className="card-One-abs-3 abs-imgs"
                      alt=""
                    />
                  </>
                )}
                {i == 1 && (
                  <>
                    <img src={dots} alt="" className="dot-img" />
                    <img src={circle} className="big-ellipse-2 position-ell-1" alt="" />
                    <img src={circle2} className="big-ellipse-2 position-ell-2" alt="" />
                  </>
                )}
                {(i == 2 || i == 3) && (
                  <>
                    <img
                      src={card3Abs1Img}
                      className="card-Two-abs-1 abs-imgs"
                      alt=""
                    />
                    <img
                      src={card3Abs2Img}
                      className="card-Two-abs-2 abs-imgs"
                      alt=""
                    />
                  </>
                )}
                {/* Absolute Images End */}

                <div className="row">
                  {i > 1 && (
                    <div
                      className={`col-12  d-flex ${
                        i == 0
                          ? "justify-content-end align-items-end"
                          : "justify-content-center"
                      }`}
                    >
                      <div className="group-img-area">
                        <img
                          src={elem.cardSideImg[0]}
                          className={`imgs ${i == 2 ? "img-group-area" : ""}`}
                          alt=""
                        />
                        {/* <img src={circle} className="outer-circle ab-1" alt="" /> */}
                      </div>
                    </div>
                  )}
                  <div
                    className={`${
                      i != 0 ? "col-xl-9 col-12" : "col-lg-7"
                    } mb-3 column-text`}
                  >
                    <h2 className="card-title mb-3">{elem.cardTitle}</h2>
                    <p className="card-desc">{elem.cardDesc}</p>
                    <a href="" className="anchor-text">
                      <span>Try it now</span>
                      <img src={img} alt="" className="img-fluid" />
                    </a>
                  </div>
                  {i == 0 && (
                    <div className="col-lg-5 d-flex justify-content-end">
                      <img src={card1Img1} className="images" alt="" />
                    </div>
                  )}
                  {i < 2 && (
                    <div
                      className={`col-12  d-flex ${
                        i == 0
                          ? "justify-content-end align-items-end"
                          : "justify-content-center"
                      }`}
                    >
                      <img
                        src={elem.cardSideImg[0]}
                        className={`${i == 0 ? "img-group-1" : "w-100 animate-img"}`}
                        alt=""
                      />
                    </div>
                  )}
                  {i === 1 && (
                    <button className="collab-btn">Collaborations</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBenefits;

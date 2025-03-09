import img from "../assets/images/Arrow-1.svg";
import card1Img1 from "../assets/images/Filled.png";
import card1Img2 from "../assets/images/img-card-1-img-1.png";
import card1Img3 from "../assets/images/card1Img2.png";
import card2Img1 from "../assets/images/customer.png";
import card3Img1 from "../assets/images/cloud-img.png";
import card4Img1 from "../assets/images/last-card-img.png";
import circle from "../assets/images/circle-ellipse.png"
const FeatureBenefits = () => {
  const features = [
    {
      cardTitle: "Easy-to-Use Interface",
      cardDesc: `Users can quickly start using the platform without ${"\n"} needing a steep learning curve.`,
      cardSideImg: [card1Img2, card1Img3],
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
    <section>
      <div className="container">
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
              className={`mb-4 col-md-6 ${
                (i === 0 && "col-lg-7") || (i === 1 && "col-lg-5") || "col-lg-6"
              }`}
            >
              <div className={`features-card ${i == 1 ? "half-blur" : ""}`}>
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
                  <div className={`${i != 0 ? "col-xl-7 col-12": "col-lg-7"} mb-3`}>
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
                        className={`${i == 0 ? "img-group-1":"w-100"}`}
                        alt=""
                      />
                      <img
                        src={elem.cardSideImg[1]}
                        className={`${i == 0 ? "img-group":""}`}
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

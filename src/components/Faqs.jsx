import React, { useState } from "react";
import blur1 from "../assets/images/blur1.png";
const faqData = [
  {
    question: "Can I use Animify for free?",
    answer: "Yes! Animify offers a free plan with limited features.",
  },
  {
    question: "Why should I upgrade to the Starter plan?",
    answer:
      "Upgrading unlocks more export options, better quality, and more storage.",
  },
  {
    question: "How does workspace billing work?",
    answer:
      "Billing is based on the number of team members and the selected plan.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can cancel anytime from your account settings without any hidden fees.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 14-day refund policy if you're not satisfied with the service.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqs-section pad-y position-relative">
      <img src={blur1} className="img-fluid blur-img" alt="" />
      <div className="why-choose-header text-center">
        <h2>
          Frequently Asked <span>Questions</span>
        </h2>
      </div>
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <div className="col-lg-8 col-md-10 col-12">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? "open" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <span className="faq-toggle">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="faq-answer">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;

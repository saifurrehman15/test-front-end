import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";


const testimonials = [
    {
        name: "John M.",
        role: "Operations Lead",
        feedback: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio id commodi accusamus saepe iste delectus molestias eum accusantium reiciendis quam totam sint pariatur, doloremque expedita, quod unde, quisquam sit voluptatem.",
        image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        name: "Mike T.",
        role: "Product Designer",
        feedback: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio id commodi accusamus saepe iste delectus molestias eum accusantium reiciendis quam totam sint pariatur, doloremque expedita, quod unde, quisquam sit voluptatem.",
        image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        name: "David R.",
        role: "Product Manager",
        feedback: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio id commodi accusamus saepe iste delectus molestias eum accusantium reiciendis quam totam sint pariatur, doloremque expedita, quod unde, quisquam sit voluptatem.",
        image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        name: "Kevin B.",
        role: "Freelancer",
        feedback: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio id commodi accusamus saepe iste delectus molestias eum accusantium reiciendis quam totam sint pariatur, doloremque expedita, quod unde, quisquam sit voluptatem.",
        image: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
        name: "Robert S.",
        role: "Project Manager",
        feedback: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio id commodi accusamus saepe iste delectus molestias eum accusantium reiciendis quam totam sint pariatur, doloremque expedita, quod unde, quisquam sit voluptatem.",
        image: "https://randomuser.me/api/portraits/men/5.jpg"
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section pad-y">
            <div className="testimonials-header mb-5">
                <div className="why-choose-header text-center">
                    <h2>Our Customers</h2>
                    <p className="para"> What people say about us</p>
                </div>
            </div>
            <div className="logo-shadow left-shadow"></div>
            <Swiper
                slidesPerView={2.5}
                spaceBetween={40}
                freeMode={true}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={8000}
                modules={[Autoplay, FreeMode]}
                className="testimonial-slider"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="testimonial-card">
                        <div className="testimonial-content">
                            <div className="user-name-area">
                                <div>
                                    <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                                </div>
                                <div>
                                    <h4>{testimonial.name}</h4>
                                    <p className="role">{testimonial.role}</p>
                                </div>
                            </div>
                            <div>
                                <p className="para">{testimonial.feedback}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                slidesPerView={2.5}
                spaceBetween={40}
                freeMode={true}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: true
                }}
                speed={8000}
                modules={[Autoplay, FreeMode]}
                className="testimonial-slider"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="testimonial-card">
                        <div className="testimonial-content">
                            <div className="user-name-area">
                                <div>
                                    <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                                </div>
                                <div>
                                    <h4>{testimonial.name}</h4>
                                    <p className="role">{testimonial.role}</p>
                                </div>
                            </div>
                            <div>
                                <p className="para">{testimonial.feedback}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="logo-shadow right-shadow"></div>
        </section>
    );
};

export default Testimonials;

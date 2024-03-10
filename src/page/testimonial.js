import React from "react";
import testimonialsData from "../data/info/testimonials.json";
import "../styles/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  return (
    <section className="container testimonial_container p-0">
      <div className="heading h-[10%] flex items-center justify-center p-8">
        <span className="max-w-2xl mb-4 text-xl md:text-4xl font-extrabold">
          What our Student Says
        </span>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        className="swiper-container flex gap-10 md:flex-row"
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="avatar">
              <img
                src={require(`../data/images/${testimonial.avatar}`)}
                alt={`Avatar ${index + 1}`}
              />
            </div>
            <div className="testimonial_info">
              <h5>{testimonial.name}</h5>
              <small>
                {testimonial.role} <br /> ({testimonial.university})
              </small>
            </div>
            <div className="testimonial_body bg-black ml-4">
              <p>{testimonial.message}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;

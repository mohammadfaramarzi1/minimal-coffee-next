import TestimonialItem from "@/components/modules/TestimonialItem/TestimonialItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import styles from "../Index/Slider.module.css";

const Comments = ({ data }) => {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            TESTIMONIAL
          </h4>
          <h1 className="display-4">Product Comments</h1>
        </div>
        <div className="row">
          {data.length ? (
            <Swiper
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
              loop={true}
              modules={[Pagination]}
              className={styles.swiper}
            >
              {data.map((item) => (
                <SwiperSlide className={styles.swiper_slide}>
                  <TestimonialItem key={item.id} {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p style={{ textAlign: "center", color: "red", width: "100%" }}>
              There is no related commnets.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comments;

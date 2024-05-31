import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
const Banner = () => {
  return (
    <div className="container mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider slide1 text-center rounded-xl">
            <h2 className=" text-3xl md:text-5xl text-white font-bold mx-auto">
              Welcome to <br />{" "}
              <span>
                <Typewriter words={["TourBuzz"]} loop={true} cursor />
              </span>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider slide2 text-center rounded-xl">
            <h2 className="text-3xl md:text-5xl text-white font-bold mx-auto">
              Welcome to <br />{" "}
              <span>
                <Typewriter words={["TourBuzz"]} loop={true} cursor />
              </span>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider slide3 text-center rounded-xl">
            <h2 className="text-3xl md:text-5xl text-white font-bold mx-auto">
              Welcome to <br />{" "}
              <span>
                <Typewriter words={["TourBuzz"]} loop={true} cursor />
              </span>
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

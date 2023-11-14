import { Box } from "@mui/material";
import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import BodyPart from "../body-part/BodyParts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function HorizantalBodyPartsCards({
  data,
  setBodyParts,
  bodyParts,
  setBodyPart,
  bodyPart,
}) {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={4}
      breakpoints={{
        // when window width is >= 640px
        320: {
          slidesPerView: 1.3,
          spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2.2,
          spaceBetween: 30,
        },
        1080: {
          spaceBetween: 30,
          slidesPerView: 4,
        },
      }}
    >
      {data.map((item) => (
        <SwiperSlide>
          {bodyParts && (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HorizantalBodyPartsCards;

"use client";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import MaxWidthContent from "./MaxWidthContent";
import Image from "next/image";
import { useLocation } from "@/contexts/LocationContext";

const Menu = () => {
  const { selectedLocation } = useLocation();
  const [menuOption, setMenuOption] = useState("food");

  let menuImageArr = [];

  if (selectedLocation === "Nelson, BC") {
    menuImageArr = [
      "sushiwood/nelson-menu/nelson-menu-1.webp",
      "sushiwood/nelson-menu/nelson-menu-2.webp",
      "sushiwood/nelson-menu/nelson-menu-3.webp",
      "sushiwood/nelson-menu/nelson-menu-4.webp",
    ];
  } else if (selectedLocation === "Castlegar, BC") {
    menuImageArr = ["/sushiwood/castlegar-menu/comming-soon.jpg"];
  } else {
    if (menuOption === "food") {
      menuImageArr = [
        "/sushiwood/fernie-menu/food-menu/Final-Main-Menu-Design-5-images-1.webp",
        "/sushiwood/fernie-menu/food-menu/Final-Main-Menu-Design-5-images-2.webp",
        "/sushiwood/fernie-menu/food-menu/Final-Main-Menu-Design-5-images-3.webp",
        "/sushiwood/fernie-menu/food-menu/Final-Main-Menu-Design-5-images-4.webp",
        "/sushiwood/fernie-menu/food-menu/Final-Main-Menu-Design-5-images-5.webp",
        "/sushiwood/fernie-menu/food-menu/Final-Main-Menu-Design-5-images-6.webp",
        "/sushiwood/fernie-menu/food-menu/Final-Main-Menu-Design-5-images-7.webp",
        "/sushiwood/fernie-menu/food-menu/Final-Main-Menu-Design-5-images-8.webp",
        "/sushiwood/fernie-menu/food-menu/Final-Main-Menu-Design-5-images-9.webp",
        "/sushiwood/fernie-menu/food-menu/Final-Main-Menu-Design-5-images-10.webp",
        "/sushiwood/fernie-menu/food-menu/Final-Main-Menu-Design-5-images-11.webp",
      ];
    } else {
      menuImageArr = [
        "sushiwood/fernie-menu/drink-menu/drink-menu-01.webp",
        "sushiwood/fernie-menu/drink-menu/drink-menu-02.webp",
      ];
    }
  }

  return (
    <MaxWidthContent className="flex items-center justify-center flex-col gap-10 px-14">
      <div id="menu" className="relative w-full text-center">
        <span className="h-0 absolute -z-10 left-0 top-1/2 w-full md:h-0.5 bg-white" />
        <h2 className="text-3xl z-10 font-brandon-text uppercase tracking-wide w-40 md:w-fit md:bg-black md:px-8 mx-auto">
          {selectedLocation.split(",")[0]} Menu
        </h2>
      </div>
      {selectedLocation === "Fernie, BC" && (
        <div className="flex gap-4">
          <button
            className={`${menuOption == "food" && "underline"}`}
            onClick={() => setMenuOption("food")}
          >
            Food Menu
          </button>
          <button
            className={`${menuOption == "drink" && "underline"}`}
            onClick={() => setMenuOption("drink")}
          >
            Drink Menu
          </button>
        </div>
      )}

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {menuImageArr.map((el, index) => (
          <SwiperSlide key={index} className="relative max-w-xl">
            <Image
              src={`${el}`}
              alt={"menu"}
              height={3300}
              width={2550}
              style={{ objectFit: "cover" }}
              unoptimized
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </MaxWidthContent>
  );
};

export default Menu;

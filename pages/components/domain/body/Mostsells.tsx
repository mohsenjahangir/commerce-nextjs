import React from "react";
import { useRef } from "react";
import DiscountSvg from "../../../../public/svg/discountIcon.svg";
import ArrowLeftSvg from "../../../../public/svg/arrowLeftIcon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import DirectionSvg from "../../../../public/svg/leftdirectionIcongray.svg";
import BottomPhoto5 from "../../../../public/photos/bottom5.png";
import BottomPhoto4 from "../../../../public/photos/bottom4.png";
import BottomPhoto3 from "../../../../public/photos/bottom3.png";
import Image from "next/image";
import ShoesPhoto from "../../../../public/photos/shoes.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export const Mostsells = () => {
  const swiperRef = useRef<Swiper>();
  const shoesItems: {
    price2: string;
    price: string;
    off: string;
    image: any;
    id:Number;
  }[] = [
    {
      id:1,
      image: ShoesPhoto,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",

    },
    {
      id:2,
      image: ShoesPhoto,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      id:3,
      image: ShoesPhoto,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      id:4,
      image: ShoesPhoto,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      id:5,
      image: ShoesPhoto,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      id:6,
      image: ShoesPhoto,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      id:7,
      image: ShoesPhoto,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      id:8,
      image: ShoesPhoto,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      id:9,
      image: ShoesPhoto,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      id:10,
      image: ShoesPhoto,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      id:11,
      image: ShoesPhoto,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      id:12,
      image: ShoesPhoto,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      id:13,
      image: ShoesPhoto,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      id:14,
      image: ShoesPhoto,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      id:15,
      image: ShoesPhoto,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      id:16,
      image: ShoesPhoto,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      id:17,
      image: ShoesPhoto,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      id:18,
      image: ShoesPhoto,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
  ];
  return (
    <div className=" mr-30  w-1200">
      <div className=" flex mt-16  ">
        <div className="bg-F7 p-2 rounded-full">
          <DiscountSvg />
        </div>
        <div className=" mr-5">
          <h1 className=" font-black truncate">پرفروش ترین محصولات</h1>
        </div>
        <div className=" bg-red-100 h-0.5 w-865 mt-4 mr-6"></div>
        <div className=" mr-5">
          <button className="truncate">مشاهده ی همه</button>
        </div>
        <div className=" mb-1 -rotate-90">^</div>
      </div>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={76}
        slidesPerView={6}
        // navigation
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        //   pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="bg-F7 mt-6  rounded-3xl h-64"
      >
        {shoesItems.map((item) => (
          <SwiperSlide className=" mt-8">
            <Image src={item.image} alt="" className="" />
            <div className=" flex justify-between mr-9">
              <span className="font-black ">{item.price}</span>تومان
            </div>
            <div className="flex justify-between">
              <h6 className=" bg-red-600 rounded-full w-12  pr-2 h-7 pt-.5 text-white">
                {item.off}
              </h6>
              <h6 className=" text-slate-300 line-through">{item.price2}</h6>
            </div>
          </SwiperSlide>
        ))}
        <div className=" z-0 -mt-44 flex justify-between">
          <button  className="z-50 rotate-180" onClick={() => swiperRef.current?.slidePrev()}><DirectionSvg/></button>
          <button className="z-50"  onClick={() => swiperRef.current?.slideNext()}><DirectionSvg/></button>
        </div>
      </Swiper>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <Image src={BottomPhoto3} alt="" className=" rounded-3xl" />
        <div className="grid grid-row">
          <Image src={BottomPhoto4} alt="" className="rounded-3xl" />
          <Image src={BottomPhoto5} alt="" className="rounded-3xl mt-4" />
        </div>
      </div>
    </div>
  );
};

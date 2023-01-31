
import DiscountSvg from "../../../../public/svg/discountIcon.svg";
import ArrowLeftSvg from "../../../../public/svg/arrowLeftIcon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import DirectionSvg from "../../../../public/svg/leftdirectionIcongray.svg";
import BottomPhoto1 from "../../../../public/photos/bottom1.png";
import BottomPhoto2 from "../../../../public/photos/bottom2.png";
import Image from "next/image";
import ShoesPhoto from "../../../../public/photos/shoes.png";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Discount = () => {
  const swiperRef = useRef<Swiper>();
  const shoesItems: {
    price2: string;
    price: string;
    off: string;
    icon: any;
  }[] = [
    {
      icon: <DirectionSvg />,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      icon: <DirectionSvg />,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      icon: <DirectionSvg />,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      icon: <DirectionSvg />,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      icon: <DirectionSvg />,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      icon: <DirectionSvg />,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      icon: <DirectionSvg />,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      icon: <DirectionSvg />,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      icon: <DirectionSvg />,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      icon: <DirectionSvg />,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      icon: <DirectionSvg />,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      icon: <DirectionSvg />,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      icon: <DirectionSvg />,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      icon: <DirectionSvg />,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      icon: <DirectionSvg />,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      icon: <DirectionSvg />,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      icon: <DirectionSvg />,
      price: "4,343,000",
      price2: "4,343,000",
      off: "34%",
    },
    {
      icon: <DirectionSvg />,
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
          <h1 className=" font-black">تخفیف های ویتسل</h1>
        </div>
        <div className=" bg-red-100 h-0.5 w-865 mt-4 mr-6"></div>
        <div className=" mr-5">
          <button>مشاهده ی همه</button>
        </div>
        <div className=" mb-1 -rotate-90">^</div>
      </div>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={76}
        slidesPerView={6}
        // navigation
        //   pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="bg-F7 mt-6  rounded-3xl h-64"
      >
        {shoesItems.map((item) => (
          <SwiperSlide className=" mt-8">
            <Image src={ShoesPhoto} alt="" className="" />
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
        <div className="z-0 flex justify-between -mt-44">
          <button className="z-50 rotate-180" onClick={() => swiperRef.current?.slidePrev()}><DirectionSvg/></button>
          <button className="z-50" onClick={() => swiperRef.current?.slideNext()}><DirectionSvg/></button>
        </div>
      </Swiper>
      <div className="grid grid-cols-2   mt-4">
        <div className=" w-1200 h-52">
          <Image className=" rounded-2xl" src={BottomPhoto1} alt="" />
        </div>
        <div className=" w-1200 h-52 mr-1">
          <Image className=" rounded-2xl" src={BottomPhoto2} alt="" />
        </div>
      </div>
    </div>
  );
};

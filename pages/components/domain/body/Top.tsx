import PhonePhoto from "../../../../public/photos/phonePhoto.png";
import DirectionSvg from "../../../../public/svg/leftdirectionIcongray.svg";
import SanfordPhoto from "../../../../public/photos/sanford.png";
import BottomPhoto1 from "../../../../public/photos/bottom1.png";
import BottomPhoto2 from "../../../../public/photos/bottom2.png";
import Image from "next/image";
import { Swiper , SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Top = () => {
  const swiperRef1 = useRef<Swiper>();
  const swiperRef2 = useRef<Swiper>();
  const shoesItems: {
    price2: string;
    price: string;
    title: string;
    image: any;
    id:Number;
  }[] = [
    {
      id:1,
      image: PhonePhoto,
      price: "4,343.000تومان ",
      price2: "4,343.000تومان ",
      title: "همزن برقی Sanford",
    },
    {
      id:2,
      image: PhonePhoto,
      price: "4,343.000تومان ",
      price2: "4,343.000تومان ",
      title: "همزن برقی Sanford",
    },
    {
      id:3,
      image: PhonePhoto,
      price: "4,343.000تومان ",
      price2: "4,343.000تومان ",
      title: "همزن برقی Sanford",
    },
    {
      id:4,
      image: PhonePhoto,
      price: "4,343.000تومان ",
      price2: "4,343.000تومان ",
      title: "همزن برقی Sanford",
    },
  ];
  return (
    <>
      <div className="w-1200 mr-30">
        <div className="grid grid-cols-3 gap-44 h-373">
          <div className="col-span-2 w-902 ml-4">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={1}
              slidesPerView={1}
              // navigation
              onBeforeInit={(swiper) => {
                swiperRef2.current = swiper;
              }}
                pagination={{ clickable: true }}
              //   scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className="bg-F7  rounded-3xl h-373"
            >
              {shoesItems.map((item,id) => (
                <SwiperSlide className="" key={item.id} >
                  <Image src={item.image} alt="" className="" />
                </SwiperSlide>
              ))}
                       <div className=" -mt-56  z-0 flex justify-between">
                <button
                  className=" z-50 rotate-180"
                  onClick={() => swiperRef2.current?.slidePrev()}
                >
                  <DirectionSvg />
                </button>
                <button
                  className="z-50"
                  onClick={() => swiperRef2.current?.slideNext()}
                >
                  <DirectionSvg />
                </button>
              </div>
            </Swiper>
          </div>
          <div className="">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={1}
              slidesPerView={1}
              // navigation
              onBeforeInit={(swiper) => {
                swiperRef1.current = swiper;
              }}
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className="bg-F7 w-282 h-373 rounded-3xl "
            >
              {shoesItems.map((item,id) => (
                <SwiperSlide className=" mr-2" key={item.id}>
                  <Image src={SanfordPhoto} alt="" className=" mr-6 mt-3" />
                  <h1 className=" mt-5 font-black">{item.title}</h1>
                  <h1 className=" mt-8 text-left ml-8">{item.price}</h1>
                  <h1 className="text-left ml-8 line-through text-gray-400">
                    {item.price2}
                  </h1>
                </SwiperSlide>
              ))}
              <div className=" -mt-56  z-0 flex justify-between">
                <button
                  className=" z-50 rotate-180"
                  onClick={() => swiperRef1.current?.slidePrev()}
                >
                  <DirectionSvg />
                </button>
                <button
                  className="z-50"
                  onClick={() => swiperRef1.current?.slideNext()}
                >
                  <DirectionSvg />
                </button>
              </div>
            </Swiper>
          </div>
        </div>
        <div className="grid grid-cols-2  mt-4">
          <div className="h-52">
            <Image className=" rounded-2xl" src={BottomPhoto1} alt="" />
          </div>
          <div className="h-52 mr-1">
            <Image className=" rounded-2xl" src={BottomPhoto2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

import React from "react";
import Image from "next/image";
import FireSvg from "../../../../public/svg/fireIcon.svg";
import SanfordPhoto from "../../../../public/photos/sanford.png";
import Fire2Svg from "../../../../public/svg/fire2Icon.svg";
import HeadsetPhoto from "../../../../public/photos/headset.png";
export const Amazing = () => {
  const AmazingItems: {
    icon: any;
    title: string;
    price: string;
    price2: string;
    off: string;
    image: any;
  }[] = [
    {
      icon: Fire2Svg,
      image: HeadsetPhoto,
      price: "4,343,000 تومان",
      price2: "4,343,000",
      title: "کتونی نایک شماره 121",
      off: "34%",
    },
    {
        icon: Fire2Svg,
        image: HeadsetPhoto,
        price: "4,343,000 تومان",
        price2: "4,343,000",
        title: "کتونی نایک شماره 121",
        off: "34%",
      },
      {
        icon: Fire2Svg,
        image: HeadsetPhoto,
        price: "4,343,000 تومان",
        price2: "4,343,000",
        title: "کتونی نایک شماره 121",
        off: "34%",
      },
      {
        icon: Fire2Svg,
        image: HeadsetPhoto,
        price: "4,343,000 تومان",
        price2: "4,343,000",
        title: "کتونی نایک شماره 121",
        off: "34%",
      },
      {
        icon: Fire2Svg,
        image: HeadsetPhoto,
        price: "4,343,000 تومان",
        price2: "4,343,000",
        title: "کتونی نایک شماره 121",
        off: "34%",
      },
      {
        icon: Fire2Svg,
        image: HeadsetPhoto,
        price: "4,343,000 تومان",
        price2: "4,343,000",
        title: "کتونی نایک شماره 121",
        off: "34%",
      },
      {
        icon: Fire2Svg,
        image: HeadsetPhoto,
        price: "4,343,000 تومان",
        price2: "4,343,000",
        title: "کتونی نایک شماره 121",
        off: "34%",
      },
      {
        icon: Fire2Svg,
        image: HeadsetPhoto,
        price: "4,343,000 تومان",
        price2: "4,343,000",
        title: "کتونی نایک شماره 121",
        off: "34%",
      },
      {
        icon: Fire2Svg,
        image: HeadsetPhoto,
        price: "4,343,000 تومان",
        price2: "4,343,000",
        title: "کتونی نایک شماره 121",
        off: "34%",
      },
  ];
  return (
    <div className=" mt-20 mr-30 w-1200">
      <div className=" flex mt-16  ">
        <div className="bg-F7 p-2 rounded-full">
          <FireSvg />
        </div>
        <div className=" mr-5">
          <h1 className=" font-black truncate">پیشنهادهای شگفت انگیز</h1>
        </div>
        <div className=" bg-red-100 h-0.5 w-865 mt-4 mr-6"></div>
        <div className=" mr-5">
          <button className="truncate mt-1">مشاهده ی همه</button>
        </div>
        <div className=" mb-1 -rotate-90">^</div>
      </div>
      <div className="grid grid-cols-4  mt-6">
        <div className=" bg-F7 h-368 rounded-3xl">
          <div className=" float-left ml-4 ">
            <Fire2Svg />
          </div>
          <Image src={SanfordPhoto} alt="" className="mr-7" />
          <h1 className=" font-black mr-3 mt-5">همزن برقی sanford</h1>
          <h1 className=" font-black mr-3 text-left mt-20 ml-2">
            4,343,000 تومان
          </h1>
        </div>
        <div className=" col-span-3">
          <div className="grid grid-cols-3">
            {AmazingItems.map((item) => (
                <div className="flex justify-between bg-F7 w-274 h-28 rounded-3xl mb-4 mr-6">
                    <div><Image src={HeadsetPhoto} alt=""/></div>
                    <div className="ml-2">
                        <div className="flex justify-between mt-0.5"><h1 className=" mt-3 ml-2 font-black truncate">{item.title}</h1><Fire2Svg/>
                        </div>
                        <h1 className=" font-black text-left">{item.price}</h1>
                        <div className="flex justify-between mt-2"><h1 className=" bg-red-600 rounded-full w-12  pr-2 h-7 pt-.5 text-white">{item.off}</h1><h1>{item.price2}</h1></div>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

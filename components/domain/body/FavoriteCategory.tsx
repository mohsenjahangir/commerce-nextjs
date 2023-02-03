import React from "react";
import MenuIconSvg from "../../../public/svg/menuIcon.svg";
import BigCart from '../../../public/photos/bigcart.png'
import Image from "next/image";
import Catego1 from '../../../public/photos/cate (1).png';
import Catego2 from '../../../public/photos/cate (2).png';
import Catego3 from '../../../public/photos/cate (3).png';
import Catego4 from '../../../public/photos/cate (4).png';
import Catego5 from '../../../public/photos/cate (5).png';
import Catego6 from '../../../public/photos/cate (6).png';
import Catego7 from '../../../public/photos/cate (7).png';
import Catego8 from '../../../public/photos/cate (8).png';
import Catego9 from '../../../public/photos/cate (9).png';

 const FavoriteCategory = () => {
  const CategoItems: {
    title: string;
    price: string;
    off: string;
    image:any;
    id:Number;
    
  }[] = [
    {
      id:1,
      image:Catego1,
      price: "4,343,000",
      title: "تجهیزات صنعتی",
      off: "34%",
    },
    {
      id:2,
      image:Catego2,
      price: "4,343,000",
      title: "لوازم تحریر",
      off: "34%",
    },
    {
      id:3,
      image:Catego3,
      price: "4,343,000",
      title: "کالای دیجیتال",
      off: "34%",
    },
    {
      id:4,
      image:Catego4,
      price: "4,343,000",
      title: "موبایل",
      off: "34%",
    },
    {
      id:5,
      image:Catego5,
      price: "4,343,000",
      title: "مدوپوشاک",
      off: "34%",
    },
    {
      id:6,
      image:Catego6,
      price: "4,343,000",
      title: "خانه و آشپزخانه",
      off: "34%",
    },
    {
      id:7,
      image:Catego7,
      price: "4,343,000",
      title: "زیبایی و سلامت",
      off: "34%",
    },
    {
      id:8,
      image:Catego8,
      price: "4,343,000",
      title: "اسباب بازی",
      off: "34%",
    },
    {
      id:9,
      image:Catego9,
      price: "4,343,000",
      title: "سوپر مارکت",
      off: "34%",
    },
  ];
  return (
    <div className=" mt-20 mr-30 w-1200">
      <div className="grid grid-cols-3 gap-9">
        <div className="col-span-2">
          {" "}
          <div className=" flex -mt-4">
            <div className="bg-F7 p-2 rounded-full">
              <MenuIconSvg />
            </div>
            <div className=" mr-5">
              <h1 className=" font-black truncate">دسته بندی های محبوب</h1>
            </div>
            <div className=" bg-red-100 h-0.5 w-full mt-4 mr-6"></div>
          </div>
          <div className="h-56 grid grid-cols-5 gap-6 -mr-6 mt-6">
            {CategoItems.map((item,id)=>
            <div className=" bg-F7 rounded-2xl mr-6 w-36 h-36" key={item.title}>
              <Image src={item.image} alt="" className=" mr-5"/>
              <h1 className=" font-black text-center">{item.title}</h1>
            </div>
            )}
          </div>
        </div>
        <div className="-mt- w-399 h-368">
          <Image src={BigCart} alt="" className=""/>
        </div>
      </div>
    </div>
  );
};
 export default FavoriteCategory
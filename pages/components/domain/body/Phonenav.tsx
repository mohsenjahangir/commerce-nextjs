import React from "react";
import PhoneNav from "../../../../public/photos/phonenav.png";
import BigPhone from '../../../../public/photos/bigphone.png';
import Image from "next/image";

export const Phonenav = () => {
  return (
    <>
    <div className="mr-30 w-1200 mt-14">
        <div>
            <Image src={PhoneNav} alt="" className="z-10"/>
        </div>
    </div>
    </>
  );
};

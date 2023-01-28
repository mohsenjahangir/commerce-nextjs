 import React from 'react'
 import MenuIconSvg from '../../../../public/svg/menuIcon.svg';
 export const FavoriteCategory = () => {
   return (
     <div className=' mt-20 mr-30'>
              <div className=" flex mt-16  ">
        <div className="bg-F7 p-2 rounded-full">
         <MenuIconSvg/>
        </div>
        <div className=" mr-5">
          <h1 className=' font-black'>دسته بندی های محبوب</h1>
        </div>
        <div className=" bg-red-100 h-0.5 w-96 mt-4 mr-6"></div>
      </div>
     </div>
   )
 }
 
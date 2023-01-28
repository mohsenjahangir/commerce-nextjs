import PhonePhoto from "../../../../public/photos/phonePhoto.png";
import DirectionSvg from "../../../../public/svg/leftdirectionIcongray.svg";
import SandfordPhoto from "../../../../public/photos/sanford.png";
import BottomPhoto1 from "../../../../public/photos/bottom1.png";
import BottomPhoto2 from "../../../../public/photos/bottom2.png";
import Image from "next/image";
export const Top = () => {
  return (
    <>
     <div className=" w-full mr-30">
      <div className="grid grid-cols-3  gap-44">
        <div className="col-span-2 ...">
          <div
            id="default-carousel"
            className="relative w-902"
            data-carousel="static"
          >
            <div className="relative h-56 overflow-hidden rounded-3xl md:h-96 ">
              <div className="duration-700 ease-in-out" data-carousel-item>
                <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">
                  First Slide
                </span>
                <Image
                  src={PhonePhoto}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt=""
                />
              </div>

              <div className="duration-700 ease-in-out" data-carousel-item>
                <Image
                  src={PhonePhoto}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt=""
                />
              </div>

              <div className="duration-700 ease-in-out" data-carousel-item>
                <Image
                  src={PhonePhoto}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt=""
                />
              </div>
            </div>

            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
            </div>

            <button
              type="button"
              className="absolute top-0 -left-9 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30  ">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                <span className=" ml-8"><DirectionSvg/></span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 -right-9 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white ">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                <span className=" rotate-180 mr-8"><DirectionSvg/></span>
              </span>
            </button>
          </div>
        </div>
        <div className=" w-72  bg-F7 rounded-3xl">
          <div className="col-span-2">
            <div
              id="indicators-carousel"
              className="relative "
              data-carousel="static"
            >
              <div className="h-full rounded-lg md:h-96 ">
                {/* <PhonephotoSvg/> */}
                <div
                  className=" duration-700  ease-in-out"
                  data-carousel-item="active"
                >
                  <Image
                    src={SandfordPhoto}
                    className="absolute block -translate-x-1/2 -translate-y-1/2  top-1/3 left-1/2"
                    alt=""
                  />
                </div>

                <div className=" duration-700 ease-in-out" data-carousel-item>
                  <Image
                    src={SandfordPhoto}
                    className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2"
                    alt=""
                  />
                </div>

                <div className=" duration-700 ease-in-out" data-carousel-item>
                  <Image
                    src={SandfordPhoto}
                    className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2"
                    alt=""
                  />
                </div>
              </div>

              <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 4"
                  data-carousel-slide-to="3"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 5"
                  data-carousel-slide-to="4"
                ></button>
              </div>

              <button
                type="button"
                className="absolute  top-0   z-30 flex items-center justify-center h-full  -left-3 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60  group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-red-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  <span className=" ml-4"><DirectionSvg/></span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 -right-6 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60  group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  <span className=" rotate-180 -left-4"><DirectionSvg/></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 mr-30   mt-4">
      <div className=" w-1200 h-52"><Image className=" rounded-2xl"  src={BottomPhoto1} alt=""/></div>
      <div className=" w-1200 h-52 mr-16"><Image className=" rounded-2xl" src={BottomPhoto2} alt=""/></div>
      
    </div>
    
    </>
   
  );
};

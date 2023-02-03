import Image from "next/image";
import Link from "next/link";
import LogoSvg from "../../../public/svg/logoIconBig.svg";
import SendSvg from "../../../public/svg/sendIcon.svg";
import PhoneSvg from "../../../public/svg/phoneIcon.svg";
import AddressSvg from "../../../public/svg/addressIcon.svg";
import InstagramSvg from "../../../public/svg/instagramIcon.svg";
import TelegramSvg from "../../../public/svg/telegramIcon.svg";
import WhatsupSvg from "../../../public/svg/whatsupIcon.svg";
import StandardPhoto from "../../../public/photos/standard.png"
import UnitedPhoto from "../../../public/photos/united.png";
function Footer() {
  return (
    <>
      <div className="flex justify-between  w-1200 mr-30 mt-28 mb-7">
        <div className=" mr-29">
          <div className=" w-28 h-28 mt-12">
            <LogoSvg />
          </div>

          <h1 className=" pt-1 font-black">ویتسل</h1>
          <p className=" mt-1">
            صرافی هفت ارز پلتفرم ایمن و سریع برای <br />
            انجام معاملات ارز دیجیتال در بستری مطمئن
          </p>
        </div>
        <div className=" mt-12 mr-11">
          <h1 className="font-black">باویتسل</h1>
          <ul>
            <li className=" mt-3">
              <Link href="/">در باره ما</Link>
            </li>
            <li className=" mt-3">
              <Link href="/">تماس با ما</Link>
            </li>
            <li className=" mt-3">
              <Link href="/">حریم خصوصی</Link>
            </li>
            <li className=" mt-3">
              <Link href="/">شرایط بازگشت کالا</Link>
            </li>
          </ul>
        </div>
        <div className=" mt-12 mr-35">
          <h1 className="font-black">محصولات ویتسل</h1>
          <ul>
            <li className=" mt-3">
              <Link href="/">کالای دیجیتال</Link>
            </li>
            <li className=" mt-3">
              <Link href="/"> سوپرمارکت</Link>
            </li>
            <li className=" mt-3">
              <Link href="/"> گوشی موبایل</Link>
            </li>
            <li className=" mt-3">
              <Link href="/"> ابزار الات</Link>
            </li>
            <li className=" mt-3">
              <Link href="/"> ابزار الات</Link>
            </li>
          </ul>
        </div>
        <div className=" mt-12 mr-43">
          <h1 className="font-black "> ارتباط با ویتسل</h1>
          <ul>
            <div className="flex mt-3 flex-row font-medium">
              <div className=" ml-3">
                <SendSvg />
              </div>

              <Link href="/">ٰvitdell@gmail.com </Link>
            </div>
            <div className="flex mt-3 flex-row font-medium">
              <div className=" ml-3">
                <PhoneSvg />
              </div>

              <Link href="/">۰۸۴۷۷۴۷۳۲۲ </Link>
            </div>
            <div className="flex mt-3 flex-row font-medium">
              <div className=" ml-3">
                <AddressSvg />
              </div>

              <p>
                {" "}
                خیابان ولی عصرنرسیده به سینما <br />
                آفریقا
              </p>
            </div>
            <div className="flex mt-3 flex-row font-medium">
              <div className=" ml-3">
                <InstagramSvg />
              </div>
              <div className=" ml-3">
                <TelegramSvg />
              </div>
              <div className=" ml-3">
                <WhatsupSvg />
              </div>
            </div>
          </ul>
        </div>
        <div className=" mt-12">
          <div className=" bg-F7 rounded-2xl p-2">
            <div className=" w-28 h-28">
              <Image src={StandardPhoto} alt="" />
            </div>
          </div>

          <br />
          <div className=" bg-F7 rounded-2xl p-2">
            <div className=" w-28 h-28 mt-1">
              <Image src={UnitedPhoto} alt="" />
            </div>
          </div>
        </div>
      </div>
      <hr className="mr-30 w-1200" />
      <p className=" mt-3 mr-30">کلیه حقوق متعلق به شرکت ویستا است. </p>
    </>
  );
}

export default Footer;

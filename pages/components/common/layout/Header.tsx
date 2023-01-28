
import FireSvg from '../../../../public/svg/fireIcon.svg';
import DiscountSvg from '../../../../public/svg/discountIcon.svg';
import MenuIconSvg from '../../../../public/svg/menuIcon.svg';
import LogoSvg from '../../../../public/svg/logoIcon.svg';
import SearchSvg from '../../../../public/svg/searchIcon.svg';
import CartSvg from '../../../../public/svg/cartIcon.svg';


function Header() {
    const navItems: {
        title: string;
        link: string;
        icon:any ;
    }[] = [
        {
            icon: <MenuIconSvg/>,
            link: '/categories',
            title: 'دسته بندی',
        },
        {
            icon:<FireSvg/> ,
            title: 'پرفروش ترین ها',
            link: '/most-seles',
        },
        {
            icon:<DiscountSvg/>,
            title: 'تخفیف دارها',
            link: 'days-discount',
        },
    ];

    return (
        <div className="rounded-full mt-8  mx-30 mb-4  h-20 w-1200 shadow-2xl  flex justify-between">
            <div className=" flex gap-6  my-5 mr-6">
                <div className="w-10 h-10  "><LogoSvg/></div>
                {/* bg-yellow-500 */}
                {navItems.map((item) => {
                    return (
                        <div key={item.title} className="flex gap-1 ">
                            <div className='mt-2 mb-2.5'>{item.icon}</div>
                            <div className="text-sm mt-2 mb-2.5">{item.title}</div>
                            {/* bg-gray-700 */}
                        </div>
                    );
                })}
            </div>

            <div className="flex gap-2 my-4 ml-6  ">
                <div className="relative  p-3 h-12 overflow-hidden rounded-full w-64  bg-gray-200 ">
                    <div className="absolute w-8 -mt-1 -ml-3 h-8 left-4 top-4"><SearchSvg/></div>
                    <input className="w-full  bg-gray-200  h-full pt-3 pb-3 px-3  " placeholder="جستجوی محصولات..." />
                </div>
                <button className="rounded-full bg-gray-200 w-12 h-12   p-3.5 "><CartSvg/></button>
                <button className="rounded-full bg-red-600 text-white px-3 py-1.5">
                    ورود/ ثبت نام
                </button>
            </div>
        </div>
    );
}

export default Header;
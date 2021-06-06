import Link from 'next/link'
import Image from 'next/image'
import { MdClose } from "react-icons/md";

const MenuDrawer = ({toggleDrawer}) => {

    return (
        <div className="z-10 absolute bg-black text-white inset-0 p-8">
            <div className="flex flex-col">
                <div className="grid pb-6 grid-cols-3">
                    <div></div>
                    <div className="place-self-center">
                        <Image 
                            className='object-cover'
                            src="/images/logo_x_white.png"
                            alt="Starlink Logo"
                            width={81}
                            height={28}
                        />
                    </div>
                <div className="justify-self-end self-center sm:mr-12" onClick={() => toggleDrawer()}>
                    <MdClose size={26} className=""/>
                </div>
                </div>
                    <div className="py-7 border-b border-white text-lg">
                            <span className="text-lg font-medium"><Link href="https://www.starlink.com/faq"><a>FAQ</a></Link></span>
                    </div>
                <div className="py-7 border-b border-white">
                    <button>
                        <span className="flex">
                            <span className="text-lg font-medium">US</span>
                            <img src="/images/language.svg" className="w-6 ml-2" alt="Language" />
                        </span>
                    </button>
                </div>
                <div className="py-7 border-b border-white text-lg font-medium">
                    <Link href=""><a>SIGN IN</a></Link>
                </div>
            </div>
        </div>
    )
}

export default MenuDrawer;

import { useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdClose } from "react-icons/md";


const MenuDrawer = ({toggleDrawer, isOpen}) => {

    return (
            <div className={`z-20 fixed bg-black text-white w-full sm:w-64 top-0 h-full p-8  ease-in-out transform transition-all duration-500 ${isOpen ? '-right-0' : '-right-full'}`}>
                <div className="flex flex-col">
                    <div className="grid pb-6 grid-cols-3 sm:grid-cols-2">
                        <div></div>
                        <div className="place-self-center sm:hidden">
                            <Image 
                                className='object-cover'
                                src="/images/logo_x_white.png"
                                alt="Starlink Logo"
                                width={81}
                                height={28}
                                />
                        </div>
                    <div className="justify-self-end self-center " onClick={() => toggleDrawer()}>
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

import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaUserCircle } from 'react-icons/fa'
import { GrLanguage } from 'react-icons/gr'

const Header = () => {

    return (
        <div className=" w-full flex flex-row pt-8 max-h-full place-content-stretch items-stretch">
                <div className="w-full flex place-content-between">
                    <div className="ml-8">
                        <Image 
                            src="/images/SL_Logo_White.svg"
                            alt="Starlink Logo"
                            width={194}
                            height={26.33}
                        />
                    </div>
                    <div className="hidden sm:flex text-white font-bold">
                        <div><span>FAQ</span></div>
                        <div className="">
                            <span>US</span>
                            <img src="/images/language.svg"></img>
                        </div>
                        <div>
                            <img src="/images/Profile_white.svg" className="h-6"></img>
                        </div>
                    </div>
                    <div className="flex place-content-center sm:hidden">
                        <img src="/images/hamburger_white.png"></img>
                    </div>
                </div>
        </div>
    )
}

export default Header;
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaUserCircle } from 'react-icons/fa'

const Header = () => {

    return (
        <div className="flex flex-row pt-8 max-h-full place-content-stretch items-stretch">
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
                        <div><span>US</span></div>
                        <div><FaUserCircle className="block text-white text-2xl"/></div>
                    </div>
                    <div className="flex place-content-center w-12 sm:hidden">
                        <GiHamburgerMenu className="block text-white text-2xl"/>
                    </div>
                </div>
        </div>
    )
}

export default Header;
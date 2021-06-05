import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaUserCircle } from 'react-icons/fa'
import { GrLanguage } from 'react-icons/gr'

const Header = () => {

    return (
        <div className="absolute  w-full flex flex-row pt-8 max-h-full place-content-stretch items-stretch">
                <div className="w-full grid grid-cols-3">
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
                    <div className="mr-8 justify-self-end self-center sm:mr-20">
                        <img src="/images/hamburger_white.png" className="h-4"></img>
                    </div>
                </div>
        </div>
    )
}

export default Header;
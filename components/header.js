import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {

    return (
        <div className="flex flex-row max-h-20 flex-1 items-center justify-between">
                <div className="" ></div>
                <div className="">
                    <img
                        src="/images/logo_x_white.png"
                        width="126px"
                        // height="auto"
                    />
                </div>
                <div className="flex place-content-center w-12">
                    <GiHamburgerMenu className="block text-white text-2xl sm:hidden"/>
                </div>
        </div>
    )
}

export default Header;
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {

    return (
        <div>
            <div>    
                <div></div>
                <div>
                    <img
                        src="/images/logo_x_black.png"
                        width="126px"
                        // height="auto"
                    />
                </div>
                <div>
                    <GiHamburgerMenu />
                </div>
            </div>
        </div>
    )
}

export default Header;
import Image from 'next/image'

const Header = () => {

    return (
        <div>
            <div>    
                <div></div>
                <div>
                    <Image
                        src="/images/logo_x_black.png"
                        width={126}
                        height={126}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header;
 
const ImageHero = ({imageFilename, bgPosition= 'bg-center', children}) => {

    return (
        <div className={`h-screen grid bg-cover ${bgPosition} bg-no-repeat border-white`} style={{
            backgroundImage: `url('/images/${imageFilename}')`}}>
                {children}
        </div>
    )
}

export default ImageHero
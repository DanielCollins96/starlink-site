 
const ImageHero = ({imageFilename, bgPosition= 'bg-center', fixed=false ,children}) => {

    return (
        <div className={`h-screen min-h-full relative grid bg-cover ${bgPosition} bg-no-repeat ${fixed ? 'bg-fixed' : ''}`} style={{
            backgroundImage: `url('/images/${imageFilename}')`}}>
                {children}
        </div>
    )
}

export default ImageHero

const Backdrop = ({closeDrawer , isOpen, children}) => {
    return (
        <div className={`absolute inset-0 z-10 bg-white bg-opacity-0 transition duration-200 ease-in-out ${isOpen ? 'visible bg-opacity-20' : 'invisible'}`} onClick={closeDrawer}>
            {children}
        </div>
    )
}

export default Backdrop
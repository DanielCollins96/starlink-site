
const Backdrop = ({closeDrawer , isOpen, children}) => {
    return (
        <div className={`absolute inset-0 z-10 bg-black bg-opacity-60 ${isOpen ? '' : 'hidden'}`} onClick={closeDrawer}>
            {children}
        </div>
    )
}

export default Backdrop
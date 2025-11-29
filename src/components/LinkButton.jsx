const LinkButton = ({ children }) => {
    return (
        <span className="group relative cursor-pointer inline-block">
            {children}
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
        </span>
    )
}

export default LinkButton;
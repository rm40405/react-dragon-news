import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex justify-center flex-col items-center p-2">
        <div>
            <img className="w-[300px]" src={logo} alt="" />
        </div>
        
        </div>
    );
};

export default Header;
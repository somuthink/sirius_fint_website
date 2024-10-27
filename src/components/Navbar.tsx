import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import Chat from "../assets/Chat.svg";
import Document from "../assets/Document.svg";
import Checks from "../assets/Checks.svg";
import Profile from "../assets/Profile.svg";
import Home from "../assets/Home.svg";
import { injectSVGColors } from "./injectSVGcolor";
interface NavbarElementProps {
    children: React.ReactNode;
}

const NavbarElement = ({ children }: NavbarElementProps) => {
    return (
        <div className="p-4 bg-white rounded-3xl gap-7 justify-center items-center inline-flex shadow-custom inset-x-0 inset-y-0">
            {children}
        </div>
    );
};

interface NavbuttonProps {
    path: string;
    icon: string;
}

const Navbutton = ({ path, icon }: NavbuttonProps) => {
    const location = useLocation();
    const isActive = location.pathname === path;

    return (
        <Link to={path}>
            <ReactSVG
                className={`opacity-100 hover:opacity-70 transition-opacity `}
                beforeInjection={(svg) =>
                    isActive ? injectSVGColors(svg, "text-TextBlack") : null
                }
                src={icon}
            />
        </Link>
    );
};

const Navbar = () => {
    const [hide, setHide] = useState(true);
    const location = useLocation();

    const centerIcons = [
        { path: "/history", icon: Document },
        { path: "/chat", icon: Chat },
        { path: "/checks", icon: Checks },
    ];

    useEffect(() => {
        setHide(location.pathname !== "/login");
    }, [location]);

    return (
        <>
            {hide && (
                <div className="fixed w-min flex flex-row inset-x-0 mx-auto left-0 right-0 bottom-[10%] gap-1">
                    <NavbarElement>
                        <Navbutton path="/" icon={Home} />
                    </NavbarElement>
                    <NavbarElement>
                        {centerIcons.map(({ path, icon }, index) => (
                            <Navbutton path={path} icon={icon} key={index} />
                        ))}
                    </NavbarElement>
                    <NavbarElement>
                        <Navbutton path="/profile" icon={Profile} />
                    </NavbarElement>
                </div>
            )}
        </>
    );
};

export default Navbar;

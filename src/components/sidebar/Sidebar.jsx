import {Logo} from "../header/Logo.jsx";
import {NavigationMenu} from "../header/NavigationMenu.jsx";
import {CartIcon} from "../header/CartIcon.jsx";
import {Login} from "../header/Login.jsx";
import {FiMenu} from "react-icons/fi";
import {useState} from "react";
import {IoCloseOutline} from "react-icons/io5";

const menu = [
    {
        home :"Home"
    },
    {
        home :"About"
    },    {
        home :"Shop"
    },
    {
        home :"Contact"
    }
]


export const Sidebar = () => {
    const [state, setState] = useState(false);

    const onClickState = () => {
        setState(!state);
    };

    return (
        <div>
            <div className=" py-2 header flex items-center justify-between grid grid-cols-12 px-4 pr-10 ">
                <div className={"col-span-1"}>
                    <div
                        className={`transition-transform duration-300 ease-in-out ${state ? 'scale-125' : 'scale-100'}`}>
                        {
                            !state ?
                                <FiMenu size={30} onClick={onClickState}
                                        className="transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer"/> :
                                <IoCloseOutline size={30} onClick={onClickState}
                                                className="transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer"/>
                        }
                    </div>
                </div>
                <div className="flex items-center gap-4 col-span-8 ml-3">
                    <Logo/>
                </div>
                <div className={`flex hidden md:block`}>
                    <NavigationMenu/>
                </div>
                <div className="flex items-center gap-8 col-span-3  ml-auto">
                    <CartIcon itemCount={1}/>
                    <Login/>
                </div>
            </div>
            <div
                className={`sidebar absolute z-10 left-0 transition-transform duration-300 ease-in-out ${state ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className={"contenedor-sidebar  text-white h-full p-4"}>
                    <ul className={"text-center mt-8"}>
                        {
                            menu.map((m, index) => (
                                <li className={"my-6"} key={index}>{m.home}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};
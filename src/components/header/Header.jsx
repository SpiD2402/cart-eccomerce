import { useState } from "react";
import { Logo } from "./Logo.jsx";
import { NavigationMenu } from "./NavigationMenu.jsx";
import { CartIcon } from "./CartIcon.jsx";
import { Login } from "./Login.jsx";

export const Header = () => {

    return (
        <div className=" py-2 header grid grid-cols-12 items-center mx-10">
            <div className="flex items-center gap-4 col-span-2">
                <Logo />
            </div>
            <div className="col-span-8 flex justify-center">
                <NavigationMenu />
            </div>
            <div className="flex items-center gap-8 col-span-2  ml-auto">
                <CartIcon  />
                <Login />
            </div>
        </div>

    );
};

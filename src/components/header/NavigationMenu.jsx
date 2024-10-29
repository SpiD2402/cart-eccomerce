import {Link} from "react-router-dom";

export const NavigationMenu = () => {
    return (
        <div>
            <ul className={"flex gap-5  nav-menu "}>
                <Link to={"/"}>Home</Link>
                <Link to={"/shop"}>Shop</Link>
            </ul>
        </div>
    )
}

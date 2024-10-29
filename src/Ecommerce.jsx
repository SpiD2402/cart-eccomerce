import {Header} from "./components/header/Header.jsx";
import {Sidebar} from "./components/sidebar/Sidebar.jsx";
import {BrowserRouter} from "react-router-dom";
import {Router} from "./router/Router.jsx";

export const Ecommerce = () => {
    return (
        <BrowserRouter>
            <div className="">
                {/* Header visible solo en pantallas grandes */}
                <div className="border md:block hidden">
                    <Header/>
                </div>

                {/* Sidebar visible en pantallas pequeñas */}
                <div className="block md:hidden fixed top-0  w-full z-50 bg-white">
                    <Sidebar/>
                </div>

                {/* Ajuste del contenido del Router */}
                <div className="mt-[80px] md:mt-0"> {/* Ajusta el valor de mt-[] según la altura de tu header */}
                    <Router/>
                </div>
            </div>
        </BrowserRouter>


    )
}

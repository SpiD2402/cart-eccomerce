import { Route, Routes} from "react-router-dom";
import {Main} from "../page/Main.jsx";


import {Shop} from "../page/Shop.jsx";

export const Router = () => {
    return (
        <Routes>
            <Route  path="/" element={<Main/>} />
            <Route path="/shop"  element={<Shop/>}/>
        </Routes>
    )
}

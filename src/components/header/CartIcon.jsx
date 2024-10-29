import {IoCartOutline} from "react-icons/io5";
import {useDispatch, useSelector} from 'react-redux';
import {removeFromCart, selectCartValue} from "../../store/slices/cart/CartSlice.jsx";
import {useEffect, useState} from "react";


export const CartIcon = () => {
    const redux = useSelector(selectCartValue) || []
    const dispatch = useDispatch();
    console.log(redux)
    const  count = redux.length;
    const [state, setState] = useState(false);

    useEffect(() => {
        if (count === 0) {
            setState(false);
        }
    }, [count]);

    const onClickState = () => {
        if (count > 0) {
            setState(!state);
        }
    };
    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div>
            <div className={"cursor-pointer"}>
                <div className="relative" onClick={onClickState}>
                    <IoCartOutline size={33} className={"text-cyan-500"}/>
                    {count > 0 && (
                        <span
                            className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
                    {count}
                </span>
                    )}
                </div>
            </div>
            <div
                className={`fixed cart-sidebar right-0 w-80 h-full transition-transform duration-300 ease-in-out overflow-y-auto ${
                    state ? 'translate-x-0' : 'translate-x-full h-full'
                }`}>
                <div className=" grid grid-cols-12 text-white  p-4">
                    {
                        redux.map((pr, index) => {
                            return (
                                <div key={index} className="col-span-12 border border-gray-300 rounded-lg shadow-md p-4 bg-white mb-4">
                                    <div className="grid grid-cols-12 h-full gap-4">
                                        {/* Imagen del producto */}
                                        <div className="col-span-5 flex justify-center items-center">
                                            <img
                                                src={pr.url}
                                                alt={pr.title}
                                                className="object-contain h-28 w-28 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-7 flex flex-col justify-between">
                                            <div>
                                                <h3 className="font-semibold text-lg text-gray-800 mb-1">
                                                    {pr.title}
                                                </h3>
                                                <p className="text-gray-500 text-sm mb-2">
                                                    {pr.subtitle}
                                                </p>
                                                <p className="text-gray-600 text-xs overflow-y-auto max-h-10">
                                                    {pr.info}
                                                </p>

                                            </div>

                                            {/* Botón de eliminar */}
                                            <button
                                                className="border border-red-500 bg-red-500 text-white hover:bg-red-600 rounded w-full mt-3 py-1 text-sm font-semibold transition duration-200"
                                                onClick={() => handleRemove(pr.id)}
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }


                </div>
            </div>


        </div>


    )
}

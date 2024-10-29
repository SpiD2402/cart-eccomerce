import { useDispatch } from 'react-redux';
import {useEffect, useState} from "react";
import {addItem} from "../store/slices/cart/CartSlice.jsx";

const data = [
    {
        id: 1,
        title: "Zay Deportiva",
        subtitle: "Shop the Latest Trends",
        info: "Discover top-quality products with unbeatable deals. Explore our new collection and find what suits your style.",
        url: "/src/assets/pngwing.com.png",
        count:0
    },
    {
        id: 2,
        title: "Zay Fitness",
        subtitle: "Shop the Latest Trends",
        info: "Discover top-quality products with unbeatable deals. Explore our new collection and find what suits your style.",
        url: "/src/assets/pngwing2.com.png",
        count:0
    },
    {
        id: 3,
        title: "Zay eCommerce",
        subtitle: "Shop the Latest Trends",
        info: "Discover top-quality products with unbeatable deals. Explore our new collection and find what suits your style.",
        url: "/src/assets/pngwing3.com.png",
        count: 0
    },
    {
        id: 4,
        title: "Zay Futboll",
        subtitle: "Shop the Latest Trends",
        info: "Discover top-quality products with unbeatable deals. Explore our new collection and find what suits your style.",
        url: "/src/assets/pngwing3.com.png",
        count: 0
    },
    {
        id: 5,
        title: "Zay Basquet",
        subtitle: "Shop the Latest Trends",
        info: "Discover top-quality products with unbeatable deals. Explore our new collection and find what suits your style.",
        url: "/src/assets/pngwing3.com.png",
        count: 0
    },
    {
        id: 6,
        title: "Zay Tenis",
        subtitle: "Shop the Latest Trends",
        info: "Discover top-quality products with unbeatable deals. Explore our new collection and find what suits your style.",
        url: "/src/assets/pngwing.com.png",
        count: 0
    },
    {
        id: 7,
        title: "Zay Docker",
        subtitle: "Shop the Latest Trends",
        info: "Discover top-quality products with unbeatable deals. Explore our new collection and find what suits your style.",
        url: "/src/assets/pngwing3.com.png",
        count: 0
    }
    ,    {
        id: 8,
        title: "Zay eCommerce",
        subtitle: "Shop the Latest Trends",
        info: "Discover top-quality products with unbeatable deals. Explore our new collection and find what suits your style.",
        url: "/src/assets/pngwing2.com.png",
        count: 0
    }
];

export const Shop = () => {
    const dispatch = useDispatch();
    const [ cart,setCart ] = useState([])

    const addCarrito = (item) => {
        setCart([...cart, item]);
    };

    useEffect(() => {
            cart.forEach(item => {
                dispatch(addItem(item));
                setCart([]);
            })
    }, [cart]);

    return (
        <div className="flex flex-wrap justify-center gap-4 p-6">
            {data.map((item) => (
                <div
                    key={item.id}
                    className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 p-4 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                    <img
                        src={item.url}
                        alt={item.title}
                        className="h-40 w-full object-contain rounded-t-lg"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <h4 className="text-sm text-gray-500">{item.subtitle}</h4>
                        <p className="text-gray-600 mt-2">{item.info}</p>
                        <button
                            onClick={() => addCarrito(item)}
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                            Add Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

import {Carrousel} from "../components/carrousel/Carrousel.jsx";

const datos= [
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



export const Main = () => {
    return (
        <div>
            <Carrousel/>
            <div className="bg-white p-6 mt-6">
                <h2 className="text-2xl font-bold mb-4">Ofertas Especiales</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {datos.map((product) => (
                        product.count === 0 && (
                            <div key={product.id} className="border rounded-lg shadow-md p-4">
                                <img src={product.url} alt={product.title} className="object-contain h-32 w-full"/>
                                <h3 className="font-semibold mt-2">{product.title}</h3>
                                <p className="text-gray-600">{product.subtitle}</p>
                                <p className="text-red-500 font-bold">¡Aprovecha!</p>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}

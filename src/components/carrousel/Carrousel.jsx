import {useState} from "react";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import 'animate.css';

const data =[
    {
        id: 1,
        title: "Zay Deportiva",
        subtitle: "Shop the Latest Trends",
        info: "Discover top-quality products with unbeatable deals. Explore our new collection and find what suits your style.",
        url: "/src/assets/pngwing.com.png"
    },
    {
        id: 2,
        title: "Zay Fitness",
        subtitle: "Shop the Latest Trends",
        info: "Discover top-quality products with unbeatable deals. Explore our new collection and find what suits your style.",
        url: "/src/assets/pngwing2.com.png"
    },
    {
        id: 3,
        title: "Zay eCommerce",
        subtitle: "Shop the Latest Trends",
        info: "Discover top-quality products with unbeatable deals. Explore our new collection and find what suits your style.",
        url: "/src/assets/pngwing3.com.png"
    }
]

export const Carrousel = () => {
    const [move, setMove] = useState(0);
    const [carrousel, setCarrousel] = useState(data);
    const [fade, setFade] = useState(false);

    const onAvanzar = () => {
        setFade(true);
        setTimeout(() => {
            setMove((prevMove) => (prevMove < carrousel.length - 1 ? prevMove + 1 : 0));
            setFade(false);
        }, 200);
    };

    const onRetroceder = () => {
        setFade(true);
        setTimeout(() => {
            setMove((prevMove) => (prevMove > 0 ? prevMove - 1 : carrousel.length - 1));
            setFade(false);
        }, 200);
    };

    const currentItem = carrousel[move];

    return (
        <div className="container-carrousel border bg-neutral-100 ">
            <div className="grid grid-cols-12 h-full border">
                <div className="flex justify-center col-span-2 my-auto ml-auto">
                    <IoIosArrowBack onClick={onRetroceder} size={40} className="cursor-pointer text-cyan-500" />
                </div>

                <div className="col-span-8 md:py-0 py-10">
                    <div className="grid grid-cols-12 h-full gap-4 transition-opacity duration-500" style={{ opacity: fade ? 0 : 1 }}>
                        <div className="md:col-span-6 col-span-12 content-center pl-12">
                            <div className="flex gap-2 text-3xl">
                                <p className="font-bold text-cyan-500">{currentItem.title.split(" ")[0]}</p>
                                <p className="text-cyan-500">{currentItem.title.split(" ")[1]}</p>
                            </div>
                            <div className="text-2xl text-gray-500">
                                <p>{currentItem.subtitle}</p>
                            </div>
                            <div className="text-gray-500">
                                <p>{currentItem.info}</p>
                            </div>
                        </div>
                        <div className="md:col-span-6 col-span-12 flex justify-center items-center">
                            <img className="zapatilla-img" src={currentItem.url} alt={currentItem.title} />
                        </div>
                    </div>
                </div>

                <div className="col-span-2 my-auto">
                    <IoIosArrowForward onClick={onAvanzar} size={40} className="cursor-pointer text-cyan-500" />
                </div>
            </div>
        </div>
    );
};


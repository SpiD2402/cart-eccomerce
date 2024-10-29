import { useState } from "react";
import { FaRegUser } from "react-icons/fa";

export const Login = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <a className="cursor-pointer" onClick={toggleModal}>
                <FaRegUser size={28} className="text-cyan-500" />
            </a>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 shadow-lg w-80">
                        <h2 className="text-lg font-bold mb-4">Iniciar Sesión</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm mb-1" htmlFor="username">Nombre de usuario</label>
                                <input
                                    type="text"
                                    id="username"
                                    className="border rounded w-full p-2"
                                    placeholder="Ingresa tu nombre de usuario"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm mb-1" htmlFor="password">Contraseña</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="border rounded w-full p-2"
                                    placeholder="Ingresa tu contraseña"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-cyan-500 text-white rounded w-full py-2 hover:bg-cyan-600 transition"
                            >
                                Iniciar Sesión
                            </button>
                        </form>
                        <button
                            onClick={toggleModal}
                            className="mt-4 text-red-500"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

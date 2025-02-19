import { useEffect } from "react";

function Header() {
    return (
        <header className="bg-gray-900 text-white py-5 shadow-md">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
                <nav>
                    <ul className="list-none flex space-x-6">
                        <li>
                            <a href="/pricing" className="text-white text-lg px-6 py-3 rounded transition duration-300 hover:bg-purple-600">
                                <i className="fas fa-dollar-sign mr-2"></i> Pricing
                            </a>
                        </li>
                        <li>
                            <a href="/contacts" className="text-white text-lg px-6 py-3 rounded transition duration-300 hover:bg-purple-600">
                                <i className="fas fa-phone mr-2"></i> Contacts
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="text-white text-lg px-6 py-3 rounded transition duration-300 hover:bg-purple-600">
                                <i className="fas fa-circle-info mr-2"></i> About
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-white text-lg px-6 py-3 rounded transition duration-300 hover:bg-purple-600">
                                <i className="fas fa-home mr-2"></i> Home
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="flex space-x-4">
                    <a href="http://localhost:5173/logout/" className="text-white text-lg px-6 py-3 rounded transition duration-300 hover:bg-purple-600">
                        <i className="fa-solid fa-right-from-bracket mr-2"></i> Logout
                    </a>
                    <a href="http://localhost:5173/login/" className="text-white text-lg px-6 py-3 rounded transition duration-300 hover:bg-purple-600">
                        <i className="fa-solid fa-right-to-bracket mr-2"></i> Login
                    </a>
                    <a href="http://localhost:5173/register/" className="text-white text-lg px-6 py-3 rounded transition duration-300 hover:bg-purple-600">
                        <i className="fa-solid fa-id-card mr-2"></i> Register
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;

import { useState } from "react";
import useIsLoggedIn from "../isLoggedIn";

function Header() {
    const isLoggedIn = useIsLoggedIn();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-gray-900 text-white py-4 shadow-md">
            <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto px-4">
                
                {/* Home Button (Visible only on small screens, aligned properly) */}
                <a href="/" className="text-lg font-bold text-white flex items-center space-x-2 md:hidden">
                    <i className="fas fa-home text-xl"></i>
                    <span>Home</span>
                </a>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-white text-3xl ml-auto" 
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <i className="fa-solid fa-bars"></i>
                </button>

                {/* Navigation Menu */}
                <nav className={`w-full mt-4 md:mt-0 ${menuOpen ? 'block' : 'hidden'} md:flex md:justify-center`}>
                    <ul className="flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0">
                        
                        {/* Home Button (Only for large screens) */}
                        <li className="hidden md:block">
                            <a href="/" className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-blue-600 transition">
                                <i className="fas fa-home text-lg"></i>
                                <span>Home</span>
                            </a>
                        </li>

                        <li>
                            <a href="/pricing" className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-blue-600 transition">
                                <i className="fas fa-dollar-sign text-lg"></i>
                                <span>Pricing</span>
                            </a>
                        </li>
                        <li>
                            <a href="/contacts" className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-blue-600 transition">
                                <i className="fas fa-phone text-lg"></i>
                                <span>Contacts</span>
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-blue-600 transition">
                                <i className="fas fa-circle-info text-lg"></i>
                                <span>About</span>
                            </a>
                        </li>
                        {isLoggedIn ? (
                            <li>
                                <a href="/logout" className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-blue-600 transition">
                                    <i className="fa-solid fa-right-from-bracket text-lg"></i>
                                    <span>Logout</span>
                                </a>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <a href="/login" className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-blue-600 transition">
                                        <i className="fa-solid fa-right-to-bracket text-lg"></i>
                                        <span>Login</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/register" className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-blue-600 transition">
                                        <i className="fa-solid fa-id-card text-lg"></i>
                                        <span>Register</span>
                                    </a>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;

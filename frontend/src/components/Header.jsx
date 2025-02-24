import { useState } from "react";
import useIsLoggedIn from "../isLoggedIn";

function Header() {
    const isLoggedIn = useIsLoggedIn();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-gray-900 text-white py-4 shadow-md">
            <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto px-4">
                <div className="flex w-full justify-between items-center">
                    <h1 className="text-lg font-bold">
                        {/* Logo here */}
                    </h1>

                    <button 
                        className="md:hidden text-white text-3xl" 
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>

                <nav className={`w-full mt-4 md:mt-0 ${menuOpen ? 'block' : 'hidden'} md:block`}>
                    <ul className="flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0">
                        <li className="w-full text-center"><a href="/pricing" className="menu-item"><i className="fas fa-dollar-sign mr-2"></i> Pricing</a></li>
                        <li className="w-full text-center"><a href="/contacts" className="menu-item"><i className="fas fa-phone mr-2"></i> Contacts</a></li>
                        <li className="w-full text-center"><a href="/about" className="menu-item"><i className="fas fa-circle-info mr-2"></i> About</a></li>
                        <li className="w-full text-center"><a href="/" className="menu-item"><i className="fas fa-home mr-2"></i> Home</a></li>
                        {isLoggedIn ? (
                            <li className="w-full text-center"><a href="/logout" className="menu-item"><i className="fa-solid fa-right-from-bracket mr-2"></i> Logout</a></li>
                        ) : (
                            <>
                                <li className="w-full text-center"><a href="/login" className="menu-item"><i className="fa-solid fa-right-to-bracket mr-2"></i> Login</a></li>
                                <li className="w-full text-center"><a href="/register" className="menu-item"><i className="fa-solid fa-id-card mr-2"></i> Register</a></li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>

            <style jsx>{`
                .menu-item {
                    display: block;
                    text-align: center;
                    text-sm md:text-lg;
                    padding: 10px 20px;
                    border-radius: 5px;
                    transition: background 0.3s;
                    width: 100%;
                }
                .menu-item:hover {
                    background: #2563eb;
                }
            `}</style>
        </header>
    );
}

export default Header;

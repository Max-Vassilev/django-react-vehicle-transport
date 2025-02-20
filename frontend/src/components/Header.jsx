import useIsLoggedIn from "../isLoggedIn";

function Header() {
    const isLoggedIn = useIsLoggedIn();

    return (
        <header className="bg-gray-900 text-white py-4 shadow-md">
            <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto px-4">
                
                <nav className="w-full md:w-auto">
                    <ul className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-6">
                        <li>
                            <a href="/pricing" className="text-white text-sm md:text-lg px-4 py-2 md:px-6 md:py-3 rounded transition duration-300 hover:bg-purple-600">
                                <i className="fas fa-dollar-sign mr-2"></i> Pricing
                            </a>
                        </li>
                        <li>
                            <a href="/contacts" className="text-white text-sm md:text-lg px-4 py-2 md:px-6 md:py-3 rounded transition duration-300 hover:bg-purple-600">
                                <i className="fas fa-phone mr-2"></i> Contacts
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="text-white text-sm md:text-lg px-4 py-2 md:px-6 md:py-3 rounded transition duration-300 hover:bg-purple-600">
                                <i className="fas fa-circle-info mr-2"></i> About
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-white text-sm md:text-lg px-4 py-2 md:px-6 md:py-3 rounded transition duration-300 hover:bg-purple-600">
                                <i className="fas fa-home mr-2"></i> Home
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="w-full md:w-auto flex justify-center md:justify-end mt-2 md:mt-0 space-x-2">
                    {isLoggedIn ? (
                        <a href="http://localhost:5173/logout/" className="text-white text-sm md:text-lg px-4 py-2 md:px-6 md:py-3 rounded transition duration-300 hover:bg-purple-600">
                            <i className="fa-solid fa-right-from-bracket mr-2"></i> Logout
                        </a>
                    ) : (
                        <>
                            <a href="http://localhost:5173/login/" className="text-white text-sm md:text-lg px-4 py-2 md:px-6 md:py-3 rounded transition duration-300 hover:bg-purple-600">
                                <i className="fa-solid fa-right-to-bracket mr-2"></i> Login
                            </a>
                            <a href="http://localhost:5173/register/" className="text-white text-sm md:text-lg px-4 py-2 md:px-6 md:py-3 rounded transition duration-300 hover:bg-purple-600">
                                <i className="fa-solid fa-id-card mr-2"></i> Register
                            </a>
                        </>
                    )}
                </div>

            </div>
        </header>
    );
}

export default Header;

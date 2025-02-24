import { useNavigate } from "react-router-dom";
import useIsLoggedIn from "../isLoggedIn";

function CTA() {
    const isLoggedIn = useIsLoggedIn();
    const navigate = useNavigate();

    const handleRequestClick = (e) => {
        if (!isLoggedIn) {
            e.preventDefault();
            navigate("/login", { state: { message: "Oops! You need to log in to make a request." } });
        }
    };

    return (
        <section className="cta text-center py-8">
            <a
                href="/request"
                onClick={handleRequestClick}
                className="w-full p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-xl shadow-xl">
                Make a Request
            </a>
        </section>
    );
}

export default CTA;

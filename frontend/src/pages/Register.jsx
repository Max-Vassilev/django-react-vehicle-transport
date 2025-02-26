import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingIndicator from "../components/LoadingIndicator";

function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            setLoading(false);
            return;
        }

        try {
            await api.post("/api/user/register/", {
                first_name: firstName,
                last_name: lastName,
                phone,
                username,
                password,
            });

            navigate("/login");
        } catch (error) {
            alert("Registration failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <div className="bg-gray-800 min-h-screen flex items-center justify-center">
                <form onSubmit={handleSubmit} className="max-w-md w-full p-6 bg-gray-900 rounded-lg shadow-md">
                    <h1 className="text-2xl font-semibold text-center text-white mb-4">Register</h1>

                    <input
                        className="block w-full p-2 border border-gray-700 rounded mb-4 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                    />

                    <input
                        className="block w-full p-2 border border-gray-700 rounded mb-4 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                    />

                    <input
                        className="block w-full p-2 border border-gray-700 rounded mb-4 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone Number"
                    />

                    <input
                        className="block w-full p-2 border border-gray-700 rounded mb-4 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />

                    <input
                        className="block w-full p-2 border border-gray-700 rounded mb-4 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />

                    <input
                        className="block w-full p-2 border border-gray-700 rounded mb-4 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                    />

                    {loading && <div className="my-6 flex justify-center"><LoadingIndicator /></div>}

                    <button 
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-2 rounded hover:scale-105 transition duration-300 ease-in-out cursor-pointer" 
                        type="submit"
                    >
                        Register
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Register;

import Header from "../components/Header";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import CTA from "../components/CTA";
import Footer from "../components/Footer";


function Home() {
    return (
        <div className="font-sans bg-gray-800 min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow py-12">
                <Hero />
                <Gallery />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}

export default Home;

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NavLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
import { observer } from "mobx-react-lite";
import type MainPageController from "../../../service/controller/page/main";
import { useEffect, useState } from "react";
import MenuDesktop, { MenuMobile } from "./components/menu";
import LogoApp from "./components/logo";

type Props = {
    controller: MainPageController;
};

const Navbar = observer(({
    controller
}: Props) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full py-4 px-6 transition-all duration-300 z-50 ${isScrolled
                ? 'bg-white bg-opacity-60 shadow-lg backdrop-blur-sm text-gray-800' // Saat di-scroll
                : 'bg-transparent text-white' // Saat belum di-scroll
                }`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <LogoApp isScrolled={isScrolled} />
                <MenuDesktop controller={controller} />
                <MenuMobile controller={controller} />
            </div>
        </nav>
    );
});

export default Navbar;
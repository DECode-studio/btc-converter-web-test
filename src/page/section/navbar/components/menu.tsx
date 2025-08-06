import { ArrowDown01Icon, ArrowUp01Icon, Cancel01Icon, Menu11Icon } from "hugeicons-react";
import { observer } from "mobx-react-lite";
import { useState } from "react";

import type { MenuModel } from "../../../../service/model/menu";
import type MainPageController from "../../../../service/controller/page/main";

type Props = {
    controller: MainPageController;
};

export const MenuDesktop = observer(({ controller }: Props) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const listMenu: MenuModel[] = controller?.listMenu ?? [];

    const toggleDropdown = (id: string) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    return (
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul
                className={`flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:mt-0 md:text-sm md:border-0 md:space-x-8 md:rtl:space-x-reverse transition-all duration-300 justify-center items-center w-full`}>
                {
                    listMenu.map((menu) => (
                        <li key={menu.id} className="relative text-green-500">
                            {menu.subMenu ? (
                                <button
                                    onClick={() => toggleDropdown(menu.id)}
                                    className="flex items-center justify-between w-full py-2 px-3 rounded-sm hover:bg-opacity-70 md:hover:bg-transparent md:p-0 md:w-auto">
                                    {menu.name}
                                    {openDropdown === menu.id ? <ArrowDown01Icon /> : <ArrowUp01Icon />}
                                </button>
                            ) : (
                                <a
                                    href={menu.ref}
                                    className="block py-2 px-3 rounded-sm hover:bg-opacity-70 md:hover:bg-transparent md:p-0"
                                    target="_blank">
                                    {menu.name}
                                </a>
                            )}

                            {menu.subMenu && openDropdown === menu.id && (
                                <ul className="absolute left-0 mt-2 w-44 bg-gray-900 shadow-md rounded-lg overflow-hidden">
                                    {menu.subMenu.map((sub) => (
                                        <li key={sub.id}>
                                            <a href={sub.ref} className="block px-4 py-2 hover:bg-gray-800 text-green-500" target="_blank">
                                                {sub.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
});

export const MenuMobile = observer(({ controller }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const listMenu: MenuModel[] = controller?.listMenu ?? [];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = (id: string) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    return (
        <div className="md:hidden">
            {/* Button Hamburger */}
            <button onClick={toggleMenu} className="text-green-500 p-2 focus:outline-none">
                {isOpen ? <Cancel01Icon className="w-6 h-6" /> : <Menu11Icon className="w-6 h-6" />}
            </button>

            {/* Menu Dropdown */}
            <div
                className={`absolute top-14 right-5 w-56 bg-gray-900 shadow-lg transition-all duration-300 text-black ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}>
                <ul className="flex flex-col p-4">
                    {listMenu.map((menu) => (
                        <li key={menu.id} className="relative text-green-500">
                            {menu.subMenu ? (
                                <>
                                    <button
                                        onClick={() => toggleDropdown(menu.id)}
                                        className="flex justify-between w-full py-2 px-3 rounded hover:bg-gray-800">
                                        {menu.name}
                                        {openDropdown === menu.id ? <ArrowDown01Icon /> : <ArrowUp01Icon />}
                                    </button>

                                    {/* Submenu (Muncul di Samping) */}
                                    {openDropdown === menu.id && (
                                        <ul className="absolute top-0 right-full mt-0 ml-2 w-48 bg-gray-900 shadow-lg rounded">
                                            {menu.subMenu.map((sub) => (
                                                <li key={sub.id}>
                                                    <a href={sub.ref} className="block py-2 px-4 hover:bg-gray-800" target="_blank">
                                                        {sub.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </>
                            ) : (
                                <a href={menu.ref} className="block py-2 px-3 rounded hover:bg-gray-800" target="_blank">
                                    {menu.name}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
});

export default MenuDesktop;

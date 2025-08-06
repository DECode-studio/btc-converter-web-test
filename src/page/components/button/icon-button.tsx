import React from "react";

type ComponentsProps = {
    onClick: () => void;
    icon: any
}

export const FieldIconButton = ({ onClick, icon }: ComponentsProps) => {
    return (
        <span
            onClick={() => onClick && onClick()}
            className=" absolute z-10 w-5 h-5 lg:w-6 lg:h-6 text-sm bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center right-1 lg:right-3 top-1/2 transform -translate-y-1/2"
        >
            {icon}
        </span>
    );
};

type IconButtonProps = {
    icon: React.ReactNode;
    size?: string;
    backColor?: string;
    hoverColor?: string;
    onClick?: () => void;
};

export const IconButton = ({
    icon,
    size = "h-14 md:h-16 w-full md:w-16",
    backColor = "bg-primary-6000",
    hoverColor = "bg-primary-700",
    onClick,
}: IconButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`${size} rounded-full ${backColor} hover:${hoverColor} flex items-center justify-center text-neutral-50 focus:outline-none`}
        >
            {icon}
        </button>
    );
};

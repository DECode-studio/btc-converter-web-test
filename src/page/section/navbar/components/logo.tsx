
type ComponentsProps = {
    isScrolled: boolean;
};

const LogoApp = ({ isScrolled }: ComponentsProps) => {
    return (
        <a href="#" className="text-2xl font-semibold flex flex-row items-center space-x-5">
            <img
                alt={'logo'}
                src={'/icon.svg'}
                width={30}
                height={30}
                className={isScrolled ? 'brightness-0 invert' : ''}
            />
            <span className="text-green-500">
                BTC Converter
            </span>
        </a>
    );
};

export default LogoApp;

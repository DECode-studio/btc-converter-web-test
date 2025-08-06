import { observer } from "mobx-react-lite";
import type MainPageController from "../../../../service/controller/page/main";
import { useEffect, useRef, useState } from "react";

type Props = {
    controller: MainPageController;
};

const TickerList = observer(({ controller }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const speed = 1;

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        let animationFrameId: any;
        let scrollPos = container.scrollLeft;

        const scroll = () => {
            if (isHovered) {
                animationFrameId = requestAnimationFrame(scroll);
                return;
            }

            scrollPos += speed;

            if (scrollPos >= container.scrollWidth - container.clientWidth) {
                scrollPos = 0;
            }

            container.scrollLeft = scrollPos;
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered]);

    return (
        <div className="py-8 my-10">
            <div className="container mx-auto px-4">
                <div
                    ref={containerRef}
                    className="flex space-x-6 overflow-x-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-700 text-green-500 text-center"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {controller.listTicker.map((data, index) => (
                        <div
                            key={index}
                            className="flex flex-row items-center space-x-3 min-w-[250px]"
                        >
                            <img
                                className="w-12 aspect-square flex items-center justify-center bg-green-500 rounded-full text-black text-2xl border-green-500 border-2"
                                src={data.image ?? ''}
                            />

                            <div className="flex flex-col items-start">
                                <p className="text-lg">
                                    {`${data.name} (${data.symbol.toUpperCase()})`}
                                </p>
                                <p className="text-md text-white font-semibold">
                                    {`${data.current_price} USD`}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
})

export default TickerList;
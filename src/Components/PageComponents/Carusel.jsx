import React from 'react'
import { Carousel } from "@material-tailwind/react";
import { useAppContext } from '../../Context/AppContext';

export const Carusel = () => {
    const {DarkMode} = useAppContext()
    const [stopScroll, setStopScroll] = React.useState(false);
    const cardData = [
        {
            title: "Unlock Your Creative Flow",
            image: "https://files.ox-sys.com/cache/original/image/60/80/2e/60802ed6b58b6a1d46c0df3c3f49c5c419425ec9e840b5b6e147ef52640fbb08.png",
        },
        {
            title: "Design Your Digital Future",
            image: "https://files.ox-sys.com/cache/original/image/8f/db/65/8fdb65fdd8982b2944aeee72996a36883018a93e5024b35060d57584d885fa70.png",
        },
        {
            title: "Build with Passion, Ship with Pride",
            image: "https://files.ox-sys.com/cache/original/image/46/54/99/46549960abe47b79f7a997f3e3aa4f70d4c51c39f793f86c95bab363cdfa3c56.png",
        },
        {
            title: "Think Big, Code Smart",
            image: "https://files.ox-sys.com/cache/original/image/1d/ec/26/1dec269863d269f59f430bbd2a6676b809eb66cb25438702b356e4e65a9e1aeb.png",
        },
    ];

    return (
        <>
            <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

            <div className="overflow-hidden w-[90%] relative max-w-[1400px] mt-18 mx-auto" onMouseEnter={() => setStopScroll(true)} onMouseLeave={() => setStopScroll(false)}>
                <div className={`absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r to-transparent ${DarkMode ? 'from-black' : 'from-white'}`}/>
                <div className="marquee-inner flex w-fit" style={{ animationPlayState: stopScroll ? "paused" : "running", animationDuration: cardData.length * 15500 + "ms" }}>
                    <div className="flex">
                        {[...cardData, ...cardData].map((card, index) => (
                            <div key={index} className="w-300 mx-4 h-[30rem] relative group hover:scale-90 transition-all duration-300">
                                <img src={card.image} alt="card" className="w-full h-full object-cover" />
                                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                                    <p className="text-white text-xl font-semibold text-center">{card.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l to-transparent ${DarkMode ? 'from-black' : 'from-white'}`} />
            </div>
        </>
    )
}

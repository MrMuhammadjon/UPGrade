import React from 'react'
import { useAppContext } from '../../Context/AppContext';

export const Promotional = () => {
    const { DarkMode } = useAppContext()

    const companyLogo = [
        {
            name: "Slack",
            image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/slack.svg",
        },
        {
            name: "Facebook",
            image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/facebook.svg",
        },
        {
            name: "Netflix",
            image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/netflix.svg",
        },
        {
            name: "Google",
            image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/google.svg",
        },
        {
            name: "LinkedIn",
            image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/linkedin.svg",
        },
        {
            name: "Instagram",
            image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/instagram.svg",
        },
        {
            name: "Facebook",
            image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/facebook.svg",
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

            <div className={`overflow-hidden relative w-[90%] mx-auto select-none mt-18 ${DarkMode ? 'bg-black' : 'bg-white'}`}>
                <div className={`absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r to-transparent ${DarkMode ? 'from-[#000000]' : 'from-[#ffffff]'}`} />
                <div className="marquee-inner flex will-change-transform min-w-[200%]" style={{ animationDuration: "15s" }}>
                    <div className="flex">
                        {[...companyLogo, ...companyLogo].map((company, index) => (
                            <img key={index} src={company.image} alt={company.name} className="w-full h-full object-cover mx-6" draggable={false} />
                        ))}
                    </div>
                </div>
                <div className={`absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l to-transparent ${DarkMode ? 'from-[#000000]' : 'from-[#ffffff]'}`} />
            </div>

        </>
    )
}

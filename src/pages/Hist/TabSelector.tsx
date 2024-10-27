import { useState } from "react";

interface TabSelectorProps {
    tabs: string[];
    defaultTab?: number;
}

export const TabSelector = ({ tabs, defaultTab = 0 }: TabSelectorProps) => {
    const [selectedTab, setSelectedTab] = useState(defaultTab);

    return (
        <div className="flex bg-BackgroundGrey p-1 mt-8 flex flex-row rounded-xl">
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    onClick={() => setSelectedTab(index)}
                    className={`text-TextBlack px-4 py-2 text-sm font-semibold font-[Mont] rounded-xl transition-colors duration-300 ${
                        selectedTab === index ? "bg-white " : "bg-transparent "
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

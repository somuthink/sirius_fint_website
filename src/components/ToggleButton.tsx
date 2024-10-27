import React, { useState } from "react";

interface ToggleButtonProps {
    onToggle: (value: boolean) => void;
    initialState?: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
    onToggle,
    initialState = false,
}) => {
    const [isOn, setIsOn] = useState(initialState);

    const toggleSwitch = () => {
        setIsOn(!isOn);
        onToggle(!isOn);
    };

    return (
        <div
            onClick={toggleSwitch}
            className={`w-[2.2rem] h-[1.4rem] flex items-center rounded-full p-[0.1rem] cursor-pointer transition-colors ${
                isOn ? "bg-AccentBlue" : "bg-Gray4"
            }`}
        >
            <div
                className={`w-[1.2rem] h-[1.2rem] bg-white rounded-full shadow-md transform transition-transform ${
                    isOn ? "translate-x-3" : "translate-x-0"
                }`}
            />
        </div>
    );
};

export default ToggleButton;

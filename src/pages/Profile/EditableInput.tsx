import { useState } from "react";
import { ReactSVG } from "react-svg";
import Edit from "../../assets/Edit.svg";

type EditableInputProps = {
    label: string;
    value: string;
    type?: "text" | "password";
    onEdit: (newValue: string) => void;
};

export const EditableInput = ({
    label,
    value,
    type = "text",
    onEdit,
}: EditableInputProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(value);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
        if (isEditing) onEdit(inputValue);
    };

    return (
        <div className="w-full bg-BackgroundGrey h-14 px-5 py-4 rounded-2xl justify-between items-center gap-5 inline-flex">
            <label className="text-base font-semibold">{label}</label>
            {isEditing ? (
                <input
                    type={type}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="text-base bg-transparent outline-none w-36"
                />
            ) : (
                <span className="text-base">
                    {type === "password" ? "•".repeat(value.length) : value}
                </span>
            )}
            <button onClick={handleEditClick} className="">
                <ReactSVG src={Edit} />
            </button>
        </div>
    );
};

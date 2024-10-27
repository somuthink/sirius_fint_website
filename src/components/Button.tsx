import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: "primary" | "secondary" | "secondary-blue";
}

const CustomButton = ({ children, variant, ...props }: ButtonProps) => {
    const baseStyles =
        " w-full h-14  py-4  rounded-3xl justify-center items-center inline-flex";
    const primaryStyles =
        "bg-AccentBlue text-white opacity-100 hover:opacity-90 transition-opacity";
    const secondaryStyles =
        "bg-BackgroundGrey text-ErrorRed  opacity-100 hover:opacity-90 transition-opacity";
    const secondaryBlueStyles =
        "bg-Gray2  text-AccentBlue opacity-100 hover:opacity-90 transition-opacity";

    const buttonStyles =
        variant === "primary"
            ? primaryStyles
            : variant === "secondary"
              ? secondaryStyles
              : secondaryBlueStyles;

    return (
        <button className={`${baseStyles}  ${buttonStyles}`} {...props}>
            <div className="flex flex-row gap-2.5">{children}</div>
        </button>
    );
};

export default CustomButton;

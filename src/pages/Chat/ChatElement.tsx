import { ReactSVG } from "react-svg";

interface ChatElementProps {
    icon: string;
    name: string;
    content: string;
    date: string;
    num: number;
}

export const ChatElement = ({
    icon,
    name,
    content,
    date,
    num,
}: ChatElementProps) => (
    <div className="w-full h-16 px-4 bg-BackgroundGrey rounded-3xl flex flex-row justify-between items-center ">
        <div className="flex flex-row items-center gap-8">
            <ReactSVG src={icon} />
            <div className="flex flex-col">
                <p className="text-TextBlack text-base font-semibold">{name}</p>
                <p className="w-40 text-Gray4 text-base font-semibold truncate">
                    {content}
                </p>
            </div>
        </div>
        <div className="flex flex-col gap-1 items-end">
            <p className="text-Gray4 text-sm font-semibold">{date}</p>
            <div className="flex bg-TextBlack rounded-full justify-center items-center w-4 h-4">
                <p className="text-white text-sm">{num}</p>
            </div>
        </div>
    </div>
);

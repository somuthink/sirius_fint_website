import { ReactSVG } from "react-svg";
interface InfoCardProps {
    icon: string;
    text: string;
}

export const InfoCard = ({ icon, text }: InfoCardProps) => (
    <div className="grow shrink basis-0 h-28 p-4 bg-BackgroundGrey rounded-3xl flex-col justify-between items-start inline-flex">
        <ReactSVG src={icon} />
        <div className="w-24 text-TextBlack text-base font-semibold">
            {text}
        </div>
    </div>
);

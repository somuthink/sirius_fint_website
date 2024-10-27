import { ChatElement } from "./ChatElement";
import { InfoCard } from "./InfoCard";
import Logo from "../../assets/MiniLogo.svg";
import Bell from "../../assets/Bell.svg";
import Info from "../../assets/InfoCircle.svg";
import Danger from "../../assets/Danger.svg";

export const ChatPage = () => (
    <div className="w-full flex flex-col justify-center items-center">
        <p className="w-full text-bold text-2xl">
            Чат по операциям и поддержка
        </p>
        <div className="w-full h-28 justify-start items-start gap-1 inline-flex mt-8">
            <InfoCard icon={Info} text="частые вопросы" />
            <InfoCard icon={Danger} text="помощь со сделками" />
        </div>
        <div className="w-full flex flex-col gap-1 mt-6">
            <ChatElement
                icon={Logo}
                name="Чат поддержки"
                content="отлично 👍"
                date="17:54"
                num={2}
            />
            <ChatElement
                icon={Bell}
                name="Чат поддержки"
                content="проведен на +7 983 989 42 98"
                date="13:04"
                num={1}
            />
        </div>
    </div>
);

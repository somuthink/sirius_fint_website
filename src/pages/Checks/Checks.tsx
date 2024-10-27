import { ReactSVG } from "react-svg";
import Send from "../../assets/Send.svg";
import Download from "../../assets/Download.svg";
import CustomButton from "../../components/Button";
import { BankCard } from "./BankCard";
import TinkoffLogo from "../../assets/images/tinkoff.png";
import AlhpaLogo from "../../assets/images/alpha.png";

export const ChecksPage = () => (
    <div className="w-full flex flex-col justify-center items-center">
        <p className="w-full text-bold text-2xl">Счета и депозит</p>
        <div className="mt-4 w-full h-80 p-5 bg-BackgroundGrey rounded-3xl flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch h-48 flex-col justify-start items-start gap-4 flex">
                <div className="h-20 flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch text-Gray 5 text-base font-semibold ">
                        Депозит:
                    </div>
                    <div className="self-stretch h-14 flex-col justify-start items-start gap-1 flex">
                        <div className="text-TextBlack text-2xl font-bold  tracking-wide">
                            42 530 ₽
                        </div>
                        <div className="text-Gray5 text-base font-semibold ">
                            ≈ $ 500{" "}
                        </div>
                    </div>
                </div>
                <div className="h-20 flex-col justify-start items-start gap-2 flex">
                    <div className="text-Gray5 text-base font-semibold ">
                        Доступны мне:
                    </div>
                    <div className="self-stretch h-14 flex-col justify-start items-start gap-1 flex">
                        <div className="text-Green2 text-2xl font-bold  tracking-wide">
                            21 265 ₽
                        </div>
                        <div className="text-Gray5 text-base font-semibold ">
                            ≈ $ 250{" "}
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch h-14 flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch justify-start items-start gap-1 inline-flex">
                    <CustomButton variant="primary">
                        Пополнить
                        <ReactSVG src={Download} />
                    </CustomButton>
                    <CustomButton variant="secondary-blue">
                        Вывести
                        <ReactSVG src={Send} />
                    </CustomButton>
                </div>
            </div>
        </div>
        <p className="text-Gray5  w-full text-base font-semibold mt-6">
            Мои счета
        </p>
        <div className="w-full flex flex-col gap-2 mt-3.5">
            <BankCard
                imgSrc={TinkoffLogo}
                bankName="Т-Банк (Тинькофф)"
                cardNumber="*9898"
                rubAmount="143 000"
                usdApprox="1322"
            />
            <BankCard
                imgSrc={AlhpaLogo}
                bankName="Альфа-банк"
                cardNumber="*9842"
                rubAmount="106 540"
                usdApprox="1000"
            />
        </div>
    </div>
);

interface BankCardProps {
    imgSrc: string;
    bankName: string;
    cardNumber: string;
    rubAmount: string;
    usdApprox: string;
}

export const BankCard = ({
    imgSrc,
    bankName,
    cardNumber,
    rubAmount,
    usdApprox,
}: BankCardProps) => {
    return (
        <div className="w-full h-20 px-5 py-4 bg-BackgroundGrey rounded-2xl justify-between items-center inline-flex">
            <div className="justify-start items-center gap-2 flex">
                <img
                    className="w-8 h-8 rounded-full"
                    src={imgSrc}
                    alt={bankName}
                />
                <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-TextBlack text-lg font-bold tracking-tight">
                        {bankName}
                    </div>
                    <div className="text-Gray5 text-base font-semibold">
                        {cardNumber}
                    </div>
                </div>
            </div>
            <div className="flex-col justify-center items-end gap-1 inline-flex">
                <div className="justify-start items-center gap-1 inline-flex">
                    <div className="text-TextBlack text-xl font-bold font-[Mont] leading-7">
                        {rubAmount} ₽
                    </div>
                </div>
                <div className="text-Gray5 text-base font-semibold">
                    ≈ $ {usdApprox}
                </div>
            </div>
        </div>
    );
};

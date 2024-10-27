interface TransactionItemProps {
    id: string;
    date: string;
    amount: string;
    difference: string;
    isPositive: boolean;
}
export const TransactionItem = ({
    id,
    date,
    amount,
    difference,
    isPositive,
}: TransactionItemProps) => (
    <div className="w-full h-16 px-6 py-2.5 bg-[#f6f6f6] rounded-3xl flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch justify-between items-start inline-flex">
            <div className="w-40 text-[#252525] text-sm font-semibold font-[Mont] leading-tight">
                {id}
            </div>
            <div className="text-[#252525] text-sm font-semibold font-[Mont] leading-tight">
                {date}
            </div>
        </div>
        <div className="self-stretch justify-between items-start inline-flex">
            <div className="text-[#979797] text-base font-medium ">
                {amount}
            </div>
            <div
                className={`text-base font-medium font-['Gilroy'] ${isPositive ? "text-[#27ae60]" : "text-[#eb5757]"}`}
            >
                {isPositive ? `+${difference}` : `-${difference}`}
            </div>
        </div>
    </div>
);

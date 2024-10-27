import { TabSelector } from "./TabSelector";
import { TransactionItem } from "./TransactionItem";

export const HistoryPage = () => (
    <div className="w-full flex flex-col justify-center items-center">
        <p className="w-full text-semibold text-2xl">История заданий</p>
        <TabSelector tabs={["За день", "За месяц", "За все время"]} />
        <div className="w-full flex flex-col gap-2 mt-2">
            <div className="w-full h-32 p-5 bg-[#f6f6f6] rounded-3xl flex-col justify-between items-start inline-flex">
                <div className="text-[#979797] text-base font-medium ">
                    Суммарно пополней
                </div>
                <div className="flex-col justify-center items-start gap-1 flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                        <div className="text-[#979797] text-2xl font-semibold  uppercase">
                            $
                        </div>
                        <div className="text-[#252525] text-2xl font-semibold  uppercase tracking-wide">
                            1,320
                        </div>
                    </div>
                    <div className="text-[#979797] text-sm font-medium ">
                        ≈ 120 240р
                    </div>
                </div>
            </div>

            <TransactionItem
                id="Пополнение #239231"
                date="20.07.2023 19:00"
                amount="12 573 ₽"
                difference="1 573 ₽"
                isPositive
            />
            <TransactionItem
                id="Пополнение #328293"
                date="20.07.2023 12:04"
                amount="12 573 ₽"
                difference="1 573 ₽"
                isPositive
            />
            <TransactionItem
                id="Вывод #328293"
                date="20.07.2023 23:18"
                amount="12 573 ₽"
                difference="1 573 ₽"
                isPositive={false}
            />
        </div>
    </div>
);

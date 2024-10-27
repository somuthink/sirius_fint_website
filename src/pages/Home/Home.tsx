import { ReactSVG } from "react-svg";
import CustomButton from "../../components/Button";
import Arrow from "../../assets/Arrow.svg";

import TinkoffLogo from "../../assets/images/tinkoff.png";
import ToggleButton from "../../components/ToggleButton";

export const HomePage = () => (
  <div className="w-full  flex flex-col justify-center items-center ">
    <p className="w-full text-bold text-2xl">Главная</p>
    <div className="flex flex-col mt-[1.5rem] gap-[0.75rem]">
      <div className="w-ful h-32 p-5 bg-gradient-to-l from-[#000036] to-AccentBlue rounded-[2rem] flex-col justify-between items-start inline-flex">
        <div className="text-white text-base font-semibold ">
          Суммарно поступлений
        </div>
        <div className="justify-start items-center gap-1 inline-flex">
          <div className="text-white text-2xl font-bold  uppercase tracking-wide">
            2 030 ₽
          </div>
        </div>
      </div>
      <div className="w-full h-11 p-4 bg-BackgroundGrey rounded-3xl justify-between items-center inline-flex align-middle">
        <p className="text-TextBlack text-sm font-semibold font-[Mont]  leading-tight">
          Присылать уведомления
        </p>
        <ToggleButton
          onToggle={(e) => {
            Notification.requestPermission();
          }}
        ></ToggleButton>
      </div>
      <div className="w-full  p-4 gap-[1.4rem] bg-BackgroundGrey rounded-3xl flex-col justify-between items-start inline-flex">
        <div className="self-stretch h-16 flex-col justify-start items-start gap-2 flex">
          <div className="text-TextBlack text-xl font-bold font-[Mont]  leading-7">
            Операция 9231
          </div>
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="w-7 h-7 p-0.5 bg-[#f0f0f0] rounded-3xl justify-center items-center flex">
              <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                <ReactSVG src={Arrow} />
              </div>
            </div>
            <div className="text-TextBlack text-base font-semibold ">
              Поступление
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-2 flex">
          <div className="text-TextBlack text-sm font-semibold font-[Mont]  leading-tight">
            Сумма
          </div>
          <div className="flex-col justify-start items-start gap-1 flex">
            <div className="justify-start items-center gap-1 inline-flex">
              <div className="text-TextBlack text-2xl font-bold  tracking-wide">
                42 530 ₽
              </div>
            </div>
          </div>
        </div>
        <div className="justify-start items-center gap-3.5 inline-flex">
          <img className="w-8 h-8 rounded-full" src={TinkoffLogo} />
          <div className="flex-col justify-center items-start gap-1 inline-flex">
            <div className="text-TextBlack text-base font-semibold ">СБП</div>
            <div className="text-Grey5 text-sm font-semibold font-[Mont]  leading-tight">
              Т-Банк (Тинькофф)
            </div>
          </div>
        </div>
        <CustomButton variant="primary">Принять</CustomButton>
      </div>
    </div>
  </div>
);

import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import LogoutSVG from "../../assets/Logout.svg";
import Profile from "../../assets/Profile.svg";
import Users from "../../assets/3user.svg";
import { useAuth } from "../../hooks/useAuth";
import CustomButton from "../../components/Button";
import { EditableInput } from "./EditableInput";
import { injectSVGColors } from "../../components/injectSVGcolor";

export const ProfilePage = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const handleLogout = () => {
        logout();
    };
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-row  items-center">
                <p className="w-full text-bold text-2xl">Профиль</p>
                <button
                    onClick={handleLogout}
                    className="p-4 pl-5 bg-BackgroundGrey rounded-3xl "
                >
                    {" "}
                    <ReactSVG src={LogoutSVG} />
                </button>
            </div>
            <div className="w-full flex flex-col gap-2 mt-[2.3rem]">
                <div className="w-full h-6 justify-between items-center inline-flex">
                    <div className="text-Gray5 text-base font-semibold font-['Gilroy']">
                        Мои данные
                    </div>
                    <ReactSVG src={Profile} />
                </div>
                <EditableInput
                    label="Email"
                    value="schooltalents@urfu.ru"
                    type="text"
                    onEdit={logout}
                />
                <EditableInput
                    label="Пароль"
                    value="schooltalents@urfu.ru"
                    type="password"
                    onEdit={logout}
                />
            </div>
            <div className="w-full flex flex-col gap-2 mt-[2.3rem]">
                <div className="w-full h-6 justify-between items-center inline-flex">
                    <div className="text-Gray5 text-base font-semibold font-['Gilroy']">
                        Реферальная программа
                    </div>
                    <ReactSVG
                        src={Users}
                        beforeInjection={(svg) =>
                            injectSVGColors(svg, "text-Gray5")
                        }
                    />
                </div>
                <div className="w-80 h-16 p-4 bg-BackgroundGrey rounded-3xl justify-between items-center inline-flex">
                    <div className="w-56 flex-col justify-start items-start gap-0.5 inline-flex">
                        <div className="text-TextBlack text-sm font-semibold font-[Mont] leading-tight">
                            Приглашения
                        </div>
                        <div className="text-Gray5 text-sm font-semibold font-[Mont] leading-tight">
                            Приглашенные рефералы
                        </div>
                    </div>
                    <ReactSVG src={Users} />
                </div>
            </div>
            <div className="mt-[17rem]">
                <CustomButton
                    variant="secondary"
                    onClick={(_) => navigate("/login")}
                >
                    Удалить аккаунт
                </CustomButton>
            </div>
        </div>
    );
};

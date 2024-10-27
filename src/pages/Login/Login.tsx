import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import Input from "../../components/Input";
import CustomButton from "../../components/Button";
import "../../index.css";
import { ReactSVG } from "react-svg";
import GoogleSvg from "../../assets/google-icon.svg";
import Logo from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      await login(username);
    } else {
      alert("Invalid username or password");
    }
  };
  return (
    <div className="w-full  flex flex-col justify-center items-center ">
      <div className="w-full">
        <ReactSVG src={Logo} />
      </div>
      <div className="flex flex-col mt-[5rem] gap-2.5 w-full">
        <h1 className="text-3xl font-bold text-TextBlack">Войти</h1>
        <p className="font-semi-bold text-Gray6 ,">
          Добро пожаловать! <br /> Войдите чтобы продолжить
        </p>
      </div>
      <form className="mt-16 w-full" onSubmit={handleLogin}>
        <div className="flex flex-col gap-2">
          <Input
            placeholder="Email"
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Пароль"
            id="password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-[4.5rem]">
          <CustomButton variant="primary">
            <p className="font-semi-bold">Войти</p>
          </CustomButton>
        </div>
      </form>
      <div className="flex w-full items-center mt-[2.063rem] ">
        <div className="border-t border-1 border-Gray3 flex-grow"></div>
        <p className="px-3 text-base font-semibold text-Gray5">
          или войти через
        </p>
        <div className="border-t border-1 border-Gray3 flex-grow"></div>
      </div>
      <div
        className="h-14 p-3.5 bg-white rounded-2xl border border-[#e0e0e0] justify-start items-start gap-2.5 inline-flex mt-[2.063rem]"
        onClick={(_) => navigate("/login")}
      >
        <div className="w-7 h-7 p-1 justify-center items-center flex">
          <div className="w-5 h-5 relative flex-col justify-start items-start flex">
            <ReactSVG
              className="opacity-100 hover:opacity-70 transition-opacity"
              src={GoogleSvg}
            />
          </div>
        </div>
      </div>
      <p className="mt-[2.063rem] text-Gray5">
        Нет аккаунта.
        <a className="text-AccentBlue " href="./login">
          Зарегистируруйтесь
        </a>
      </p>
    </div>
  );
};

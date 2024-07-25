import React, { useState } from "react";
import "../../pages/DevForms/DevForms.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

interface SignupFormProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const signupApi = "http://3.38.98.134/auth/signup";

const SignupForm: React.FC<SignupFormProps> = ({
  username,
  setUsername,
  password,
  setPassword,
  email,
  setEmail,
}) => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(signupApi, {
        userName: username,
        password: password,
        email: email,
      });
      if (response.data.success) {
        Cookies.set("token", response.data.token, { expires: 7 });
        setMessage(response.data.message);
        navigate("/");
      } else {
        setMessage("Не удалось зарегистрироваться: " + response.data.message);
      }

    } catch (error: any) {
      console.error("Error during signup:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
        setMessage("Ошибка сервера: " + error.response.data.message);
      } else if (error.request) {
        console.error("Request data:", error.request);
        setMessage("Нет ответа от сервера. Пожалуйста, попробуйте позже.");
      } else {
        console.error("Error message:", error.message);
        setMessage("Ошибка при настройке запроса: " + error.message);
      }
    }
  };



  

  return (
    <div className="signup-content">
      <h2>Регистрация</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="signup-username">Имя пользователя:</label>
          <input
            type="text"
            id="signup-username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="signup-email">Электронная почта:</label>
          <input
            type="email"
            id="signup-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="signup-password">Пароль:</label>
          <input
            type="password"
            id="signup-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default SignupForm;

import React, { useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const goRegister = () => {
    navigate("/register");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에서 로그인 처리 로직을 작성합니다.
    // 예를 들어, 서버로 사용자 정보를 전송하고 인증을 수행하는 등의 작업을 수행할 수 있습니다.
  };
  const handleLogin = () => {
    // 로그인 처리 로직
    // ...

    // 역할 정보를 담아서 다음 페이지로 이동
    navigate(`/main`);
  };
  const Con = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 10%;
    left: 0;
    right: 0;
  `;

  return (
    <>
      <Layout />
      <Con>
        <h1>로그인</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">사용자 이름:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="password">비밀번호:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </form>
        <button onClick={handleLogin}>로그인</button>
        <button onClick={goRegister}>회원가입</button>
      </Con>
    </>
  );
};

export default Login;

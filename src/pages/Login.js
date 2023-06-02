import React, { useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const LoginPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const InputWrapper = styled.div`
    margin-bottom: 10%;
  `;

  const Label = styled.label`
    display: block;
    margin-bottom: 10%;
  `;

  const InputField = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  `;
  const Button = styled.button`
    padding: 8px 12px;
    background-color: #f0f0f0;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #e0e0e0;
    }
  `;
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
        <LoginPageWrapper>
          <h1>로그인</h1>
          <InputWrapper>
            <Label htmlFor="username">사용자 이름:</Label>
            <InputField
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="password">비밀번호:</Label>
            <InputField
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </InputWrapper>
          <Button onClick={handleLogin}>로그인</Button>
          <br />
          <Button onClick={goRegister}>회원가입</Button>
        </LoginPageWrapper>
      </Con>
    </>
  );
};

export default Login;

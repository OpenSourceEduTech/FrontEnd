import React, { useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
  const [inputs, setInput] = useState({
    id: "",
    pass: "",
  });
  const { id, pass } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...inputs,
      [name]: value,
    });
  };

  // const [id, setUsername] = useState("");
  // const [pass, setPassword] = useState("");
  // const handleUsernameChange = (event) => {
  //   setUsername(event.target);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target);
  // };

  const goRegister = () => {
    navigate("/register");
  };
  const handleLogin = (event) => {
    // event.preventDefault();
    // axios.defaults.withCredentials = true;
    axios
      .post("/login", inputs)
      .then((res) => {
        console.log(res);
        // if (cookies.session_id === 404) {
        //   alert("email이 틀림");
        // } else if (cookies.session_id === 400) {
        //   alert("비밀번호 다름");
        // } //id있는데 pw다름
        // else {
        //   //   setCookie(cookies);
        //   localStorage.setItem("session_id", ryu.get("session_id"));
        // }
        // navigate("/");

        //document.location.href='/write'
      })
      .catch((err) => {
        console.log(err);
      });
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
              name="id"
              id="id"
              value={id}
              onChange={onChange}
            />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="password">비밀번호:</Label>
            <InputField
              type="password"
              id="pass"
              name="pass"
              value={pass}
              onChange={onChange}
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

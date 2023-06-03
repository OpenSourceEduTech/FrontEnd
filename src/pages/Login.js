import React, { useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Cookies, useCookies } from "react-cookie";

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
const Login = () => {
  const navigate = useNavigate();
  const ryu = new Cookies();
  const [cookies, setCookie] = useCookies(["role", "id"]);
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
        setCookie("role", res.data.role);
        setCookie("id", res.data.id);
        localStorage.setItem("role", ryu.get("role"));
        localStorage.setItem("id", ryu.get("id"));

        console.log(localStorage);
        navigate("/main");

        //document.location.href='/write'
      })
      .catch((err) => {
        if (err.response.status === 400) {
          alert("로그인 실패");
        }
      });
  };

  const Loginfunc = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Layout />
      <Con>
        <LoginPageWrapper>
          <h1>로그인</h1>
          <form onSubmit={Loginfunc}>
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
          </form>
        </LoginPageWrapper>
      </Con>
    </>
  );
};

export default Login;

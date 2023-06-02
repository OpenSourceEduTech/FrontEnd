import React, { useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
const SelectWrapper = styled.div`
  position: relative;
`;

const SelectField = styled.select`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  appearance: none;
  background-color: white;
  background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="%23333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpolyline points="6 9 10 13 14 9"%3E%3C/polyline%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #888;
  }
`;
const Form = styled.form`
  position: absolute;
  width: 20vw;
  margin: 0 auto;
  padding: 0vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3vw;
`;
const Option = styled.option``;

const Register = () => {
  const navigate = useNavigate();

  //    const navigate = useNavigate();
  const [inputs, setInput] = useState({
    name: "",
    password: "",
    role: "",
  });
  const { name, password, role } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...inputs,
      [name]: value,
    });
  };
  const goLogin = () => {
    axios
      .post("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      })
      .then((body) => console.log("성공", body))
      .then(() => navigate("/"));
  };
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // const [role, setRole] = useState("");
  // const handleUsernameChange = (event) => {
  //   setName(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleRoleChange = (event) => {
  //   setRole(event.target.value);
  // };

  return (
    <>
      <Layout />
      <Con>
        <LoginPageWrapper>
          <h1>회원가입</h1>

          <InputWrapper>
            <Label htmlFor="name">아이디 </Label>

            <InputField
              type="text"
              name="name"
              value={name}
              onChange={onChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">비밀번호 </Label>

            <InputField
              name="password"
              type="password"
              value={password}
              onChange={onChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>
              역할
              <br />
              <SelectWrapper>
                <SelectField name="role" value={role} onChange={onChange}>
                  <Option value="">선택하세요</Option>
                  <Option value="student">학생</Option>
                  <Option value="professor">교수</Option>
                </SelectField>
              </SelectWrapper>
            </Label>
          </InputWrapper>

          <Button onClick={goLogin}>회원가입</Button>
        </LoginPageWrapper>
      </Con>
    </>
  );
};
export default Register;

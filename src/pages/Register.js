import React, { useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
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
  const Option = styled.option``;
  const handleLogin = () => {
    // 로그인 처리 로직
    // ...

    // 역할 정보를 담아서 다음 페이지로 이동
    navigate(`/login`);
  };
  //    const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const handleUsernameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에서 로그인 처리 로직을 작성합니다.
    // 예를 들어, 서버로 사용자 정보를 전송하고 인증을 수행하는 등의 작업을 수행할 수 있습니다.
  };
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">비밀번호 </Label>

            <InputField
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>
              역할
              <br />
              <SelectWrapper>
                <SelectField
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <Option value="">선택하세요</Option>
                  <Option value="student">학생</Option>
                  <Option value="professor">교수</Option>
                </SelectField>
              </SelectWrapper>
            </Label>
          </InputWrapper>
          <Button onClick={handleLogin}>회원가입</Button>
        </LoginPageWrapper>
      </Con>
    </>
  );
};
export default Register;

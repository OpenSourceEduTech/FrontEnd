import Layout from "../components/Layout";
import styled from "styled-components";
import React, { useEffect, useState, useRef } from "react";
const Body = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  top: 0%;
  width: 100vw;
  height: 100vh;
`;
const LeftCon = styled.div`
  flex-direction: column;
  display: flex;
  position: flex;
  width: 80%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
const RightCon = styled.div`
  width: 25%;
  height: 100%;
  flex-direction: column;
  display: flex;
  background-color: white;
  align-items: center;
`;
const Mytask = styled.div`
  width: 80%;
  height: 30%;
  justify-content: center;
  background-color: white;
  margin-top: 45%;
  box-shadow: 2px 2px 2px 2px #000000;
  align-items: center;
  border: 2px;
`;
const Tasktitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 15%;
  text-align: center;
  align-items: center;
  margin-top: 5%;
`;
const TaskSubmit = styled.button`
  width: 80%;
  height: 20%;
  border: 2px;
  border-radius: 10px;
  background-color: white;
  justify-content: center;
  box-shadow: 2px 2px 2px 2px #000000;
  align-items: center;
  margin-left: 10%;
  margin-top: 10%;
`;
const TaskSubmitted = styled.button`
  width: 80%;
  height: 20%;
  border: 2px;
  border-radius: 10px;
  background-color: white;
  justify-content: center;
  box-shadow: 2px 2px 2px 2px #000000;
  align-items: center;
  margin-left: 10%;
  margin-top: 5%;
`;
const Con1 = styled.div`
  margin-top: 10%;
  hegith: 20%;
  width: 80%;
  border: 0px 0px 3px 0px;

  box-shadow: 1px 1px 1px 1px #000000;
`;
const Con2 = styled.div`
  hegith: 20%;
  width: 80%;
  margin: 10%;
  border: 0px 0px 3px 0px;
  box-shadow: 1px 1px 1px 1px #000000;
`;
const Con3 = styled.div`
  hegith: 20%;
  width: 80%;
  margin: 10%;
  border: 0px 0px 3px 0px;

  box-shadow: 1px 1px 1px 1px #000000;
`;
const Homework = () => {
  const fileInput = React.useRef(null);
  const handleButtonClick = (e) => {
    fileInput.current.click();
  };
  return (
    <>
      <Layout />
      <Body>
        <LeftCon>
          <Con1></Con1>
          <Con2></Con2>
          <Con3></Con3>
        </LeftCon>
        <RightCon>
          <Mytask>
            <Tasktitle>내 과제</Tasktitle>
            <TaskSubmit onClick={handleButtonClick}>
              제출하기
              <input type="file" ref={fileInput} style={{ display: "none" }} />
            </TaskSubmit>
            <TaskSubmitted>완료로 표시</TaskSubmitted>
          </Mytask>
        </RightCon>
      </Body>
    </>
  );
};

export default Homework;

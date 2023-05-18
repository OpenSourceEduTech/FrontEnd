import Layout from "../components/Layout";
import styled from "styled-components";
import { homelist } from "../components/Data";
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
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
const Title = styled.div`
  align-text: center;
  display: flex;
  margin-bottom: 2%;
  margin-left: 20%;
  justify-content: left;
  height: 3%;
  width: 100%;
  font-size: 30px;
`;
const Pro = styled.div`
  align-text: center;
  display: flex;
  margin-bottom: 5%;
  margin-left: 20%;
  justify-content: left;
  height: 10%;
  width: 100%;
  font-size: 15px;
`;
const Con1 = styled.div`
  hegith: 40%;
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
  const [data, setData] = useState([]);
  console.log(data);
  const { id } = useParams();
  useEffect(() => {
    setData(homelist[id - 1]);
  }, []);
  // useEffect(() => {
  //   setData(homelist);
  // }, []);

  const fileInput = React.useRef(null);
  const handleButtonClick = (e) => {
    fileInput.current.click();
  };
  return (
    <>
      <Layout />
      <Body>
        <LeftCon>
          <Title>{data.title}</Title>
          <Pro>김익수, 2023.4.17</Pro>
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

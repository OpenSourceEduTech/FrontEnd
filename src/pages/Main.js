import Layout from "../components/Layout";
import { Lecture } from "../components/Data";
import styled from "styled-components";
import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Main = () => {
  const [lecture, setLecture] = useState([]);
  useEffect(() => {
    setLecture(Lecture);
  }, []);
  const Body = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    top: 1%;
    width: 100%;
    height: 100%;
  `;
  const LeftCon = styled.div`
    flex-direction: column;
    display: flex;
    position: flex;
    width: 20%;
    height: 30%;
    justify-content: center;
    align-items: left;
    background-color: white;
    margin-left: 10%;
    text-align: center;
    background-image: url("https://newsroom-prd-data.s3.ap-northeast-2.amazonaws.com/wp-content/uploads/2020/04/%EC%98%A8%EB%9D%BC%EC%9D%B8%EA%B0%95%EC%9D%98_%EC%8D%B8%EB%84%A4%EC%9D%BC-359x300.jpg");

    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.8);
  `;
  const Con = styled.div`
    background-color: #fff;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
  `;
  const Text = styled.h2`
    margin-top: -40%;
    text-align: center;
  `;
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/lecture/${id}`);
  };
  return (
    <>
      <Layout />
      <Body>
        <Con>
          {lecture.map((item) => (
            <LeftCon key={item.id} onClick={() => handleClick(item.id)}>
              <Text>{item.title}</Text>
            </LeftCon>
          ))}
        </Con>
      </Body>
    </>
  );
};
export default Main;

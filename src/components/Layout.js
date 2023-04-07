import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Profile from "../assets/profile.png"
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #FFFFFF;
`;

const Header = styled.div`
  width: 100%;
  height: 10%;
  background-color: white;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 5px 9px -6px #000000;
  z-index: 5;
`;
const Column = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items:center;
  margin-left:20%
  padding-right: 8%;

`;

// const ColumnLeft = styled(Column)`
//   justify-content: flex-start;
//   padding-left: 6%;
// `;

// const ColumnRight = styled(Column)`
//   justify-content: center;
//   padding-right: 5%;
//   margin-left : 25%;
// `;
const Btn = styled.button`
  margin-left: 5%;
  border: none;
  background-color: white;
  &:hover {
    cursor: pointer;
    font-weight: 900;
  }
`;

const Title = styled.div`
width:5%;
height: 100%;
margin-left:10%;
margin-right:0;
display: flex;
align-items: center;
justify-content: center;
`;
const Img = styled.div`
align-items: center;
justify-content: center;
display: flex;
margin-right:2%;
`

const Layout = () => {
    // const [username, setUsername] = useState("");
    // useEffect(() => {
    //   (async () => {
    //     const response = await fetch("/accounts/info");
    //     const json = await response.json();
    //     setUsername(json.name);
    //   })();
    // }, []);
    const navigate = useNavigate();
    const goHomework = () => {
      navigate(`/homework`);
    };
    const goNotice = () => {
      navigate(`/notice`);
    };
    const goUser = () => {
      navigate(`/user`);
    };


    return (
      <Container>
        <Header>
        <Title>수업명</Title>
          <Column>
            <Btn onClick={goHomework}>과제</Btn>
            <Btn onClick={goNotice}>공지사항</Btn>
            <Btn onClick={goUser}>사용자</Btn>
          </Column>
          <Img>
          <Link to ="/pages/Myapge">
              <img src = {Profile} width='35vh' height='35vh'/>   
          </Link>
          </Img>
        </Header>
      </Container>
    );
  };
  
  export default Layout;
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProfileModal from "./Modal";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
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
  width: 30%;
  height: 100%;
  display: flex;
  align-items:center;
  margin-left:30%
  padding-right: 30%;
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
  margin-left: 1%;
  padding: 5%;
  border: none;
  background-color: white;
  font-size: 2.3vh;
  &:hover {
    cursor: pointer;
    font-weight: 900;
  }
`;

const Title = styled.div`
  width: 35%;
  height: 100%;
  margin-left: 5%;
  display: flex;
  align-items: center;
`;

const Img = styled.div`
  width: 25%;
  align-items: center;
  justify-content: right;
  display: flex;
  margin-right: 2%;
`;
const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const goHomework = () => {
    navigate(`/homeworks`);
  };
  const goNotice = () => {
    navigate(`/notice`);
  };
  const goUser = () => {
    navigate(`/user`);
  };
  const goHome = () => {
    navigate("/main");
  };

  return (
    <Container>
      <Header>
        <TitleContainer>
          <Title onClick={goHome}>오픈소스 고급 설계</Title>

          <Column>
            <Btn onClick={goHomework}>과제</Btn>
            <Btn onClick={goNotice}>공지사항</Btn>
            <Btn onClick={goUser}>사용자</Btn>
          </Column>
          <Img>
            <ProfileModal />
          </Img>
        </TitleContainer>
      </Header>
    </Container>
  );
};

export default Layout;

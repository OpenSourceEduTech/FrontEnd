import styled from "styled-components";
import Layout from "../components/Layout";
import { homelist } from "../components/Data";
import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
const NoticeContainer = styled.div`
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
const LeftCon = styled.div`
  flex-direction: column;
  display: flex;
  position: flex;
  width: 80%;
  height: 100%;
  justify-content: center;
  align-items: left;
  background-color: white;
  margin-left: 10%;
`;

const Title = styled.div`
  align-text: center;
  display: flex;
  margin-left: 35%;
  margin-bottom: 1%;
  margin-top: 1%;
  height: 3%;
  width: 100%;
  font-size: 25px;
  color: #0000ff;
`;
const Line = styled.div`
  width: 70%;
  height: 30%;
  border-top: 1.5px solid #0000ff;
  flex-direction: column;
  display: flex;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.5vw;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 100px;
  margin-left: 200px; /* 오른쪽 여백 추가 */
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;

  &:hover {
    background-color: #0056b3;
  }
`;

const Homeworks = (props) => {
  const [homeworks, setHomework] = useState([]);
  const user = { id: 1, role: "Student" };

  useEffect(() => {
    setHomework(homelist);
  }, []);

  //const { id } = useParams();

  const handleClick = () => {
    window.location.href = "/homework/post";
  };
  const { id1, id2 } = useParams();

  return (
    <>
      {!localStorage.id ? (
        <h2 style={{ textAlign: "center" }}>
          접근이 제한되었습니다. 로그인이 필요합니다.
        </h2>
      ) : (
        <>
          <Layout />
          <NoticeContainer>
            <Title>과제목록</Title>
            <Line></Line>
            <LeftCon>
              {homeworks.map((item) => (
                <Link
                  to={`/homework/${item.id}`}
                  key={item.id}
                  style={{ textDecoration: "none" }}
                >
                  <h2>{item.title}</h2>
                </Link>
              ))}
            </LeftCon>
            <ButtonContainer>
              {localStorage.role === "professor" && (
                <StyledButton onClick={handleClick}>과제 등록</StyledButton>
              )}
            </ButtonContainer>
          </NoticeContainer>
        </>
      )}
    </>
  );
};

export default Homeworks;

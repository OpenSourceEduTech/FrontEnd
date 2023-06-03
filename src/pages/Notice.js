import React, { useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

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
const Con = styled.div`
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

const NoticeList = styled.div`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const NoticeItem = styled.div`
  justify-content: center;
  width: 20vw;
  height: 15vh;
  cursor: pointer;
`;

const NoticeTitle = styled.h3`
  width: 20vw;
  height: 3vh;
  justify-content: center;
  color: #333;
`;

const NoticeContent = styled.div`
  justify-content: center;
  width: 20vw;
  height: 3vh;
  color: #777;
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
const Notice = () => {
  const [selectedNotice, setSelectedNotice] = useState();
  const noticeData = [
    { id: 1, title: "공지1", content: "첫 번째 공지사항입니다." },
    { id: 2, title: "공지2", content: "두 번째 공지사항입니다." },
    { id: 3, title: "공지3", content: "세 번째 공지사항입니다." },
  ];

  const handleNoticeClick = (noticeId) => {
    const selected = noticeData.find((item) => item.id == noticeId);
    setSelectedNotice(selected);
  };

  const handleClick = () => {
    window.location.href = "/notice/post";
  };

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
            <Title>공지사항</Title>
            <Line></Line>
            {noticeData.length > 0 ? (
              <Con>
                {noticeData.map((item) => (
                  <NoticeItem
                    key={item.id}
                    onClick={() => handleNoticeClick(item.id)}
                  >
                    <NoticeTitle>{item.title}</NoticeTitle>
                    {selectedNotice && selectedNotice.id == item.id && (
                      <NoticeContent>{selectedNotice.content}</NoticeContent>
                    )}
                  </NoticeItem>
                ))}
              </Con>
            ) : (
              <p>공지사항이 없습니다.</p>
            )}
            <ButtonContainer>
              {localStorage.role === "professor" && (
                <StyledButton onClick={handleClick}>공지사항 등록</StyledButton>
              )}
            </ButtonContainer>
          </NoticeContainer>
        </>
      )}
    </>
  );
};

export default Notice;

import React, { useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

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
  align-items: center;
  background-color: white;
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

  return (
    <>
      <Layout />
      <NoticeContainer>
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
      </NoticeContainer>
    </>
  );
};

export default Notice;

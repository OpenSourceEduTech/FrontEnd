import Layout from "../components/Layout";
import styled from "styled-components";

const NoticeContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NoticeList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: -10px;
`;

const NoticeItem = styled.li`
  margin-bottom: 20px;
`;

const NoticeTitle = styled.h3`
  color: #333;
`;

const NoticeContent = styled.p`
  color: #777;
`;

const Notice = () => {
  const notice = ([
    { id: 1, title: '공지1', content: '첫 번째 공지사항입니다.' },
    { id: 2, title: '공지2', content: '두 번째 공지사항입니다.' },
    { id: 3, title: '공지3', content: '세 번째 공지사항입니다.' }
  ]);

  return (
    <>
      <Layout/>
      <NoticeContainer>
        <h2>공지사항</h2>
        {notice.length > 0 ? (
          <NoticeList>
            {notice.map((notice) => (
              <NoticeItem key={notice.id}>
                <NoticeTitle>{notice.title}</NoticeTitle>
                <NoticeContent>{notice.content}</NoticeContent>
              </NoticeItem>
            ))}
          </NoticeList>
        ) : (
          <p>공지사항이 없습니다.</p>
        )}
      </NoticeContainer>
      
    </>
  );
};

export default Notice;
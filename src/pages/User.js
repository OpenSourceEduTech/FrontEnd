import Layout from "../components/Layout";
import styled from "styled-components";

const Body = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  top: 0%;
  width: 100vw;
  height: 100vh;
`;
const Con = styled.div`
  flex-direction: column;
  display: flex;
  position: flex;
  width: 97%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Title = styled.div`
  align-text: center;
  display: flex;
  margin-left: 35%;
  margin-bottom: 1.5%;

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
const InforCon = styled.div`
  width: 100%;
  height: 20%;
  border-bottom: 1px solid #808080;
  display: flex;
`;
const Imgframe = styled.img`
  margin-top: 0.7%;
  margin-left: 1%;
  width: 6%;
  height: 70%;
  border-radius: 50%;
`;
const Name = styled.div`
  align-text: left;
  margin-left: 3%;
  margin-top: 1.5%;
  height: 3%;
  width: 100%;
  font-size: 14px;
  color: black;
`;
const infor = [
  {
    role: "professor",
    images:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA1MjhfMTA0/MDAxNTI3NDg3MTczOTY5.C2eXPMwTXPN7mN6rhXpLrbLAu36fyR7JDr3Ym8URGl8g.97dxz-n9zjbzgv8KbhDwrICDNbNierqWueC0aRsfgjIg.JPEG.ehfkdl8989/KakaoTalk_Moim_4UjmLsR1AohJhEmSqqNZkX7uHKU0kp.jpg?type=w800",
    name: "보노보노",
  },
  {
    role: "student",
    images:
      "https://item.kakaocdn.net/do/218bdb82c9a7456ee2080fe14a4642927154249a3890514a43687a85e6b6cc82",
    name: "보노보노2",
  },
  {
    role: "student",
    images:
      "https://dthezntil550i.cloudfront.net/by/latest/by2107310110043690021607870/1280_960/29d7f7be-9363-40a2-bb21-e2d8b6c5ff89.jpg",
    name: "보노보노3",
  },
  {
    role: "professor",
    images:
      "https://m.animegoods.co.kr/web/product/big/202108/652969ddecc475f26c29f3fb1a75603e.jpg",
    name: "보노보노4",
  },
  {
    role: "student",
    images:
      "https://post-phinf.pstatic.net/MjAyMDEyMTdfNDEg/MDAxNjA4MTk2MTAwODYw.2uOmdUztzMgTu88PhWETDlbIPjBUFD1w0jDog1Uo4wYg.9aRVKACms7XPuiuEBERSIqIxMSwZJYSkDVxRfGaMQ9Mg.PNG/31.png?type=w1200",
    name: "보노보노5",
  },
  {
    role: "student",
    images:
      "https://post-phinf.pstatic.net/MjAyMDEyMTdfNDEg/MDAxNjA4MTk2MTAwODYw.2uOmdUztzMgTu88PhWETDlbIPjBUFD1w0jDog1Uo4wYg.9aRVKACms7XPuiuEBERSIqIxMSwZJYSkDVxRfGaMQ9Mg.PNG/31.png?type=w1200",
    name: "보노보노5",
  },
  {
    role: "student",
    images:
      "https://post-phinf.pstatic.net/MjAyMDEyMTdfNDEg/MDAxNjA4MTk2MTAwODYw.2uOmdUztzMgTu88PhWETDlbIPjBUFD1w0jDog1Uo4wYg.9aRVKACms7XPuiuEBERSIqIxMSwZJYSkDVxRfGaMQ9Mg.PNG/31.png?type=w1200",
    name: "보노보노5",
  },
  {
    role: "student",
    images:
      "https://post-phinf.pstatic.net/MjAyMDEyMTdfNDEg/MDAxNjA4MTk2MTAwODYw.2uOmdUztzMgTu88PhWETDlbIPjBUFD1w0jDog1Uo4wYg.9aRVKACms7XPuiuEBERSIqIxMSwZJYSkDVxRfGaMQ9Mg.PNG/31.png?type=w1200",
    name: "보노보노5",
  },
  {
    role: "student",
    images:
      "https://post-phinf.pstatic.net/MjAyMDEyMTdfNDEg/MDAxNjA4MTk2MTAwODYw.2uOmdUztzMgTu88PhWETDlbIPjBUFD1w0jDog1Uo4wYg.9aRVKACms7XPuiuEBERSIqIxMSwZJYSkDVxRfGaMQ9Mg.PNG/31.png?type=w1200",
    name: "보노보노5",
  },
  {
    role: "student",
    images:
      "https://post-phinf.pstatic.net/MjAyMDEyMTdfNDEg/MDAxNjA4MTk2MTAwODYw.2uOmdUztzMgTu88PhWETDlbIPjBUFD1w0jDog1Uo4wYg.9aRVKACms7XPuiuEBERSIqIxMSwZJYSkDVxRfGaMQ9Mg.PNG/31.png?type=w1200",
    name: "보노보노5",
  },
];
const User = () => {
  // const [infor, setInfor] = useState([]);
  const professor = infor.filter((v) => v.role == "professor");
  const student = infor.filter((v) => v.role == "student");
  return (
    <>
      <Layout />
      <Body>
        <Con>
          <Title>교수</Title>
          <Line>
            {professor.map((infor) => (
              <InforCon key={infor.images}>
                <Imgframe src={infor.images} />
                <Name>{infor.name}</Name>
              </InforCon>
            ))}
          </Line>
          <Title>학생</Title>
          <Line>
            {student.map((infor) => (
              <InforCon key={infor.images}>
                <Imgframe src={infor.images} />
                <Name>{infor.name}</Name>
              </InforCon>
            ))}
          </Line>
        </Con>
      </Body>
    </>
  );
};
export default User;

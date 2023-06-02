import styled from "styled-components";
import Layout from "../components/Layout";
import { homelist } from "../components/Data";
import Homework from "../pages/Homework";
import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";
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

//import Loading from "./Loading";
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
  align-items: left;
  background-color: white;
  margin-left: 10%;
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

  return (
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
          <StyledButton onClick={handleClick}>과제 등록</StyledButton>
        </ButtonContainer>
      </NoticeContainer>
    </>
    // <Container>
    //   <FilmCase src={filmCase} />
    //   <Films>
    //     {homeworks.map((homework) => (
    //       <Film key={homework.id}>
    //         <FilmFrame src={filmFrame} />
    //         <Thumbnail src={film.image} />
    //         <GoRead id={film.diary_id} />
    //       </Film>
    //     ))}
    //     <FilmEdge src={filmEdge} />
    //   </Films>
    // </Container>
  );
};

export default Homeworks;

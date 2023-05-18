import styled from "styled-components";
import Layout from "../components/Layout";
import { homelist } from "../components/Data";
import Homework from "../pages/Homework";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
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

const Homeworks = (props) => {
  const [homeworks, setHomework] = useState([]);

  useEffect(() => {
    setHomework(homelist);
  }, []);

  //const { id } = useParams();

  return (
    <>
      <Layout />
      <Body>
        <LeftCon>
          {homeworks.map((item) => (
            <Link to={`/homework/${item.id}`} key={item.id}>
              <h2>{item.title}</h2>
            </Link>
          ))}
        </LeftCon>
      </Body>
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

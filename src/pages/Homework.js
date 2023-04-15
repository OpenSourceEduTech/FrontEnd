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
const LeftCon = styled.div`
  flex-direction: column;
  display: flex;
  position: flex;
  width: 80%;
  height: 100%;

  background-color: #000000;
`;
const RightCon = styled.div`
  width: 20%;
  height: 100%;
  flex-direction: column;
  display: flex;
  background-color: pink;
  align-items: center;
`;
const Mytask = styled.div`
  width: 80%;
  height: 20%;
  justify-content: center;
  background-color: white;
  margin-top: 45%;
  box-shadow: 0px 5px 9px -6px #000000;
  border: 1px;
`;
const Homework = () => {
  return (
    <>
      <Layout />
      <Body>
        <LeftCon></LeftCon>
        <RightCon>
          <Mytask></Mytask>
        </RightCon>
      </Body>
    </>
  );
};

export default Homework;

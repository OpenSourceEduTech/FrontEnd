import Layout from "../components/Layout";
import styled from "styled-components";

const Body = styled.div`
display:flex;
  width: 100vw;
  height: 100vh;
  background-color: #FFFFFF;
  align-items:columns;
  position: fixed;
  z-index:1;
`;
const Frame = styled.div`
    width: 100%;
    position: relative;
    height:20%;
    background-color: #000000;
    z-index:2;
`;

const Homework = () => {
    return (
        <Layout>
            <Body>
                <Frame>
                    <a>hi</a>
                </Frame>
            </Body>
        </Layout>
        
    );
  };
  
  export default Homework;
import { useNavigate } from "react-router";
import styled from "styled-components";
const GoReadBtn = styled.button`
  width: 91.2%;
  height: 65%;
  border: none;
  background-color: inherit;
  position: absolute;
  right: 5.1%;
  top: 17.3%;
  z-index: 4;
  &:hover {
    cursor: pointer;
  }
`;

export const GoRead = ({ id }) => {
  const navigate = useNavigate();
  const goRead = () => {
    navigate(`/read/${id}`);
  };
  return <GoReadBtn onClick={goRead} />;
};

import React, { useState } from "react";
import Modal from "react-modal";
import Profile from "../assets/profile.png";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

// 모달 스타일 설정
const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    // zIndex: 9999,
  },
  content: {
    width: "350px",
    height: "270px",
    left: "1030px",
    top: "-250px",
    margin: "auto",
    border: "0.1px solid #ccc",
    padding: "20px",
    borderRadius: "30px",
    backgroundColor: "#F0F0F0",
    zindex: 0,
  },
};

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 프로필 모달 컴포넌트
const ProfileModal = () => {
  const Name = styled.div`
    width: 350px;
    height: 30px;
    borderradius: 4px;
    background-color: #dcdcdc;
  `;
  const Email = styled.div`
    width: 350px;
    height: 30px;
    borderradius: 4px;
    background-color: #dcdcdc;
  `;

  const Info = styled.div`
    width: 350px;
    height: 30px;
    borderradius: 4px;
    background-color: #dcdcdc;
  `;

  const user = { id: 1, name: "SeongWon", email: "djfqks22@naver.com" };

  const [isOpen, setIsOpen] = useState(false);

  // 모달 열기
  const openModal = () => {
    setIsOpen(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setIsOpen(false);
  };

  const goLogin = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    window.location.href = "/";
  };

  return (
    <div>
      {/* 프로필을 보여줄 버튼 또는 링크 */}
      <img onClick={openModal} src={Profile} width="35vh" height="30vh" />

      {/* 프로필 모달 */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Profile Modal"
      >
        {/* 프로필 내용 */}
        <h2>프로필</h2>
        <img src={Profile} width="35vh" height="30vh" />
        <Name> 이름 : {localStorage.id}</Name>
        <Email> 역할 : {localStorage.role}</Email>
        <Info>
          {/* <StyledButton onClick={handleClick}>개인정보수정</StyledButton> */}
          <button onClick={goLogin}>로그아웃</button>
        </Info>
      </Modal>
    </div>
  );
};

export default ProfileModal;

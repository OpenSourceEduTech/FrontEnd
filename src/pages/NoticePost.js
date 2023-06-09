import Layout from "../components/Layout";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

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

const FormContainer = styled.form`
  max-width: 350px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical; /* 수직 리사이즈 가능 */
  height: 150px; /* 높이 조정 */
`;


const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const NoticePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/notice")
    axios
      .post("lecture/1/notice", { title: title, content: description })
      .then((response) => {
        // 성공적으로 요청이 완료되면 실행되는 코드
        console.log("요청 성공:", response.data);
        navigate("/notice");
      })
      .catch((error) => {
        // 요청이 실패하면 실행되는 코드
        console.error("요청 실패:", error);
      });

  };

  return (
    <>
    <Layout/>
    <NoticeContainer>
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="title">공지 제목</Label>
        <Input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="description">공지 내용</Label>
        <TextArea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
      </FormGroup>
      <SubmitButton type="submit">등록</SubmitButton>
    </FormContainer>
    </NoticeContainer>
   </>
  );
}

export default NoticePost;

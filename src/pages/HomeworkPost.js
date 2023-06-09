import Layout from "../components/Layout";
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";
import { Link, useNavigate } from "react-router-dom";

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

const HomeworkPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    let jsonData = JSON.stringify({ title: title, content: description });

    const homeworkDto = new Blob([jsonData], { type: "application/json" });

    formData.append("homeworkDto", homeworkDto);
    // formData.append("homeworkDto", new Blob(jsonData, { 'Content-Type': 'application/json' }));

    for (let key of formData.keys()) {
      console.log(key);
    }

    // FormData의 value 확인
    for (let value of formData.values()) {
      console.log(value);
    }

    axios
      .post("/lecture/1/homework", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log("good");
        // 성공적으로 전송된 경우 처리할 로직 작성
      })
      .catch((error) => {
        console.log("bad");
        // 전송 중 에러가 발생한 경우 처리할 로직 작성
      });

    navigate(`/homeworks`);
  };

  return (
    <>
      <Layout />
      <NoticeContainer>
        <FormContainer onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="title">과제 제목</Label>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">과제 내용</Label>
            <TextArea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="number">과제 번호</Label>
            <Input
              type="text"
              id="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="file">첨부 파일</Label>
            <Input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </FormGroup>
          <SubmitButton type="submit">등록</SubmitButton>
        </FormContainer>
      </NoticeContainer>
    </>
  );
};

export default HomeworkPost;

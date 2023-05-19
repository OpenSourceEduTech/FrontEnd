import React, { useState } from "react";
import { Stage, Layer, Circle, Line, Text } from "react-konva";
import styled from "styled-components";

const MindMap = () => {
  const [topic, setTopic] = useState("주제");
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(null);
  const [selectedNodeContent, setSelectedNodeContent] = useState("");

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const addNode = (e) => {
    e.preventDefault();
    setQuestions([...questions, { content: newQuestion }]);
    setNewQuestion("");
  };

  const selectNode = (index) => {
    setSelectedNodeIndex(index);
    setSelectedNodeContent(questions[index].content);
  };

  const updateNode = (e) => {
    e.preventDefault();
    const updatedQuestions = [...questions];
    updatedQuestions[selectedNodeIndex].content = selectedNodeContent;
    setQuestions(updatedQuestions);
    setSelectedNodeIndex(null);
    setSelectedNodeContent("");
  };

  const deleteNode = () => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(selectedNodeIndex, 1);
    setQuestions(updatedQuestions);
    setSelectedNodeIndex(null);
    setSelectedNodeContent("");
  };

  const renderNodes = () => {
    const radius = 200;
    return questions.map((question, i, arr) => {
      const angle = (i / (arr.length || 1)) * Math.PI * 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      return (
        <React.Fragment key={i}>
          <Circle
            x={x}
            y={y}
            radius={30}
            fill="red"
            draggable
            onClick={() => selectNode(i)}
          />
          <Text
            text={question.content}
            x={x}
            y={y}
            align="center"
            verticalAlign="middle"
            width={60}
          />
          <Line points={[centerX, centerY, x, y]} stroke="black" />
        </React.Fragment>
      );
    });
  };

  return (
    <div>
      <h1>{topic}</h1>
      <form onSubmit={addNode}>
        <input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          required
        />
        <button type="submit">질문 추가</button>
      </form>
      {selectedNodeIndex !== null && (
        <div>
          <form onSubmit={updateNode}>
            <input
              type="text"
              value={selectedNodeContent}
              onChange={(e) => setSelectedNodeContent(e.target.value)}
              required
            />
            <button type="submit">노드 업데이트</button>
          </form>
          <button onClick={deleteNode}>노드 삭제</button>
        </div>
      )}
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Circle x={centerX} y={centerY} radius={40} fill="blue" />
          <Text
            text={topic}
            x={centerX}
            y={centerY}
            align="center"
            verticalAlign="middle"
            width={80}
          />
          {renderNodes()}
        </Layer>
      </Stage>
    </div>
  );
};

export default MindMap;

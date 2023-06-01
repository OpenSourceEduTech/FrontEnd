import React, { useState } from "react";
import { Stage, Layer, Circle, Line, Text } from "react-konva";
import Modal from './Modal'; // 당신의 모달 컴포넌트를 임포트합니다

const MindMap = () => {
  const [topic, setTopic] = useState("주제");
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({ title: '', content: '' });
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState({ title: '', content: '' });
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달의 상태를 관리하는 상태 변수를 추가합니다

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const addNode = (e) => {
    e.preventDefault();
    let level = Math.floor(questions.length / 4) + 1;
    let levelCount = questions.filter((q) => q.level === level).length;
    if (levelCount >= 4 * level) {
      level += 1;
    }
    setQuestions([...questions, { ...newQuestion, level }]);
    setNewQuestion({ title: '', content: '' });
  };

  const selectNode = (index) => {
    setSelectedNodeIndex(index);
    setSelectedQuestion(questions[index]);
    setIsModalOpen(true); // 노드를 선택하면 모달을 열어줍니다
  };

  const updateNode = (e) => {
    e.preventDefault();
    const updatedQuestions = [...questions];
    updatedQuestions[selectedNodeIndex] = selectedQuestion;
    setQuestions(updatedQuestions);
    setSelectedNodeIndex(null);
    setSelectedQuestion({ title: '', content: '' });
  };

  const deleteNode = () => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(selectedNodeIndex, 1);
    setQuestions(updatedQuestions);
    setSelectedNodeIndex(null);
    setSelectedQuestion({ title: '', content: '' });
  };

  const renderNodes = () => {
    const baseRadius = Math.min(centerX, centerY) / 3;
    return questions.map((question, i, arr) => {
      const levelQuestions = arr.filter((q) => q.level === question.level);
      const levelIndex = levelQuestions.findIndex((q) => q.title === question.title);
      const angle = (levelIndex / levelQuestions.length) * Math.PI * 2;
      const radius = baseRadius * question.level;
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
            text={question.title}
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
        <label>
          제목:
          <input
            type="text"
            value={newQuestion.title}
            onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
            required
          />
        </label>
        <label>
          내용:
          <input
            type="text"
            value={newQuestion.content}
            onChange={(e) => setNewQuestion({ ...newQuestion, content: e.target.value })}
            required
          />
        </label>
        <button type="submit">질문 추가</button>
      </form>
      {selectedNodeIndex !== null && (
        <div>
          <form onSubmit={updateNode}>
            <label>
              제목:
              <input
                type="text"
                value={selectedQuestion.title}
                onChange={(e) => setSelectedQuestion({ ...selectedQuestion, title: e.target.value })}
                required
              />
            </label>
            <label>
              내용:
              <input
                type="text"
                value={selectedQuestion.content}
                onChange={(e) => setSelectedQuestion({ ...selectedQuestion, content: e.target.value })}
                required
              />
            </label>
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
      {/* 모달을 추가합니다. */}
      {isModalOpen && (
        <Modal>
          <h2>{selectedQuestion.title}</h2>
          <p>{selectedQuestion.content}</p>
          <button onClick={() => setIsModalOpen(false)}>닫기</button>
        </Modal>
      )}
    </div>
  );
};

export default MindMap;

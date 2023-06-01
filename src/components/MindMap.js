import React, { useState } from "react";
import { Stage, Layer, Circle, Text } from "react-konva";
import Modal from './Modal';

const MindMap = () => {
  const [topic, setTopic] = useState("주제");
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({ title: '', content: '' });
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState({ title: '', content: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nodeRadius = 50;
  const nodeColor = "rgba(255, 0, 0, 0.7)";
  const topicNodeColor = "skyblue";
  const distanceFactor = 1.2;  // Node 간 거리를 20% 벌리기 위한 요인

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
    setIsModalOpen(true);
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

  const calculateCoordinates = (question, i, arr) => {
    const levelQuestions = arr.filter((q) => q.level === question.level);
    const levelIndex = levelQuestions.findIndex((q) => q.title === question.title);
    const angle = (levelIndex / levelQuestions.length) * Math.PI * 2;
    const baseRadius = Math.min(centerX, centerY) / 3 * distanceFactor;
    const radius = baseRadius * question.level;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    return { x, y };
  };

  const renderNodes = () => {
    return questions.map((question, i, arr) => {
      const { x, y } = calculateCoordinates(question, i, arr);

      return (
        <React.Fragment key={i}>
          <Circle
            x={x}
            y={y}
            radius={nodeRadius}
            fill={nodeColor}
            draggable
            onClick={() => selectNode(i)}
          />
          <Text
            text={question.title}
            x={x - nodeRadius / 2}
            y={y - nodeRadius / 2}
            align="center"
            verticalAlign="middle"
            width={nodeRadius}
            fontSize={16}  // 글씨 크기를 10% 늘림
          />
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
          <Circle x={centerX} y={centerY} radius={nodeRadius} fill={topicNodeColor} />
          <Text
            text={topic}
            x={centerX - nodeRadius / 2}
            y={centerY - nodeRadius / 2}
            align="center"
            verticalAlign="middle"
            width={nodeRadius}
            fontSize={18}  // 글씨 크기를 10% 늘림
          />
          {renderNodes()}
        </Layer>
      </Stage>
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



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

  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState({ title: '', content: '' });
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState({ title: '', content: '' });

  const nodeRadius = 50;
  const nodeColor = "rgba(255, 0, 0, 0.7)";
  const answerNodeColor = "rgba(0, 255, 0, 0.7)";
  const topicNodeColor = "skyblue";
  const distanceFactor = 1.2;

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

  const addAnswer = (e) => {
    e.preventDefault();
    if (selectedNodeIndex !== null && questions[selectedNodeIndex]) {
      const newAnswerNode = { ...newAnswer, questionIndex: selectedNodeIndex };
      setAnswers([...answers, newAnswerNode]);
      setNewAnswer({ title: '', content: '' });
    }
  };

  const selectAnswerNode = (index) => {
    setSelectedAnswerIndex(index);
    setSelectedAnswer(answers[index]);
    setIsModalOpen(true);
  };

  const updateAnswerNode = (e) => {
    e.preventDefault();
    const updatedAnswers = [...answers];
    updatedAnswers[selectedAnswerIndex] = selectedAnswer;
    setAnswers(updatedAnswers);
    setSelectedAnswerIndex(null);
    setSelectedAnswer({ title: '', content: '' });
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
            fontSize={16}
          />
        </React.Fragment>
      );
    });
  };

  const renderAnswerNodes = () => {
    return answers.map((answer, i) => {
      const question = questions[answer.questionIndex];
      const { x, y } = calculateCoordinates(question, i, questions);

      return (
        <React.Fragment key={i}>
          <Circle
            x={x}
            y={y}
            radius={nodeRadius}
            fill={answerNodeColor}
            draggable
            onClick={() => selectAnswerNode(i)}
          />
          <Text
            text={answer.title}
            x={x - nodeRadius / 2}
            y={y - nodeRadius / 2}
            align="center"
            verticalAlign="middle"
            width={nodeRadius}
            fontSize={16}
          />
        </React.Fragment>
      );
    });
  };

  return (
    <div>
      <h1>{topic}</h1>
      <form onSubmit={addNode}>
        {/* 생략 */}
      </form>
      {selectedNodeIndex !== null && (
        <div>
          {/* 생략 */}
          <form onSubmit={addAnswer}>
            <label>
              답변 제목:
              <input
                type="text"
                value={newAnswer.title}
                onChange={(e) => setNewAnswer({ ...newAnswer, title: e.target.value })}
                required
              />
            </label>
            <label>
              답변 내용:
              <input
                type="text"
                value={newAnswer.content}
                onChange={(e) => setNewAnswer({ ...newAnswer, content: e.target.value })}
                required
              />
            </label>
            <button type="submit">답변 추가하기</button>
          </form>
        </div>
      )}
      <Stage width={window.innerWidth} height={window.innerHeight}>
        {/* 생략 */}
        {renderNodes()}
        {renderAnswerNodes()}
      </Stage>
      {isModalOpen && (
        <Modal>
          {/* 생략 */}
        </Modal>
      )}
    </div>
  );
};

export default MindMap;
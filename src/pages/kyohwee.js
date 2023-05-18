import React, { useState } from 'react';
import { Stage, Layer, Text, Line } from 'react-konva';

const MindMap = () => {
  const [topic, setTopic] = useState('주제');
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(null);
  const [selectedNodeContent, setSelectedNodeContent] = useState('');

  const addNode = (e) => {
    e.preventDefault();
    setQuestions([...questions, { content: newQuestion }]);
    setNewQuestion('');
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
    setSelectedNodeContent('');
  };

  const renderNodes = () => {
    let y = 100;
    return questions.map((question, i) => {
      y += 60;
      return (
        <React.Fragment key={i}>
          <Text
            text={question.content}
            x={200}
            y={y}
            fontSize={15}
            draggable
            onClick={() => selectNode(i)}
          />
          <Line
            points={[100, 100, 200, y]}
            stroke="black"
          />
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
        <form onSubmit={updateNode}>
          <input
            type="text"
            value={selectedNodeContent}
            onChange={(e) => setSelectedNodeContent(e.target.value)}
            required
          />
          <button type="submit">노드 업데이트</button>
        </form>
      )}
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text={topic} x={100} y={100} fontSize={20} />
          {renderNodes()}
        </Layer>
      </Stage>
    </div>
  );
};

export default MindMap;
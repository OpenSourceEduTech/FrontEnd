import React, { useEffect, useState, useRef } from "react";
import Layout from "../components/Layout";
import * as am5 from "@amcharts/amcharts5";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import styled from "styled-components";

const Con = styled.div`
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

const Button = styled.button`
  padding: 8px 12px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Input = styled.input`
  height: 50px;
  width: 50%;
  border: 1px solid gray;
  border-radius: 5px;

  outline: none;

  font-family: 'Noto Sans KR';

  font-size: 20px;
  color: #363636;

  &::placeholder{
    color: #black;
  }

  &:hover{
    border: 1px solid black;
  }

  &:focus{
    color: #363636;
    border: 1px solid blue};
  }
`;

function MindMap() {
  const [data, setData] = useState({
    value: 0,
    name: "Root",
    children: [],
  });
  const [taskName, setTaskName] = useState("");
  const [answer, setAnswer] = useState("");
  const [selectedNode, setSelectedNode] = useState(null);
  const rootRef = useRef(null);
  const seriesRef = useRef(null);
  let rootCount = 0;

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleAddTask = () => {
    const newTask = {
      name: taskName,
      children: [],
    };

    generateLevel(data, newTask, 1);

    seriesRef.current.data.setAll([data]);
    seriesRef.current.appear(1000, 100);

    setSelectedNode(newTask);
  };

  const handleAddAnswer = () => {
    if (selectedNode === null) {
      alert("먼저 질문 노드를 선택해주세요!");
      return;
    }

    const newAnswer = {
      name: answer,
      value: 1,
    };

    selectedNode.children.push(newAnswer);

    seriesRef.current.data.setAll([data]);
    seriesRef.current.appear(1000, 100);
  };

  useEffect(() => {
    const root = am5.Root.new(rootRef.current);
    root.setThemes([am5themes_Animated.new(root)]);

    const container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout,
      })
    );

    const series = container.children.push(
      am5hierarchy.ForceDirected.new(root, {
        singleBranchOnly: false,
        downDepth: 2,
        topDepth: 1,
        initialDepth: 1,
        valueField: "value",
        categoryField: "name",
        childDataField: "children",
        idField: "name",
        linkWithField: "linkWith",
        manyBodyStrength: -10,
        centerStrength: 0.8,
      })
    );
    series.get("colors").setAll({ step: 2 });
    series.links.template.set("strength", 0.5);

    series.nodes.template.events.on("hit", function (event) {
      setSelectedNode(event.target.dataItem.dataContext);
    });

    const init = {
      name: "과제1",
      children: [],
    };

    generateLevel(data, init, 0);

    series.data.setAll([data]);

    series.appear(1000, 100);

    seriesRef.current = series;

    return () => {
      root.dispose();
    };
  }, []);

  function generateLevel(data, newTask, level) {
    const maxLevels = 2;
    const maxNodes = 5;
    const maxValue = 100;

    if (level === 0 && rootCount < 1) {
      rootCount++;
      data.children.push(newTask);
    } else if (level === 0) {
    } else {
      data.children[0].children.push(newTask);
    }
  }

  return (
    <>
      <Layout />
      <Con>
        <Input
          type="text"
          value={taskName}
          onChange={handleInputChange}
          placeholder="질문을 입력하세요!"
        ></Input>
        <br />
        <Button onClick={handleAddTask}>질문 추가</Button>
        <br />
        <Input
          type="text"
          value={answer}
          onChange={handleAnswerChange}
          placeholder="답변을 입력하세요!"
        ></Input>
        <br />
        <Button onClick={handleAddAnswer}>답변 추가</Button>
        <div
          ref={rootRef}
          id="chartdiv"
          style={{ width: "1280px", height: "600px" }}
        ></div>
      </Con>
    </>
  );
}

export default MindMap;

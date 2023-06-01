import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homeworks from "./routers/Homeworks";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Notice from "./pages/Notice";
import User from "./pages/User";
import Homework from "./pages/Homework";
import MindMap from "./components/MindMap";
import HomeworkPost from "./pages/HomeworkPost";
import NoticePost from "./pages/NoticePost";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/homeworks" element={<Homeworks />} />
        <Route path="/homework/:id" element={<Homework />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/user" element={<User />} />
        <Route path="/question" element={<MindMap />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/homework/post" element={<HomeworkPost />} />
        <Route path="/notice/post" element={<NoticePost />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </Router>
  );
};

export default App;

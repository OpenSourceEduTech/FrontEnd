import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homework from "./pages/Homework";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Notice from "./pages/Notice";
import User from "./pages/User";
const App = () => {
  return (

    <Router>
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/homework" element={<Homework />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/user" element={<User />} />
      <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </Router>

    
  );
};

export default App;

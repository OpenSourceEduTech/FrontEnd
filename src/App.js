import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import Homeworks from "./routers/Homeworks";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Notice from "./pages/Notice";
import User from "./pages/User";
import Homework from "./pages/Homework";
import MindMap from "./components/MindMap";
//import Admin from "./pages/Admin";
// import Validation, { ROLE } from "./components/validation";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeworkPost from "./pages/HomeworkPost";
import NoticePost from "./pages/NoticePost";
import Mindmap from "./pages/Mindmap";
const App = () => {
  const [role, setRole] = useState("");

  const handleLogin = (userRole) => {
    setRole(userRole);
    localStorage.setItem("role", userRole);
  };
  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) {
      setRole(savedRole);
    }
  }, []);
  // const [isAdmin, setIsAdmin] = useState(false);
  // const AdminRoute = (props) => {
  //   if (isAdmin) return <Route {...props} />;
  //   return <Route path="/" element={Main} />;
  // };
  // const myRole = {
  //   // User:ROLE.USER,
  //   Admin: ROLE.ADMIN,
  // };

  // function getMyRole() {
  //   let key = Object.keys(myRole);
  //   return key[0];
  // }

  function PrivateRoute({ role, element }) {
    return role ? element : <Link to="/login" />;
  }

  function HomePage() {
    return <h1>홈 페이지</h1>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        {/* <Route path="/" exact render={() => <Main myRole={getMyRole()} />} />
        <Route path="/user" component={User} role={myRole.User} />
        <Route path="/admin" component={Admin} role={myRole.Admin} /> */}
        {/* <AdminRoute path="/admin" element={<Admin />} /> */}
        <Route path="/homeworks" element={<Homeworks />} />
        <Route path="/homework/:id" element={<Homework />} />
        <Route path="/lecture/:id" element={<Homeworks />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/user" element={<User />} />
        <Route path="/question" element={<MindMap />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/homework/post" element={<HomeworkPost />} />
        <Route path="/notice/post" element={<NoticePost />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mind" element={<Mindmap />} />
      </Routes>
    </Router>
  );
};

export default App;

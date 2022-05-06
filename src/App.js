import { Routes, Route } from "react-router-dom";
import "./styles.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ListUsers from "./components/ListUsers";
import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userList" element={<ListUsers />} />
        <Route path="/profile/:userId" element={< Profile />}/>     
      </Routes>
    </div>
  );
}

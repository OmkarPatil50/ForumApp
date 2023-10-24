import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./Pages/Landing";
import { IndividualPost } from "./Pages/IndividualPost";
import { Navbar } from "./Components/Navbar";

export default function App() {
  return (
    <div className="App">
      <h1 className="app-heading">MyForum</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/post/:postID" element={<IndividualPost />} />
      </Routes>
    </div>
  );
}

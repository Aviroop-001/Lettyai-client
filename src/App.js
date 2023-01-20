
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/:postID" element={<SinglePost />} />
        </Routes>
      </Router>
  );
}

export default App;

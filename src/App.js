import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PlayGround from "./Pages/Playground/Playground";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/PlayGround" element={PlayGround} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

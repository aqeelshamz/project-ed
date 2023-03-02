import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Print from "./Pages/Print/Print";
import PdfLink from "./Pages/Print/PdfLink";
import Playground1 from "./Pages/Playground/Playground1";
import Summary from "./Pages/Summary/Summary";
import PdfLinkPara from "./Pages/PrintPara/PdfLinkPara";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/PlayGround" element={<Playground1 />} />
          <Route exact path="/summary" element={<Summary />} />
          <Route exact path="/print" element={<PdfLink />} />
          <Route exact path="/printpara" element={<PdfLinkPara />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

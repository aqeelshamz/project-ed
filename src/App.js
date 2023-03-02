
import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/PlayGround"
            element={
              <h1 className="text-6xl font-bold underline">
                Hello world!
              </h1>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App

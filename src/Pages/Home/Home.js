import React, { useState } from "react";
import { proficiencyLevels } from "../../utils/utils";
import "./Home.css";

function Home() {
  const [proLevel, setProLevel] = useState(0);

  return (
    <div className="main">
      <p id="title">Project Ed</p>
      <p id="subtitle">Realtime Speech Educational Presentation</p>
      <br />
      <p
        style={{ fontSize: "1.2rem", fontWeight: "500", marginBottom: "20px" }}
      >
        🎓 Audience Proficiency level
      </p>
      <div className="row" style={{ marginBottom: "50px" }}>
        {proficiencyLevels.map((item, index) => {
          return (
            <button
              id="pro-btn"
              style={{
                background: proLevel === index ? "linear-gradient(45deg, #1d92ff, #05c79d)" : "white",
                color: proLevel === index ? "white" : "black",
              }}
              onClick={() => setProLevel(index)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <button
        id="button"
        onClick={() => (window.location.href = "/PlayGround?level=" + proLevel)}
      >
        Go to PlayGround ⚡
      </button>
    </div>
  );
}

export default Home;

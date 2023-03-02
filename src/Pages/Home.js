import React from "react";
import "./Home.css"

function Home() {
  return (
    <div className="main">
      <p id="title">Dypres</p>
      <p id="subtitle">Dynamic Education</p>
      <br />
      <button onClick={() => (window.location.href = "/PlayGround")}>
        Go to PlayGround ⚡
      </button>
    </div>
  );
}

export default Home;

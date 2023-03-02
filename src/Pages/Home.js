import React from "react";

function Home() {
  return (
    <div>
      Helloo gooys!!
      <br />
      <button onClick={() => (window.location.href = "/PlayGround")}>
        Go to PlayGround ⚡
      </button>
    </div>
  );
}

export default Home;

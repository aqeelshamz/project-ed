import React from "react";
import { useSearchParams } from "react-router-dom";
import { proficiencyLevels } from "../../utils/utils";
import "./Playground.css";

function Playground1() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="playground">
      <div>
      <p
        style={{
          background: "white",
          padding: "10px 30px",
          borderRadius: "10px",
          marginBottom: "20px",
          fontWeight: "500",
          fontSize: "1.2rem",
        }}
      >
        {proficiencyLevels[searchParams.get("level")]}
      </p>
      </div>
      <div className="content">
        <div className="column" style={{ width: "400px" }}>
          <div className="image"></div>
          <div className="image"></div>
        </div>
        <div className="column" style={{ marginLeft: "50px", padding: "30px", justifyContent: "center" }}>
          <p id="p-title">Title</p>
          <p id="p-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            placerat eleifend nunc, at interdum elit laoreet vitae. Morbi
            ultrices sapien sit amet velit convallis, sit amet bibendum neque
            consequat. Duis aliquet pulvinar mauris sit amet hendrerit.
            Phasellus luctus justo volutpat sem auctor, laoreet sagittis odio
            pellentesque. Vivamus elementum nibh quis rhoncus feugiat. Duis
            condimentum mauris sodales, consectetur metus commodo, pharetra
            orci. Pellentesque a placerat magna, eu fermentum lorem. Morbi dolor
            felis, elementum sed rhoncus vel, blandit at libero. Suspendisse
            mollis, dolor a pulvinar euismod, nunc metus rutrum enim, id rhoncus
            orci purus cursus metus. Mauris facilisis consectetur rhoncus. Morbi
            facilisis leo tempus, aliquam massa eget, tempor dolor. Phasellus
            luctus placerat nisl, quis pellentesque lacus viverra pellentesque.
            Pellentesque a placerat magna, eu fermentum lorem. Morbi dolor
            felis, elementum sed rhoncus vel, blandit at libero. Suspendisse
            mollis, dolor a pulvinar euismod, nunc metus rutrum enim, id rhoncus
            orci purus cursus metus. Mauris facilisis consectetur rhoncus. Morbi
            facilisis leo tempus, aliquam massa eget, tempor dolor. Phasellus
            luctus placerat nisl, quis pellentesque lacus viverra pellentesque.
            Pellentesque a placerat magna, eu fermentum lorem. Morbi dolor
            felis, elementum sed rhoncus vel, blandit at libero. Suspendisse
            mollis, dolor a pulvinar euismod, nunc metus rutrum enim, id rhoncus
            orci purus cursus metus. Mauris facilisis consectetur rhoncus. Morbi
            facilisis leo tempus, aliquam massa eget, tempor dolor. Phasellus
            luctus placerat nisl, quis pellentesque lacus viverra pellentesque.
          </p>
        </div>
      </div>
      <div className="btn-container">
        <div className="btn">🔃 Refresh</div>
        <div className="btn">🎙️ Start Speaking</div>
        <div className="btn">✅ End Presentation</div>
      </div>
    </div>
  );
}

export default Playground1;

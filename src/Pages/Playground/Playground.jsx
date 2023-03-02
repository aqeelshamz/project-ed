import React from "react";
import { useSearchParams } from "react-router-dom";
import { proficiencyLevels } from "../../utils/utils";
import "./style.css";

export default function PlayGround() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="main-play">
      <p>Proficiency level: {proficiencyLevels[searchParams.get("level")]}</p>
      <div className="content-area">
        <div className="img-part">
          <img src="https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>
          <img src="https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>
        </div>
        <div className="text-part">
          <h1></h1>
          <p></p>
        </div>
      </div>
    </div>
  );
}

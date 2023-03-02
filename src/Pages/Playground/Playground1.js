import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { proficiencyLevels } from "../../utils/utils";
import "./Playground.css";
import FeatherIcon from "feather-icons-react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Playground1() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showCaptions, setShowCaptions] = useState(false);
  const [captions, setCaptions] = useState("");

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
        {/* <div className="quote-box"></div> */}
        {showCaptions && transcript !== "" ? (
          <div className="caption">
            <p>{transcript}</p>
          </div>
        ) : (
          ""
        )}
        <div className="column" style={{ width: "400px" }}>
          <div className="image"></div>
          <div className="image"></div>
        </div>
        <div
          className="column"
          style={{
            marginLeft: "50px",
            padding: "30px",
            justifyContent: "center",
          }}
        >
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
        <div
          className="btn"
          onClick={() => setShowCaptions(!showCaptions)}
          style={{
            background: showCaptions ? "dodgerblue" : "lightgrey",
            color: showCaptions ? "white" : "grey",
          }}
        >
          <FeatherIcon id="icon" icon="type" />
        </div>
        <div
          className="btn"
          onClick={() => {
            window.location.reload();
          }}
        >
          <FeatherIcon id="icon" icon="refresh-cw" />
        </div>
        <div
          className="btn"
          onClick={() => {
            if (!listening) {
              SpeechRecognition.startListening({
                continuous: true,
              });
            } else {
              SpeechRecognition.stopListening();
            }
          }}
          style={{ background: listening ? "dodgerblue" : "#a61930" }}
        >
          <FeatherIcon id="icon" icon={listening ? "mic" : "mic-off"} />
        </div>
        <div className="btn">
          <FeatherIcon id="icon" icon="check" />
        </div>
      </div>
    </div>
  );
}

export default Playground1;

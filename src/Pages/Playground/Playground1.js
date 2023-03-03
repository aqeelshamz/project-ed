import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  openAIKey,
  proficiencyLevels,
  proficiencyPrompt,
} from "../../utils/utils";
import "./Playground.css";
import FeatherIcon from "feather-icons-react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import axios from "axios";

function Playground1() {
  const keyword_extractor = require("keyword-extractor");
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showCaptions, setShowCaptions] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const processData = (keywords) => {
    getPPTData();
    getWikipediaTitle();
    resetTranscript();
  };

  const getPPTData = (keywords) => {
    const config = {
      method: "POST",
      url: "https://api.openai.com/v1/completions",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openAIKey}`,
      },
      data: {
        model: "text-davinci-003",
        prompt:
          "'" +
          transcript +
          `'\nExplain this topic to an ${
            proficiencyPrompt[searchParams.get("level")]
          } in a single ppt slide with Slide title and Slide content`,
        max_tokens: 3000,
        temperature: 0,
      },
    };

    axios(config).then((response) => {
      // fetchImage(response.data?.choices[0]?.text);
      var list = titles;
      list.push(
        description
          ?.replaceAll("\n\n", "")
          .replaceAll("Slide Title: ", "")
          .split("Slide Content:")[0]
      );
      setTitles(titles);
      localStorage.setItem("summaryPrompt", titles);
      setDescription(response.data?.choices[0]?.text);
    });
  };

  // const getDescription = (keywords) => {
  //   const config = {
  //     method: "POST",
  //     url: "https://api.openai.com/v1/completions",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization:
  //         `Bearer ${openAIKey}`,
  //     },
  //     data: {
  //       model: "text-davinci-003",
  //       prompt: "'" + transcript + "'\nCreate 5 points for a ppt slide from the above talk.",
  //       max_tokens: 100,
  //       temperature: 0,
  //     },
  //   };

  //   axios(config).then((response) => {
  //     setDescription(response.data?.choices[0]?.text);
  //   });
  // };

  const [timerIds, setTimerIds] = useState([]);
  useEffect(() => {
    for (const id of timerIds) {
      clearTimeout(id);
    }

    const keywords = keyword_extractor.extract(transcript, {
      language: "english",
      remove_digits: true,
      return_changed_case: true,
      remove_duplicates: false,
    });

    console.log(transcript);
    console.log(keywords);

    const timer = () =>
      setTimeout(() => {
        if (keywords.length > 1) {
          processData(keywords);
        }
      }, 2500);
    const timerId = timer();
    timerIds.push(timerId);
    setTimerIds([...timerIds]);
  }, [transcript]);

  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");

  const getImages = (title) => {
    const config = {
      method: "GET",
      url: `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(
        title?.toString().toLowerCase()
      )}&prop=images&format=json&pithumbsize=400`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config).then((response) => {
      const images =
        response.data?.query?.pages[Object.keys(response.data?.query?.pages)[0]]
          ?.images;
      const urls = [
        `https://commons.wikimedia.org/w/api.php?action=query&titles=${images[0]?.title}&prop=imageinfo&iiprop=url&format=json`,
        `https://commons.wikimedia.org/w/api.php?action=query&titles=${images[1]?.title}&prop=imageinfo&iiprop=url&format=json`,
      ];

      for (const url of urls) {
        const config = {
          method: "GET",
          url: url,
          headers: {
            "Content-Type": "application/json",
          },
        };

        axios(config).then((response) => {
          localStorage.setItem(
            "image",
            response.data?.query?.pages[
              Object.keys(response.data?.query?.pages)[0]
            ]?.imageinfo[0]?.url
          );
          if (urls.indexOf(url) === 0) {
            setImage1(
              response.data?.query?.pages[
                Object.keys(response.data?.query?.pages)[0]
              ]?.imageinfo[0]?.url
            );
          } else {
            setImage2(
              response.data?.query?.pages[
                Object.keys(response.data?.query?.pages)[0]
              ]?.imageinfo[0]?.url
            );
          }
        });
      }
    });
  };

  const getWikipediaTitle = () => {
    const config = {
      method: "POST",
      url: "https://api.openai.com/v1/completions",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openAIKey}`,
      },
      data: {
        model: "text-davinci-003",
        prompt:
          "'" + transcript + `'\nWhat's the Wikipedia title of this topic?`,
        max_tokens: 500,
        temperature: 0,
      },
    };

    axios(config).then((response) => {
      var resp = response.data?.choices[0]?.text
        ?.toString()
        .replaceAll("\n", "")
        .replaceAll('"', "");
      if (resp.includes("(")) {
        resp = resp.split("(")[0];
      }
      getImages(resp);
    });
  };

  const [titles, setTitles] = useState([]);

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
          {image1 ? (
            <div className="image">
              <img src={image1} />
            </div>
          ) : (
            ""
          )}
          {image2 ? (
            <div className="image">
              <img src={image2} />
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className="column"
          style={{
            marginLeft: "50px",
            padding: "30px",
            justifyContent: "center",
          }}
        >
          <p id="p-title">
            {
              description
                ?.replaceAll("\n\n", "")
                .replaceAll("Slide Title: ", "")
                .split("Slide Content:")[0]
            }
          </p>
          <p id="p-content">
            {description
              ?.replaceAll("\n\n", "")
              .replaceAll("Slide Title: ", "")
              .split("Slide Content:")[1]
              ?.toString()
              .split(".")
              .map((item) => {
                return item ? (
                  <li style={{ marginBottom: "10px" }}>{item}</li>
                ) : (
                  ""
                );
              })}
          </p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="btn-container" style={{ marginRight: "20px" }}>
          <div
            className="btn"
            onClick={() => setShowCaptions(!showCaptions)}
            style={{
              background: showCaptions ? "dodgerblue" : "lightgrey",
              color: showCaptions ? "white" : "grey",
            }}
          >
            CC
          </div>
          <div
            className="btn"
            onClick={() => {
              localStorage.clear();
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
        </div>
        {localStorage.getItem("summaryPrompt") ? (
          <div className="btn-container" style={{ borderRadius: "20px" }}>
            <div
              onClick={() => (window.location.href = "/summary")}
              className="finish-btn"
              style={{ width: "auto", padding: "20px" }}
            >
              <FeatherIcon
                id="icon"
                icon="check"
                style={{ marginRight: "10px" }}
              />
              <p>Finish Presentation</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Playground1;

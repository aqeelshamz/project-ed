import React, { useEffect, useState } from "react";
import "./Summary.css";
import PdfLinkPara from "../PrintPara/PdfLinkPara";
import { openAIKey } from "../../utils/utils";
import axios from "axios";
import { Link } from "react-router-dom";

function Summary() {
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState("");

  const getSummary = (keywords) => {
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
          localStorage
            .getItem("summaryPrompt")
            .replaceAll("\n", "")
            .split(",")
            .join("\n") +
          `\n\nCreate a paragraph summary not less than 500 words from the above phrases.`,
        max_tokens: 3000,
        temperature: 0,
      },
    };

    axios(config).then((response) => {
      setLoading(false);
      setSummary(response.data?.choices[0]?.text);
      // localStorage.clear();
    });
  };

  useEffect(() => {
    getSummary();
  }, []);

  return (
    <div className="summary-page ">
      <div
        className="flex flex-col"
        style={{
          background: "white",
          borderRadius: "10px",
          padding: "15px",
          width: "80%",
          fontSize: "1.23rem",
        }}
      >
        <p id="title" className="text-center mb-3">
          📖 Summary
        </p>
        {loading ? (
          ""
        ) : localStorage.getItem("image") ? (
          <img src={localStorage.getItem("image")} alt={"Summary Image"} />
        ) : (
          ""
        )}
        {loading ? "Loading summary..." : <p>{summary}</p>}
        <div className="flex justify-end">
          <PdfLinkPara data={summary} image={localStorage.getItem("image")} />
          <Link to={"/print"} summary={summary} >q and a</Link>
        </div>
      </div>
    </div>
  );
}

export default Summary;

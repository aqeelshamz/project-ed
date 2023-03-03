import React, { useEffect, useState } from "react";
import { openAIKey } from "../../utils/utils";
import axios from "axios";
import PdfLink from "../Print/PdfLink";

function QnadA() {
  const [loading, setLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState();

  let response = {
    id: "cmpl-6pb9NPckY8ypAIeXpqeexwcJY6pPY",
    object: "text_completion",
    created: 1677755553,
    model: "text-davinci-003",
    choices: [
      {
        text: "\n\nQ1: What period of time did the French Revolution last?\nA1: The French Revolution lasted from 1789 to 1799.\n\nQ2: What event marked the beginning of the French Revolution?\nA2: The beginning of the French Revolution was marked by the storming of the Bastille on July 14, 1789.\n\nQ3: What symbol of royal tyranny was stormed at the beginning of the French Revolution?\nA3: The Bastille, a symbol of royal tyranny, was stormed at the beginning of the French Revolution.\n\nQ4: Who rose to power at the end of the French Revolution?\nA4: Napoleon Bonaparte rose to power as the Emperor of France at the end of the French Revolution.\n\nQ5: How long did the French Revolution last?\nA5: The French Revolution lasted for 10 years, from 1789 to 1799.\n\nQ6: What date marked the beginning of the French Revolution?\nA6: The French Revolution began on July 14, 1789.\n\nQ7: What event marked the end of the French Revolution?\nA7: The end of the French Revolution was marked by the rise of Napoleon Bonaparte as the Emperor of France.\n\nQ8: What symbol of royal tyranny was stormed at the beginning of the French Revolution?\nA8: The Bastille, a symbol of royal tyranny, was stormed at the beginning of the French Revolution.\n\nQ9: Who was the leader of France at the end of the French Revolution?\nA9: Napoleon Bonaparte was the leader of France at the end of the French Revolution.\n\nQ10: How many years did the French Revolution last?\nA10: The French Revolution lasted for 10 years, from 1789 to 1799.",
        index: 0,
        logprobs: null,
        finish_reason: "stop",
      },
    ],
    usage: {
      prompt_tokens: 73,
      completion_tokens: 377,
      total_tokens: 450,
    },
  };


  const handlePrint = () => {
    window.print();
  };



  //   let data = JSON.parse(JSON.stringify(fetchedData));
  //console.log(data);

  const fetchData = (keywords) => {
    setLoading(true);
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
            .getItem("summary")
            ?.replaceAll("\n", "")
            .split(",")
            .join("\n") +
          `\n\nCreate a 10 question and answers  from the above phrases.`,
        max_tokens: 3000,
        temperature: 0,
      },
    };

    axios(config).then((response) => {
      setLoading(false);
      console.log(response.data?.choices[0]?.text);
      setFetchedData(response.data?.choices[0]?.text);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-gray-600 flex justify-center items-center min-h-screen">
      {loading ? (
        <p style={{ fontWeight: "500", color: "white", fontSize: "2.2rem" }}>Loading Q & A...</p>
      ) : (
        <div className="w-2/3 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
          {/* <div className="bg-gray-200 text-gray-700 text-lg px-6 py-4">The title of the card here</div> */}
          {fetchedData?.split("\n\n")?.map((x, index) => {
            return (
              x && (
                <div className="px-6 py-4 border-t border-gray-200">
                  <div className="border rounded-lg p-4 bg-gray-200">
                    <p style={{ fontWeight: "500" }}>
                      {index}❓ {x?.split("A")[0]?.split(". ")[1]}
                    </p>
                    <br />
                    <p>✅ {x?.split("A")[1]?.split(". ")[1]}</p>
                  </div>
                  <br />
                </div>
              )
            );
          })}
          <div className="flex justify-end">
            {/* <button onClick={handlePrint}>Print</button> */}
            <PdfLink data={fetchedData} image={localStorage.getItem("image")} />
          </div>
        </div>
      )}
    </div>
  );
}

export default QnadA;

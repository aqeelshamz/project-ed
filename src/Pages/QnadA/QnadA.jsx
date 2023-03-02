import React from 'react';

function QnadA() {

    let response = {
        "id": "cmpl-6pb9NPckY8ypAIeXpqeexwcJY6pPY",
        "object": "text_completion",
        "created": 1677755553,
        "model": "text-davinci-003",
        "choices": [
            {
                "text": "\n\nQ1: What period of time did the French Revolution last?\nA1: The French Revolution lasted from 1789 to 1799.\n\nQ2: What event marked the beginning of the French Revolution?\nA2: The beginning of the French Revolution was marked by the storming of the Bastille on July 14, 1789.\n\nQ3: What symbol of royal tyranny was stormed at the beginning of the French Revolution?\nA3: The Bastille, a symbol of royal tyranny, was stormed at the beginning of the French Revolution.\n\nQ4: Who rose to power at the end of the French Revolution?\nA4: Napoleon Bonaparte rose to power as the Emperor of France at the end of the French Revolution.\n\nQ5: How long did the French Revolution last?\nA5: The French Revolution lasted for 10 years, from 1789 to 1799.\n\nQ6: What date marked the beginning of the French Revolution?\nA6: The French Revolution began on July 14, 1789.\n\nQ7: What event marked the end of the French Revolution?\nA7: The end of the French Revolution was marked by the rise of Napoleon Bonaparte as the Emperor of France.\n\nQ8: What symbol of royal tyranny was stormed at the beginning of the French Revolution?\nA8: The Bastille, a symbol of royal tyranny, was stormed at the beginning of the French Revolution.\n\nQ9: Who was the leader of France at the end of the French Revolution?\nA9: Napoleon Bonaparte was the leader of France at the end of the French Revolution.\n\nQ10: How many years did the French Revolution last?\nA10: The French Revolution lasted for 10 years, from 1789 to 1799.",
                "index": 0,
                "logprobs": null,
                "finish_reason": "stop"
            }
        ],
        "usage": {
            "prompt_tokens": 73,
            "completion_tokens": 377,
            "total_tokens": 450
        }
    };

    let data = response.choices[0].text.split("\n");
    console.log(data);












    return (
        <div className="bg-gray-600 flex justify-center items-center h-screen">
            <div className="w-2/3 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                {/* <div className="bg-gray-200 text-gray-700 text-lg px-6 py-4">The title of the card here</div> */}








                {data.map((x, index) => {
                    <p>{x}</p>;
                    <br />;
                    return x;
                })
                }






            </div>
        </div >
    );
}

export default QnadA;
import React from 'react';
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import photo from "./pexels-iam-hogir-11389808.jpg";



const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 35,
        textAlign: "center",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
});

function Print() {
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

    let data = response.choices[0].text;

    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.title}>Sample question answers</Text>
                {/* <Text style={styles.header} fixed>Summary</Text> */}
                <Image style={styles.image} src={photo} />

                <Text style={styles.text}>
                    {data}
                </Text>;



                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                />
            </Page>
        </Document>



    );
}

export default Print;
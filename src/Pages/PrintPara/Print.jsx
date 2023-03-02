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
        "id": "cmpl-6pdW3oUNy2eVsX3dLm6tygZpcgrKx",
        "object": "text_completion",
        "created": 1677764647,
        "model": "text-davinci-003",
        "choices": [
            {
                "text": "\n\nThe United States is a country with a high standard of living and a long life expectancy. In 1955, Dwight D. Eisenhower was the president of the United States and a member of the Republican Party. Telescopes are used to focus light and make distant objects appear closer. In 1992, the Olympic Games were held in Barcelona, Spain. \n\nThe United States is a country with a long history and a high quality of life. It is home to many of the world's most advanced technologies and has a life expectancy of 78 years. In 1955, Dwight D. Eisenhower was the president of the United States and a member of the Republican Party. He was a popular president and was known for his leadership during the Cold War. \n\nTelescopes are an important tool for astronomy and are used to focus light and make distant objects appear closer. Telescopes use either lenses or mirrors to focus light and make objects appear closer. This allows astronomers to observe distant stars and galaxies in greater detail. Telescopes have been used for centuries and are still used today to explore the universe. \n\nThe 1992 Olympic Games were held in Barcelona, Spain. This was the first time the Olympics had been held in Spain and it was a great success. The games featured athletes from all over the world competing in a variety of sports. The opening ceremony was attended by many dignitaries and was a great spectacle. The games were a great success and helped to promote the city of Barcelona and the country of Spain. \n\nThe United States, with its long life expectancy and advanced technology, is a great example of a country with a high quality of life. Telescopes are an important tool for astronomy and have been used for centuries to explore the universe. The 1992 Olympic Games were held in Barcelona, Spain and were a great success. These examples show how the United States and other countries can strive for a high quality of life and use technology to explore the world.",
                "index": 0,
                "logprobs": null,
                "finish_reason": "stop"
            }
        ],
        "usage": {
            "prompt_tokens": 82,
            "completion_tokens": 395,
            "total_tokens": 477
        }
    };

    let data = response.choices[0].text;

    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.title}>Summary</Text>
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
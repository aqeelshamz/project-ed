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

function Print({ data, image }) {
    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.title}>Sample question answers</Text>
                {/* <Text style={styles.header} fixed>Summary</Text> */}
                {image && <Image style={styles.image} src={image} />}

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
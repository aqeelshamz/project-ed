import React from 'react';
import Print from './Print';
import { PDFDownloadLink } from "@react-pdf/renderer";

function PdfLink() {
    return (
        <PDFDownloadLink document={<Print />} filename="FORM">
            {({ loading }) => (loading ? <button>Loading Document...</button> : <button>Download</button>)}
        </PDFDownloadLink>
    );
}

export default PdfLink;
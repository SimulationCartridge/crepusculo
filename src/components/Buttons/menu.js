import React from "react";


const DownloadButton = ({menuUrl, buttonText}) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = menuUrl;
        link.download = '';
        link.click();
    };

    return (
        <button className="download-button" onClick={handleDownload}>
            {buttonText}
        </button>
    )
};

export default DownloadButton;
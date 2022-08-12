import React from "react";
import "./styles/Widget.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets showHide">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("React is lit", "Top-news-9099 readers")}
      <hr className="new" />
      {newsArticle("CryptoCurrency laws", "Crypto-7531 readers")}
      <hr className="new" />
      {newsArticle("Inflation out of control", "Social-5000 readers")}
      <hr className="new" />
      {newsArticle("Tech giants market report", "Tech-2527 readers")}
      <hr className="new" />
      {newsArticle("Learning Redux", "Code-300 readers")}
    </div>
  );
};

export default Widgets;

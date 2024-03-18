import React from "react";
// import shell from "electron";

import linkedImage from "../img/linked.png";

import ShortenedWord from "./ShotenedWord.jsx";

const ChartBody = ({
  time,
  tx,
  swapFrom,
  swapTo,
  status,
  profit,
  change,
  index,
  profitUSD,
}) => {
  // const handleLinkClick = (url) => {
  //   shell.openExternal(url);
  // };

  return (
    <div className="liveTrades__chartBody" key={index}>
      <div className="chartBody__title">{time}s</div>
      <div className="chartBody__title">
        <ShortenedWord word={tx} />
        <a
          href={`https://etherscan.io/address/${tx}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedImage} style={{ marginLeft: "3px" }} />
        </a>
        {/* <a
          href="#"
          onClick={() => handleLinkClick(`https://etherscan.io/address/${tx}`)}
        >
          <img src={linkedImage} style={{ marginLeft: "3px" }} />
        </a> */}
      </div>
      <div className="chartBody__title">
        {swapFrom} <span style={{ color: "#919398" }}> &nbsp;{">"}&nbsp; </span>{" "}
        {swapTo}{" "}
      </div>
      <div className="chartBody__title">{status}</div>
      <div className="chartBody__titleProfit">
        +{profit} ETH (${profitUSD})
      </div>
      <div className="chartBody__title">
        <div className="titleChange__back">+{change}%</div>
      </div>
    </div>
  );
};

export default ChartBody;

import React, { useContext, useEffect } from "react";
import { pageContext } from "../../contexts/PageContext/PageContext";
import Carousel from "../carousel/Carousel";
import CardAnimation from "../layout/cardAnimation/CardAnimation";

import "./style/History.css";

const History = () => {
  const { history, getHistory, language } = useContext(pageContext);

  useEffect(() => {
    getHistory();
  }, []);

  const cardContent = [
    {
      img: "IMG",
      content: "CARD",
    },
    {
      img: "IMG",
      content: "CARD",
    },
    {
      img: "IMG",
      content: "CARD",
    },
  ];

  console.log(history);

  return (
    <>
      {history[0] && (
        <div
          style={{ backgroundImage: `url(${history[0].main_picture})` }}
          className="history_company_wrapper_img">
          <h2>{history[0][`title_${language}`]}</h2>

          <div className="history_company_wrapper_content">
            <p>{history[0][`sub_title_${language}`]}</p>
            <p
              dangerouslySetInnerHTML={{
                __html: history[0][`description_${language}`],
              }}></p>
          </div>
        </div>
      )}
      <CardAnimation />
    </>
  );
};

export default History;

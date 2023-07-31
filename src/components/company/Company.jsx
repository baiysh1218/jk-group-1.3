import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pageContext } from "../../contexts/PageContext/PageContext";
import Carousel from "../carousel/Carousel";
import FormConnect from "../formConnect/FormConnect";

import "./style/Company.css";

const Company = () => {
  const { currentCompany, companyContent, oneCompany } =
    useContext(pageContext);
  const { id } = useParams();

  useEffect(() => {
    // Здесь можно добавить логику для получения данных компании по id
    // например, вызвать функцию из контекста или отправить запрос к API
  }, [id]);

  const filteredCompany = companyContent.filter(item => item.name === id);
  const [content] = filteredCompany;

  return (
    <>
      <div className="company_main_wrapper">
        <div className="company_content_text_wrapper">
          <h2>{content?.name}</h2>
          <h4>{content?.group}</h4>
        </div>
        <div className="company_main_card">
          {content?.images.map((img, index) => {
            if (typeof img === "object") {
              return (
                <div
                  key={index}
                  className="company_main_card_item"
                  style={{ backgroundImage: `url(${img?.image})` }}></div>
              );
            }
          })}
        </div>
      </div>
      <Carousel data={content} />
      <FormConnect />
    </>
  );
};

export default Company;

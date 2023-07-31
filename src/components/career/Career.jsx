import React, { useContext, useEffect, useState } from "react";
import { pageContext } from "../../contexts/PageContext/PageContext";
import CardAnimation from "../layout/cardAnimation/CardAnimation";
import Loader from "../loader/Loader";
import "./style/Career.css";

const Career = () => {
  const { career, language } = useContext(pageContext);

  const [animatedCards, setAnimatedCards] = useState([]);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const cardElements = document.querySelectorAll(".card_animation");

    cardElements.forEach((cardElement, index) => {
      const cardTop = cardElement.offsetTop;
      const cardHeight = cardElement.offsetHeight;
      const scrollOffset = window.innerHeight * 0.5;

      if (
        scrollTop >= cardTop - scrollOffset &&
        scrollTop <= cardTop + cardHeight - scrollOffset &&
        !animatedCards.includes(index)
      ) {
        setAnimatedCards(prevState => [...prevState, index]);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {career ? (
        <>
          <div className="career_main_wrapper">
            <div className="media_content">
              <img src={career.main_picture} alt={career.title} />
            </div>
          </div>
          <div className="company_main_wrapper">
            <div className="company_content_text_wrapper">
              <h2>{career[`title_${language}`]}</h2>
              {/* Заголовок компании */}
              <p
                dangerouslySetInnerHTML={{
                  __html: career[`description_${language}`],
                }}></p>
              {/* Подзаголовок "О компании" */}
            </div>
            <div className="company_main_card">
              {career.images.map((cardItem, index) => (
                <div
                  className={`card_animation ${
                    animatedCards.includes(index) ? "animate" : ""
                  }`}
                  style={{ margin: `${index * 10}px 0` }}
                  key={index}>
                  <img src={cardItem.picture} alt={career.title} />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Career;

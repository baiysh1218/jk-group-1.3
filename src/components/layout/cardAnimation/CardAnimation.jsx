import React, { useContext, useEffect, useState } from "react";
import { pageContext } from "../../../contexts/PageContext/PageContext";
import Loader from "../../loader/Loader";
import "./style/CardAnimation.css";

const CardAnimation = ({ cardContent }) => {
  const [animatedCards, setAnimatedCards] = useState([]);

  const { history, language } = useContext(pageContext);

  const [historyContent] = history;

  console.log(historyContent);

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
      {historyContent ? (
        <div className="container_card_animation">
          <div className="card_animation_wrapper">
            <div className="card_animation_content">
              <h2>{historyContent[`title_${language}`]}</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: historyContent[`description_${language}`],
                }}></p>
            </div>
            <div className="card_content_wrapper">
              {historyContent.extra.map((cardItem, index) => (
                <div
                  className={`card_animation ${
                    animatedCards.includes(index) ? "animate" : ""
                  }`}
                  key={index}>
                  {cardItem.picture && <img src={cardItem.picture} alt="" />}
                  {/* <p>{cardItem.content}</p> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <Loader />
        </>
      )}
    </>
  );
};

export default CardAnimation;

import React, { useContext } from "react";
import About from "../about/About";
import AboutContent from "../aboutContent/AboutContent";
import CtabCarousel from "../cTabCarousel/CtabCarousel";
import Statis from "../layout/StatisLayout/Statis";
import CardAnimation from "../layout/cardAnimation/CardAnimation";

import direction from "../../assets/icons/direction.png";
import project from "../../assets/icons/project-management.png";
import user from "../../assets/icons/user.png";

import "./style/AboutMainContent.css";
import { pageContext } from "../../contexts/PageContext/PageContext";

const AboutMain = () => {
  // const maxValue = [
  //   { number: 6, img: direction },
  //   { number: 50, img: project },
  //   { number: 40, img: user },
  // ];

  const { stats, language, about } = useContext(pageContext);

  const [aboutContent] = about;

  return (
    <>
      <AboutContent /> {/* Компонент с содержимым About */}
      <Statis stats={stats} />
      <div className="about_content">
        <h4>{aboutContent[`subtitle_${language}`]}</h4>
        <p
          dangerouslySetInnerHTML={{
            __html: aboutContent[`description_${language}`],
          }}></p>
      </div>
      {/* Компонент статистики с передачей данных maxValue */}
      {/* <div className="stats_wrapper_about">
        <h3>Заголовок</h3>
        <p>Место для текста</p>
      </div> */}
    </>
  );
};

export default AboutMain;

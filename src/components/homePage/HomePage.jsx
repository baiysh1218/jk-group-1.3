import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { pageContext } from "../../contexts/PageContext/PageContext";

import "./style/HomePage.css";
import "../../adaptive.css";

import direction from "../../assets/icons/direction.png";
import project from "../../assets/icons/project-management.png";
import user from "../../assets/icons/user.png";

import About from "../about/About";
import Team from "../team/Team";
import InformationStatistic from "../layout/StatisLayout/Statis";
import FormConnect from "../formConnect/FormConnect";
import CtabCarousel from "../cTabCarousel/CtabCarousel";
import NewsInfo from "../newsInfo/NewsInfo";
import Loader from "../loader/Loader";
import Lines from "../layout/lines/Lines";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const [isLoader, setIsLoader] = useState(true);
  const navigate = useNavigate();
  const { main, stats, language, line } = useContext(pageContext);

  const { t } = useTranslation();

  useEffect(() => {
    // Получение основного контента и списка компаний
    setTimeout(() => {
      setIsLoader(false);
    }, 500);
  }, []);

  const [mainContentHomePage] = main;

  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <main className="main_home_page">
          <section className="section-one-box third-section-box">
            {mainContentHomePage?.main_video ? (
              <video autoPlay muted loop id="homepage-video">
                <source src={mainContentHomePage.main_video} type="video/mp4" />
              </video>
            ) : (
              <Loader />
            )}
            <div className="content-box">
              <div className="mainsection-content-box">
                <div className="mainsection-content">
                  <div className="mainsection-content-text">
                    {mainContentHomePage && (
                      <p>{mainContentHomePage[`description_${language}`]}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mainsection-options">
                {mainContentHomePage?.lines.map(item => (
                  <a
                    key={item.id}
                    className="mainsection-options-item"
                    onClick={() =>
                      navigate(`/team/section/${item[`title_${language}`]}`)
                    }>
                    {item[`title_${language}`]}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      fill="currentColor"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16">
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </section>
          <section>
            <InformationStatistic stats={stats} />
          </section>
          {/* <div className="sub_head_wrapper">
            <h2 className="sub_head">Учебный центр по стандартам TPS</h2>
          </div> */}
          {/* <Lines /> */}
          <CtabCarousel content={line} />
          <div className="sub_head_wrapper">
            <h2 className="sub_head">{t("navbar.news")}</h2>
          </div>
          <NewsInfo />

          <FormConnect />
        </main>
      )}
    </>
  );
};

export default HomePage;

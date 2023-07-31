import React from "react";
import { useContext } from "react";
import { pageContext } from "../../contexts/PageContext/PageContext";
import Loader from "../loader/Loader";

const AboutContent = () => {
  const { about, language } = useContext(pageContext);
  console.log(about);
  return (
    <>
      {about ? (
        <div className="about_container">
          <div className="about_wrapper_img">
            <div className="about_img_block">
              <h3>{about[0][`subtitle_${language}`]}</h3>
              {/* Заголовок подзаголовка */}
            </div>
            <div className="about_img_content">
              <p
                dangerouslySetInnerHTML={{
                  __html: about[0][`description_${language}`],
                }}></p>
              {/* Текстовое содержимое */}
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default AboutContent;

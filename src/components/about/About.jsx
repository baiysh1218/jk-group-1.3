import React, { useContext, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Импортируем компоненты Swiper из пакета swiper/react
import "swiper/css"; // Импортируем стили Swiper
import "swiper/css/pagination"; // Импортируем стили пагинации Swiper
import "./style/About.css"; // Импортируем пользовательские стили для компонента About
import { Mousewheel, Pagination } from "swiper"; // Импортируем модули Mousewheel и Pagination из пакета swiper
import { pageContext } from "../../contexts/PageContext/PageContext"; // Импортируем контекст страницы из файла PageContext.js
import Loader from "../loader/Loader";

const About = () => {
  const { companyContent, language } = useContext(pageContext); // Используем хук useContext для получения данных из контекста страницы

  const swiperRef = useRef(null); // Создаем ссылку useRef для получения доступа к Swiper

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper; // Получаем экземпляр Swiper из ссылки useRef
      if (swiperInstance && swiperInstance.pagination) {
        const paginationEl = swiperInstance.pagination.bullets; // Получаем элементы пагинации Swiper
        for (let i = 0; i < companyContent.length; i++) {
          paginationEl[i].innerText = companyContent[i]?.name; // Устанавливаем название компании в пагинацию Swiper
        }
      }
    }
  }, [companyContent]);

  return (
    <>
      {companyContent.length ? (
        {
          /* Компонент Swiper используется для создания вертикального слайдера */
        }(
          <Swiper
            ref={swiperRef} // Передаем ссылку useRef в компонент Swiper для получения доступа к его методам и свойствам
            direction="vertical" // Устанавливаем направление слайдера - вертикальное
            slidesPerView={1} // Устанавливаем количество видимых слайдов на одну страницу
            spaceBetween={30} // Устанавливаем промежуток между слайдами
            mousewheel={false} // Отключаем прокрутку слайдера с помощью колеса мыши
            scrollbar={false} // Отключаем скроллбар
            pagination={{
              clickable: true, // Делаем пагинацию Swiper кликабельной
            }}
            modules={[Mousewheel, Pagination]} // Подключаем модули Mousewheel и Pagination к Swiper
            className="mySwiper" // Устанавливаем пользовательский класс для стилизации Swiper
          >
            {companyContent.map(company => (
              <SwiperSlide key={company.id} className="swiper_slide">
                {/* Компонент SwiperSlide используется для создания слайда */}
                {company.mission.length > 0 && (
                  <div className="company-mission">
                    {company.mission.map(mission => (
                      <div key={mission.id} className="mission-item">
                        <div className="mission_content">
                          <h4>{mission[`title_${language}`]}</h4>
                          {/* Используем dangerouslySetInnerHTML для вставки HTML-кода в заголовок */}
                          <p
                            dangerouslySetInnerHTML={{
                              __html: mission.description,
                            }}></p>
                          {/* Используем dangerouslySetInnerHTML для вставки HTML-кода в абзац */}
                        </div>
                        <img src={mission.main_picture} alt={mission.title} />
                        {/* Вставляем изображение миссии с помощью тега img */}
                      </div>
                    ))}
                  </div>
                )}
                {company.mission.length === 0 && (
                  <div className="company-details">
                    <h3>{company.name} - Пока миссии нет </h3>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        )
      ) : (
        <Loader />
      )}
    </>
  );
};

export default About;

import React, { useContext, useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper";

import Loader from "../loader/Loader";
import "./style/Carousel.css";
import { pageContext } from "../../contexts/PageContext/PageContext";

const Carousel = ({ data }) => {
  const [objectData, setObjectData] = useState([]);

  const { language } = useContext(pageContext);

  const handleChckValid = () => {
    setObjectData(data?.extra_fields.filter(item => typeof item === "object"));
  };

  useEffect(() => {
    handleChckValid();
  }, [data]);

  console.log(objectData);

  console.log(objectData);

  return (
    <>
      {objectData ? (
        <Swiper
          direction="vertical" // Устанавливаем направление слайдера - вертикальное
          slidesPerView={1} // Устанавливаем количество видимых слайдов на одну страницу
          spaceBetween={30} // Устанавливаем промежуток между слайдами
          mousewheel={false} // Отключаем прокрутку слайдера с помощью колеса мыши
          scrollbar={false}
          navigation={true} // Включаем навигацию Swiper
          modules={[Navigation]} // Подключаем модуль Navigation к Swiper
          className="mySwiper" // Устанавливаем пользовательский класс для стилизации Swiper
          id="carousel_company_swiper" // Устанавливаем уникальный идентификатор для Swiper
        >
          {objectData?.map((itemCarousel, i) => (
            <SwiperSlide key={i}>
              <div className="carousel_wrapper_item">
                <div className="content_carousel">
                  <h2>{itemCarousel[`title_${language}`]}</h2> {/* Заголовок */}
                  <p
                    dangerouslySetInnerHTML={{
                      __html: itemCarousel[`sub_title_${language}`],
                    }}></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: itemCarousel[`description_${language}`],
                    }}></p>
                  {/* Описание с использованием dangerouslySetInnerHTML */}
                </div>
                <div className="carousel_img_wrapper">
                  <img
                    src={itemCarousel?.picture}
                    alt="Тут должна быт красивая картинка"
                  />
                  {/* Изображение */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Carousel;

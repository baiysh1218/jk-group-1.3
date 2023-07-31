import React, { useContext, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Pagination } from "swiper";
import "swiper/swiper.min.css";
import { pageContext } from "../../../contexts/PageContext/PageContext";

SwiperCore.use([Mousewheel, Pagination]);

const Lines = () => {
  const { companyContent, main, language } = useContext(pageContext);

  const swiperRef = useRef(null);

  const [mainContent] = main;

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      if (swiperInstance && swiperInstance.pagination) {
        const paginationEl = swiperInstance.pagination.bullets;
        for (let i = 0; i < companyContent.length; i++) {
          if (paginationEl[i]) {
            paginationEl[i].innerText = mainContent?.lines[i].title;
          }
        }
      }
    }
  }, [companyContent, mainContent]);

  return (
    <Swiper
      ref={swiperRef}
      direction="vertical"
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={false}
      scrollbar={false}
      pagination={{
        clickable: true,
      }}
      className="mySwiper">
      {mainContent?.lines.map(company => {
        return company.extra_fields.map(extraCarouselContent => (
          <SwiperSlide key={extraCarouselContent.id} className="swiper_slide">
            <div className="company-mission">
              <div className="mission-item">
                <div className="mission_content">
                  <h4
                    dangerouslySetInnerHTML={{
                      __html: extraCarouselContent[`sub_title_${language}`],
                    }}></h4>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: extraCarouselContent[`description_${language}`],
                    }}></p>
                </div>
                <img
                  src={extraCarouselContent.picture}
                  alt={extraCarouselContent.sub_title}
                />
              </div>
            </div>
          </SwiperSlide>
        ));
      })}
    </Swiper>
  );
};

export default Lines;

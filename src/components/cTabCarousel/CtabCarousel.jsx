import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "./style/cTabCarousel.css";
import SwiperCore, { Navigation } from "swiper/core";
import { pageContext } from "../../contexts/PageContext/PageContext";
import Loader from "../loader/Loader";

SwiperCore.use([Navigation]);

const CtabCarousel = ({ marker }) => {
  const tabsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const { line, language } = useContext(pageContext);

  useEffect(() => {
    const tabNavigationLinks = Array.from(
      tabsRef.current.querySelectorAll(".c-tabs-nav__link")
    );
    const tabContentContainers = Array.from(
      tabsRef.current.querySelectorAll(".c-tab")
    );

    const goToTab = index => {
      if (
        index >= 0 &&
        index !== activeIndex &&
        index < tabNavigationLinks.length
      ) {
        tabNavigationLinks[activeIndex].classList.remove("is-active");
        tabNavigationLinks[index].classList.add("is-active");

        tabContentContainers[activeIndex].classList.remove("is-active");
        tabContentContainers[index].classList.add("is-active");

        if (marker) {
          setMarker(tabNavigationLinks[index]);
        }

        setActiveIndex(index);
      }
    };

    const clickHandlerSetup = (link, index) => {
      link.addEventListener("click", e => {
        e.preventDefault();
        goToTab(index);
      });
    };

    const setMarker = element => {
      if (marker) {
        marker.style.left = `${element.offsetLeft}px`;
        marker.style.width = `${element.offsetWidth}px`;
      }
    };

    tabNavigationLinks.forEach((link, index) => {
      clickHandlerSetup(link, index);
    });

    if (marker) {
      setMarker(tabNavigationLinks[activeIndex]);
    }
  }, [activeIndex, marker]);

  const handleSwiperSlideChange = () => {
    setIsLoading(true);
  };

  const handleSwiperSlideTransitionEnd = () => {
    setIsLoading(false);
  };

  return (
    <section id="page">
      <div id="tabs" className="c-tabs" ref={tabsRef}>
        <div className="c-tabs-nav">
          {line?.map((text, index) => (
            <a
              href="#"
              className={`c-tabs-nav__link ${
                index === activeIndex ? "is-active" : ""
              }`}
              key={index}>
              {text[`title_${language}`]}
            </a>
          ))}
          <div className="c-tab-nav-marker"></div>
        </div>

        {line?.map((item, index) => {
          if (typeof item === "object") {
            return (
              <div
                className={`c-tab ${index === activeIndex ? "is-active" : ""}`}
                key={index}>
                <Swiper
                  navigation={true}
                  className="mySwiper"
                  onSlideChange={handleSwiperSlideChange}
                  onTransitionEnd={handleSwiperSlideTransitionEnd}>
                  {item.extra_fields.map((content, contentIndex) => {
                    if (typeof content === "object") {
                      return (
                        <SwiperSlide key={content.id}>
                          <div className="swiper_content">
                            <img
                              src={content.picture}
                              alt={content.description}
                            />
                            <h3
                              dangerouslySetInnerHTML={{
                                __html: content[`sub_title_${language}`],
                              }}></h3>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: content.description,
                              }}></p>
                          </div>
                        </SwiperSlide>
                      );
                    }
                    return null;
                  })}
                </Swiper>
                {isLoading && <Loader />}
              </div>
            );
          }
          return null;
        })}
      </div>
    </section>
  );
};

export default CtabCarousel;

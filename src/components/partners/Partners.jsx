import React, { useContext, useEffect, useRef, useState } from "react";
import { pageContext } from "../../contexts/PageContext/PageContext";
import "./style/Partners.css";

const Partners = ({ marker }) => {
  const tabsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { teamAll, getPartners, partners, partnersInfo } =
    useContext(pageContext);

  useEffect(() => {
    getPartners();
  }, []);

  console.log(partners);

  const filteredPartners = () => {
    const result = [...new Set(partners)];
    return result;
  };

  console.log(filteredPartners());

  useEffect(() => {
    const tabNavigationLinks = Array.from(
      tabsRef.current.querySelectorAll(".custom-partners-tabs-nav__link")
    );
    const tabContentContainers = Array.from(
      tabsRef.current.querySelectorAll(".custom-partners-tab")
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
      link.addEventListener("mousemove", e => {
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

  return (
    <>
      <div className="custom-partners-wrapper-head">
        <h1>Custom Подзаголовок</h1>
        <p>Custom Место для текста</p>
      </div>
      <section className="custom-partners-page" id="custom-page">
        <div className="custom-partners-tabs" ref={tabsRef}>
          <div className="custom-partners-tabs-nav">
            {teamAll.map((team, index) => (
              <a
                key={team.id}
                href="#"
                className={`custom-partners-tabs-nav__link ${
                  index === activeIndex ? "is-active" : ""
                } `}>
                {team.line}
              </a>
            ))}
            <div className="custom-partners-tab-nav-marker"></div>
          </div>
          {teamAll?.map((employee, index) => (
            <div
              key={employee.id}
              className={`custom-partners-tab ${
                index === activeIndex ? "is-active" : ""
              }`}>
              <p>{employee.department}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Partners;

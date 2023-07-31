import React, { useEffect, useRef, useState } from "react";
import "./style/Team.css";

function Team({ marker }) {
  const tabsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const tabNavigationLinks =
      tabsRef.current.querySelectorAll(".c-tabs-nav__link");
    const tabContentContainers = tabsRef.current.querySelectorAll(".c-tab");

    const clickHandlerSetup = (link, index) => {
      link.addEventListener("click", e => {
        e.preventDefault();
        goToTab(index);
      });
    };

    const goToTab = index => {
      if (
        index >= 0 &&
        index !== activeIndex &&
        index <= tabNavigationLinks.length
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

    const createNavMarker = tabLinks => {
      const marker = document.createElement("div");
      marker.classList.add("c-tab-nav-marker");
      tabLinks.appendChild(marker);
      return marker;
    };

    const setMarker = element => {
      if (marker) {
        marker.style.left = element.offsetLeft + "px";
        marker.style.width = element.offsetWidth + "px";
      }
    };

    for (let i = 0; i < tabNavigationLinks.length; i++) {
      const link = tabNavigationLinks[i];
      clickHandlerSetup(link, i);
    }

    if (marker) {
      setMarker(tabNavigationLinks[activeIndex]);
    }
  }, [activeIndex, marker]);

  return (
    <section id="page">
      <div id="tabs" className="c-tabs" ref={tabsRef}>
        <div className="c-tabs-nav">
          <a href="#" className="c-tabs-nav__link is-active">
            JK Logistics
          </a>
          <a href="#" className="c-tabs-nav__link">
            JK Engineering
          </a>
          <a href="#" className="c-tabs-nav__link">
            JK Construction
          </a>
          <a href="#" className="c-tabs-nav__link">
            JK MetalProf
          </a>
          <div className="c-tab-nav-marker"></div>
        </div>

        <div className="c-tab is-active">
          <div className="c-tab__content">
            <h2>JK Logistics</h2>
            <div className="c-tab_content-img">
              <div>
                <img
                  src="https://www.nikken.co.jp/en/about/people/p4iusj0000000ub3-img/atsushi_omatsu_tmb.jpg"
                  alt=""
                />
                <p>Atsushi Omatsu</p>
              </div>
              <div>
                <img
                  src="https://www.nikken.co.jp/en/about/people/p4iusj0000000ub3-img/atsushi_omatsu_tmb.jpg"
                  alt=""
                />
                <p>Atsushi Omatsu</p>
              </div>
              <div>
                <img
                  src="https://www.nikken.co.jp/en/about/people/p4iusj0000000ub3-img/atsushi_omatsu_tmb.jpg"
                  alt=""
                />
                <p>Atsushi Omatsu</p>
              </div>
              <div>
                <img
                  src="https://www.nikken.co.jp/en/about/people/p4iusj0000000ub3-img/atsushi_omatsu_tmb.jpg"
                  alt=""
                />
                <p>Atsushi Omatsu</p>
              </div>
            </div>
          </div>
        </div>

        <div className="c-tab">
          <div className="c-tab__content">
            <h2> JK Engineering</h2>
            <div className="c-tab_content-img">
              <div>
                <img
                  src="https://www.nikken.co.jp/en/about/people/p4iusj0000000ub3-img/atsushi_omatsu_tmb.jpg"
                  alt=""
                />
                <p>Atsushi Omatsu</p>
              </div>
              <div>
                <img
                  src="https://www.nikken.co.jp/en/about/people/p4iusj0000000ub3-img/atsushi_omatsu_tmb.jpg"
                  alt=""
                />
                <p>Atsushi Omatsu</p>
              </div>
              <div>
                <img
                  src="https://www.nikken.co.jp/en/about/people/p4iusj0000000ub3-img/atsushi_omatsu_tmb.jpg"
                  alt=""
                />
                <p>Atsushi Omatsu</p>
              </div>
              <div>
                <img
                  src="https://www.nikken.co.jp/en/about/people/p4iusj0000000ub3-img/atsushi_omatsu_tmb.jpg"
                  alt=""
                />
                <p>Atsushi Omatsu</p>
              </div>
            </div>
          </div>
        </div>

        <div className="c-tab">
          <div className="c-tab__content">
            <h2>JK Construction</h2>
            <div className="c-tab_content-img">
              <div>
                <img
                  src="https://www.nikken.co.jp/en/about/people/p4iusj0000000ub3-img/atsushi_omatsu_tmb.jpg"
                  alt=""
                />
                <p>Atsushi Omatsu</p>
              </div>
              <div>
                <img
                  src="https://www.nikken.co.jp/en/about/people/p4iusj0000000ub3-img/atsushi_omatsu_tmb.jpg"
                  alt=""
                />
                <p>Atsushi Omatsu</p>
              </div>
              <div>
                <img
                  src="https://www.nikken.co.jp/en/about/people/p4iusj0000000ub3-img/atsushi_omatsu_tmb.jpg"
                  alt=""
                />
                <p>Atsushi Omatsu</p>
              </div>
              <div>
                <img
                  src="https://www.nikken.co.jp/en/about/people/p4iusj0000000ub3-img/atsushi_omatsu_tmb.jpg"
                  alt=""
                />
                <p>Atsushi Omatsu</p>
              </div>
            </div>
          </div>
        </div>

        <div className="c-tab">
          <div className="c-tab__content">
            <h2>JK MetalProf</h2>
            <div className="c-tab_content-img">
              <div>
                <img
                  src="https://www.nikken.co.jp/en/about/people/p4iusj0000000ub3-img/atsushi_omatsu_tmb.jpg"
                  alt=""
                />
                <p>Atsushi Omatsu</p>
              </div>
              <div>
                <img
                  src="https://www.nikken.co.jp/en/about/people/p4iusj0000000ub3-img/atsushi_omatsu_tmb.jpg"
                  alt=""
                />
                <p>Atsushi Omatsu</p>
              </div>
              <div>
                <img
                  src="https://www.nikken.co.jp/en/about/people/p4iusj0000000ub3-img/atsushi_omatsu_tmb.jpg"
                  alt=""
                />
                <p>Atsushi Omatsu</p>
              </div>
              <div>
                <img
                  src="https://www.nikken.co.jp/en/about/people/p4iusj0000000ub3-img/atsushi_omatsu_tmb.jpg"
                  alt=""
                />
                <p>Atsushi Omatsu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;

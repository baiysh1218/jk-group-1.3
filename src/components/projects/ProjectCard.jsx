import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { pageContext } from "../../contexts/PageContext/PageContext";

const ProjectCard = ({ item }) => {
  const { getOneProduct, onePos, language } = useContext(pageContext);

  useEffect(() => {
    getOneProduct(item.id);
  }, []);

  const navigate = useNavigate();
  return (
    <div className="featured-projects-card card">
      <img src={item.image} alt="" />

      <div className="featured-projects-title-btn">
        <a
          href="#"
          dangerouslySetInnerHTML={{
            __html: item[`content_${language}`],
          }}></a>
        <button onClick={() => navigate(`/project/details/${item.id}`)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

import React, { useContext, useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
import "./style/Projects.css";

import { pageContext } from "../../contexts/PageContext/PageContext";
import ProjectCard from "./ProjectCard";

const ProductsList = () => {
  const { getPosts, posts, filteredPosts, category } = useContext(pageContext);
  const [currentCategory, setCurrentCategory] = useState("");

  useEffect(() => {
    getPosts();
    setCurrentCategory(getCurrentCategoryFromUrl());
  }, []);

  const getCurrentCategoryFromUrl = () => {
    const queryParams = window.location.search.substr(1);
    const queryParamsArray = queryParams.split("&");
    for (let i = 0; i < queryParamsArray.length; i++) {
      const [key, value] = queryParamsArray[i].split("=");
      if (key === "category") {
        return value;
      }
    }
    return "";
  };

  const handleCategoryClick = category => {
    setCurrentCategory(category);
    const queryParams = `category=${encodeURIComponent(category)}`;
    window.history.pushState(null, null, `?${queryParams}`);
    filteredPosts(category);
  };

  return (
    <div style={{ paddingTop: "40px" }} className="projects_main_wrapper">
      <div className="filterd_button">
        <button onClick={getPosts}>Все</button>
        {category?.map(item => (
          <React.Fragment key={item.category}>
            <div className="line"></div>
            <button
              onClick={() => handleCategoryClick(item.category)}
              className={currentCategory === item.category ? "active" : ""}>
              {item.category}
            </button>
          </React.Fragment>
        ))}
      </div>
      <div className="products_wrapper">
        {posts?.map(item => (
          <ProjectCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;

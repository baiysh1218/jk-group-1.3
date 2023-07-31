import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { pageContext } from "../../../contexts/PageContext/PageContext";

const DropdownContent = ({ content, toggleDropdown, index }) => {
  const navigate = useNavigate();
  const { main, handleFiltered, language, line } = useContext(pageContext);

  console.log(line);

  // Обработчик клика на выпадающем списке
  const handleClickDropDown = item => {
    navigate(`${item.path}/${item.title}`);
    toggleDropdown(index);
  };

  console.log("DROPDOWN CONTENT", content);

  // Обработчик клика на пункте навигационного меню
  const handleClickNavItem = item => {
    navigate(`${item.path}/${item.const}`);
    toggleDropdown(index);
  };

  // Обработчик клика на элементе выпадающего списка с фильтрацией
  const handleClickDropDownElem = item => {
    handleFiltered(item);
    handleClickDropDown(item);
    toggleDropdown(index);
  };

  // Обработчик клика на пункте навигационного меню
  const handleNav = item => {
    handleClickNavItem(item);
    toggleDropdown(index);
  };

  return (
    <div className={`drop_down_main_wrapper`}>
      <div className={`dropdown-content`}>
        <div className="dropdown_wrapper">
          <div className="dropdown_wrapper_content">
            <div className="drop_down_content_item_h3">
              {/* Отображение заголовков выпадающего списка */}
              {content.contentTitle.map((item, itemIndex) => (
                <h3
                  onClick={() => handleClickDropDownElem(item)}
                  key={itemIndex}>
                  {item[`title`]}
                </h3>
              ))}
            </div>
          </div>
          <div className="dropdown-content_p">
            {/* Отображение элементов выпадающего списка */}
            {content.contentItem.map((itemArray, index) => (
              <div className="drop_down_content_wrapper_p" key={index}>
                {itemArray.map((item, itemIndex) => (
                  <p onClick={() => handleNav(item)} key={itemIndex}>
                    {item.item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownContent;

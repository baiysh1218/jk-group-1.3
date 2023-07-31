import React from "react";
import "./style/DropDownCard.css";

const DropDownCard = ({ employee, isClosing }) => {
  return (
    <div
      className={`dropdown_content_team_card ${
        isClosing ? "closing" : "open"
      }`}>
      <div className="dropdown_head_item_card">
        <h3>Professional Experience</h3>
      </div>
      <div className="dropdown_content_item_card">
        <ul>
          <li dangerouslySetInnerHTML={{ __html: employee.experience }}></li>
        </ul>
      </div>
    </div>
  );
};

export default DropDownCard;

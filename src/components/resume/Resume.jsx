import React, { useState } from "react";
import html2canvas from "html2canvas";
import "./style/Resume.css";
import { useContext } from "react";
import { pageContext } from "../../contexts/PageContext/PageContext";

const Resume = () => {
  const [isDragging, setIsDragging] = useState(false);
  const { upload } = useContext(pageContext);

  const handleDragEnter = event => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = event => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = event => {
    event.preventDefault();
  };

  const handleDrop = async event => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
  };

  return (
    <>
      <div className="content_resume_wrapper">
        <div className="resume_content">
          <h1>Подзаголовок</h1>
          <p>Текст</p>
        </div>
        <div
          className={`resume_upload ${isDragging ? "dragging" : "load"}`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}>
          Перетащите сюда ваш резюме
        </div>
      </div>
    </>
  );
};

export default Resume;

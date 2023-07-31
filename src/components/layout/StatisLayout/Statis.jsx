import React, { useEffect, useState, useRef } from "react";
import logo from "../../../assets/icons/JKGroup_black_nav_logo.png";
import icondiraction from "../../../assets/icons/direction.png";
import "./style/Statis.css";

// MUI ICONS
import ForkRightIcon from "@mui/icons-material/ForkRight";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import Loader from "../../loader/Loader";
import { useTranslation } from "react-i18next";

const Statis = ({ stats }) => {
  const [counts, setCounts] = useState();

  const statisticRef = useRef(null);

  const { t } = useTranslation();

  return (
    <div ref={statisticRef} className="stats-number_wrapper">
      {stats ? (
        <>
          <div className="stats_content_wrapper">
            <img src={logo} alt="Logo stats" />
            <p>{t("statistics.sub_title")}</p>
          </div>
          <div className="stats_number_wrapper_main">
            <p className="stats-number">
              <AccountTreeIcon sx={{ fontSize: "40px", marginRight: "20px" }} />
              <span>{stats["Projects"]}</span>
            </p>
            <p className="stats-number">
              <ForkRightIcon sx={{ fontSize: "40px", marginRight: "20px" }} />
              <span>{stats["Lines of Bussiness"]}</span>
            </p>
            <p className="stats-number">
              <CardTravelIcon sx={{ fontSize: "40px", marginRight: "20px" }} />
              <span>{stats["Team members"]}</span>
            </p>
          </div>
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
    </div>
  );
};

export default Statis;

import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/about/About";
import AboutMain from "../components/aboutMainContent/AboutMain";
import Career from "../components/career/Career";
import Company from "../components/company/Company";
import History from "../components/history/History";
import HomePage from "../components/homePage/HomePage";
import Loader from "../components/loader/Loader";
import MissionValues from "../components/missionValues/MissionValues";
import NewsInfo from "../components/newsInfo/NewsInfo";

import PageNotFound from "../components/pageNotFound/PageNotFound";
import Partners from "../components/partners/Partners";
import ProjectDetails from "../components/projects/ProjectDetails";
import ProjectsList from "../components/projects/ProjectsList";
import Resume from "../components/resume/Resume";
import Section from "../components/section/Section";

import Team from "../components/team/Team";
import TeamPage from "../components/teamPage/TeamPage";
import TeamStructure from "../components/teamStructure/TeamStructure";
import Vacansies from "../components/vacancies/Vacansies";

const MainRoutes = () => {
  return (
    <Routes>
      {/* Define routes and their corresponding components */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about/:id" element={<AboutMain />} />
      <Route path="/products" element={<ProjectsList />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/about/history/:name" element={<History />} />
      <Route path="/about/mission-values/:name" element={<MissionValues />} />
      <Route path="/about/partners/:id" element={<Partners />} />
      <Route path="/project/section/:id" element={<Section />} />
      <Route path="/career" element={<Career />} />
      <Route path="/vacansies" element={<Vacansies />} />
      <Route path="/team/structure/:id" element={<TeamStructure />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/news" element={<NewsInfo />} />
      <Route path="/team/section/:id" element={<Section />} />
      <Route path="/project/details/:id" element={<ProjectDetails />} />
      {/* The following route matches any other path */}
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;

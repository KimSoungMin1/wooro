import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import { Main, Contact, Service, Team, AppPage } from "domain";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/service" element={<Service />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/page" element={<AppPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;

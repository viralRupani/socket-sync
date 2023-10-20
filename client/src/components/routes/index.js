import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { IndexPage } from "../indexPage";
import { NotIndexPage } from "../not_index_page";

const AppRoutes = () => {
  const navigator = useNavigate();
  function receiveNavUrl(value) {
    navigator(value);
  }
  return (
    <Routes>
      <Route path="/" element={<IndexPage receiveNavUrl={receiveNavUrl} />} />
      <Route
        path="not_index_page"
        element={<NotIndexPage receiveNavUrl={receiveNavUrl} />}
      />
    </Routes>
  );
};

export default AppRoutes;

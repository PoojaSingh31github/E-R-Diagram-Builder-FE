import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Home from "./Home";
import AboutPage from "./About";
import WhiteSpace from "../components/WhiteSpace/WhiteSpace";
import Template from "../components/Template/Template";
import Schema from "../components/schema/Schema";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route
          path="/whiteSpace/path"
          element={
            // <PrivateRoute>
              <WhiteSpace />
            // </PrivateRoute>
          }
        />
        <Route
          path="/template/path"
          element={
            // <PrivateRoute>
              <Template />
            // </PrivateRoute>
          }
        />
        <Route
          path="/schema/path"
          element={
            // <PrivateRoute>
              <Schema />
            // </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;

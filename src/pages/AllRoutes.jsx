import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import AboutPage from "./About";
import WhiteSpace from "../components/WhiteSpace/WhiteSpace";
import Template from "../components/Template/Template";
import Schema from "../components/schema/Schema";
import Flow from "../components/Template/SchemaTemplate";
import TeamAbout from "./TeamAbout";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/teamAbout" element={<TeamAbout/>}/>
        <Route path="/temp" element={<Flow/>}/>
        <Route
          path="/whiteSpace/path"
          element={
            // <PrivateRoute>
              <WhiteSpace />
            // </PrivateRoute>
          }
        />
        <Route
          path="/whiteSpace/template/path"
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
        <Route
          path="/schema/template/path"
          element={
            // <PrivateRoute>
              <Flow />
            // </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;

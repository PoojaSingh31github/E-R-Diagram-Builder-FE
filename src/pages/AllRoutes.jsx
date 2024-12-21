import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutPage from "./About";
import WhiteSpace from "../components/WhiteSpace/WhiteSpace";
import Template from "../components/Template/Template";
import Schema from "../components/schema/Schema";
import Flow from "../components/Template/SchemaTemplate";
import TeamAbout from "./TeamAbout";
import PrivateRoute from "../utils/PrivateRoute/PrivateRoute";
import Login from "../components/Auth/Login"
import Signup from "../components/Auth/Signup"

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/teamAbout" element={<TeamAbout />} />
        <Route path="/temp" element={<Flow />} />
        <Route
          path="/whiteSpace/path"
          element={
            <PrivateRoute>
            <WhiteSpace />
             </PrivateRoute>
          }
        />
        <Route
          path="/whiteSpace/template/path"
          element={
           <PrivateRoute>
            <Template />
           </PrivateRoute>
          }
        />
        <Route
          path="/schema/path"
          element={
           <PrivateRoute>
            <Schema />
           </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;

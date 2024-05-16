import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage"

export default function routes() {
   return (
   <Routes>
        <Route exact path="/" Component={LandingPage}/>
        <Route path="/login" Component={LoginPage} />
        <Route path="*" Component={LandingPage} />
    </Routes>

   )

} 
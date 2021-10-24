import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import Stock from "./components/Stock"
import { stepIconClasses } from "@mui/material";






function App() {

  return (
    <Router>
      
      <Stock></Stock>
      <Routes />
    </Router>
  );
}

export default App;


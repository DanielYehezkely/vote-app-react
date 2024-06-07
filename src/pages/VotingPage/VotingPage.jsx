import React from "react";

import NavBar from "../../components/NavBar/NavBar";

import './VotingPage.css'
import Candidates from "../../components/Candidates/Candidates";

const VotingPage = () => {
  return (
<div className="VotingPage page">
  <NavBar/>
  <Candidates/>
</div>
  ) 
};

export default VotingPage;

import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Candidates from "../../components/Candidates/Candidates";
import Loader from '../../components/Loader/Loader'
import { useVoting } from "../../context/VotingContext";

import './VotingPage.css'

const VotingPage = () => {

  const { isLoadingCandidates } = useVoting();

  return (
    <div className=" page VotingPage">
      <NavBar />
      {isLoadingCandidates ? <Loader /> : <Candidates />}
    </div>
  )
};

export default VotingPage;

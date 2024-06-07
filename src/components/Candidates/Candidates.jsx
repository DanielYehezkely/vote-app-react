import React from "react";

import { CANDIDATES_DATA } from "../../models/candidates";
import CandidateCard from "./CandidateCard/CandidateCard";

import './Candidates.css'

const Candidates = () => {
  return (
    <>
    <h1>Vote For the best Anime </h1>
  <main className="Candidates">
      {CANDIDATES_DATA.map(candidate => 
      <CandidateCard name={candidate.name} image={candidate.image} key={candidate.id}/>
      )}
  </main>
    </>
  );
};

export default Candidates;

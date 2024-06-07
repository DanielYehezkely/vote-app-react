import React from "react";


import './CandidateCard.css'

const CandidateCard = ({name,image}) => {
  return (
    <div className="CandidateCard">
      <img src={image} alt={name} className="candidate-image" />
      <h2 className="candidate-name">{name}</h2>
      <button className="btn vote-button" >Vote</button>
    </div>
  )
};

export default CandidateCard;

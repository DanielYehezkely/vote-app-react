
import React from "react";
import './CandidateCard.css';

const CandidateCard = ({ name, image, votes, showingConfirmation, handleVote, handleConfirmVote, handleCancelVote, handleChangeVote, userVotedCandidateId, id }) => {
  return (
    <div className="CandidateCard">
      <span className="vote-display">Votes: {votes}</span>
      <img src={image} alt={name} className="candidate-image" />
      <h2 className="candidate-name">{name}</h2>
      <div className="vote-buttons-container">
        {showingConfirmation ? (
          <>
            <p>Are you sure?</p>
            <button className="btn confirm-button" onClick={handleConfirmVote}>Yes</button>
            <button className="btn cancel-button" onClick={handleCancelVote}>No</button>
          </>
        ) : userVotedCandidateId === id ? (
          <button className="btn change-vote-button" onClick={handleChangeVote}>Change your vote</button>
        ) : (
          <button className="btn vote-button" onClick={handleVote}>Vote</button>
        )}
      </div>
    </div>
  );
};

export default CandidateCard;

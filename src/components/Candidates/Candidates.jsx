import React from "react";

import CandidateCard from "./CandidateCard/CandidateCard";
import { useVoting } from "../../context/VotingContext";
import { useCheckUser } from "../../context/CheckUserContext";

import './Candidates.css';

const Candidates = () => {
  const { candidates, handleVoteClick, handleConfirmVote, handleCancelVote, handleChangeVote, error } = useVoting();
  const { userVotedCandidateId } = useCheckUser();

  return (
    <>
      <h1>Vote For the Best Anime</h1>
      <main className="Candidates">
        {error ? (
          <div className="global-error-message">
            <p>Oops! Something went wrong: {error}</p>
          </div>
        ) : (
          candidates.map(candidate => (
            <CandidateCard
              key={candidate.id}
              id={candidate.id}
              name={candidate.name}
              image={candidate.image}
              votes={candidate.votes}
              showingConfirmation={candidate.showingConfirmation}
              handleVote={() => handleVoteClick(candidate.id)}
              handleConfirmVote={() => handleConfirmVote(candidate.id)}
              handleCancelVote={handleCancelVote}
              handleChangeVote={handleChangeVote}
              userVotedCandidateId={userVotedCandidateId}
            />
          ))
        )}
      </main>
    </>
  );
};

export default Candidates;
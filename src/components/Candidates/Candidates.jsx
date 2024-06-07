// Candidates.js
import React from "react";
import CandidateCard from "./CandidateCard/CandidateCard";
import { useVoting } from "../../context/VotingContext";
import { useCheckUser } from "../../context/CheckUserContext";
import './Candidates.css';

const Candidates = () => {
  const { candidates, handleVoteClick, handleConfirmVote, handleCancelVote, handleChangeVote } = useVoting();
  const { userVotedCandidateId } = useCheckUser(); // Get the user's voted candidate

  return (
    <>
      <h1>Vote For the Best Anime</h1>
      <main className="Candidates">
        {candidates.map(candidate => (
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
            userVotedCandidateId={userVotedCandidateId} // Pass the user's voted candidate ID
          />
        ))}
      </main>
    </>
  );
};

export default Candidates;

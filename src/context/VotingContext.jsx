import React, { createContext, useState, useContext, useEffect } from 'react';

import { VOTES_URL, USERS_URL } from '../models/api';
import { useCheckUser } from './CheckUserContext';  

import axios from 'axios';

const VotingContext = createContext();

export const VotingProvider = ({ children }) => {
  const [candidates, setCandidates] = useState([]);
  const { loggedUserId, userVoted, setUserVoted, userVotedCandidateId, setUserVotedCandidateId } = useCheckUser(); 

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get(`${VOTES_URL}`);
        const candidatesData = response.data.map(candidate => ({
          ...candidate,
          showingConfirmation: false
        }));
        setCandidates(candidatesData);
      } catch (error) {
        console.error('Error fetching candidates from MockAPI:', error);
      }
    };

    fetchCandidates();
  }, []);

  const handleVoteClick = (id) => {
    if (!userVoted) {
      setCandidates(prevCandidates =>
        prevCandidates.map(candidate =>
          candidate.id === id
            ? { ...candidate, showingConfirmation: true }
            : { ...candidate, showingConfirmation: false }
        )
      );
    }
  };

  const handleConfirmVote = async (id) => {
    if (!userVoted) {
      setCandidates(prevCandidates =>
        prevCandidates.map(candidate =>
          candidate.id === id
            ? {
              ...candidate,
              votes: candidate.votes + 1,
              showingConfirmation: false
            }
            : candidate
        )
      );

      try {
        await axios.put(`${VOTES_URL}/${id}`, {
          votes: candidates.find(candidate => candidate.id === id).votes + 1
        });

        // Update the user's vote status in MockAPI
        await axios.put(`${USERS_URL}/${loggedUserId}`, {
          vote: true,
          votedCandidateId: id // Save the candidate the user voted for
        });

        setUserVoted(true); // Prevent further voting
        setUserVotedCandidateId(id); // Track the candidate the user voted for
      } catch (error) {
        console.error('Error updating vote in MockAPI:', error);
      }
    }
  };

  const handleCancelVote = () => {
    setCandidates(prevCandidates =>
      prevCandidates.map(candidate => ({
        ...candidate,
        showingConfirmation: false
      }))
    );
  };

  const handleChangeVote = async () => {
    if (userVotedCandidateId !== null) {
      setCandidates(prevCandidates =>
        prevCandidates.map(candidate =>
          candidate.id === userVotedCandidateId
            ? { ...candidate, votes: candidate.votes - 1 }
            : candidate
        )
      );

      try {
        await axios.put(`${VOTES_URL}/${userVotedCandidateId}`, {
          votes: candidates.find(candidate => candidate.id === userVotedCandidateId).votes - 1
        });

        // Allow the user to vote again by resetting their vote status in MockAPI
        await axios.put(`${USERS_URL}/${loggedUserId}`, {
          vote: false,
          votedCandidateId: null // Clear the candidate they voted for
        });

        setUserVoted(false);
        setUserVotedCandidateId(null);
      } catch (error) {
        console.error('Error updating vote in MockAPI:', error);
      }
    }
  };

  return (
    <VotingContext.Provider
      value={{
        candidates,
        handleVoteClick,
        handleConfirmVote,
        handleCancelVote,
        handleChangeVote
      }}
    >
      {children}
    </VotingContext.Provider>
  );
};

export const useVoting = () => {
  return useContext(VotingContext);
};

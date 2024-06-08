import React from "react";

import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

import Loader from "../../Loader/Loader";
import { useVoting } from "../../../context/VotingContext";

import './Chart.css';

const Chart = () => {
  const { candidates, isLoadingCandidates } = useVoting();

  if (!candidates || candidates.length === 0) return <p>No data available</p>;
  const totalVotes = candidates.reduce((sum, candidate) => sum + candidate.votes, 0);

  const data = {
    labels: candidates.map(candidate => candidate.name),
    datasets: [
      {
        label: 'Votes',
        data: candidates.map(candidate => candidate.votes),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 0, 55, 1)',
          'rgba(0, 153, 255, 1)',
          'rgba(248, 178, 0, 1)',
          'rgba(0, 170, 170, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <>
      {isLoadingCandidates ? <Loader /> :
        (<section className='chart-section'>
          <h2>Candidate Votes </h2>
          <h3>Total Votes: {totalVotes}</h3>
          <Bar data={data} />
        </section>)}
    </>
  );
};

export default Chart;
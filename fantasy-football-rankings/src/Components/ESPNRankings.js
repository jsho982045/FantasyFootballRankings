import React, { useEffect, useState } from 'react';

const ESPNRankings = () => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    fetch('/espn_rankings.json')
      .then(response => response.json())
      .then(data => setRankings(data))
      .catch(error => console.error('Error fetching the ESPN rankings:', error));
  }, []);

  return (
    <div>
      <h2>ESPN Fantasy Football Rankings</h2>
      <table className="rankings-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player Name</th>
            <th>Position</th>
            <th>Team</th>
            <th>Price</th>
            <th>Bye Week</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map(player => (
            <tr key={player.rank}>
              <td>{player.rank}</td>
              <td>{player.player_name}</td>
              <td>{player.position}</td>
              <td>{player.team}</td>
              <td>${player.price}</td>
              <td>{player.bye_week}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ESPNRankings;

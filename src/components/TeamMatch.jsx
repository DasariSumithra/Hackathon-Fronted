import React, { useState } from "react";
import axios from "axios";

const TeamMatch = () => {
  const [preferences, setPreferences] = useState("");
  const [matches, setMatches] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/team/match`,
        { preferences }
      );
      setMatches(response.data.matches);
    } catch (error) {
      alert("Failed to fetch matches");
    }
  };

  return (
    <div className="team-match-container">
      <h1>Team Match</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
          placeholder="Enter your preferences"
          required
        />
        <button type="submit" className="btn">Find Matches</button>
      </form>
      <div>
        {matches.map((match, index) => (
          <div key={index} className="team-card">
            <h4>{match.name}</h4>
            <p>{match.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMatch;

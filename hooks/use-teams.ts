"use client";

import { useState } from "react";

export function useTeams(playersPerTeam: number) {
  const [players, setPlayers] = useState<string[]>([]);
  const [teams, setTeams] = useState<string[][]>([]);
  const [nextPlayers, setNextPlayers] = useState<string[]>([]);

  const addPlayer = (player: string) => {
    setPlayers(prev => [...prev, player]);
  };

  const removePlayer = (index: number) => {
    setPlayers(prev => prev.filter((_, i) => i !== index));
  };

  const addPlayers = (newPlayers: string[]) => {
    setPlayers(prev => [...prev, ...newPlayers]);
  };

  const shuffleTeams = () => {
    if (players.length < 2) return;

    const shuffledPlayers = [...players].sort(() => Math.random() - 0.5);
    const totalTeams = Math.ceil(shuffledPlayers.length / playersPerTeam);
    const newTeams: string[][] = Array(totalTeams).fill([]).map(() => []);
    
    // Distribute players sequentially across teams
    shuffledPlayers.forEach((player, index) => {
      const teamIndex = Math.floor(index / playersPerTeam);
      newTeams[teamIndex] = [...newTeams[teamIndex], player];
    });
    
    setTeams(newTeams);
    setNextPlayers([]);
  };

  return {
    players,
    addPlayer,
    removePlayer,
    addPlayers,
    teams,
    nextPlayers,
    shuffleTeams,
  };
}
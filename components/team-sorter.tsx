"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UserPlus } from "lucide-react";
import { processPlayersList } from "@/lib/process-players";
import { PlayersPerTeamSelector } from "./players-per-team-selector";

interface TeamSorterProps {
  onAddPlayers: (players: string[]) => void;
  playersPerTeam: number;
  setPlayersPerTeam: (value: number) => void;
}

export function TeamSorter({
  onAddPlayers,
  playersPerTeam,
  setPlayersPerTeam,
}: TeamSorterProps) {
  const [playersList, setPlayersList] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (playersList.trim()) {
      const players = processPlayersList(playersList);
      onAddPlayers(players);
      setPlayersList("");
    }
  };

  const handlePaste = async () => {
    try {
      const permission = await navigator.permissions.query({
        name: 'clipboard-read' as PermissionName
      });
      
      if (permission.state === 'granted' || permission.state === 'prompt') {
        const text = await navigator.clipboard.readText();
        setPlayersList(text);
      }
    } catch (err) {
      console.error("Failed to read clipboard:", err);
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="space-y-2">
          <Label htmlFor="players">Lista de Jogadores</Label>
          <Textarea
            id="players"
            placeholder={`Cole ou digite o nome dos jogadores. Ex:
Joao            
Pedro
Victor...
            `}
            value={playersList}
            onChange={(e) => setPlayersList(e.target.value)}
            className="min-h-[120px]"
          />
        </div>
        <div className="flex gap-2">
          <Button
            type="button"
            variant="secondary"
            className="flex-1"
            onClick={handlePaste}
          >
            Colar Lista
          </Button>
          <Button type="submit" className="flex-1">
            <UserPlus className="mr-2 h-4 w-4" />
            Adicionar
          </Button>
        </div>
      </form>

      <PlayersPerTeamSelector
        value={playersPerTeam}
        onChange={setPlayersPerTeam}
      />
    </div>
  );
}
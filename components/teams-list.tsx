"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shuffle } from "lucide-react";

interface TeamsListProps {
  players: string[];
  teams: string[][];
  nextPlayers?: string[];
  onShuffle: () => void;
}

export function TeamsList({ players, teams, onShuffle }: TeamsListProps) {
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button
          className="w-full"
          onClick={onShuffle}
          disabled={players.length < 2}
        >
          <Shuffle className="mr-2 h-4 w-4" />
          Sortear Times
        </Button>
      </div>

      {teams.length > 0 && (
        <div className="space-y-4">
          {teams.map((team, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">
                  Time {index + 1}
                  {team.length < players.length / teams.length && " (Incompleto)"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-decimal pl-4">
                  {team.map((player, playerIndex) => (
                    <li key={playerIndex} className="py-1">
                      {player}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
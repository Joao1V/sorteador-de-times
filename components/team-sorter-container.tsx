"use client";

import { TeamSorter } from "@/components/team-sorter";
import { PlayerList } from "@/components/player-list";
import { TeamsList } from "@/components/teams-list";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { useTeams } from "@/hooks/use-teams";
import {TutorialContent} from "@/features/tutorial/tutorial-content";

export function TeamSorterContainer() {
  const [playersPerTeam, setPlayersPerTeam] = useState(6);
  const { players, removePlayer, addPlayers, teams, nextPlayers, shuffleTeams } = useTeams(playersPerTeam);

  return (
    <div className="max-w-md mx-auto space-y-4">
      <Card className={"relative"}>
        <TutorialContent />
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6" />
            Sorteador de Times
          </CardTitle>
          <CardDescription>
            Organize seus jogadores e sorteie os times automaticamente
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <TeamSorter
            onAddPlayers={addPlayers}
            playersPerTeam={playersPerTeam}
            setPlayersPerTeam={setPlayersPerTeam}
          />
          
          <PlayerList 
            players={players}
            onRemovePlayer={removePlayer}
          />
          
          <TeamsList 
            players={players}
            teams={teams}
            nextPlayers={nextPlayers}
            onShuffle={shuffleTeams}
          />
        </CardContent>
      </Card>
    </div>
  );
}
"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trash2 } from "lucide-react";

interface PlayerListProps {
  players: string[];
  onRemovePlayer: (index: number) => void;
}

export function PlayerList({ players, onRemovePlayer }: PlayerListProps) {
  if (players.length === 0) return <></>
  return (
    <ScrollArea className="h-[200px] rounded-md border p-2">
      {players.map((player, index) => (
        <div
          key={index}
          className="flex items-center justify-between py-2 px-1"
        >
          <span>
            {index + 1}. {player}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onRemovePlayer(index)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </ScrollArea>
  );
}
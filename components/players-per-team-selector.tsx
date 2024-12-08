"use client";

import { Button } from "@/components/ui/button";

interface PlayersPerTeamSelectorProps {
  value: number;
  onChange: (value: number) => void;
}

export function PlayersPerTeamSelector({ value, onChange }: PlayersPerTeamSelectorProps) {
  const options = [5, 6, 7, 8];

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Jogadores por time</label>
      <div className="grid grid-cols-4 gap-2">
        {options.map((option) => (
          <Button
            key={option}
            variant={value === option ? "default" : "outline"}
            onClick={() => onChange(option)}
            className="w-full"
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
}
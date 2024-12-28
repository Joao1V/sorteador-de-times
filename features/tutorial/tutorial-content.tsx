"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {HelpCircle, Shuffle, UserPlus} from "lucide-react";
import { Button } from "@/components/ui/button";

export function TutorialContent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 gap-1"
          aria-label="Ajuda"
        >
          <HelpCircle className="h-5 w-5" />
          <span>Como usar</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Como usar o Sorteador de Times</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <section className="space-y-2">
            <h3 className="font-semibold">1. Adicione os Jogadores</h3>
            <p className="text-sm text-muted-foreground">
              Cole ou digite a lista de jogadores, um por linha.
            </p>
            <p className="text-sm text-muted-foreground">
              <b>Números no início serão ignorados:</b>
            </p>
            <pre className="text-sm bg-muted p-2 rounded-md">
              João
              <br/>
              Zói
              <br/>
              Lulu
            </pre>
            <p className="text-sm text-muted-foreground">
              Se preferir, pode digitar o nome de um jogador por vez e clicar no botão: <Button size={"sm"} className={" inline-flex items-center pointer-events-none "}><UserPlus className="mr-2 h-4 w-4" /> Adicionar</Button>
            </p>
            <pre className="text-sm bg-muted p-2 rounded-md">
              Gustavo
            </pre>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold">2. Selecione o Tamanho dos Times</h3>
            <p className="text-sm text-muted-foreground">
              Escolha quantos jogadores cada time deve ter (5, 6, 7 ou 8 jogadores).
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold">3. Sorteie os Times</h3>
            <p className="text-sm text-muted-foreground">
              Clique em <Button size={"sm"}
          className="inline-flex"
        >
          <Shuffle className="mr-2 h-4 w-4" />
          Sortear Times
        </Button> para distribuir os jogadores aleatoriamente.
              Jogadores extras aparecerão na seção &quot;Próximos&quot;.
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
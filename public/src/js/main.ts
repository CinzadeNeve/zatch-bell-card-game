import Mamodo from "./classes/Mamodo";
import Poder from "./classes/Poder";
import Parceiro from "./classes/Parceiro";
import Evento from "./classes/Evento";

import Pagina from "./classes/Livro/Pagina";
import Livro from "./classes/Livro/Livro";


import Player from "./classes/sistema/Player";

import {bd_card} from "./bd_cards";


function filtro_card(id:string){
    const card = bd_card.find((value)=>{
        return (value.id === id)
    })

    switch(card?.categoria){
        case 'Evento':
            return new Evento(card.nome, card.id, '', card.raridade, card.descricao, card.texto_adicional, card.batalha_tipo?.ataque, card.batalha_tipo?.defesa);
        case 'Mágia':
            return new Poder(card.nome, card.id, '', card.raridade, card.descricao, card.texto_adicional, card.atributo, card.poder, card.dano_livro, card.mamodo, card.batalha_tipo?.ataque, card.batalha_tipo?.defesa)
        case 'Mamodo':
            return new Mamodo(card.nome, card.id, '', card.raridade, card.descricao, card.texto_adicional, card.parceiro, card.poder);
        case 'Parceiro':
            return new Parceiro(card.nome, card.id, '', card.raridade, card.descricao, card.texto_adicional, card.parceiro_mamodo);
        default:
            console.log("Não indentificado");
            return undefined;
    }
}

const Livro1 = new Livro();


const array_paginas:string[] = [
    "M-001",
    "S-025",
    "S-001",
    "P-001",
    "S-001",
    "M-014",
    "S-027",
    "P-009",
    "S-022",
    "S-026",
    "S-001",
    "S-003",
    "E-004",
    "M-012",
    "S-003",
    "P-008",
    "S-020",
    "S-004",
    "E-009",
    "E-003",
    "S-023",
    "E-008",
    "S-022",
    "E-001",
    "S-023",
    "E-010",
    "S-002",
    "E-011",
    "S-021",
    "E-002",
    "S-024",
    "S-005"
]


for(let [index, value] of array_paginas.entries()){

    const card:Evento | Poder | Mamodo | Parceiro | undefined = filtro_card(value);
    if(card){
        const pagina:Pagina = new Pagina(card,index);
        Livro1.add_page(pagina);
    }
}

Livro1.print_livro();



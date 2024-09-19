import Mamodo from "./classes/Mamodo";
import Poder from "./classes/Poder";
import Parceiro from "./classes/Parceiro";
import Evento from "./classes/Evento";

import Pagina from "./classes/Livro/Pagina";
import Livro from "./classes/Livro/Livro";


import Player from "./classes/sistema/Player";
import { deck_starter_set_1 } from "./classes/sistema/DeckMontados";

import {bd_card} from "./bd_cards";


function filtro_card(id:string){
    const card = bd_card.find((value)=>{
        return (value.id === id)
    })

    switch(card?.categoria){
        case 'Evento':
            return new Evento(card.nome, card.id, `./public/src/img/cards/${card.id}/${card.id}.webp`, card.raridade, card.descricao, card.texto_adicional, card.batalha_tipo?.ataque, card.batalha_tipo?.defesa);
        case 'Mágia':
            return new Poder(card.nome, card.id, `./public/src/img/cards/${card.id}/${card.id}.webp`, card.raridade, card.descricao, card.texto_adicional, card.atributo, card.poder, card.dano_livro, card.mamodo, card.batalha_tipo?.ataque, card.batalha_tipo?.defesa)
        case 'Mamodo':
            return new Mamodo(card.nome, card.id, `./public/src/img/cards/${card.id}/${card.id}.webp`, card.raridade, card.descricao, card.texto_adicional, card.parceiro, card.poder);
        case 'Parceiro':
            return new Parceiro(card.nome, card.id, `./public/src/img/cards/${card.id}/${card.id}.webp`, card.raridade, card.descricao, card.texto_adicional, card.parceiro_mamodo);
        default:
            console.log("Não indentificado");
            return undefined;
    }
}

function construir_livro(array_paginas:string[], livro:Livro){
    for(let [index, value] of array_paginas.entries()){

        const card:Evento | Poder | Mamodo | Parceiro | undefined = filtro_card(value);
        if(card){
            const pagina:Pagina = new Pagina(card,index);
            livro.add_page(pagina);
        }
    }
}


/** Declaração dos livros */
const Livro1 = new Livro();
const Livro2 = new Livro();

/** Lista de ID das cartas do deck Starter Set 1 */
const array_paginas:string[] = deck_starter_set_1();

/** Monstando o livro */
construir_livro(array_paginas, Livro1);


Livro1.print_livro();



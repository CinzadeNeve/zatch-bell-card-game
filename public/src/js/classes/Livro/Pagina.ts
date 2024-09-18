import Mamodo from "../Mamodo";
import Parceiro from "../Parceiro";
import Poder from "../Poder";
import Evento from "../Evento";

class Pagina{

    private card_pagina: Mamodo | Poder | Parceiro | Evento | undefined;
    private page_number: number;
    
    constructor(card_pagina: Mamodo | Poder | Parceiro | Evento | undefined, page_number:number){
        this.card_pagina = card_pagina;
        this.page_number = page_number;
    }

    public get_page_number(){
        return this.page_number;
    }
    
}

export default Pagina;
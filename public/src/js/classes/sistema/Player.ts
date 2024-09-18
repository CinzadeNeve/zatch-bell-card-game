import Livro from "../Livro/Livro";
import Mamodo from "../Mamodo";
import Parceiro from "../Parceiro";


class Player{

    /** Info Player */
    private nome:string;
    private deck:Livro;
    private MP:number;

    /** Slot Cards */
    private slot_mamodo_1?:Mamodo;
    private slot_mamodo_2?:Mamodo;
    private slot_mamodo_3?:Mamodo;

    private slot_parceiro_1?:Parceiro;
    private slot_parceiro_2?:Parceiro;
    private slot_parceiro_3?:Parceiro;

    constructor(nome:string, deck:Livro, MP:number){
        this.nome = nome;
        this.deck = deck;
        this.MP = MP;
    }


    public use_slot_mamodo(mamodo:Mamodo){
        if(mamodo === undefined){
            return true;
        }
        return false;
    }

    public set_slot_mamodo(mamodo:Mamodo, posicao:number){
        switch(posicao){
            case 1:
                if(this.use_slot_mamodo(mamodo)){
                    this.slot_mamodo_1 = mamodo;
                    break;
                }
                this.set_slot_mamodo(mamodo, posicao + 1);
            case 2:
                this.slot_mamodo_2 = mamodo;
                break;
            case 3:
                this.slot_mamodo_3 = mamodo;
                break;

            default:
                console.log('Posição inválida');
                break;
        }
    }

}

export default Player;


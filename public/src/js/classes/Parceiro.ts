import Card from "./Card";

class Parceiro extends Card{
    private parceiro_mamodo: string | undefined;

    constructor(
        nome:string,
        codigo:string,
        img:string,
        raridade:string,
        descricao:string,
        texto_adicional:string,
        parceiro_mamodo:string | undefined
    ){
        super(nome, codigo, img, raridade, descricao, texto_adicional);
        this.parceiro_mamodo = parceiro_mamodo;
    }
}

export default Parceiro;
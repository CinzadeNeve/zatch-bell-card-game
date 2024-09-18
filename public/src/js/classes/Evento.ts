import Card from "./Card";

class Evento extends Card{
    private is_ataque:boolean | undefined;
    private is_defesa:boolean | undefined;

    constructor(
        nome:string,
        codigo:string,
        img:string,
        raridade:string,
        descricao:string,
        texto_adicional:string,
        is_ataque:boolean | undefined,
        is_defesa:boolean | undefined
    ){
        super(nome, codigo, img, raridade, descricao, texto_adicional);

        this.is_ataque = is_ataque ?? false;
        this.is_defesa = is_defesa ?? false;
    }
}

export default Evento
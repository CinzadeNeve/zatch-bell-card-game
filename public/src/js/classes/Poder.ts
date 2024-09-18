import Card from "./Card";

class Poder extends Card{
    private atributo: string | undefined;
    private poder: number | string | undefined;
    private dano_livro: number | undefined;
    private mamodo: string | undefined;
    private is_ataque:boolean | undefined;
    private is_defesa:boolean | undefined;
    
    constructor(
        nome:string,
        codigo:string,
        img:string,
        raridade:string,
        descricao:string,
        texto_adicional:string,
        atributo:string | undefined,
        poder:number | string | undefined,
        dano_livro:number | undefined,
        mamodo:string | undefined,
        is_ataque:boolean | undefined,
        is_defesa:boolean | undefined
    ){
        super(nome, codigo, img, raridade, descricao, texto_adicional);
        this.atributo = atributo;
        this.poder = poder;
        this.dano_livro = dano_livro;
        this.mamodo = mamodo ?? '';
        this.is_ataque = is_ataque ?? false;
        this.is_defesa = is_defesa ?? false;
    }
}

export default Poder;
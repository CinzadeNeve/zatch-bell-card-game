import Card from "./Card";

class Mamodo extends Card{
    private parceiro: string;
    private poder: number | string | undefined ;

    constructor(
        nome:string,
        codigo:string,
        img:string,
        raridade:string,
        descricao:string,
        texto_adicional:string,
        parceiro:string | undefined,
        poder:number | string | undefined
    ){
        super(nome, codigo, img, raridade, descricao, texto_adicional);
        this.parceiro = parceiro ?? '';
        this.poder = poder ?? 0;
    }

    public get_parceiro(){
        return this.parceiro;
    }

    public get_poder(){
        return this.poder;
    }

   
    

}

export default Mamodo;
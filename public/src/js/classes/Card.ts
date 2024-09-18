class Card{

    

    private nome: string;
    private codigo: string;
    private img: string;
    private raridade: string;
    private descricao: string | undefined;
    private texto_adicional: string | undefined;

    constructor(nome:string, codigo:string, img:string, raridade:string, descricao?:string, texto_adicional?:string){
        this.nome = nome;
        this.codigo = codigo;
        this.img = img;
        this.raridade = raridade;
        this.descricao = descricao;
        this.texto_adicional = texto_adicional;
    }

    public get_nome(){
        return this.nome;
    }

    public get_codigo():string{
        return this.codigo;
    }

    public get_img(){
        return this.img;
    }
}

export default Card;
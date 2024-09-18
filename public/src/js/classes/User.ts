class User{
    private nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

    public get_nome(){
        return this.nome;
    }
}

export default User;
import Card from "./Card";
class Mamodo extends Card {
    constructor(img, nome, descricao, parceiro, poder, sub_texto, codigo, raridade) {
        super(nome, codigo, img, raridade);
        this.descricao = descricao;
        this.parceiro = parceiro;
        this.poder = poder;
        this.sub_texto = sub_texto;
    }
    get_descricao() {
        return this.descricao;
    }
    get_parceiro() {
        return this.parceiro;
    }
    get_poder() {
        return this.poder;
    }
    get_sub_texto() {
        return this.sub_texto;
    }
}
export default Mamodo;
//# sourceMappingURL=Mamodo.js.map
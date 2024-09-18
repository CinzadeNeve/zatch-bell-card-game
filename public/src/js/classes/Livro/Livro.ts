import Pagina from "./Pagina";

class Livro{
    private paginas:Pagina[] = [];

    public add_page(page:Pagina){
        this.paginas.push(page)
    }

    /** Ordenar Livro */
    public sort_pages(){
        this.paginas.sort((a:Pagina, b:Pagina)=>{
            if(a.get_page_number() > b.get_page_number()){
                return 1;
            }
            else if(a.get_page_number() < b.get_page_number()){
                return -1;
            }
            else{
                return 0;
            }
        })
    }

    public print_livro(){
        this.paginas.forEach((pagina)=>{
            console.log(pagina);
        })
    }
    


}

export default Livro;
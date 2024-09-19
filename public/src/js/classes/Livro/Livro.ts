import Pagina from "./Pagina";

class Livro{
    private paginas:Pagina[] = [];
    private page_view_left:number = 0;
    private page_view_right:number = 1;

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


    public get_page_view_left():number{
        return this.page_view_left;
    }

    public get_page_view_right():number{
        return this.page_view_right;
    }


    /** Seguir para a próxima página do livro */
    public next_page_view(){
        this.page_view_left = this.page_view_left + 2;
        this.page_view_right = this.page_view_right + 2;
    }

    public prev_page_view(){
        this.page_view_right = this.page_view_right - 2;
        this.page_view_left = this.page_view_left - 2;
    }
    


}

export default Livro;
class User {
  constructor(){
    const myAjax = new MyAjax();
    const users=[];
    let apiVegPont = "http://localhost:3000/USER";
    myAjax.getAdat(apiVegPont, users, userLista);
    this.termekLista();
  }
  
  termekLista(termekek) {
    const szuloElem = $("table");
    const sablonElem = $(".user");

    termekek.forEach(function(elem) {
        sablonElem.clone().appendTo(szuloElem);

    });
    sablonElem.remove();
}

}
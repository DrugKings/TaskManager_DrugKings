$(function () {
    const myAjax = new MyAjax();
    const tasks = [];
    let apiVegPontTask = "http://localhost:3000/TASK";
  
    myAjax.getAdat(apiVegPontUser, tasks, termekLista);

    function termekLista(termekek) {
        szuloElem.empty()
        termekek.forEach(function (elem) {
          sablonElem.show()
          let node = sablonElem.clone().appendTo(szuloElem)
          const obj = new TermekAruhaz(node, elem)
        })
        sablonElem.hide()
    
        $(window).on('termekKosarba', (event) => {
          kosar.setKosar(event.detail)
        })
      }
})
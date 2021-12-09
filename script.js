$(function() {
    const myAjax = new MyAjax();
    const users=[];
    let apiVegPont = "http://localhost:3000/USER";
    myAjax.getAdat(apiVegPont, users, userLista);
    const szuloElemUser = $('table');
    const sablonElemUser = $('.User');

    function userLista(users) {
      szuloElemUser.empty()
      szuloElemUser.html('<tr><th>UserID</th><th>UserName</th></tr>')
        users.forEach(function (elem) {
          sablonElemUser.show()
          let node = sablonElemUser.clone().appendTo(szuloElemUser)
          const obj = new User(node, elem)
        })
        sablonElemUser.hide()
    }
})
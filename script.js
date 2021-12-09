$(function() {
    const myAjax = new MyAjax();
    const users=[];
    const tasks=[];
    let apiVegPontUser = "http://localhost:3000/USER";
    myAjax.getAdat(apiVegPontUser, users, userLista);
    let apiVegPontTask = "http://localhost:3000/TASK";
    myAjax.getAdat(apiVegPontTask, tasks, taskLista);
    const szuloElemUser = $('table');
    const sablonElemUser = $('.User');
    const szuloElemTask = $('.taskosok');
    const sablonElemTask = $('.task');

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
    function taskLista(tasks) {
      szuloElemTask.empty()
        tasks.forEach(function (elem) {
          sablonElemTask.show()
          let node = sablonElemTask.clone().appendTo(szuloElemTask)
          const obj = new Task(node, elem)
        })
        sablonElemTask.hide()
    }
    $("#feltolt").on("click", () => {
      let hossz = tasks.length;
      let ujAdat = {
          id: hossz + 1,
          title: $("#cim").val(),
          description: $("#leiras").val(),
          endDate : $("#hatarido").val(),
          userId : $("#elvegzi").val(),
          status : $("#status").val()
      };
      
      myAjax.postAdat(apiVegPontTask, ujAdat);
      }
  );
})
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
    $("#modositas").hide();
    $("#feltolt").show();

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
  let keresomezo = $("#kereso-input");
  keresomezo.on("keyup", () => {
    let apivegpont = "http://localhost:3000/TASK";
    apivegpont += "?title_like=" + keresomezo.val();
    myAjax.getAdat(apivegpont, tasks, taskLista);
    console.log(apivegpont);
  });
  $(window).on("torol", (event) => {
    let torolendoID = event.detail.id;
    myAjax.deleteAdat(apiVegPontTask, torolendoID);
});
$(window).on("modosit", (event) => {
  let valasztottid = event.detail.id;
  $("#taskId").val(valasztottid);
  $("#cim").val(event.detail.title);
  $("#leiras").val(event.detail.description);
  $("#hatarido").val(event.detail.endDate);
  $("#elvegzi").val(event.detail.userId);
  $("#status").val(event.detail.status);
  $("#modositas").show();
  $("#feltolt").hide();
});
$("#modositas").on("click", () => {
  let valasztottid = $("#taskId").val();
  let ujAdat = {
      id: $("#taskId").val(),
      title: $("#cim").val(),
      description: $("#leiras").val(),
      endDate : $("#hatarido").val(),
      userId : $("#elvegzi").val(),
      status : $("#status").val()
  };
  myAjax.putAdat(apiVegPontTask, ujAdat, valasztottid);
  $("#modositas").hide();
  $("#feltolt").show();
  }
);
})
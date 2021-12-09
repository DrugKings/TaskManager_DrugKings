$(function() {

$("#feltolt").on("click", () => {
    const myAjax = new MyAjax();
    let apiVegPont = "http://localhost:3000/TASK";
    let tasks = [];
    let id = myAjax.getAdat(apiVegPont, tasks, );
    let cim = $("#cim").val();
    let leiras = $("#leiras").val();
    let  = $("#status").val();
    let hatarido = $("#hatarido").val();
    let elvegzi = $("#elvegzi").val();

    let ujAdat = {
        id: id,
        title: cim,
        description: leiras,
        endDate : hatarido,
        userId : felhasznalo,
        status : elvegzi
    };
    myAjax.postAdat(apivegpont, ujAdat);
    console.log("Adat felvitel működik")
  });
});


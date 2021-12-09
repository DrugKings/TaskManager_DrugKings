const myAjax = new MyAjax();
let apiVegPont = "http://localhost:3000/TASK";

$("#ujAdat").on("click", () => {
    let szerzo= $("#szerzo").val();
    let cim= $("#cim").val();
    let ar= $("#ar").val();
    let tipus= $("#tipus").val();

    let ujAdat = {
      szerzo: szerzo,
      cim: cim,
      ar: ar,
      tipus: tipus
    };
    myAjax.postAdat(apivegpont, ujAdat);
  });

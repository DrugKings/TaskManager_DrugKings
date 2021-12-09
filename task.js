class Task{
    constructor(elem, adat,id){
        this.elem = elem;
        this.title = this.elem.children("h3");
        this.description=this.elem.children("p");
        this.endDate=this.endDate.children("p");

        this.nev=this.nev.children("p");

        this.status=this.status.status("p");
        this.gomb=this.elem.children(".modosit");
        this.gomb=this.elem.children(".torles");

        this.gomb.on("click", () => {
            this.kattintModosit();
        });
        this.gomb.on("click", () => {
            this.kattintTorol();
        });
    }
    
        
//        this.gomb.on("click", () => {
//            this.kattint();
//        });

kattintModosit(){
    let esemeny = new CustomEvent("modosit", {detail: this.adat});
    window.dispatchEvent(esemeny);
    console.log("modosit");
}
kattintTorles(){
    let esemeny = new CustomEvent("torol", {detail: this.adat});
    window.dispatchEvent(esemeny);
    console.log("torol");
}
setAdatok(ertekek){
    this.nev.html(ertekek.title);
    this.leiras.html(ertekek.description);
    this.leiras.html(ertekek.leiras);
    this.ar.html(ertekek.ar);
}
}

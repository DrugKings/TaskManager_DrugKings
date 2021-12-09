class Task{
    constructor(node, adat){
        this.node = node;
        this.adat = adat;
        this.title = this.node.children(".cim");
        this.description=this.node.children(".leiras");
        this.endDate=this.node.children(".date");
        this.nev=this.node.children(".nev");
        this.status=this.node.children(".folyamat");
        this.gomb=this.node.children(".modosit");
        this.gombtorl=this.node.children(".torles");
        this.gomb.on("click", () => {
            this.kattintModosit();
        });
        this.gombtorl.on("click", () => {
            this.kattintTorles();
        });
        this.setAdatok(this.adat);
    }
    
kattintModosit(){
    let esemeny = new CustomEvent("modosit", {detail: this.adat});
    window.dispatchEvent(esemeny);
}
kattintTorles(){
    let esemeny = new CustomEvent("torol", {detail: this.adat});
    window.dispatchEvent(esemeny);
}
setAdatok(ertekek){
    this.title.text(ertekek.title);
    this.description.text(ertekek.description);
    this.endDate.text(ertekek.endDate);
    this.nev.text(ertekek.userId);
    this.status.text(ertekek.status);
}
}

class User {
  constructor(node, adat) {
    this.node = node;
    this.adat = adat;
    this.userid = this.node.children(".UserID");
    this.username = this.node.children(".UserName");
  }
  setAdat(adat) {
    this.adat = adat;
    this.userid.text(adat.userId);
    this.username.text(adat.name);
}
}
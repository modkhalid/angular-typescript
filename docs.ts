class great {
	name:string;

	constructor(name){
		console.log("Hello world");
		this.name=name;
	}

	fun(){
		console.log(this.name);
	}
}
var g=new great("khalid");
g.fun();
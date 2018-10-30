var global: number = 45;
class mod{
    name: string;
    constructor(name) {
        this.name = name;
    }
    static count = 10;
    toString() {
        return "name is" + this.name + "and age is " + mod.count;    
    }
    calcu(){
    	var local_variable:number=15;
    	return local_variable+global;
    }
}

var m = new mod("modhammad khalid")
console.log(mod.count)
console.log(typeof(mod.count))
console.log(m.toString())
console.log(m.calcu())
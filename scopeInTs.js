var global = 45;
var mod = /** @class */ (function () {
    function mod(name) {
        this.name = name;
    }
    mod.prototype.toString = function () {
        return "name is" + this.name + "and age is " + mod.count;
    };
    mod.prototype.calcu = function () {
        var local_variable = 15;
        return local_variable + global;
    };
    mod.count = 10;
    return mod;
}());
var m = new mod("modhammad khalid");
console.log(mod.count);
console.log(typeof (mod.count));
console.log(m.toString());
console.log(m.calcu());

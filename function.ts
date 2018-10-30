// function DEfination 
function functionDefi(n):string {
	var name:string=n;
	return name;
}

// function call

var v = functionDefi("modkhalid");
console.log(typeof(v))//will return display string

// |function| |function_name| |(argument n )| : |return type|



function test_param(n1:number,s1:string) { 
   console.log(n1) 
   console.log(s1) 
} 
test_param(123,"this is a string")
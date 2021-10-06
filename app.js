var prompt = require("prompt");
prompt.start();
console.log("Enter operator (+,-,*,/)");
prompt.get(["operator"],function(err,res1){
let op=res1.operator;
console.log("enter no 1 and no 2");
prompt.get(["num1","num2"],function(err,res2){
let no1 = parseFloat(res2.num1);
let no2 = parseFloat(res2.num2);
let result;
if(op=='+'){
	result=no1+no2;
}
if(op=='-'){
	result=no1-no2;
}
console.log('answer:'+result);
});
});

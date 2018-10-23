

var myFunc = function() { 
	return "HI, my name is " + this.name;
}

var person = {
name : "Yuriy",
greet: myFunc
};


console.log(person.greet())


var f = (function (){
	var i = 0;
	console.log('first: ' + i);
	return function(){
		// console.log('test');
		// console.log('second '+ i)
		return i++
	}
})();


console.log(f());
console.log(f());
console.log(f());


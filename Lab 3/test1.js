function palindrome() {


var name = prompt("Enter name:")

var length = (name.length);

console.log(name.length)



for (var i = 0 ; i < (name.length-1)/2 ; i++) {

	if(name[i]!= name[name.length-1-i]) {
		 enter = false;
		alert("False");
	}

}
}

palindrome();

//Example of a class function that contains public, private and privileged variables

function Cat (c) {
	this.color = c;  //public variable
	var count = 0;  //private closured variable
	var that = this; 
	var secret = function() { //private function
		if (count < 4) {
			console.log(count);
			count += 1;
		}
		else console.log("sorry bud")
	}
	this.priv = function () {   //public variable that has privileged access to private secret method
		secret();  
	}
}

var Garf = new Cat("orange");
Garf.priv();
Garf.priv();
Garf.priv();
Garf.priv();
Garf.priv();




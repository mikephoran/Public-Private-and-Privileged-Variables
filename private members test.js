function Cat (c) {
	this.color = c;
	var count = 0;
	var that = this; 
	function secret() {
		if (count < 4) {
			console.log(count);
			count += 1;
		}
		else console.log("sorry bud")
	}
	this.priv = function () {
		secret();
	}
}

var Garf = new Cat("orange");
var count;

while (count < 8) {
	Garf.priv();
	count++;
}



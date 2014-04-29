function Cat (c) {
	this.color = c;
	var count = 0;
	var that = this;  //Can't think of when I'd use this, but Doug Crockford says this is a workaround for an error in the ECMAScript Language Specification which causes this to be set incorrectly for inner functions
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

Garf.priv();

//Couldn't figure out why count wasn't going up, until I thought about what cntrl-b was actually doing.  Then came up with this elegant solution:

Garf.priv();Garf.priv();Garf.priv();Garf.priv();Garf.priv();Garf.priv();Garf.priv();



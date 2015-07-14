class Person {
	constructor(a){
		this.a = a;
		this.items = [1,2,3,4,5,6]
	}
	clickOnThis(){
		console.log("this is ");
		console.log(this);
		console.log("a is "+ this.a);
	}
}

class PointWithBind {
    constructor(val) {
        this.myArray = val;//ko.observableArray(val);
        this.removeFromArray = this.removeFromArray.bind(this);
    }
    removeFromArray(value) {
      this.myArray.remove(value);
    }
}
class PointWithArrowFunction {
    constructor(val) {
        this.myArray = val;//ko.observableArray(val);
        this.removeFromArray = (value) => {
      		this.myArray.remove(value);
    	}
    }
}

class PointWithMethod {
    constructor(val) {
        this.myArray = val;//ko.observableArray(val);
    }
    removeFromArray(value) {
      this.myArray.remove(value);
    }
}
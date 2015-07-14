"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = (function () {
    function Person(a) {
        _classCallCheck(this, Person);

        this.a = a;
        this.items = [1, 2, 3, 4, 5, 6];
    }

    _createClass(Person, [{
        key: "clickOnThis",
        value: function clickOnThis() {
            console.log("this is ");
            console.log(this);
            console.log("a is " + this.a);
        }
    }]);

    return Person;
})();

var PointWithBind = (function () {
    function PointWithBind(val) {
        _classCallCheck(this, PointWithBind);

        this.myArray = val; //ko.observableArray(val);
        this.removeFromArray = this.removeFromArray.bind(this);
    }

    _createClass(PointWithBind, [{
        key: "removeFromArray",
        value: function removeFromArray(value) {
            this.myArray.remove(value);
        }
    }]);

    return PointWithBind;
})();

var PointWithArrowFunction = function PointWithArrowFunction(val) {
    var _this = this;

    _classCallCheck(this, PointWithArrowFunction);

    this.myArray = val; //ko.observableArray(val);
    this.removeFromArray = function (value) {
        _this.myArray.remove(value);
    };
};

var PointWithMethod = (function () {
    function PointWithMethod(val) {
        _classCallCheck(this, PointWithMethod);

        this.myArray = val; //ko.observableArray(val);
    }

    _createClass(PointWithMethod, [{
        key: "removeFromArray",
        value: function removeFromArray(value) {
            this.myArray.remove(value);
        }
    }]);

    return PointWithMethod;
})();
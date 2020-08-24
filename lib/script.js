'use strict';
/* this means that we have to follow some rules
this code lines won't work any more
x = "hello"; - variable assignment before declaration 
in regular js we have hoisting 
1) assumes stuff has been declared correctly below assignment
2) pull to bigger scope
won't do weird type casting unless asked.
will perform more strict equality tests.
lets us use let, const more correctly.
*/

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function Student(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

var studentOne = new Student("John", "Doe", 15, "blue");
var studentTwo = new Student("Sally", "Rally", 18, "green"); //console.log(Student);
//console.log(studentOne);
//console.log(studentTwo.eyeColor);
//classes

var Person = /*#__PURE__*/function () {
  function Person(first, last, age, gender, interests) {
    _classCallCheck(this, Person);

    this.name = {
      first: first,
      last: last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  _createClass(Person, [{
    key: "greeting",
    value: function greeting() {
      console.log("Hi! I'm ".concat(this.name.first));
    }
  }, {
    key: "farewell",
    value: function farewell() {
      console.log("".concat(this.name.first, " has left the building. Bye for now!"));
    }
  }]);

  return Person;
}();

var han = new Person('Han', 'Solo', 25, 'male', ['Smuggling', 'flying']);
han.greeting();
console.log(han.interests);

var Teacher = /*#__PURE__*/function (_Person) {
  _inherits(Teacher, _Person);

  var _super = _createSuper(Teacher);

  function Teacher(first, last, age, gender, interests, subject, grade) {
    var _this;

    _classCallCheck(this, Teacher);

    _this = _super.call(this, first, last, age, gender, interests); // subject and grade are specific to Teacher

    _this.subject = subject;
    _this.grade = grade;
    return _this;
  }

  return Teacher;
}(Person);

var snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions', 'being dramatic'], 'Dark arts', 5);
snape.greeting(); // Hi! I'm Severus.

console.log(snape.subject);
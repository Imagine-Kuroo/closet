function SuperType() {
  this.colors = ["red", "blue", "yellow"];
}
/**
 * part 1
 */
function SubType() {

}

SubType.prototype = new SuperType();

/**
 * part 2 借用构造函数
 */

function SubType() {
  SuperType.call(this);
}

var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors);

var instance2 = new SubType();
alert(instance2.colors);
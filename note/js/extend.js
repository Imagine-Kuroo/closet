class Father {
    constructor(name) {
        this.name = name
    }

    static hasSon() {
        console.log(this.name, ' --- > hasSon ')
    }

    introduceSelf() {
        console.log('\n\n\n', this.name, 'brushTooth---> \n\n', this.constructor)
    }
}

class Son extends Father {
    constructor(name, age) {
        super(name)
        this.age = age
    }
}
var father1 = new Father('爹')
var son1 = new Son('儿砸', 12);

father1.introduceSelf() // brushTooth---> Father { name: '111' }
son1.introduceSelf()    // brushTooth---> Son { name: '444', age: 12 }

Father.hasSon() // 调用自己的静态方法
Son.hasSon()    // 调用从Father继承来的静态方法


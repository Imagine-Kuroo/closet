class Father {
    constructor(name) {
        this.name = name
    }

    static hasSon() {
        console.log('????')
    }

    introduceSelf() {
        console.log('brushTooth--->', this)
    }
}

class Son extends Father {
    constructor(name, age) {
        super(name)
        this.age = age
    }
}
var father1 = new Father('111')
var son1 = new Son('444', 12);

father1.introduceSelf() // brushTooth---> Father { name: '111' }
son1.introduceSelf()    // brushTooth---> Son { name: '444', age: 12 }

// father1.hasSon() //无法调用类的静态方法
// son1.hasSon()    //无法调用类的静态方法
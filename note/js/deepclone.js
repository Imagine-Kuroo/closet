function deepClone(obj) {
    let objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === 'object') {
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (obj[key] && typeof obj[key] === 'object') {
                    objClone[key] = deepClone(obj[key])
                }
            }
        }
    }
    return objClone;
}

let obj1 = {
    name: 'obj1',
    age: 12,
    books: ['obj1一本书', 'obj1二本书', 'obj1三本书']
},
    // 浅拷贝
    // obj2 = obj1;
    // // 深拷贝
    // // 方案1
    // obj2 = JSON.parse(JSON.stringify(obj1));
    // 方案2
    obj2 = deepClone(obj1);

obj1.age = 15;
obj2.name = 'obj2';
obj2.age = 20;
obj2.books = ['obj2一本书', '速度']
console.log('======>\n', obj1, '\n', obj2);




function Promise(executor) {
    var self = this
    self.status = 'pending'
    self.data = undefined
    self.onResolvedCallback = [];
    self.onRejectedCallback = [];

    function resolve(value) {
        setTimeout(function () {
            if (self.status === 'pending') {
                self.status = 'resolved'
                self.data = value
                for (var i = 0; i < self.onResolvedCallback.length; i++) {
                    self.onResolvedCallback[i](value)
                }
            }
        })
    }
    function reject(reason) {
        setTimeout(function () {
            if (self.status === 'pending') {
                self.status = 'rejected'
                self.data = reason;
                for (var i = 0; i < self.onRejectedCallback.length; i++) {
                    self.onRejectedCallback[i](reason);
                }
            }
        })
    }
    try {
        executor(resolve, reject)
    } catch (e) {
        reject(e)
    }

}

// Promise.prototype.then = function (resolve, reject) {
//     this.onResolvedCallback.push(resolve);
//     this.onRejectedCallback.push(reject)
// }

Promise.prototype.then = function (onResolved, onRejected) {
    console.log('onResolved --- > ', onResolved, ' onRejected --- > ', onRejected)
    var self = this;
    var promise2;
    onResolved = typeof onResolved === 'function' ? onResolved : function (value) { return value }
    onRejected = typeof onRejected === 'function' ? onreJected : function (value) { return value }

    if (self.status === 'resolved') {
        return promise2 = new Promise(function (resolve, reject) {
            try {
                var x = onResolved(self.data)
                if (x instanceof Promise) {
                    x.then(resolve, reject)
                } else {
                    resolve(x)
                }
            } catch (e) {
                reject(e)
            }
        })
    }
    if (self.status === 'rejected') {
        return promise2 = new Promise(function (resolve, reject) {
            try {
                var x = onRejected(self.data)
                if (x instanceof Promise) {
                    x.then(resolve, reject)
                } else {
                    resolve(x)
                }
            } catch (e) { reject(e) }
        })
    }
}
Promise.prototype.catch = function () { }

// Promise.resolve = function () { }
// Promise.reject = function () { }
Promise.all = function () { }
Promise.race = function () { }


const prom = new Promise((resolve) => {
    setTimeout(() => {
        resolve(1)
    }, 2000)
})
prom.then(a => alert(a))
prom.then(a => alert(a + 1))


/**
 * 参考
 * https://www.jianshu.com/p/b4f0425b22a1
 */

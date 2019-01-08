function* foo(x) {
  let y = 2 * (yield (x + 1))
  console.log('y--->',y);
  let z = yield (y / 3)
  console.log('z--->',z);
  let w = yield (z * 2)
  console.log('w--->',w);
  return (x + y + z + w)
}

let it = foo(7)

console.log('1===>', it.next())
console.log('2===>', it.next(9))
console.log('3===>', it.next(7))
console.log('4===>', it.next(9))


function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

// console.log('1=====>', hw.next());
// console.log('2=====>', hw.next());
// console.log('3=====>', hw.next());
// console.log('4=====>', hw.next());

function* gen() {
  yield  123 + 456;
}

var test = gen()

// console.log(test.next());
// console.log(test.next());
var worker = new Worker("worker.js");
console.log('0')
worker.postMessage({message: 0});
console.log('1')
worker.postMessage({message: 1});
console.log('2')

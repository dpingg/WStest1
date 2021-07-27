var cosine;
self.onmessage = function(e) {
    if (e.data.message == 0) {
        for (var i = 0; i < 10000000; i++) {
            cosine = Math.cos(Math.random());
            if (i % 1000 == 0) console.log("hello world");
        }
    } else if (e.data.message == 1) {
        console.log("xyz");
    }
};
console.log('0')
postMessage({message: 0});
console.log('1')
postMessage({message: 1});
console.log('2')

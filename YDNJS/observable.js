let Rx = require('rxjs');
let isTrue = true;

let promise = new Promise((resolve, reject) => {
    if (isTrue) {
        resolve('Hi Promise')
    } else {
        reject(new Error('Message error in promise'))
    }
})

let data$ = new Rx.Observable((observer) => {
    if (isTrue) {
        observer.next('Hi Observable');
    } else {
        observer.error(new Error('error observer'))
    }
})


// DATA Collector

console.log(promise, data$)

promise.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})

data$.subscribe((data) => {
    console.log(data);    // output - ‘Hi Observable’
});
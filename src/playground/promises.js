const Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolved data')
    }, 5000)
})

console.log('before')

Promise.then((data) => {
    console.log(data)
})

console.log('after')

/*
used with any long running tasks, accessing a server, looking for a file in fs

.then registers a callback that runs when the promise resolves

promise resolves after 5 secs
*/

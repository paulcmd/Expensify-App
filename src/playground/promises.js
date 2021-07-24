const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Paul',
        //     age: 30
        // })
        reject('Something went wrong')
    }, 5000)
})

console.log('before')

promise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log('Error : ', error)
})

console.log('after')

/*
used with any long running tasks, accessing a server, looking for a file in fs

.then registers a callback that runs when the promise resolves

promise resolves after 5 secs ( to simulate the delay in an api request)

.then only returns resolved data, not the error
*/

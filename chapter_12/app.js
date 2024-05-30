// Lesson - 87

// console.log('1')
// console.log('2')

// setTimeout(() => {
//     console.log('callback function fired')
// }, 2000)

// console.log('3')
// console.log('4')



// -------------------------------------------- //



// Lesson - 89

// const request = new XMLHttpRequest()

// request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState)
//     if (request.readyState === 4) {
//         console.log(request.responseText)
//     }
// })

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
// request.send()



// -------------------------------------------- //



// Lesson - 90

// const request = new XMLHttpRequest()

// request.addEventListener('readystatechange', () => {
    
//     if (request.readyState === 4 && request.status === 200) {
//         console.log(request.responseText)
//     } else if (request.readyState === 4) {
//         console.log('could not fetch data')
//     }

// })

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
// request.send()



// -------------------------------------------- //



// Lesson - 91

// const getTodos = (callback) => {

//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', () => {
        
//         if (request.readyState === 4 && request.status === 200) {

//             callback(undefined, request.responseText)

//         } else if (request.readyState === 4) {

//             callback('could not find data', undefined)

//         }

//     })

//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
//     request.send()

// }

// console.log(1)
// console.log(2)

// getTodos((err, data) => {

//     console.log('callback fired')

//     if (err) {

//         console.log(err)

//     } else {

//         console.log(data)

//     }

// })

// console.log(3)
// console.log(4)



// -------------------------------------------- //



// Lesson - 92

// const getTodos = (callback) => {

//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', () => {
        
//         if (request.readyState === 4 && request.status === 200) {

//             const data = JSON.parse(request.responseText)
//             callback(undefined, data)

//         } else if (request.readyState === 4) {

//             callback('could not find data', undefined)

//         }

//     })

//     request.open('GET', 'todos.json')
//     request.send()

// }

// getTodos((err, data) => {

//     console.log('callback fired')

//     if (err) {

//         console.log(err)

//     } else {

//         console.log(data)

//     }

// })



// -------------------------------------------- //



// Lesson - 93

// const getTodos = (resourse, callback) => {

//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', () => {
        
//         if (request.readyState === 4 && request.status === 200) {

//             const data = JSON.parse(request.responseText)
//             callback(undefined, data)

//         } else if (request.readyState === 4) {

//             callback('could not find data', undefined)

//         }

//     })

//     request.open('GET', resourse)
//     request.send()

// }

// getTodos('json/luigi.json', (err, data) => {

//     console.log(data)

//     getTodos('json/mario.json', (err, data) => {

//         console.log(data)

//         getTodos('json/shaun.json', (err, data) => {

//             console.log(data)
            
//         })

//     })

// })



// -------------------------------------------- //



// Lesson - 94

// const getTodos = (resourse) => {

//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest()

//         request.addEventListener('readystatechange', () => {
            
//             if (request.readyState === 4 && request.status === 200) {

//                 const data = JSON.parse(request.responseText)
//                 resolve(data)

//             } else if (request.readyState === 4) {

//                 reject('error getting resourse')

//             }

//         })

//         request.open('GET', resourse)
//         request.send()

//     })
// }

// getTodos('json/luigi.json').then(data => {

//     console.log('promise resolved:', data)

// }).catch((err) => {

//     console.log('promise rejected:', err)

// })


// promise example

// const getSomething = () => {

//     return new Promise((resolve, reject) => {

//         //fetch something
//         resolve('some data')
//         reject('some error')

//     })

// }

// getSomething().then((data) => {

//     console.log(data)

// }, (err) => {

//     console.log(err)

// })

// getSomething().then(data => {

//     console.log(data)

// }).catch(err => {

//     console.log(err)
    
// })



// -------------------------------------------- //



// Lesson - 95

// const getTodos = (resourse) => {

//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest()

//         request.addEventListener('readystatechange', () => {
            
//             if (request.readyState === 4 && request.status === 200) {

//                 const data = JSON.parse(request.responseText)
//                 resolve(data)

//             } else if (request.readyState === 4) {

//                 reject('error getting resourse')

//             }

//         })

//         request.open('GET', resourse)
//         request.send()

//     })
// }

// getTodos('json/luigi.json').then(data => {

//     console.log('promise 1 resolved:', data)
//     return getTodos('json/mario.json')

// }).then(data => {
    
//     console.log('promise 2 resolved:', data)
//     return getTodos('json/shaun.json')


// }).then(data => {

//     console.log('promise 3 resolved:', data)

// }).catch((err) => {

//     console.log('promise rejected:', err)

// })



// -------------------------------------------- //



// Lesson - 96

// // fetch api

// // step 1 fetch the data
// fetch('json/luigi.json').then((response) => {

//     // step 2 return the response then use respose.json to return promise
//     console.log('resolved', response)
//     return response.json()

// // step 3 tak on .then fucntion to get the array of data
// }).then((data) => {

//     console.log(data)

// }).catch((err) => {

//     console.log('rejected', err)

// })



// -------------------------------------------- //



// Lesson - 97

// // async and await

// const getTodos = async () => {

//     const response = await fetch('json/luigi.json')
//     const data = await response.json()
//     // console.log(data)
//     return data
    
// }

// console.log(1)
// console.log(2)

// getTodos()
//     .then(data => console.log('resolved:', data))
//     // .catch()
    
// console.log(3)
// console.log(4)



// -------------------------------------------- //



// Lesson - 98

const getTodos = async () => {

    const response = await fetch('json/luigis.json')

    if (response.status !== 200) {

        throw new Error('cannot fetch the data')

    }

    const data = await response.json()
    
    return data
    
}

getTodos()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err.message))
    
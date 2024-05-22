// ------------------------------------------------- //



// Lesson 59 - Submit events

// const form = document.querySelector('.signup-form')
// // const username = document.querySelector('#username')

// form.addEventListener('submit', e => {
//     e.preventDefault()
//     // console.log(username.value)
//     console.log(form.username.value)
// })



// ------------------------------------------------- //



// Lesson 60 - Testing REGEX patterns

// const form = document.querySelector('.signup-form')
// // const username = document.querySelector('#username')

// form.addEventListener('submit', e => {
//     e.preventDefault()
//     // console.log(username.value)
//     console.log(form.username.value)
// })

// testing REGEX
// const username = 'shaune';
// const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username)
// // console.log(result)

// if (result) {
//     console.log('passed')
// } else {
//     console.log('failed')
// }

// let result = username.search(pattern)
// console.log(result)



// ------------------------------------------------- //



// Lesson 61 - Basic form vaildation

// const form = document.querySelector('.signup-form')
// const feedback = document.querySelector('.feedback')

// form.addEventListener('submit', e => {
//     e.preventDefault()
    
//     // Validation
//     const username = form.username.value
//     const usernamePattern = /^[a-zA-Z]{6,12}$/

//     if (usernamePattern.test(username)) {
//         // feedback good info
//         feedback.textContent = 'that username is valid'
//     } else {
//         // feedback help info
//         feedback.textContent = 'that username was not valid'
//     }
// })



// ------------------------------------------------- //



// Lesson 62 - Keyboard events

const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')
const usernamePattern = /^[a-zA-Z]{6,12}$/

form.addEventListener('submit', e => {
    e.preventDefault()
    
    // Validation
    const username = form.username.value
    

    if (usernamePattern.test(username)) {
        // feedback good info
        feedback.textContent = 'that username is valid'
    } else {
        // feedback help info
        feedback.textContent = 'that username was not valid'
    }
})

// live feedback
form.username.addEventListener('keyup', e => {
    // console.log(e.target.value, form.username.value)
    if (usernamePattern.test(e.target.value)) {
        // console.log('passed')
        form.username.setAttribute('class', 'success')
    } else {
        // console.log('failed')
        form.username.setAttribute('class', 'error')
    }
})
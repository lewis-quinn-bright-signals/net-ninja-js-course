// Lesson 46 - Query Selector

// const para = document.querySelector('p');

// console.log(para)

// const paras = document.querySelectorAll('p');

// console.log(paras);

// const errors = document.querySelectorAll('.error');

// console.log(errors)



// ------------------------------------------------- //



// Lesson 47 - Other ways to Query the DOM

// get an element by ID
// const title = document.getElementById('page-title')

// console.log(title)

// get elements by their class name
// const errors = document.getElementsByClassName('error')

// console.log(errors);

// console.log(errors[0]);

// get elements by their tag name
// const paras = document.getElementsByTagName('p')

// console.log(paras);

// console.log(paras[1]);



// ------------------------------------------------- //



// Lesson 48 - Adding and changing page content

// const para = document.querySelector('p')

// console.log(para.innerText)
// para.innerText += ' - updated text'

// const paras = document.querySelectorAll('p')

// paras.forEach(para => {
//     console.log(para.innerText)
//     para.innerText += ' - new text'
// })

// const content = document.querySelector('.content')

// console.log(content.innerHTML)
// content.innerHTML += '<h2>This is a new heading</h2>'

// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`
// });



// ------------------------------------------------- //



// Lesson 49 - Getting & setting attributes

// const link = document.querySelector('a')

// console.log(link.getAttribute('href'))
// link.setAttribute('href', 'https://www.mozilla.org/en-GB/firefox/new/')
// link.innerText = 'New link'

// const mssg = document.querySelector('p')

// console.log(mssg.getAttribute('class'))
// mssg.setAttribute('class', 'success')

// mssg.setAttribute('style', 'color: green')



// ------------------------------------------------- //



// Lesson 50 - Adding & removing styles

// const title = document.querySelector('h1')

// title.setAttribute('style', 'margin: 4rem;')

// console.log(title.style)
// console.log(title.style.color)

// title.style.margin = '4rem'
// title.style.color = 'crimson'
// title.style.fontSize = '5rem'



// ------------------------------------------------- //



// Lesson 51 - Adding & removing classes

// const content = document.querySelector('p')

// console.log(content.classList)
// content.classList.add('error')
// content.classList.remove('error')

// content.classList.add('success')

// const paras = document.querySelectorAll('p')

// paras.forEach(para => {
//     if (para.textContent.includes('error')) {
//         para.classList.add('error')
//     }
//     if (para.textContent.includes('success')) {
//         para.classList.add('success')
//     }
// })

// const title = document.querySelector('.title')

// title.classList.toggle('test')



// ------------------------------------------------- //



// Lesson 52 - Parents, children & siblings

// const article = document.querySelector('article')

// console.log(article.children)
// console.log(Array.from(article.children))

// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element')
// })

// const title = document.querySelector('h2')

// console.log(title.parentElement)
// console.log(title.parentElement.parentElement)

// console.log(title.nextElementSibling)
// console.log(title.previousElementSibling)

// Chaining
// console.log(title.nextElementSibling.parentElement.children)



// ------------------------------------------------- //



// Lesson 53 - Events & event listeners

// const button = document.querySelector('button')

// button.addEventListener('click', () => {
//     console.log('you clicked')
// })

// const items = document.querySelectorAll('li')

// items.forEach(item => {
//     item.addEventListener('click', e => {
//         // console.log(e.target)
//         // console.log(item)

//         e.target.style.textDecoration = 'line-through'
//     })
// })



// ------------------------------------------------- //



// Lesson 54 - Creating & removing elements

// const ul = document.querySelector('ul')
// // ul.remove()

// const button = document.querySelector('button')

// button.addEventListener('click', () => {
//     // ul.innerHTML += '<li>something new</li>'

//     const li = document.createElement('li')
//     li.textContent = 'something new'

//     // ul.append(li)
//     ul.prepend(li)
// })

// const items = document.querySelectorAll('li')

// items.forEach(item => {
//     item.addEventListener('click', e => {

//         e.target.remove()

//     })
// })



// ------------------------------------------------- //



// Lesson 55 - Event bubbling & delegation

// const ul = document.querySelector('ul')
// const button = document.querySelector('button')

// button.addEventListener('click', () => {
//     const li = document.createElement('li')
//     li.textContent = 'something new'
//     ul.append(li)
// })

// // const items = document.querySelectorAll('li')

// // items.forEach(item => {
// //     item.addEventListener('click', e => {
// //         console.log('event in <li/>')
// //         e.stopPropagation()
// //         e.target.remove()
// //     })
// // })

// ul.addEventListener('click', e => {
//     // console.log('event in <ul/>')
//     // console.log(e.target)

//     if (e.target.tagName === 'LI') {
//         e.target.remove()
//     }
// })



// ------------------------------------------------- //



// Lesson 56 - More events

// const copy = document.querySelector('.copy-me')

// copy.addEventListener('copy', () => {
//     console.log('text copied')
// })

// const box = document.querySelector('.box')

// box.addEventListener('mousemove', e => {
//     // console.log(e)
//     // console.log(e.offsetX, e.offsetY)

//     box.textContent = `x pos = ${e.offsetX}   y pos - ${e.offsetY}`
// })

// document.addEventListener('wheel', e => {
//     // console.log(e)
//     console.log(e.pageX, e.pageY)

// })



// ------------------------------------------------- //



// Lesson 57 - Making a popup

const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')
const close = document.querySelector('.popup-close')

button.addEventListener('click', () => {
    popup.style.display = 'block'
})

close.addEventListener('click', () => {
    popup.style.display = 'none'
})

popup.addEventListener('click', () => {
    popup.style.display = 'none'
})
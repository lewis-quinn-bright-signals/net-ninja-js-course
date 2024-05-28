// Lesson - 67

// const correctAnswers = ['B', 'B', 'B', 'B'];
// const form = document.querySelector('.quiz-form');

// form.addEventListener('submit', e => {
//   e.preventDefault();

//   let score = 0;
//   const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

//   // check the answers
//   userAnswers.forEach((answer, index) => {
//     if (answer === correctAnswers[index]){
//       score += 25;
//     }
//   });

//   // log the score to console
//   console.log(score);

// });



// ------------------------------------------ //



// Lesson - 68

// const correctAnswers = ['B', 'B', 'B', 'B'];
// const form = document.querySelector('.quiz-form');
// const result = document.querySelector('.result')

// form.addEventListener('submit', e => {
//   e.preventDefault();

//   let score = 0;
//   const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

//   // check the answers
//   userAnswers.forEach((answer, index) => {
//     if (answer === correctAnswers[index]){
//       score += 25;
//     }
//   });

//     //show result on page
//     result.querySelector('span').textContent = `${score}%`
//     result.classList.remove('d-none')
// });



// --------------------------------------------- //



// Lesson - 69

// const correctAnswers = ['B', 'B', 'B', 'B'];
// const form = document.querySelector('.quiz-form');
// const result = document.querySelector('.result')

// form.addEventListener('submit', e => {
//   e.preventDefault();

//   let score = 0;
//   const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

//   // check the answers
//   userAnswers.forEach((answer, index) => {
//     if (answer === correctAnswers[index]){
//       score += 25;
//     }
//   });

//     //show result on page
//     scrollTo(0, 0);
//     result.querySelector('span').textContent = `${score}%`
//     result.classList.remove('d-none')

// });

// window object (global object)

// console.log('hello')
// window.console.log('heelo')

// console.log(document.querySelector('form'))
// console.log(window.document.querySelector('form'))

// alert('heelo')
// window.alert('hello')

// setTimeout(() => {
//     alert('hello')
// }, 3000)



// --------------------------------------------- //



// Lesson - 70

// const correctAnswers = ['B', 'B', 'B', 'B'];
// const form = document.querySelector('.quiz-form');
// const result = document.querySelector('.result')

// form.addEventListener('submit', e => {
//   e.preventDefault();

//   let score = 0;
//   const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

//   // check the answers
//   userAnswers.forEach((answer, index) => {
//     if (answer === correctAnswers[index]){
//       score += 25;
//     }
//   });

//     //show result on page
//     scrollTo(0, 0);
//     result.classList.remove('d-none')

//     // score animation
//     let output = 0
//     const timer = setInterval(() => {
//         result.querySelector('span').textContent = `${output}%`
//         if (output === score) {
//             clearInterval(timer)
//         } else {
//             output++
//         }
//     }, 10)

// });

// let i = 0

// const timer = setInterval(() => {
//     console.log('hello')
//     i++;
//     if (i === 5) {
//         clearInterval(timer)
//     }
// }, 1000);



// --------------------------------------------- //



// Final module code

const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check the answers
    userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]){
        score += 25;
    }
    });

    //show result on page
    scrollTo(0, 0);
    result.classList.remove('d-none')

    // score animation
    let output = 0
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`
        if (output === score) {
            clearInterval(timer)
        } else {
            output++
        }
    }, 10)
});
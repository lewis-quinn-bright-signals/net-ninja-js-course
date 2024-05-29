// Lesson - 82

// const now = new Date();

// // console.log(now)
// // console.log(typeof now)

// // years, months, day, times
// console.log('getFullYear:', now.getFullYear())
// console.log('getMonth:', now.getMonth())
// console.log('getDate:', now.getDate())
// console.log('getDay:', now.getDay())
// console.log('getHours:', now.getHours())
// console.log('getMinutes:', now.getMinutes())
// console.log('getSeconds:', now.getSeconds())

// // timestamps
// console.log('timestamp:', now.getTime())

// // date strings
// console.log(now.toDateString())
// console.log(now.toTimeString())
// console.log(now.toLocaleString())



// ---------------------------------------- //



// Lesson - 83

// const before = new Date('February 1 2019 7:30:59')
// const now = new Date();

// // console.log(now.getTime(), before.getTime())

// const diff = now.getTime() - before.getTime()
// console.log(diff)

// const mins = Math.round(diff / 1000 / 60)
// const hours = Math.round(mins / 60)
// const days = Math.round(hours / 24)
// const weeks = Math.round(days / 7)
// const months = Math.round(weeks / 4.345)
// const years = Math.round(months / 12)

// console.log(mins, hours, days, weeks, months, years)

// console.log(`the blog was written ${years} years ago`)

// // converting timestamps into date objects
// const timestamp = 167906511064
// console.log(new Date(timestamp))



// ---------------------------------------- //



// Lesson - 84

// const clock = document.querySelector('.clock')

// const tick = () => {

//     const now = new Date()

//     const h = now.getHours()
//     const m = now.getMinutes()
//     const s = now.getSeconds()
//     // console.log(h, m, s)

//     const html = `
//         <span>${h} : </span>
//         <span>${m} : </span>
//         <span>${s}</span>
//     `

//     clock.innerHTML = html
// }

// setInterval(tick, 1000);



// ---------------------------------------- //



// Lesson - 85

const now = new Date()

console.log(dateFns.isToday(now))

// formatting options
console.log(dateFns.format(now, 'YYYY'))
console.log(dateFns.format(now, 'MMMM'))
console.log(dateFns.format(now, 'dddd'))
console.log(dateFns.format(now, 'Do'))
console.log(dateFns.format(now, 'dddd, Do, MMMM, YYYY'))

// comparing dates
const before = new Date('February 1 2019 7:30:59')

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}))
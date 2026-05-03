// let date = new Date(1777472758355);
// let mili = date.getTime()

// console.log(date);
//? E = mc2

// 1hour = 24hour
// 2019
// 21 => 1 year
// 70 80

// sun => 8min
// moon 1.6
// KB
// intelligent

// painting

// Date object get and set method

// let date = new Date();

// let date1 = date.setMonth(2)

// console.log(new Date(date1))

// setTimeOut

// function printC() {
//     console.log("hello")
// }

// let a = setInterval(printC, 1000);
// printC()

// setTimeout(() => {
//     clearInterval(a)
// }, 5000)

// // clearTimeout(a);

// setInterval(() => {
//     console.log(new Date())
// }, 1000)

// let car = [];
// let car = {
//   id: 1,
//   name: "Range Rover",
//   mileage: 10000,
//   start: function () {
//    return "car started"
//   }
// };

// console.log(car.start())

// car.color = "black";
// car.mileage = 20000;
// car.name = "Tesla";
// delete car.id




// const cars = [
//    {
//       id: 1,
//       name: "Range Rover",
//       mileage: 10000,
//    },
//    {
//       id: 2,
//       name: "Tesla",
//       mileage: 20000,
//    },
//    {
//       id: 3,
//       name: "BMW",
//       mileage: 30000,
//    }
// ]

// const res = cars.filter((car) => car.mileage >= 20000)
// console.log(res[0].id)

//? API


//? promise

// const pr = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("task is done ")
//    }, 2000)
// })

// pr.then((res) =>{
//    console.log(res)
// }).catch((err) => {
//    console.log(err)
// }).finally(() => {
//    console.log("finally")
// })

const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
   const api = "https://api.github.com/users/hudairyounas";
   const req= fetch(api)
   req.then((res) => {
      return res.json()      
   }).then((data) => {
      console.log(data)
   })
})

//? JSON
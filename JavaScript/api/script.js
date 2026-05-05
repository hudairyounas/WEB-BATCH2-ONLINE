// console.log("first");

// setTimeout(() => {
// for (let i = 0; i < 6; i++) {
//   console.log(i);
// }
// }, 2000);

// console.log("end");

// promise


// console.log("first")



// const pr = new Promise((resolve,reject) =>{
//     let data = false;

//     if (data) {
//         setTimeout(() => {
//             resolve("data is resolved");
//         }, 2000);
//     }else{
//         setTimeout(() => {
//             reject("data is rejected");
//         }, 2000);
//     }
// });

// pr.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })

// console.log("end")


// const username = document.getElementById("username");
// const profilePic = document.getElementById("profile-pic");

// function getGithubData() {
//     let data = fetch("https://api.github.com/users/hudairyounas");

//     data.then((res) => {
//         return res.json();
//     }).then((data) => {
//         console.log("json data ", data);
//         username.textContent = data.bio;
//         profilePic.src = data.avatar_url;
//     }).catch((error) => {
//         console.log("error ", error);
//     })
// }

// getGithubData()
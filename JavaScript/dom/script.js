// let heading  = document.getElementsByTagName("h1")[0]
// let heading  = document.getElementById("heading");
// let heading  = document.getElementsByClassName("heading");
// let className = document.getElementsByClassName("headingClass");
// let IdName = document.getElementById("headingID")
// // console.log(className[1])
// IdName.style.background = "red"
// console.log(IdName)

const submitBtn = document.getElementById("submitBtn")

submitBtn.addEventListener("click", () => {
    const username = document.getElementById("username");
    if (username.type === "text") {
        username.type = "password"
        submitBtn.textContent = "Show Password"
    }
    else {
        username.type = "text"
        submitBtn.textContent = "Hide Password"
    }
})



// console.log(username)
// console.log(submitBtn)
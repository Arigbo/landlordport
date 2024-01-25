// fetch('index.json')
//     .then(res => res.json())
//     .then(data => console.log(data))
// // RULE SET FOR LOGININ
// let logined = localStorage.getItem("login")
// function login(){
//     for (let id of data) {
//         if (document.querySelector("#loginname").value == id.name && document.querySelector("#loginpassword").value == id.password) {
//             document.querySelector(".portfolio_sorl").classList.add("hide");
//             document.querySelector(".portfolio_welcome").classList.remove("hide")
//             console.log("correct");
//             localStorage.setItem("name", findNameById(identity, document.querySelector("#loginname").value))
//             return localStorage.setItem("login", "logined");
    
//         }
//         else if (document.querySelector("#loginname").value == id.name && document.querySelector("#loginpassword").value !== id.password) {
//             console.log("Not ", document.querySelector("#loginname").value, "'s password");
//             document.querySelector(".ogmssg").innerHTML = "OG HOW FAR NAW!, YOU WAWN WHINE ME PASSWORD NAW";
//         }
//         else if (document.querySelector("#loginname").value !== id.name && document.querySelector("#loginpassword").value == id.password) {
//             console.log("Not ", document.querySelector("#loginpassword").value, "'s name");
//             document.querySelector(".ogmssg").innerHTML = "OG HOW FAR NAW!, NAME NO BALANCE NAW!!!!!";
//         }
//         else if (document.querySelector("#loginname").value.trim() == "" && document.querySelector("#loginpassword").value.trim() == "") {
//             console.log("input somerhing");
//             document.querySelector(".ogmssg").innerHTML = "OG HOW FAR NAW!!!!";
//         }
//         else {
//             document.querySelector(".ogmssg").innerHTML = "OG HOW FAR NAW!, INPUT NO BALANCE WITH WETIN YOU PASTE NAW!!"
//             console.log("not correct");
//         }
//     }
    
// }

// if (logined && logined === "logined") {
//     document.querySelector(".portfolio_sorl").classList.add("hide");
//     console.log("logged");
// }
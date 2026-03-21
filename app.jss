// PAGE ELEMENTS

const loginPage = document.getElementById("loginPage")
const signupPage = document.getElementById("signupPage")
const setupPage = document.getElementById("setupPage")
const appPage = document.getElementById("appPage")


// LOGIN BUTTON

document.getElementById("loginBtn").onclick = function(){

let user = document.getElementById("loginUsername").value
let pass = document.getElementById("loginPassword").value

let savedUser = localStorage.getItem("username")
let savedPass = localStorage.getItem("password")

if(user === savedUser && pass === savedPass){

loginPage.classList.add("hidden")
appPage.classList.remove("hidden")

loadProfile()

}else{

alert("Wrong username or password")

}

}



// GO TO SIGNUP

document.getElementById("goSignup").onclick = function(){

loginPage.classList.add("hidden")
signupPage.classList.remove("hidden")

}



// BACK TO LOGIN

document.getElementById("backLogin").onclick = function(){

signupPage.classList.add("hidden")
loginPage.classList.remove("hidden")

}



// SIGNUP

document.getElementById("signupBtn").onclick = function(){

let user = document.getElementById("signupUsername").value
let pass = document.getElementById("signupPassword").value

if(user === "" || pass === ""){
alert("Fill all fields")
return
}

localStorage.setItem("username", user)
localStorage.setItem("password", pass)

signupPage.classList.add("hidden")
setupPage.classList.remove("hidden")

}
// PROFILE SETUP SAVE

document.getElementById("finishSetup").onclick = function(){

let name = document.getElementById("nameInput").value
let gender = document.getElementById("genderInput").value
let bio = document.getElementById("bioInput").value

if(name === "" || gender === ""){
alert("Fill required fields")
return
}

// AVATAR SELECT

let avatar = "assets/boy.png"

if(gender === "female"){
avatar = "assets/girl.png"
}

// SAVE DATA

localStorage.setItem("name", name)
localStorage.setItem("bio", bio)
localStorage.setItem("gender", gender)
localStorage.setItem("avatar", avatar)

// OPEN APP

setupPage.classList.add("hidden")
appPage.classList.remove("hidden")

loadProfile()

}



// LOAD PROFILE DATA

function loadProfile(){

let name = localStorage.getItem("name")
let bio = localStorage.getItem("bio")
let avatar = localStorage.getItem("avatar")

if(!name) return

document.getElementById("menuName").innerText = name
document.getElementById("menuBio").innerText = bio

let avatarBox = document.getElementById("menuAvatar")

if(avatarBox){
avatarBox.style.backgroundImage = "url(" + avatar + ")"
}

}

// MENU TOGGLE

document.getElementById("menuBtn").onclick = function(){

let menu = document.getElementById("menu")

if(menu.style.left === "0px"){
menu.style.left = "-260px"
}else{
menu.style.left = "0px"
}

}



// OPEN CHAT

document.getElementById("chat1").onclick = function(){

document.getElementById("chatList").classList.add("hidden")
document.getElementById("chatScreen").classList.remove("hidden")

}



// BACK TO CHAT LIST

document.getElementById("backBtn").onclick = function(){

document.getElementById("chatScreen").classList.add("hidden")
document.getElementById("chatList").classList.remove("hidden")

}



// SEND MESSAGE

document.getElementById("sendBtn").onclick = function(){

let input = document.getElementById("msgInput")

let text = input.value

if(text === "") return

let msg = document.createElement("div")
msg.className = "bubble me"
msg.innerText = text

document.getElementById("messages").appendChild(msg)

input.value = ""

// AUTO REPLY

setTimeout(function(){

let reply = document.createElement("div")
reply.className = "bubble other"
reply.innerText = "Ok 👍"

document.getElementById("messages").appendChild(reply)

},1000)

}

// PASSCODE SYSTEM

let passcode = ""
let savedPass = "1234"   // default passcode


// OPEN PASSCODE SCREEN

function openPasscode(){

document.getElementById("appPage").classList.add("hidden")
document.getElementById("passcodeScreen").classList.remove("hidden")

updateDots()

}



// KEYPAD BUTTONS

let keys = document.querySelectorAll(".keypad button")

keys.forEach(function(btn){

btn.onclick = function(){

let val = btn.innerText

if(val === "⌫"){

passcode = passcode.slice(0,-1)

}else if(val === "←"){

document.getElementById("passcodeScreen").classList.add("hidden")
document.getElementById("appPage").classList.remove("hidden")

passcode = ""
updateDots()
return

}else{

if(passcode.length < 4){
passcode += val
}

}

updateDots()

if(passcode.length === 4){

checkPass()

}

}

})



// CHECK PASSCODE

function checkPass(){

if(passcode === savedPass){

document.getElementById("passcodeScreen").classList.add("hidden")
document.getElementById("appPage").classList.remove("hidden")

passcode = ""

}else{

alert("Wrong Passcode")
passcode = ""
updateDots()

}

}



// UPDATE DOTS

function updateDots(){

let dots = document.getElementById("passDots")

dots.innerHTML = ""

for(let i=0;i<4;i++){

let d = document.createElement("div")

d.style.width="12px"
d.style.height="12px"
d.style.borderRadius="50%"
d.style.background = i < passcode.length ? "#fff" : "#555"

dots.appendChild(d)

}

}

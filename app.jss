let currentChat = '';
const replies = ["Haha nice one! 😂","Really? That's cool 😲","Sounds good 👍","What do you think? 🤔","See you soon! 👋","Awesome! 🔥","No way! 😱","Love that! ❤️","Tell me more! 📖"];

function showPage(pageId){
    document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

function login(){
    const username = document.getElementById('loginUser').value.trim();
    const password = document.getElementById('loginPass').value;
    
    const savedUser = localStorage.getItem('username');
    const savedPass = localStorage.getItem('password');
    const name = localStorage.getItem('name');

    if(username === savedUser && password === savedPass && savedUser && savedPass){
        if(name){
            showPage('chatPage');
        } else {
            showPage('profilePage');
        }
    } else { 
        alert('❌ Wrong credentials!');
        document.getElementById('loginUser').value = '';
        document.getElementById('loginPass').value = '';
    }
}

function createAccount(){
    const username = document.getElementById('loginUser').value.trim();
    const password = document.getElementById('loginPass').value;
    
    if(!username || !password){ 
        alert('❌ Please enter username & password!');
        return; 
    }
    
    const savedUser = localStorage.getItem('username');
    if(savedUser){
        alert('❌ Account already exists! Please login.');
        return;
    }
    
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    showPage('profilePage');
}

function saveProfile(){
    const name = document.getElementById('nameInput').value.trim();
    const gender = document.getElementById('genderInput').value;
    
    if(!name || gender === ''){ 
        alert('❌ Please fill all fields!');
        return; 
    }
    
    localStorage.setItem('name', name);
    localStorage.setItem('gender', gender);
    alert('✅ Profile saved!');
    showPage('chatPage');
}

function openChat(username){
    currentChat = username;
    document.getElementById('chatUserName').innerText = `Chat with ${username}`;
    showPage('chatUI');
    loadChatHistory(username);
}

function backInbox(){ showPage('chatPage'); }

function sendMessage(){
    const input = document.getElementById('msgInput');
    const text = input.value.trim();
    if(!text) return;

    const msg = document.createElement('div');
    msg.className = 'message me';
    msg.textContent = text;
    document.getElementById('messages').appendChild(msg);
    
    saveChatMessage(currentChat, 'me', text);
    input.value = '';
    scrollToBottom();
    setTimeout(typingReply, 800);
}

function handleKey(event){
    if(event.key === 'Enter' && !event.shiftKey){
        event.preventDefault();
        sendMessage();
    }
}

function scrollToBottom(){
    const messages = document.getElementById('messages');
    messages.scrollTop = messages.scrollHeight;
}

function typingReply(){
    const typing = document.createElement('div');
    typing.className = 'typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    document.getElementById('messages').appendChild(typing);
    scrollToBottom();
    
    setTimeout(() => {
        typing.remove();
        autoReply();
    }, 1800);
}

function autoReply(){
    const reply = replies[Math.floor(Math.random() * replies.length)];
    const replyMsg = document.createElement('div');
    replyMsg.className = 'message other';
    replyMsg.textContent = reply;
    
    saveChatMessage(currentChat, 'other', reply);
    document.getElementById('messages').appendChild(replyMsg);
    scrollToBottom();
}

function saveChatMessage(chatWith, sender, message){
    let chatHistory = JSON.parse(localStorage.getItem('chatHistory') || '{}');
    if(!chatHistory[chatWith]) chatHistory[chatWith] = [];
    chatHistory[chatWith].push({sender, message, time: new Date().toISOString()});
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}

function loadChatHistory(chatWith){
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML = `
        <div class="message other">Hey 👋 What's up?</div>
        <div class="message me">Hi! All good 😊</div>
        <div class="message other">How's your day going?</div>
    `;
    scrollToBottom();
}

// PERFECT START
window.onload = function() {
    const savedUser = localStorage.getItem('username');
    const name = localStorage.getItem('name');
    
    if(!savedUser){
        showPage('loginPage');
    } else if(!name){
        showPage('profilePage');
    } else {
        showPage('chatPage');
    }
    
    document.querySelectorAll('.chat-container').forEach(c => {
        c.style.scrollBehavior = 'smooth';
    });
};

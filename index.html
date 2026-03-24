<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Piku Chat - Storage Fixed</title>
    <style>
        * { box-sizing: border-box; margin:0; padding:0; }
        html, body { height:100vh; overflow:hidden; font-family: system-ui; background: #0f0f10; color: white; }
        .container { height:100%; position:relative; overflow:hidden; }
        .section { position:absolute; top:0; left:0; width:100%; height:100%; padding:25px; overflow-y:auto; transition:all 0.3s; background:#0f0f10; }
        .section.hidden { display:none !important; }
        input, select, textarea { width:100%; padding:15px; margin:15px 0; border-radius:15px; border:none; background:#1c1c1e; color:white; font-size:16px; }
        button { padding:15px; border:none; border-radius:25px; background:linear-gradient(45deg, #007aff, #0056cc); color:white; font-size:16px; font-weight:600; cursor:pointer; width:100%; margin:10px 0; }
        button:hover { transform:translateY(-2px); }
        .createBtn { background:linear-gradient(45deg, #34c759, #28a745) !important; }
        .backBtn { background:#2c2c2e !important; margin-top:10px; }
        .status { background:#1c1c1e; padding:10px; border-radius:10px; margin:10px 0; font-size:14px; }
        .chatItem { display:flex; align-items:center; padding:15px; border-bottom:1px solid #2c2c2e; cursor:pointer; border-radius:12px; margin:5px 0; }
        .chatItem:hover { background:#1c1c1e; }
        .avatar { width:50px; height:50px; border-radius:50%; margin-right:15px; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:18px; }
        .online { width:10px; height:10px; background:#34c759; border-radius:50%; margin-right:8px; }
        .chat-container { height:calc(100% - 140px); overflow-y:auto; padding:10px; }
        .message { padding:12px 16px; border-radius:22px; margin:8px 0; max-width:75%; }
        .me { background:linear-gradient(45deg, #007aff, #0056cc); margin-left:auto; }
        .other { background:#2c2c2e; }
        .chatInput { display:flex; gap:10px; padding:10px; background:#1c1c1e; border-radius:25px; margin-bottom:20px; }
        .chatInput input { flex:1; background:transparent; color:white; border:none; outline:none; }
    </style>
</head>
<body>
<div class="container">

    <!-- LOGIN SCREEN -->
    <div class="section" id="login">
        <h2>🔐 Piku Chat</h2>
        <div class="status" id="storageStatus">Checking storage...</div>
        <input id="loginUser" placeholder="Username">
        <input id="loginPass" type="password" placeholder="Password">
        <button onclick="doLogin()">Log in</button>
        <button class="createBtn" onclick="showCreate()">Create Account</button>
        <button onclick="showStorage()" class="backBtn">📊 View Storage</button>
    </div>

    <!-- CREATE ACCOUNT -->
    <div class="section hidden" id="create">
        <button class="backBtn" onclick="showLogin()">← Back</button>
        <h2>New Account</h2>
        <input id="newUser" placeholder="Username">
        <input id="newPass" type="password" placeholder="Password">
        <button onclick="saveNewAccount()">Create & Continue</button>
    </div>

    <!-- PROFILE -->
    <div class="section hidden" id="profile">
        <button class="backBtn" onclick="showLogin()">← Back</button>
        <h2>Profile Setup</h2>
        <input id="userName" placeholder="Your Name">
        <select id="userGender">
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        <button onclick="saveProfile()">Save Profile</button>
    </div>

    <!-- CHATS -->
    <div class="section hidden" id="chats">
        <button class="backBtn" onclick="logout()">← Logout</button>
        <h2>💬 Chats</h2>
        <div class="chatItem" onclick="openChat('Alex')">
            <div class="avatar" style="background: #007aff;">A</div>
            <div><div><span class="online"></span>Alex</div><small>Hey bro!</small></div>
        </div>
        <div class="chatItem" onclick="openChat('Sara')">
            <div class="avatar" style="background: #ff6b6b;">S</div>
            <div><div>Sara</div><small>Where are you?</small></div>
        </div>
    </div>

    <!-- CHAT -->
    <div class="section hidden" id="chat">
        <button class="backBtn" onclick="backChats()">← Chats</button>
        <h2 id="chatName">Chat</h2>
        <div id="messages" class="chat-container"></div>
        <div class="chatInput">
            <input id="chatInput" placeholder="Type..." onkeypress="if(event.key=='Enter') sendMsg()">
            <button onclick="sendMsg()">Send</button>
        </div>
    </div>

    <!-- STORAGE DEBUG -->
    <div class="section hidden" id="storage">
        <button class="backBtn" onclick="showLogin()">← Back</button>
        <h2>📊 Storage Debug</h2>
        <div id="storageInfo" class="status"></div>
        <button onclick="clearStorage()">🗑️ Clear All Data</button>
    </div>

</div>

<script>
// GLOBAL VARS
let currentChatUser = '';

// === SCREEN NAVIGATION ===
function showLogin() { showScreen('login'); updateStatus(); }
function showCreate() { showScreen('create'); }
function showProfile() { showScreen('profile'); }
function showChats() { showScreen('chats'); }
function showChat() { showScreen('chat'); }
function showStorage() { showScreen('storage'); updateStorageInfo(); }

function showScreen(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

// === STORAGE FUNCTIONS ===
function saveData(key, value) {
    localStorage.setItem(key, value);
    console.log(`✅ SAVED: ${key} = ${value}`);
}

function getData(key) {
    return localStorage.getItem(key);
}

function updateStatus() {
    const status = document.getElementById('storageStatus');
    const hasAccount = getData('username');
    if (hasAccount) {
        status.innerHTML = `👤 Account exists: ${hasAccount}<br>✅ Profile: ${getData('profileDone') === 'true' ? 'Complete' : 'Pending'}`;
        status.style.background = '#34c759';
    } else {
        status.textContent = 'No account found. Create new!';
        status.style.background = '#ff6b6b';
    }
}

function updateStorageInfo() {
    const info = document.getElementById('storageInfo');
    info.innerHTML = `
        <strong>All Storage Data:</strong><br>
        Username: ${getData('username') || 'None'}<br>
        Password: ${getData('password') || 'None'}<br>
        Name: ${getData('userName') || 'None'}<br>
        Gender: ${getData('userGender') || 'None'}<br>
        Profile: ${getData('profileDone') || 'None'}<br><br>
        <strong>Total Items:</strong> ${localStorage.length}
    `;
}

function clearStorage() {
    localStorage.clear();
    alert('🗑️ All data cleared!');
    showLogin();
}

// === LOGIN SYSTEM ===
function doLogin() {
    const user = document.getElementById('loginUser').value;
    const pass = document.getElementById('loginPass').value;
    
    const savedUser = getData('username');
    const savedPass = getData('password');
    
    if (user === savedUser && pass === savedPass) {
        const profileDone = getData('profileDone');
        if (profileDone === 'true') {
            showChats();
        } else {
            showProfile();
        }
    } else {
        alert('❌ Wrong username/password!');
    }
}

function saveNewAccount() {
    const user = document.getElementById('newUser').value;
    const pass = document.getElementById('newPass').value;
    
    if (!user || !pass) {
        alert('❌ Fill all fields!');
        return;
    }
    
    if (getData('username')) {
        alert('❌ Account already exists!');
        showLogin();
        return;
    }
    
    saveData('username', user);
    saveData('password', pass);
    showProfile();
}

function saveProfile() {
    const name = document.getElementById('userName').value;
    const gender = document.getElementById('userGender').value;
    
    if (!name || !gender) {
        alert('❌ Complete profile!');
        return;
    }
    
    saveData('userName', name);
    saveData('userGender', gender);
    saveData('profileDone', 'true');
    showChats();
    alert('✅ Profile saved! Welcome!');
}

// === CHAT SYSTEM ===
function openChat(name) {
    currentChatUser = name;
    document.getElementById('chatName').textContent = name;
    document.getElementById('messages').innerHTML = '<div class="message other">Hey! 👋</div>';
    showChat();
}

function backChats() {
    showChats();
}

function logout() {
    if(confirm('Logout?')) {
        localStorage.clear();
        showLogin();
    }
}

function sendMsg() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;
    
    const msgs = document.getElementById('messages');
    const myMsg = document.createElement('div');
    myMsg.className = 'message me';
    myMsg.textContent = text;
    msgs.appendChild(myMsg);
    
    input.value = '';
    
    setTimeout(() => {
        const reply = document.createElement('div');
        reply.className = 'message other';
        reply.textContent = 'Nice message! 😊';
        msgs.appendChild(reply);
    }, 500);
}

// === START ===
window.onload = function() {
    console.log('🚀 Piku Chat Starting...');
    showLogin();
    updateStatus();
};
</script>
</body>
</html>

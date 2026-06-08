let history = [];

alert("DeepJarvis AI Loaded successfully");

let username = localStorage.getItem("jarvis_user");

if(!username){

    username = prompt(
        "Welcome to DeepJarvis AI\n\nWhat should I call you?"
    );

    localStorage.setItem(
        "jarvis_user",
        username
    );
}

if(
localStorage.getItem("theme")
==="light"
){
document.body.classList.add("light");
}

async function askAI(message){

return jarvisReply(message);
    
}

let notes =
JSON.parse(
    localStorage.getItem(
        "jarvis_notes"
    )
) || [];

let tasks =
JSON.parse(
    localStorage.getItem(
        "jarvis_tasks"
    )
) || [];

window.onload = function(){

add(
"JARVIS: Welcome " +
username +
" 🚀",
"bot"
);

}

function add(text, cls){

    let d =
    document.createElement("div");

    d.className = cls;

    d.innerHTML = text;

    document
    .getElementById("messages")
    .appendChild(d);

    document
    .getElementById("messages")
    .scrollTop =
    document
    .getElementById("messages")
    .scrollHeight;
}

function jarvisReply(msg){

    msg = msg.toLowerCase();

if(msg.includes("clear chat")){

document.getElementById(
"messages"
).innerHTML="";

return "Chat Cleared.";
}

if(msg.startsWith("change name ")){

let newName =
msg.replace(
"change name ",
""
);

username = newName;

localStorage.setItem(
"jarvis_user",
newName
);

return "Name changed to " +
newName;
}

if(msg.includes("play music")){

window.open(
"https://open.spotify.com"
);

return "Opening Spotify 🎵";
}

if(msg.startsWith("wiki ")){

let query =
msg.replace("wiki ","");

window.open(
"https://en.wikipedia.org/wiki/" +
query
);

return "Opening Wikipedia...";
}

    // Simple calculations
if(
    msg.includes("+") ||
    msg.includes("-") ||
    msg.includes("*") ||
    msg.includes("/")
){
    try{
        let result = Function(
            '"use strict"; return (' + msg + ')'
        )();

        if(!isNaN(result)){
            return "Answer = " + result;
        }
    }
    catch(e){}
}

if(msg.includes("history")){

    if(history.length === 0){
        return "No calculation history found.";
    }

    return history.join("<br>");
}

    if(msg.includes("toss")){

    return Math.random() < 0.5
    ? "🪙 Heads"
    : "🪙 Tails";

}

   if(msg.includes("light mode")){

document.body.classList.add(
"light"
);

localStorage.setItem(
"theme",
"light"
);

return "☀️ Light Mode Enabled";
}

if(msg.includes("dark mode")){

document.body.classList.remove(
"light"
);

localStorage.setItem(
"theme",
"dark"
);

return "🌙 Dark Mode Enabled";
}
    
    if(msg.includes("gtu")){

    window.open(
        "https://www.gtu.ac.in"
    );

    return "Opening GTU...";
}

if(msg.includes("linkedin")){

    window.open(
        "https://linkedin.com"
    );

    return "Opening LinkedIn...";
}

if(msg.includes("canva")){

    window.open(
        "https://canva.com"
    );

    return "Opening Canva...";
}

    if(msg.includes("who are you")){

    return `
🤖 DeepJarvis AI

Creator: Deep Dharva

Version: 2.0

Status: Online

Mission:
Help users with tasks,
calculations, websites,
and future AI features.
`;

}
    
    if(msg.includes("dice") || msg.includes("roll")){

    return "🎲 Dice: " +
    (Math.floor(Math.random()*6)+1);

}

        if(msg.startsWith("note ")){

    let note =
    msg.replace("note ","");

    notes.push(note);

    localStorage.setItem(
        "jarvis_notes",
        JSON.stringify(notes)
    );

    return "📝 Note saved!";
}

if(msg.includes("show notes")){

    notes =
    JSON.parse(
        localStorage.getItem(
            "jarvis_notes"
        )
    ) || [];

    if(notes.length===0)
        return "No notes found.";

    return notes.join(" | ");
}

if(msg.includes("clear notes")){

notes = [];

localStorage.setItem(
"jarvis_notes",
JSON.stringify(notes)
);

return "All notes deleted.";
}

    if(msg.startsWith("add task ")){

    let task =
    msg.replace(
        "add task ",
        ""
    );

    tasks.push(task);

    localStorage.setItem(
        "jarvis_tasks",
        JSON.stringify(tasks)
    );

    return "✅ Task added!";
}

if(msg.includes("show tasks")){

    tasks =
    JSON.parse(
        localStorage.getItem(
            "jarvis_tasks"
        )
    ) || [];

    if(tasks.length===0)
        return "No tasks.";

    return tasks.join(" | ");
}

if(msg.includes("clear tasks")){

tasks = [];

localStorage.setItem(
"jarvis_tasks",
JSON.stringify(tasks)
);

return "All tasks deleted.";
}

if(msg.includes("battery")){

navigator.getBattery()
.then(function(battery){

alert(
"Battery: " +
Math.round(
battery.level*100
) + "%"
);

});

return "Checking battery...";
}

    if(msg.startsWith("sqrt ")){

    let n =
    parseFloat(
        msg.replace(
            "sqrt ",
            ""
        )
    );

    return "√" + n +
    " = " +
    Math.sqrt(n);
}

    if(msg.startsWith("percentage ")){

    let p =
    msg.replace(
        "percentage ",
        ""
    );

    let parts =
    p.split(" of ");

    if(parts.length===2){

        let percent =
        parseFloat(parts[0]);

        let total =
        parseFloat(parts[1]);

        return (
            percent*total/100
        ).toString();
    }
}

        

if(msg.includes("random number")){
    return "Random Number: " +
    Math.floor(Math.random()*1000);
}

if(msg.includes("who made you")){
    return "I was created by Deep Dharva 🚀";
}

if(msg.includes("who is deep?")){
    return "Deep is my creator and future AI entrepreneur.";
}

if(msg.includes("how are you")){
    return "All systems operational ⚡";
}

if(msg.includes("thank you")){
    return "You're welcome 😎";
}

if(msg.includes("bye")){
    return "Goodbye. Have a productive day 🚀";
}

    if(msg.includes("hello") || msg.includes("hi")){
    return "Hello " + username + " 👋 How can I help you today?";
}

    if(msg.includes("your name")){
        return "I am DeepJarvis AI, your futuristic assistant.";
    }

    if(msg.includes("time")){
        return new Date().toLocaleTimeString();
    }

    if(msg.includes("date")){
        return new Date().toLocaleDateString();
    }

        if(msg.includes("open jiohotstar")){
    window.open("https://www.jiohotstar.com");
    return "Opening JioHotstar 🎬";
}

if(msg.includes("open sonyliv")){
    window.open("https://www.sonyliv.com");
    return "Opening SonyLIV 📺";
}

if(msg.includes("open spotify")){
    window.open("https://open.spotify.com");
    return "Opening Spotify 🎵";
}

if(msg.includes("open gmail")){
    window.open("https://mail.google.com");
    return "Opening Gmail 📧";
}

if(msg.includes("open chatgpt")){
    window.open("https://chatgpt.com");
    return "Opening ChatGPT 🤖";
}

if(msg.includes("open gemini")){
    window.open("https://gemini.google.com");
    return "Opening Gemini ✨";
}

if(msg.includes("open whatsapp")){
    window.open("https://web.whatsapp.com");
    return "Opening WhatsApp 💬";
}

if(msg.includes("open facebook")){
    window.open("https://facebook.com");
    return "Opening Facebook 🌐";
}

if(msg.includes("open x")){
    window.open("https://x.com");
    return "Opening X (Twitter) 🐦";
}

if(msg.includes("open twitter")){
    window.open("https://x.com");
    return "Opening X (Twitter) 🐦";
}

if(msg.includes("open maps")){
    window.open("https://maps.google.com");
    return "Opening Google Maps 🗺️";
}
    
    if(msg.includes("open youtube")){
        window.open("https://youtube.com");
        return "Opening YouTube...";
    }

    if(msg.includes("open google")){
        window.open("https://google.com");
        return "Opening Google...";
    }

    if(msg.includes("open github")){
        window.open("https://github.com");
        return "Opening GitHub...";
    }

    if(msg.includes("open instagram")){
        window.open("https://instagram.com");
        return "Opening Instagram...";
    }
        
   if(msg.startsWith("search ")){

    let query = msg.replace("search ","");

    window.open(
        "https://www.google.com/search?q=" +
        encodeURIComponent(query)
    );

    return "Searching Google for: " + query;
}

// Joke
if(msg.includes("joke")){
    const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs 😆",
        "I would tell you a UDP joke, but you might not get it 😂",
        "Why did Python go to school? To improve its class 🐍"
    ];
    return jokes[Math.floor(Math.random()*jokes.length)];
}

// Motivation
if(msg.includes("motivation")){
    const quotes = [
        "Success is the sum of small efforts repeated daily.",
        "Dream big. Start small. Act now.",
        "Discipline beats motivation."
    ];
    return quotes[Math.floor(Math.random()*quotes.length)];
}

// Random Fact
if(msg.includes("fact")){
    const facts = [
        "Honey never spoils 🍯",
        "Octopuses have three hearts ❤️",
        "Bananas are berries but strawberries are not 🍌"
    ];
    return facts[Math.floor(Math.random()*facts.length)];
}

// IPL
if(msg.includes("ipl")){
    return "IPL information module will be connected with live data soon 🏏";
}

// News
if(msg.includes("news")){
    return "News module will be added soon 📰";
}

// Weather
if(msg.includes("weather")){
    return "Weather module will be connected soon ☁️";
}

return "I understand: " + msg + ". AI backend will be connected soon.";
}

function typeReply(text){

let i = 0;

let div =
document.createElement("div");

div.className = "bot";

document
.getElementById("messages")
.appendChild(div);

let interval =
setInterval(()=>{

div.innerHTML += text.charAt(i);

i++;

if(i >= text.length){
clearInterval(interval);
}

},20);

}

function speak(text){

let speech =
new SpeechSynthesisUtterance(text);

speech.rate = 1;
speech.pitch = 1;

speechSynthesis.speak(speech);

}

async function sendMsg(){

let input =
document.getElementById("msg");

let text =
input.value.trim();

if(text==="") return;

add(
"YOU: " + text,
"user"
);

input.value="";

add(
"JARVIS is thinking...",
"bot"
);

let msgs =
document.querySelectorAll(".bot");

let loading =
msgs[msgs.length-1];

try{

let reply =
await askAI(text);

// Random thinking time
let thinkingTime =
Math.floor(
Math.random()*3000
) + 2000; // 2 to 5 sec

setTimeout(()=>{

loading.remove();

typeReply(
"JARVIS: " + reply
);

speak(reply);

}, thinkingTime);

}
catch{

loading.remove();

add(
"JARVIS: Backend Offline",
"bot"
);

}

}
document
.getElementById("msg")
.addEventListener("keypress",function(e){

    if(e.key==="Enter"){
        sendMsg();
    }

});

function startVoice(){

    if(!('webkitSpeechRecognition' in window)){

        alert(
            "Voice recognition not supported."
        );

        return;
    }

    let recognition =
    new webkitSpeechRecognition();

    recognition.lang = "en-US";

    recognition.start();

    recognition.onresult = function(event){

        document
        .getElementById("msg")
        .value =
        event.results[0][0].transcript;

        sendMsg();
    };
}

// Visitor Counter

let visits =
localStorage.getItem("visits") || 0;

visits++;

localStorage.setItem(
"visits",
visits
);

document.getElementById(
"visitorCount"
).innerHTML =
"Visits: " + visits;

function toggleTheme(){

document.body.classList.toggle(
"light"
);

}

function clearChat(){

document.getElementById(
"messages"
).innerHTML =
'<div class="bot">JARVIS: System Online.</div>';

}

function showHelp(){

document
.getElementById("helpModal")
.style.display = "flex";

}

function closeHelp(){

document
.getElementById("helpModal")
.style.display = "none";

}

function add(text, cls){

    let d = document.createElement("div");

    d.className = cls;

    d.innerText = text;

    document
    .getElementById("messages")
    .appendChild(d);

    document
    .getElementById("messages")
    .scrollTop =
    document.getElementById("messages")
    .scrollHeight;
}

function jarvisReply(msg){

    msg = msg.toLowerCase();

    if(msg.includes("hello") || msg.includes("hi")){
        return "Hello Deep 👋 How can I help you today?";
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

    if(msg.includes("youtube")){
        window.open("https://youtube.com");
        return "Opening YouTube...";
    }

    if(msg.includes("google")){
        window.open("https://google.com");
        return "Opening Google...";
    }

    if(msg.includes("github")){
        window.open("https://github.com");
        return "Opening GitHub...";
    }

    if(msg.includes("instagram")){
        window.open("https://instagram.com");
        return "Opening Instagram...";
    }

    if(msg.includes("weather")){
        return "Weather module will be connected soon.";
    }

    return "I understand: " + msg + ". AI backend will be connected soon.";
}

function sendMsg(){

    let input =
    document.getElementById("msg");

    let text = input.value.trim();

    if(text === "") return;

    add("YOU: " + text,"user");

    input.value = "";

    add("JARVIS is thinking...","bot");

    setTimeout(()=>{

        let msgs =
        document.querySelectorAll(".bot");

        msgs[msgs.length-1].remove();

        add(
            "JARVIS: " +
            jarvisReply(text),
            "bot"
        );

    },1000);
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

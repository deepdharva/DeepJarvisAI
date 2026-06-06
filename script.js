function add(text, cls){

    let d = document.createElement("div");

    d.className = cls;

    d.innerText = text;

    document
    .getElementById("messages")
    .appendChild(d);

}

function sendMsg(){

    let v =
    document.getElementById("msg").value;

    if(!v) return;

    add("YOU: " + v, "user");

    add(
        "JARVIS: Command received -> " + v,
        "bot"
    );

    document
    .getElementById("msg")
    .value = "";

}

function startVoice(){

    alert(
        "🎤 Voice Module Coming Soon!"
    );

}

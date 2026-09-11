const chat = document.getElementById("chat");
const input = document.getElementById("msg");
const send = document.getElementById("send");

function add(text, who) {
    const div = document.createElement("div");
    div.className = "msg " + who;
    div.innerText = text;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

add("J.A.R.V.I.S: Systems online. How may I assist you, Boss?", "ai");

send.onclick = processMessage;

input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        processMessage();
    }
});

function processMessage(){

    const text = input.value.trim();

    if(!text) return;

    add("YOU: " + text, "user");

    input.value = "";

    const aiMsg = document.createElement("div");
    aiMsg.className = "msg ai";
    aiMsg.innerText = "J.A.R.V.I.S: Processing...";
    chat.appendChild(aiMsg);

    setTimeout(() => {

        let reply = "Command not recognized.";

        const cmd = text.toLowerCase();

        if(cmd.includes("hello")){
            reply = "Hello Boss.";
        }
        else if(cmd.includes("time")){
            reply = "Current time is " +
            new Date().toLocaleTimeString();
        }
        else if(cmd.includes("date")){
            reply = "Today's date is " +
            new Date().toLocaleDateString();
        }
        else if(cmd.includes("jarvis")){
            reply = "At your service, Boss.";
        }

        aiMsg.innerText = "J.A.R.V.I.S: " + reply;

    },1000);
}

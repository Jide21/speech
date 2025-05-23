const textarea = document.querySelector("textarea"),
voiceList = document.querySelector("select"),
speechBtn = document.querySelector("button");
 


let synth = speechSynthesis;
isSpeaking = true;

function voices(){
    for(let voice of synth.getVoices()){
        let selected = voice.name === "Google UK English" ? "selected" : "";
        let option = `<option value="${voice.name}" ${selected} class="form-control">${voice.name} (${voice.lang})</option>`;
        voiceList.insertAdjacentHTML("beforeend", option);

    }
    
}

synth.addEventListener("voiceschanged", voices);

function textToSpeech(text){
     let utternance = new SpeechSynthesisUtterance(text);
     for (let voice of synth.getVoices()){
        if (voice.name === voiceList.value) {
           utternance.voice = voice;
     }
    }
     synth.speak(utternance);
     
}

speechBtn.addEventListener("click", e =>{
    e.preventDefault();
    if(textarea.value !== ""){
        if(!synth.speaking){
            textToSpeech(textarea.value);
        }
        if(textarea.value.length > 80){
            if(isSpeaking){
                synth.resume();
                isSpeaking = false;
                speechBtn.innerText = "Pause Speech"
            }else{
                synth.pause();
                isSpeaking = true;
                speechBtn.innerText = "resume Speech"
               
                
            }
            setInterval(() =>{
               if(!synth.speaking && !isSpeaking){
                isSpeaking = true;
                speechBtn.innerText = "Convert To Speech"
               }
            });
        }else{
            speechBtn.innerText = "Convert to Speech"
        }
        
    }
    

});

function calculator(){
    window.location = "calculator.html";
}

function menu(){
    window.location = "home.html";
}

function move(){
    window.location = "speech.html";
}
function clock(){
    window.location = "time.html";
}

function signup(){
    window.location = "register.php";
}


// const password = document.getElementById("password");
// const background = document.getElementById("background");
// password.addEventListener("input", () => {
//     const input = password.value;
//     const blurValue = 16 - input.length;
//     background.style.filter = 'blur(${blurvalue}px)';
// });
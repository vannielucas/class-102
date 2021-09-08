
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
var TextBox=document.getElementById("TextBox");

function  start(){
    TextBox.innerHTML="hello how are you today?";
recognition.start();
}
recognition.onstart=function(Event){
console.log(Event);
var Content=Event.resolts[0][0].transcript;
TextBox.innerHTML=Content;
console.log (Content);
if(Content=="take my selfie")
{
console.log("taking selfie---");
speak();
}

}

function speak ()
{
    var synth = window.speachSynthesis;
    speak_data ="Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    Webcam.attach(camera);
    setTimeout(function()
{
    take_selfie();
    save();
}, 5000);
}

camera = 
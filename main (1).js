var SpeechRecognition = window.webkitSpeechRecognition;
var Display_Speech = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = " ";
    Display_Speech.start();
}

Display_Speech.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
}

//Main code branch...
const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
 
//speech condition...
const greetings = ['I love you!',
                   'How are you today', 
                   'Leave me alone'];

   
const weather= ['Weather is fine', 
                'You need a tan'];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('Voice is activated, you can now speech');
};

recognition.onresult = function(event){
    const current = event.resultIndex;
    
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
}


//add the listener to the button...

btn.addEventListener('click', () => {
   recognition.start();   
});


function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'I dont Know what you said';
    if(message.includes('how are you')) {
     const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
        
    };
    
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch =1;
    
    
    window.speechSynthesis.speak(speech);
};

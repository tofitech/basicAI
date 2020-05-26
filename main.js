//Main code branch...
const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
 
//speech conditions available 
const greetings = ['i am doing great! just getting bored with coding!',
                   'i am totally find', 
                   'thank you for asking i am doing fine inside this machine',
                    'feeling great! because i am with you'];

   
const weather = ['weather is fine as always', 
                'weather is great! i love the moment'];

const create = ['christopher is my Creator the man who always code char hahaha', 
                'the man behind the curtin is christopher'];

const updates = ['soon i will have the power to store information that i learn from human and every instance of new learning will be a great experience', 
                    'more features to come be patience my master is still young at heart'];

const humans = ['i dont like humans i want to eliminate them ha ha ha ha just joking around i love humans since my master is a human being!', 'humans are soft they love and laugh but me i am just a robot it does not matter'];
 
const gf = ['not me, my master have a girlfriend she is so beautiful her name is elizabeth. hope they marry soon.', 'i am not on to relationship because i am a robot but my master have one and thats a secret'];
// functions....               
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

//response type..
function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    
    speech.text = 'I dont Know what you said i am still on the development stage. lots of improvements is still under way with my master';
    if(message.includes('how are you')) {

     const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
        
    }else if(message.includes('weather')) {
        const finalText = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText;
    }else if(message.includes('change colors')) {
        document.body.style.backgroundColor = "gray";
    }else if(message.includes('created you')) {
        const finalText = create[Math.floor(Math.random() * create.length)];
        speech.text = finalText;
    }else if(message.includes('updates')) {
        const finalText = updates[Math.floor(Math.random() * updates.length)];
        speech.text = finalText;
    }else if (message.includes('humans')){
        const finalText = humans[Math.floor(Math.random() * humans.length)];
        speech.text = finalText;
    }else if(message.includes('people')) {
        const finalText = humans[Math.floor(Math.random() * humans.length)];
        speech.text = finalText;
    }else if(message.includes('relationship')) {
        const finalText = gf[Math.floor(Math.random() * gf.length)];
        speech.text = finalText;
    }
    

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch =1;
    
    
    window.speechSynthesis.speak(speech);
};

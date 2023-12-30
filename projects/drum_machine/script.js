
function playSound(audioId) {
    if (powerOn) { // Check if power is on
        let audioPlay = document.getElementById(audioId);
        
        audioPlay.play();
        updateAudioDisplay(audioPlay.getAttribute('name')); // Update the display with the audio name
    }
}
function updateAudioDisplay(content = '') {
    const display = document.getElementById('display');
    display.textContent = content;
  }
 // Add click event listeners to all buttons with the class "drum-pad"
 let buttons = document.getElementsByClassName("drum-pad");
 for (let i = 0; i < buttons.length; i++) {
     buttons[i].addEventListener("click", function (event) {
         if (powerOn) { // Check if power is on
             let buttonId = event.target.id;
             let audioId = buttonId.slice(0, -5);
             playSound(audioId);
             // Update the power and sound bank display
         }
     });
 }

// Add keydown event listener to the document to detect key presses
document.addEventListener("keydown", function(event) {
    if (powerOn) { // Check if power is on
        let audioId = event.key.toUpperCase();
        var button = document.getElementById(audioId);
        if (button) {
            playSound(audioId);
           // Update the power and sound bank display
        }
    }
});
  
/////end of play function///


  //power switch/////
  const switches = document.querySelectorAll('.button-switch');

   switches.forEach(switchElement => {
    switchElement.addEventListener('click', function() {
        switchElement.classList.toggle('switched');
   });

});

////end of power switch////



/////display content////

// Get references to the elements
const powerSwitch = document.getElementById('switch1');
const soundBankSwitch = document.getElementById('switch2');
const display = document.getElementById('display');

// Initial states for power and sound bank
let powerOn = false;
let soundBank = 'Heater Kit';
let displayTimer;

// Function to update the display text
function updateDisplay(content='') {
    display.textContent = content;
  if (powerOn) {
    const powerText = 'Power On';
    const soundBankText = soundBank === 'Heater Kit' ? 'Heater Kit' : 'Smooth Piano Kit';
    display.textContent = `${powerText} - ${soundBankText}`;
  } else {
    display.textContent = 'Power Off';
    clearTimeout(displayTimer);
    displayTimer = setTimeout(() => {
      display.textContent = '';
    }, 2000); // 2 seconds delay
  }
}

// Toggle Power
powerSwitch.addEventListener('click', function() {
  powerOn = !powerOn;
  updateDisplay();
});

// Toggle Sound Bank
soundBankSwitch.addEventListener('click', function() {
  soundBank = soundBank === 'Heater Kit' ? 'Smooth Piano Kit' : 'Heater Kit';
  updateDisplay();
});

// Initial display setup
updateDisplay();


///end of display


///volume slider/////
 
  const volumeSlider = document.getElementById('volumeSlider');
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const gainNodes = {};

  // Iterate through buttons with class 'drum-pad'
  const buttons1 = document.querySelectorAll('.drum-pad');
  buttons1.forEach(button2 => {
      const buttonId1 = button2.id;
      const audioElement = button2.querySelector('.audio-element');

      if (audioElement) {
          const gainNode = audioContext.createGain();
          gainNode.connect(audioContext.destination);
          gainNodes[buttonId1] = gainNode;

          const audioElementSource = audioContext.createMediaElementSource(audioElement);
          audioElementSource.connect(gainNode);

          // Set initial volume value for each button
          let volume = 0.5;
          gainNode.gain.value = volume;

          // Add event listener for slider input
          volumeSlider.addEventListener('input', () => handleSliderInput(buttonId1));
      }
  });

  function handleSliderInput(buttonId1) {
      // Update volume based on slider position
      const volume = parseFloat(volumeSlider.value);

      // Update gainNode volume for the specific button
      if (gainNodes[buttonId1]) {
          gainNodes[buttonId1].gain.value = volume;
      }
  }
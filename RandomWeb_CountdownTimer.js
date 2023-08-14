let alarmTimeout;

function startAlarm(){
  const messageElement = document.getElementById("message");

  if(messageElement.innerHTML === "Event has started!"){
  const alarmSound = document.getElementById("alarm-sound");
  alarmSound.play();

  document.getElementById("dismiss-button").style.display = "block";

  // Display a notification if the browser supports it
  if (Notification && Notification.permission === "granted") {
    new Notification("Event has started!");
}
clearInterval(alarmTimeout);
  }
}
// Function to dismiss the alarm
function dismissAlarm() {
  const alarmSound = document.getElementById("alarm-sound");
  alarmSound.pause();
  alarmSound.currentTime = 0; // Reset the audio to the beginning
  document.getElementById("dismiss-button").style.display = "none";
  document.getElementById("message").innerHTML = "No date/time added";
  document.getElementById("countdown").innerHTML = " ";
  // Clear the input fields
  document.getElementById("input-date").value = "";
  document.getElementById("input-time").value = "";
}

// Update the countdown every second
const countdownTimer = setInterval(function() {
  
    // Get the input values for the date and time
    const inputDate = document.getElementById("input-date").value;
    const inputTime = document.getElementById("input-time").value;
  document.getElementById("dismiss-button").style.display = "none";

    // Set the countdown date (replace with your desired date and time)
    countdownDate = new Date(inputDate + " " + inputTime);

  // Get the current date and time
  const currentDate = new Date();

  // Calculate the time between now and the countdown date
  const timeDiff = countdownDate.getTime() - currentDate.getTime();

  // Calculate the days, hours, minutes, and seconds
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("message").innerHTML = " ";
  document.getElementById("countdown").innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

  // If the countdown is finished, display a message
  if (isNaN(days)){
    document.getElementById("message").innerHTML = "No date/time added";
    document.getElementById("countdown").innerHTML = " ";
  }
  else if(days < 0){
    if (hours >= 0){
    document.getElementById("message").innerHTML = " ";
    document.getElementById("countdown").innerHTML = `${0} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    }
    else if (hours<0){
        if (minutes >= 0){
            document.getElementById("message").innerHTML = " ";
            document.getElementById("countdown").innerHTML = `${0} days ${0} hours ${minutes} minutes ${seconds} seconds`;
        }
        else if (minutes < 0){
            if(seconds>=0){
                document.getElementById("message").innerHTML = " ";
                document.getElementById("countdown").innerHTML = `${0} days ${0} hours ${0} minutes ${seconds} seconds`;
            }
            else if (seconds<0){
                document.getElementById("message").innerHTML = "Event has started!";
                document.getElementById("countdown").innerHTML = " ";
                startAlarm();
                
        }   
      }
    }
  }
}, 1000);
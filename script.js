//your code here
// Get the clock hands elements
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

// Function to update the clock hands rotation
function updateClock() {
  // Get the current time
  const now = new Date();

  // Calculate the rotation angles for each hand
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const hourRotation = (hours * 30) + (minutes / 2);
  const minuteRotation = (minutes * 6) + (seconds / 10);
  const secondRotation = seconds * 6;

  // Apply the rotation to the clock hands
  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

// Call the updateClock function every second
setInterval(updateClock, 1000);

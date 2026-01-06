// Counter functionality
let clickCount = 0;

// Get DOM elements
const clickButton = document.getElementById('clickMe');
const counterDisplay = document.getElementById('counter');

// Add click event listener
clickButton.addEventListener('click', function() {
    clickCount++;
    counterDisplay.textContent = clickCount;
    
    // Add a fun animation effect
    counterDisplay.style.transform = 'scale(1.3)';
    setTimeout(() => {
        counterDisplay.style.transform = 'scale(1)';
    }, 200);
    
    // Change button text based on click count
    if (clickCount === 1) {
        clickButton.textContent = 'Click Me Again!';
    } else if (clickCount === 5) {
        clickButton.textContent = 'You\'re on fire! 🔥';
    } else if (clickCount === 10) {
        clickButton.textContent = 'Amazing! Keep going! ⭐';
    } else if (clickCount === 20) {
        clickButton.textContent = 'Wow! You love clicking! 🎉';
    }
});

// Add smooth transition to counter
counterDisplay.style.transition = 'transform 0.2s ease';

// Console message for visitors
console.log('Welcome to the static site! 🎉');
console.log('This site is built with HTML, CSS, and JavaScript.');

// Add a simple greeting based on time of day
const currentHour = new Date().getHours();
let greeting;

if (currentHour < 12) {
    greeting = 'Good morning! ☀️';
} else if (currentHour < 18) {
    greeting = 'Good afternoon! 🌤️';
} else {
    greeting = 'Good evening! 🌙';
}

console.log(greeting);

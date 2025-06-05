// Opening Phrases
const openings = [
    "A mysterious stranger", 
    "An old friend", 
    "A hidden path", 
    "Your intuition", 
    "An unexpected call"
];

// Predictons
const predictions = [
    "will bring you surprising news.", 
    "will unlock a new opportunity.", 
    "will test your patience.", 
    "will change everything.", 
    "will reveal itself."
];

// Closing pieces of wisdom
const closings = [
    "Trust your instics.", 
    "Laugh often and love more.", 
    "You already have the answer.",
    "Great success comes when you least expect it.",
    "Lucky numbers: 7, 12, 19."
];

// Helper to get a random item
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
};

// Generates the full message
function generateFortune() {
    const opening = getRandomItem(openings);
    const prediction = getRandomItem(predictions);
    const closing = getRandomItem(closings);

    return `Your fortune is: "${opening} ${prediction} ${closing}"`;
};

// Pring the fortune
console.log(generateFortune());
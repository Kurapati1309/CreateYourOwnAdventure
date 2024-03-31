// Defining the stages of the story
const storyStages = {
    start: {
        text: 'You wake up to the sound of rustling leaves and chirping birds. Your head throbs slightly as you sit up, surrounded by towering trees and unfamiliar foliage. How did you get here? You stand up, brushing dirt off your clothes, and take a look around.',
        image: 'images/forest-image.jpg',
        choices: [
            { text: 'Explore the forest', nextStage: 'exploreForest' },
            { text: 'Call for help', nextStage: 'callForHelp' }
        ]
    },

    exploreForest: {
        text: 'You decide to trust your instincts and explore the forest.',
        image: 'images/explore-image.jpg',
        choices: [
            { text: 'The Ancient Tree', nextStage: 'ancientTree' },
            { text: 'The River Crossing', nextStage: 'riverCrossing' }
        ]
    },

    callForHelp: {
        text: 'You decide it\'s best to stay put and call for help loudly.',
        image: 'images/call-for-help-image.jpg',
        choices: [
            { text: 'The Mysterious Stranger', nextStage: 'mysteriousStranger' },
            { text: 'The Echoing Voice', nextStage: 'echoingVoice' }
        ]
    },

    ancientTree: {
        text: 'As you walk, you notice an ancient tree with a door at its base.',
        image: 'images/ancient-tree-image.jpg',
        choices: [
            { text: 'Enter the door', nextStage: 'enterDoor' },
            { text: 'Ignore the door', nextStage: 'ignoreDoor' }
        ]
    },

    enterDoor: {
        text: 'After entering the door, you find two paths, one glowing faintly, the other dark and ominous.',
        image: 'images/glowing-path-image.jpg',
        choices: [
            { text: 'Follow the Glowing Path', nextStage: 'glowingPath' },
            { text: 'Follow the Dark Path', nextStage: 'darkPath' }
        ]
    },

    glowingPath: {
        text: 'Leads to a realm of eternal peace, where you\'re offered to stay forever.',
        image: 'images/eternal-peace-image.jpg',
    },

    darkPath: {
        text: 'Leads to an ancient library with secret knowledge. Studying the books, you find a way back home but with powerful new wisdom.',
        image: 'images/ancient-library-image.jpg',
    },

    ignoreDoor: {
        text: 'Ignoring the door, you eventually come across a group of fairies having a feast.',
        image: 'images/fairy-feast-image.jpg',
        choices: [
            { text: 'Join the feast', nextStage: 'joinFeast' },
            { text: 'Politely decline', nextStage: 'declineFeast' }
        ]
    },

    joinFeast: {
        text: 'You\'re welcomed, and after the feast, they show you a hidden path out of the forest.',
        image: 'images/hidden-path-image.jpg',
    },

    declineFeast: {
        text: 'They gift you a magical seed, which grows into a beanstalk leading you above the forest canopy to your home.',
        image: 'images/magical-seed-image.jpg',
    },

    mysteriousStranger: {
        text: 'A mysterious stranger appears, offering you a magical amulet. This amulet has the power to reveal hidden paths in the forest.',
        image: 'images/mysterious-stranger-image.jpg',
        choices: [
            { text: 'Accept the amulet', nextStage: 'acceptAmulet' },
            { text: 'Decline and explore on your own', nextStage: 'declineAmulet' }
        ]
    },

    acceptAmulet: {
        text: 'With the magical amulet, you discover a portal to a magical realm where mythical creatures seek your help to restore balance.',
        image: 'images/magical-realm-image.jpg',
    },

    declineAmulet: {
        text: 'Without the amulet, you journey deeper into the forest, stumbling upon an ancient shrine that grants you the ability to communicate with animals.',
        image: 'images/animal-communication-image.jpg',
    },

    echoingVoice: {
        text: 'As you call for help, an echoing voice responds, guiding you to a hidden cave entrance.',
        image: 'images/hidden-cave-image.jpg',
        choices: [
            { text: 'Enter the cave', nextStage: 'enterCave' },
            { text: 'Continue calling for help', nextStage: 'continueCalling' }
        ]
    },

    enterCave: {
        text: 'The cave leads to an underground city where magical beings reside. They offer you a choice: help them in a quest for peace or continue your journey alone.',
        image: 'images/underground-city-image.jpg',
        choices: [
            { text: 'Join the quest for peace', nextStage: 'questForPeace' },
            { text: 'Continue your journey alone', nextStage: 'continueAlone' }
        ]
    },

    questForPeace: {
        text: 'Your involvement in the quest brings about a magical transformation in the forest, and you become a legendary hero.',
        image: 'images/legendary-hero-image.jpg',
    },

    continueAlone: {
        text: 'You decide to continue alone, discovering a hidden passage that leads you to a realm of time manipulation. You find a way to go back in time and change the course of events.',
        image: 'images/time-manipulation-image.jpg',
    },

    riverCrossing: {
        text: 'You come across a swift river with a rickety bridge and a magical boat.',
        image: 'images/river-crossing-image.jpg',
        choices: [
            { text: 'Cross the bridge', nextStage: 'crossBridge' },
            { text: 'Take the magical boat', nextStage: 'takeBoat' }
        ]
    },

    crossBridge: {
        text: 'As you cautiously cross the bridge, it starts to collapse. You have to make a quick decision.',
        image: 'images/collapsed-bridge-image.jpg',
        choices: [
            { text: 'Leap to the other side', nextStage: 'leapToSide' },
            { text: 'Hold onto the collapsing bridge', nextStage: 'holdOnToBridge' }
        ]
    },

    leapToSide: {
        text: 'You make a daring leap and reach the other side safely. Onward in your journey, you find a hidden cave with mysterious markings.',
        image: 'images/mysterious-cave-image.jpg',
        choices: [
            { text: 'Explore the cave', nextStage: 'exploreCave' },
            { text: 'Continue your journey', nextStage: 'continueJourney' }
        ]
    },

    holdOnToBridge: {
        text: 'You manage to hold onto the collapsing bridge, but it takes a toll on your strength. You notice a hidden path beneath the bridge.',
        image: 'images/hidden-path-beneath-bridge-image.jpg',
        choices: [
            { text: 'Descend to the hidden path', nextStage: 'descendToHiddenPath' },
            { text: 'Continue holding on', nextStage: 'continueHoldingOn' }
        ]
    },

    descendToHiddenPath: {
        text: 'Descending to the hidden path, you discover an ancient temple with a mysterious artifact. It grants you the ability to understand the language of the forest creatures.',
        image: 'images/ancient-temple-image.jpg',
    },

    continueHoldingOn: {
        text: 'Despite the challenges, you manage to hold on until help arrives. A group of forest creatures comes to your aid and guides you to a magical clearing.',
        image: 'images/magical-clearing-image.jpg',
    },

    takeBoat: {
        text: 'You choose the magical boat and find it smoothly gliding across the river. On the other side, you encounter a mystical garden with talking flowers.',
        image: 'images/mystical-garden-image.jpg',
        choices: [
            { text: 'Chat with the flowers', nextStage: 'chatWithFlowers' },
            { text: 'Continue your journey', nextStage: 'continueJourney' }
        ]
    },

    chatWithFlowers: {
        text: 'The flowers share ancient wisdom and guide you to a hidden portal. This portal takes you to a realm of time manipulation where you can alter the past.',
        image: 'images/time-portal-image.jpg',
    },

    continueJourney: {
        text: 'Deciding to press on, you venture deeper into the enchanted forest.',
        image: 'images/continue-journey-image.jpg',
        choices: [
            { text: 'The Enchanted Lake', nextStage: 'enchantedLake' },
            { text: 'The Whispering Trees', nextStage: 'whisperingTrees' }
        ]
    },

    enchantedLake: {
        text: 'You arrive at a serene enchanted lake surrounded by glowing fireflies. The lake seems to hold mysterious secrets.',
        image: 'images/enchanted-lake-image.jpg',
        choices: [
            { text: 'Dive into the lake', nextStage: 'diveIntoLake' },
            { text: 'Follow the lakeshore', nextStage: 'followLakeshore' }
        ]
    },

    diveIntoLake: {
        text: 'Diving into the lake, you discover an underwater cavern filled with ancient treasures. You find a magical artifact that enhances your intuition.',
        image: 'images/underwater-cavern-image.jpg',
    },

    followLakeshore: {
        text: 'Walking along the lakeshore, you encounter a group of water nymphs. They offer to guide you through a hidden path to a magical meadow.',
        image: 'images/water-nymphs-image.jpg',
        choices: [
            { text: 'Follow the water nymphs', nextStage: 'followNymphs' },
            { text: 'Continue your journey alone', nextStage: 'continueAlone' }
        ]
    },

    followNymphs: {
        text: 'Following the water nymphs, you reach a breathtaking meadow where time seems to stand still. The nymphs reveal a portal that leads to a realm of dreams.',
        image: 'images/magical-meadow-image.jpg',
    },

    whisperingTrees: {
        text: 'You encounter a grove of ancient trees that seem to whisper ancient knowledge. The trees offer you a choice:',
        image: 'images/whispering-trees-image.jpg',
        choices: [
            { text: 'Meditate with the trees', nextStage: 'meditateWithTrees' },
            { text: 'Carve your own path', nextStage: 'carveOwnPath' }
        ]
    },

    meditateWithTrees: {
        text: 'Meditating with the trees, you gain profound wisdom and insight into the forest\'s mysteries. The trees guide you to a hidden passage leading to a realm of tranquility.',
        image: 'images/tranquil-realm-image.jpg',
    },

    carveOwnPath: {
        text: 'Choosing to carve your own path, you discover a forgotten trail that leads to a sacred grove. Here, you encounter a wise old owl that shares the secrets of the enchanted forest.',
        image: 'images/sacred-grove-image.jpg',
    },
};

// Initialize the game state
function startGame() {
    // Set initial state and update the page
    updatePage('start');
}

// Function to update the page content
function updatePage(stageKey) {
    const stage = storyStages[stageKey];
    
    // Update the story text
    document.getElementById('story').textContent = stage.text;
    
    // Update the image
    const imgContainer = document.getElementById('image-container');
    imgContainer.innerHTML = ''; // Clear existing content
    const image = document.createElement('img');
    image.src = stage.image;
    imgContainer.appendChild(image);
    
    // Update the choices
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = ''; // Clear existing content
    stage.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => updatePage(choice.nextStage);
        choicesContainer.appendChild(button);
    });
}

// Function to end the game
function endGame() {
    // Display end game message and options to restart
    document.getElementById('story').textContent = 'The end. Thank you for playing!';
}

// Event listener to start the game when the window loads
window.onload = startGame;


document.addEventListener('DOMContentLoaded', () => {
    // Open the popup
    addendumButton.addEventListener('click', () => {
        addendumPopup.style.display = 'block';
        // Optionally display overlay
        document.querySelector('.addendum-overlay').style.display = 'block';
    });

    window.addEventListener('click', (event) => {
        if (!addendumPopup.contains(event.target) && event.target != addendumButton) {
            addendumPopup.style.display = 'none';
            // Hide overlay if you're using one
            document.querySelector('.addendum-overlay').style.display = 'none';
        }
    });
});


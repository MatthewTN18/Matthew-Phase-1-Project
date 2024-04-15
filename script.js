const factContainer = document.getElementById("fact");
const btn = document.getElementById("btn");
const likeBtn = document.getElementById("like-btn");
const dislikeBtn = document.getElementById("dislike-btn");
const likeCount = document.getElementById("like-count");
const dislikeCount = document.getElementById("dislike-count");
const commentInput = document.getElementById("comment-input");
const submitCommentBtn = document.getElementById("submit-comment-btn");
const commentsContainer = document.getElementById("comments-container");

const url = "https://uselessfacts.jsph.pl/random.json?language=en";

let getFact = () => {
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data =>{
        if (!data || !data.text) {
            throw new Error('Invalid data format or no fact found');
        }
        const fact = data.text;
        factContainer.textContent = fact;
    })
    .catch(error => {
        console.error('Error fetching fact:', error);
        factContainer.textContent = "Failed to fetch fact. Please try again later.";
    });
}

// Event listener for clicking the "Get Random Fact" button
btn.addEventListener("click", () => {
    getFact();
});

// Initial fetch of random fact
getFact();

// Event listeners for like and dislike buttons
likeBtn.addEventListener("click", () => {
    likeCount.textContent = parseInt(likeCount.textContent || 0) + 1;
});

dislikeBtn.addEventListener("click", () => {
    dislikeCount.textContent = parseInt(dislikeCount.textContent || 0) + 1;
});




// Event listener for submitting a comment
submitCommentBtn.addEventListener("click", () => {
    const commentText = commentInput.value.trim();
    if (commentText !== "" && commentText.length <= 30) {
        addComment(commentText);
        commentInput.value = ""; // Clear the input field
    } else {
        alert("Please enter a comment with 30 characters or less.");
    }
});



// Function to add a comment
function addComment(text) {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.textContent = text;
    commentsContainer.appendChild(commentDiv);
}


const bonusForm = document.getElementById("bonus-form");
const bonusFactContainer = document.getElementById("bonus-fact");

// Array of bonus facts
const bonusFacts = [
    "The most common name in the world is Mohammed.",
    "The strongest muscle in the body is the tongue.",
    "A snail can sleep for three years.",
    "Elephants are the only animals that can't jump.",
    "Honey never spoils."
];

// Function to get bonus fact based on user input
function getBonusFact(event) {
    event.preventDefault();
    const factNumber = parseInt(document.getElementById("fact-number").value);

    // Check if the input is a valid number between 1 and 5
    if (factNumber >= 1 && factNumber <= 5) {
        const bonusFact = bonusFacts[factNumber - 1]; // Adjust index since arrays are zero-indexed
        bonusFactContainer.textContent = bonusFact;
    } else {
        bonusFactContainer.textContent = "Please enter a number between 1 and 5.";
    }
    
}



// Event listener for form submission
bonusForm.addEventListener("submit", getBonusFact);


document.getElementById('color-select').addEventListener('change', function() {
    const selectedColor = this.value;
    changePageColor(selectedColor);
});

function changePageColor(color) {
    // Remove all existing color classes
    document.body.classList.remove('blue-bg', 'green-bg', 'red-bg');

    // Add the selected color class
    if (color !== 'default') {
        document.body.classList.add(color + '-bg');
    }
}



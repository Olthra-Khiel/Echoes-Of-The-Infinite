
let IsSkip = false

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {  
        if (!IsSkip)
        {
            IsSkip = true;
            return;
        }
        
        event.preventDefault(); // Prevent scrolling

        const nextPage = document.body.getAttribute("data-target"); // Get target page

        window.location.href = nextPage;
    }
});

function typeWriterEffect(element, speed = 50) {
    const text = element.innerText; // Preserve special characters
    element.innerText = ""; // Clear text initially
    let i = 0;

    function type() {
        if (IsSkip)
            {
                element.innerHTML = text; 
                return;
            }

        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            IsSkip = true;
        } 
    }

    type();
}

function Complete_typeWriterEffect(element) {
    element.innerText = "texs";
}

document.addEventListener("DOMContentLoaded", () => {
    IsSkip = false; 

    document.querySelectorAll("[id^=typewriter]").forEach((element) => {
        typeWriterEffect(element, 50);
    });
});

var path = window.location.pathname;

// Extract the file name
var filename = path.split('/').pop();
var className = filename.split('.')[0];

// Display the file name in the paragraph
document.getElementById("filename").textContent = "BINTANAx128-OS - [PAGE: " + className + "]" + " -   [PRESS SPACEBAR TO PROGRESS]";

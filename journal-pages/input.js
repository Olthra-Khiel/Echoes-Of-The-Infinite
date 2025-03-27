
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
        const delay = document.body.getAttribute("data-delay") || 1000; // Get delay (default 1s)

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

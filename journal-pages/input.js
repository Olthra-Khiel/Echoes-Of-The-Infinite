

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {  
        event.preventDefault(); // Prevent scrolling

        const nextPage = document.body.getAttribute("data-target"); // Get target page
        const delay = document.body.getAttribute("data-delay") || 1000; // Get delay (default 1s)

        window.location.href = nextPage;
    }
});

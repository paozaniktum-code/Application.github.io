// --- JAVASCRIPT ---

// This function runs when the entire page is fully loaded.
window.onload = function() {
    // You can add interactive features here.
    // For example, uncomment the line below to show a pop-up alert
    // alert("Welcome to the world of Heaven and Beauty!");
};

// This function finds the element with the ID 'currentYear' and
// automatically updates it to the current year.
document.getElementById('currentYear').textContent = new Date().getFullYear();

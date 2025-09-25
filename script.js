// --- JAVASCRIPT ---

// 1. Get references to the HTML elements we need to control
const splashScreen = document.getElementById('splash-screen');
const mainContent = document.getElementById('main-content');
const enterButton = document.getElementById('enter-button');
const copyrightYear = document.getElementById('currentYear');

// 2. Add an event listener to the "Enter" button
enterButton.addEventListener('click', () => {
    // Add the fade-out animation class to the splash screen
    splashScreen.classList.add('fade-out');

    // Wait for the fade-out animation to finish (500ms = 0.5s)
    setTimeout(() => {
        // Hide the splash screen completely
        splashScreen.style.display = 'none';

        // Show the main content area
        mainContent.style.display = 'block';
        // Add the fade-in animation class to the main content
        mainContent.classList.add('fade-in');
    }, 500);
});


// 3. Automatically update the copyright year in the footer.
// This part remains the same.
if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
}

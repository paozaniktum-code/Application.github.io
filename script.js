// --- JAVASCRIPT ---

// 1. Get references to the HTML elements we need to control
const splashScreen = document.getElementById('splash-screen');
const mainContent = document.getElementById('main-content');
const enterButton = document.getElementById('enter-button');
const copyrightYear = document.getElementById('currentYear');


// 2. Add an event listener to the "Enter" button
enterButton.addEventListener('click', () => {
    splashScreen.classList.add('fade-out');
    setTimeout(() => {
        splashScreen.style.display = 'none';
        mainContent.style.display = 'block';
        mainContent.classList.add('fade-in');
    }, 500);
});


// 3. Automatically update the copyright year in the footer.
if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
}


// ================================================================
// ===== ส่วนที่ถูกลบออก (Product Button Interaction) =====
// โค้ดที่ควบคุมปุ่ม Add to Cart เดิมได้ถูกลบออกจากส่วนนี้ไปแล้ว
// ================================================================

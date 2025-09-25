// --- JAVASCRIPT ---

// 1. Splash Screen & Main Content Logic
const splashScreen = document.getElementById('splash-screen');
const mainContent = document.getElementById('main-content');
const enterButton = document.getElementById('enter-button');

enterButton.addEventListener('click', () => {
    splashScreen.classList.add('fade-out');
    setTimeout(() => {
        splashScreen.style.display = 'none';
        mainContent.style.display = 'block';
        mainContent.classList.add('fade-in');
    }, 500);
});

// 2. Copyright Year
const copyrightYear = document.getElementById('currentYear');
if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
}

// 3. Product Data
const products = [
    {
        name: '"Celestial Glow" Facial Serum',
        price: '฿ 1,290',
        image: 'https://placehold.co/300x300/F8E8EE/B48B92?text=Celestial+Glow',
        description: 'เซรั่มเนื้อบางเบา ซึมซาบเร็ว อุดมด้วยสารสกัดจากดอกคาโมมายล์และไฮยาลูรอนิค แอซิด ช่วยฟื้นฟูผิวให้กระจ่างใส ลดเลือนจุดด่างดำ พร้อมเติมความชุ่มชื้นให้ผิวเปล่งประกายดุจแสงดาว',
        ingredients: 'Chamomile Extract, Hyaluronic Acid, Niacinamide, Vitamin C',
        orderLink: 'YOUR_LINE_LINK_HERE'
    },
    {
        name: '"Rose Quartz" Soothing Toner',
        price: '฿ 890',
        image: 'https://placehold.co/300x300/F8E8EE/B48B92?text=Rose+Quartz',
        description: 'โทนเนอร์น้ำกุหลาบออร์แกนิค ช่วยปลอบประโลมผิวที่อ่อนล้า ลดการระคายเคืองและรอยแดง ปรับสมดุลค่า pH ของผิว พร้อมรับการบำรุงในขั้นตอนต่อไป',
        ingredients: 'Organic Rosewater, Aloe Vera, Witch Hazel, Glycerin',
        orderLink: 'YOUR_FACEBOOK_MESSENGER_LINK_HERE'
    },
    {
        name: '"Cloud Cleanse" Foaming Cleanser',
        price: '฿ 750',
        image: 'https://placehold.co/300x300/F8E8EE/B48B92?text=Cloud+Cleanse',
        description: 'โฟมล้างหน้าเนื้อมูสเนียนนุ่มดุจปุยเมฆ ทำความสะอาดสิ่งสกปรกและเครื่องสำอางได้อย่างหมดจด โดยไม่ทำให้ผิวแห้งตึง ด้วยสารสกัดจากชาเขียวที่ช่วยต่อต้านอนุมูลอิสระ',
        ingredients: 'Green Tea Extract, Coconut-based Surfactants, Orchid Extract',
        orderLink: 'YOUR_INSTAGRAM_DM_LINK_HERE'
    },
    {
        name: '"Eden Garden" Botanical Body Oil',
        price: '฿ 990',
        image: 'https://placehold.co/300x300/F8E8EE/B48B92?text=Eden+Garden',
        description: 'บอดี้ออยล์สูตรพรีเมียม บำรุงผิวให้เนียนนุ่มชุ่มชื้นยาวนาน ด้วยส่วนผสมของ Jojoba Oil, Almond Oil และกลิ่นหอมผ่อนคลายจากดอกไม้นานาพรรณ',
        ingredients: 'Jojoba Oil, Sweet Almond Oil, Lavender Essential Oil, Rose Petals',
        orderLink: 'YOUR_TIKTOK_SHOP_LINK_HERE'
    }
];

// 4. Modal Elements
const modal = document.getElementById('product-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalDesc = document.getElementById('modal-desc');
const modalIngredients = document.getElementById('modal-ingredients');
const modalOrderBtn = document.getElementById('modal-order-btn');
const closeButton = document.querySelector('.close-button');

// 5. Event Listeners for Product Cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const productId = card.getAttribute('data-product-id');
        const product = products[productId];

        // Populate modal with product data
        modalImg.src = product.image;
        modalImg.alt = product.name;
        modalTitle.textContent = product.name;
        modalPrice.textContent = product.price;
        modalDesc.textContent = product.description;
        modalIngredients.textContent = product.ingredients;
        modalOrderBtn.href = product.orderLink;

        // Show the modal
        modal.style.display = 'block';
    });
});

// 6. Event Listeners for Closing Modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

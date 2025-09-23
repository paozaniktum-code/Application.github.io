document.addEventListener('DOMContentLoaded', () => {
    // === DOM Elements ===
    const canvas = document.getElementById('wheelCanvas');
    const spinButton = document.getElementById('spinButton');
    const lockAndSpinButton = document.getElementById('lockAndSpinButton');
    const nameInput = document.getElementById('nameInput');
    const addNameButton = document.getElementById('addNameButton');
    const namesListDiv = document.getElementById('namesList');
    const lockTargetSelect = document.getElementById('lockTargetSelect');
    const resultDisplay = document.getElementById('resultDisplay');
    const ctx = canvas.getContext('2d');

    // === State ===
    let names = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig'];
    const segmentColors = ['#F94144', '#F3722C', '#F8961E', '#F9C74F', '#90BE6D', '#43AA8B', '#577590'];
    let currentRotation = 0;
    let isSpinning = false;
    const rotationDegrees = 360;

    // === Functions ===
    const drawWheel = () => {
        const numSegments = names.length;
        if (numSegments === 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return;
        }
        const anglePerSegment = (2 * Math.PI) / numSegments;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = canvas.width / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = 'bold 20px Kanit, sans-serif';

        names.forEach((name, i) => {
            const startAngle = i * anglePerSegment;
            const endAngle = startAngle + anglePerSegment;
            
            // Draw segment
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius - 5, startAngle, endAngle);
            ctx.closePath();
            ctx.fillStyle = segmentColors[i % segmentColors.length];
            ctx.fill();
            ctx.stroke();

            // Draw text
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(startAngle + anglePerSegment / 2);
            ctx.textAlign = 'right';
            ctx.fillStyle = '#FFF';
            ctx.fillText(name, radius - 20, 10);
            ctx.restore();
        });
    };
    
    const updateUI = () => {
        // Update name tags display
        namesListDiv.innerHTML = '';
        names.forEach((name, index) => {
            const nameTag = document.createElement('div');
            nameTag.className = 'name-item';
            nameTag.textContent = name;
            const removeSpan = document.createElement('span');
            removeSpan.className = 'remove-btn';
            removeSpan.textContent = '✖';
            removeSpan.onclick = () => removeName(index);
            nameTag.appendChild(removeSpan);
            namesListDiv.appendChild(nameTag);
        });

        // Update lock dropdown
        lockTargetSelect.innerHTML = '<option value="">-- เลือกชื่อที่จะล็อก --</option>';
        names.forEach((name, index) => {
            const option = new Option(name, index);
            lockTargetSelect.appendChild(option);
        });

        // Enable/disable controls
        const canSpin = names.length > 1 && !isSpinning;
        spinButton.style.pointerEvents = canSpin ? 'auto' : 'none';
        lockAndSpinButton.disabled = !canSpin;
        lockTargetSelect.disabled = !canSpin;

        drawWheel();
    };

    const handleAddName = () => {
        const name = nameInput.value.trim();
        if (name && !names.includes(name)) {
            names.push(name);
            nameInput.value = '';
            updateUI();
        }
        nameInput.focus();
    };

    const removeName = (indexToRemove) => {
        names = names.filter((_, index) => index !== indexToRemove);
        updateUI();
    };

    const spin = (lockedIndex = -1) => {
        if (isSpinning || names.length < 2) return;
        isSpinning = true;
        resultDisplay.textContent = 'กำลังหมุน...';
        updateUI();

        const numSegments = names.length;
        const anglePerSegment = rotationDegrees / numSegments;
        
        // Determine target segment
        const targetSegment = (lockedIndex > -1) ? lockedIndex : Math.floor(Math.random() * numSegments);

        // Calculate rotation
        const randomOffset = (Math.random() * 0.8 + 0.1) * anglePerSegment; // Random position within the segment
        const targetAngle = (targetSegment * anglePerSegment) + randomOffset;
        const fullRotations = Math.floor(Math.random() * 4) + 6; // 6-9 full spins
        const finalRotation = (fullRotations * rotationDegrees) + (rotationDegrees - targetAngle);
        
        currentRotation += finalRotation;
        canvas.style.transform = `rotate(${currentRotation}deg)`;

        // Handle spin end
        setTimeout(() => {
            isSpinning = false;
            const winner = names[targetSegment];
            resultDisplay.textContent = `🎉 ยินดีด้วย: ${winner}! 🎉`;
            updateUI();
        }, 8000); // Must match CSS transition duration
    };

    // === Event Listeners ===
    addNameButton.addEventListener('click', handleAddName);
    nameInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') handleAddName();
    });
    spinButton.addEventListener('click', () => spin());
    lockAndSpinButton.addEventListener('click', () => {
        const selectedIndex = parseInt(lockTargetSelect.value);
        if (!isNaN(selectedIndex) && selectedIndex >= 0) {
            spin(selectedIndex);
        } else {
            alert('กรุณาเลือกชื่อที่ต้องการล็อกผลลัพธ์!');
        }
    });

    // === Initial Load ===
    updateUI();
});

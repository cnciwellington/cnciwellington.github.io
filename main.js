
// Interactive heading function
function pulseHeading() {
const heading = document.querySelector('.interactive-heading');
heading.classList.remove('pulse-intense');
setTimeout(() => {
    heading.classList.add('pulse-intense');
}, 10);

setTimeout(() => {
    heading.classList.remove('pulse-intense');
}, 600);
}

// Verse reveal functionality
function revealVerse(element) {
const verse = element.querySelector('.hidden-verse');
const button = element.querySelector('.reveal-btn');

if (verse.style.display === 'none' || !verse.style.display) {
    verse.style.display = 'block';
    verse.style.animation = 'fadeInElegant 0.8s ease-out forwards';
    button.textContent = 'Hide Verse';
    button.style.background = 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)';
} else {
    verse.style.display = 'none';
    button.textContent = 'Reveal Verse';
    button.style.background = 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)';
}
}

// Prayer completion function
function completePrayer() {
const button = event.target;

// Change button appearance
button.innerHTML = 'Prayer Completed! 🎉';
button.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
button.disabled = true;
button.style.cursor = 'default';

// Show celebration modal
const celebration = document.createElement('div');
celebration.innerHTML = `
    <div class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" style="animation: fadeInElegant 0.5s ease-out;">
        <div class="luxury-glass p-12 rounded-3xl max-w-lg w-full text-center" style="animation: scaleElegant 0.8s ease-out;">
            <div class="text-6xl mb-8">🎉✨🙏✨🎉</div>
            <h3 class="font-serif text-4xl font-bold text-gold mb-6">Welcome to God's Family!</h3>
            <p class="text-gray-200 text-xl mb-8 leading-relaxed">
                If you prayed this prayer with sincere faith, you are now a child of God! Your name is written in the Book of Life, and you have eternal life through Jesus Christ.
            </p>
            <div class="verse-elegant p-6 rounded-2xl mb-8">
                <p class="text-gray-200 italic text-lg mb-2">
                    "Therefore, if anyone is in Christ, he is a new creation; old things have passed away; behold, all things have become new."
                </p>
                <p class="text-gold text-sm font-bold">2 Corinthians 5:17</p>
            </div>
            <div class="space-y-4">
                <button onclick="this.closest('.fixed').remove()" class="btn-luxury px-8 py-3 rounded-full font-bold text-lg w-full">
                    Continue in Faith ✝️
                </button>
                <p class="text-gray-400 text-sm">Consider connecting with our church family below</p>
            </div>
        </div>
    </div>
`;
document.body.appendChild(celebration);

// Add floating celebration particles
for (let i = 0; i < 15; i++) {
    setTimeout(() => {
        const particle = document.createElement('div');
        particle.innerHTML = ['🎉', '✨', '🙏', '💫', '⭐', '✝️'][Math.floor(Math.random() * 6)];
        particle.style.cssText = `
            position: fixed;
            font-size: 2rem;
            pointer-events: none;
            z-index: 1000;
            left: ${Math.random() * 100}vw;
            top: 100vh;
            animation: celebrationFloat 3s ease-out forwards;
        `;
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 3000);
    }, i * 200);
}
}

// Interactive truth cards
function expandTruth(cardElement) {
const allCards = document.querySelectorAll('.truth-card');
const details = cardElement.querySelector('.truth-details');

// Reset all other cards
allCards.forEach(card => {
    if (card !== cardElement) {
        const otherDetails = card.querySelector('.truth-details');
        if (otherDetails) {
            otherDetails.style.maxHeight = '0';
            otherDetails.style.opacity = '0';
        }
        card.style.transform = 'scale(1)';
    }
});

// Toggle current card
if (details.style.maxHeight === '0px' || !details.style.maxHeight) {
    details.style.maxHeight = '300px';
    details.style.opacity = '1';
    cardElement.style.transform = 'scale(1.05)';
} else {
    details.style.maxHeight = '0';
    details.style.opacity = '0';
    cardElement.style.transform = 'scale(1)';
}
}



// Interactive contact form
function showContactForm() {
const modal = document.createElement('div');
modal.innerHTML = `
    <div class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" style="animation: fadeInElegant 0.5s ease-out;">
        <div class="luxury-glass p-8 rounded-3xl max-w-md w-full" style="animation: scaleElegant 0.8s ease-out;">
            <h3 class="text-2xl font-bold text-gold mb-6 text-center">Connect With Us</h3>
            <div class="space-y-4">
                <input type="text" placeholder="Your Name" class="w-full p-4 rounded-xl bg-slate-700 text-white border border-gold-400 focus:border-gold-300 outline-none">
                <input type="email" placeholder="Your Email" class="w-full p-4 rounded-xl bg-slate-700 text-white border border-gold-400 focus:border-gold-300 outline-none">
                <textarea placeholder="Your Message or Prayer Request" rows="4" class="w-full p-4 rounded-xl bg-slate-700 text-white border border-gold-400 focus:border-gold-300 outline-none resize-none"></textarea>
                <div class="flex gap-4">
                    <button onclick="this.closest('.fixed').remove()" class="flex-1 bg-gray-600 text-white py-3 rounded-xl font-bold hover:bg-gray-500 transition-all">
                        Close
                    </button>
                    <button onclick="submitForm(this)" class="flex-1 btn-luxury py-3 rounded-xl font-bold">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    </div>
`;
document.body.appendChild(modal);
}

function submitForm(button) {
button.innerHTML = 'Sent! 🙏';
button.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
setTimeout(() => {
    button.closest('.fixed').remove();
}, 2000);
}

// Initialize interactive features
document.addEventListener('DOMContentLoaded', function() {
// Add ripple effect to heading
document.querySelector('.interactive-heading').addEventListener('click', function(e) {
    const ripple = document.createElement('div');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(251, 191, 36, 0.6) 0%, transparent 70%);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.8s ease-out;
        pointer-events: none;
        z-index: 1;
    `;
    
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 800);
});

// Add floating particles
createFloatingParticles();
});

function createFloatingParticles() {
const particles = ['✨', '🙏', '✝️', '💫', '⭐'];

setInterval(() => {
    const particle = document.createElement('div');
    particle.innerHTML = particles[Math.floor(Math.random() * particles.length)];
    particle.style.cssText = `
        position: fixed;
        font-size: 1.5rem;
        pointer-events: none;
        z-index: 1;
        left: ${Math.random() * 100}vw;
        top: 100vh;
        animation: floatUp 8s linear forwards;
        opacity: 0.7;
    `;
    
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 8000);
}, 3000);
}

// Add floating animation
const style = document.createElement('style');
style.textContent = `
@keyframes ripple {
    to {
        transform: scale(2);
        opacity: 0;
    }
}

@keyframes celebrationFloat {
    0% {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
    100% {
        transform: translateY(-100px) scale(1.5);
        opacity: 0;
    }
}

@keyframes floatUp {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0.7;
    }
    100% {
        transform: translateY(-100vh) rotate(360deg);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);
const burger = document.querySelector('.burger');
const nav = document.querySelector('.items');
const navLinks = document.querySelectorAll('.items a');

if (burger && nav) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('show');
        burger.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('show');
            burger.classList.remove('active');
        });
    });
}

const giftBtn = document.querySelector('.buy-btn');
const giftModal = document.getElementById('giftModal');
const closeGift = document.querySelector('.close');

if (giftBtn && giftModal && closeGift) {
    giftBtn.addEventListener('click', () => {
        giftModal.style.display = 'flex';
    });

    closeGift.addEventListener('click', () => {
        giftModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === giftModal) {
            giftModal.style.display = 'none';
        }
    });
}

const countdown = document.getElementById("countdown");
const offerEnd = new Date("October 7, 2025 23:59:59").getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = offerEnd - now;

    if (distance < 0) {
        clearInterval(timer);
        countdown.innerHTML = "Offer expired!";
        return;
    }

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// moooood
const moodButtons = document.querySelectorAll('.mood-btn');
const moodResult = document.getElementById('moodResult');
const moodModal = document.getElementById('moodModal');
const closeMood = document.querySelector('.close');

const moodSuggestions = {
    happy: {
        name: "Caramel Joy",
        image: "img/mood1.jpeg",
        desc: "Smooth caramel chocolate, perfect for joyful and celebratory moments."
    },
    calm: {
        name: "Mint Calm",
        image: "img/mood2.jpeg",
        desc: "Refreshing mint chocolate that brings a sense of peace and relaxation."
    },
    love: {
        name: "Berry Love",
        image: "img/mood3.jpeg",
        desc: "Soft berry-infused chocolate, romantic and warm for heartfelt feelings."
    }
};

moodButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const mood = btn.dataset.mood;
        const suggestion = moodSuggestions[mood];

        moodResult.innerHTML = `
      <p class="para">You feel: <strong>${btn.textContent}</strong></p>
      <img src="${suggestion.image}" alt="${suggestion.name}">
      <h2>${suggestion.name}</h2>
      <p>${suggestion.desc}</p>
      <button class="btn">Buy Now</button>
    `;

        moodModal.style.display = 'flex';
    });
});

closeMood.addEventListener('click', () => {
    moodModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === moodModal) {
        moodModal.style.display = 'none';
    }
});
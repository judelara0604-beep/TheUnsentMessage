// Sample confessions data (you'll replace this with actual data)
let confessionsData = [
    {
        id: 1,
        text: "I secretly enjoy rainy days more than sunny ones. There's something peaceful about watching the rain from my window.",
        date: "2 days ago",
        tag: "Life"
    },
    {
        id: 2,
        text: "I've been pretending to like coffee for years just to fit in at work meetings. I actually prefer hot chocolate.",
        date: "3 days ago",
        tag: "Work"
    },
    {
        id: 3,
        text: "Sometimes I talk to my plants and believe they're listening. I think it helps them grow, or maybe it helps me feel less alone.",
        date: "5 days ago",
        tag: "Life"
    },
    {
        id: 4,
        text: "I still sleep with a stuffed animal from my childhood. I'm 28 years old and I don't plan on stopping.",
        date: "1 week ago",
        tag: "Personal"
    },
    {
        id: 5,
        text: "I pretend I haven't seen messages from certain people because I need time to recharge before responding. Social battery is real.",
        date: "1 week ago",
        tag: "Social"
    },
    {
        id: 6,
        text: "I've written dozens of songs but never shared them with anyone. The fear of judgment keeps them locked in my notebook.",
        date: "2 weeks ago",
        tag: "Dreams"
    }
];

let displayedCount = 3;
const confessionsPerLoad = 3;

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadConfessions();
    updateConfessionCount();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    const submitBtn = document.getElementById('submitBtn');
    const closeModal = document.getElementById('closeModal');
    const submitModal = document.getElementById('submitModal');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    submitBtn.addEventListener('click', () => {
        submitModal.classList.add('active');
    });

    closeModal.addEventListener('click', () => {
        submitModal.classList.remove('active');
    });

    submitModal.addEventListener('click', (e) => {
        if (e.target === submitModal) {
            submitModal.classList.remove('active');
        }
    });

    loadMoreBtn.addEventListener('click', loadMoreConfessions);
}

// Load confessions
function loadConfessions() {
    const grid = document.getElementById('confessionsGrid');
    grid.innerHTML = '';

    const confessionsToShow = confessionsData.slice(0, displayedCount);
    
    confessionsToShow.forEach((confession, index) => {
        const card = createConfessionCard(confession, index);
        grid.appendChild(card);
    });

    // Hide load more button if all confessions are displayed
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (displayedCount >= confessionsData.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-block';
    }
}

// Create confession card
function createConfessionCard(confession, index) {
    const card = document.createElement('div');
    card.className = 'confession-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <p class="confession-text">${confession.text}</p>
        <div class="confession-meta">
            <span class="confession-date">${confession.date}</span>
            <span class="confession-tag">${confession.tag}</span>
        </div>
    `;
    
    return card;
}

// Load more confessions
function loadMoreConfessions() {
    displayedCount += confessionsPerLoad;
    loadConfessions();
}

// Update confession count
function updateConfessionCount() {
    const countElement = document.getElementById('confessionCount');
    countElement.textContent = confessionsData.length;
}

// Function to add new confessions (you'll use this when integrating with backend)
function addNewConfession(confessionData) {
    confessionsData.unshift({
        id: confessionsData.length + 1,
        text: confessionData.text,
        date: 'Just now',
        tag: confessionData.tag || 'Life'
    });
    loadConfessions();
    updateConfessionCount();
}

// Optional: Load confessions from JSON file
async function loadConfessionsFromJSON() {
    try {
        const response = await fetch('confessions.json');
        const data = await response.json();
        confessionsData = data.confessions;
        loadConfessions();
        updateConfessionCount();
    } catch (error) {
        console.log('Using sample data. To load from JSON, create confessions.json file.');
    }
}

// Uncomment this line if you want to load from JSON file instead:
// loadConfessionsFromJSON();

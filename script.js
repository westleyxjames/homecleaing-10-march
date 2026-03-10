// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }

    // Set current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.includes('#')) {
                e.preventDefault();
                const target = document.querySelector(href.split('#')[1] ? '#' + href.split('#')[1] : href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Create Blog Card
function createBlogCard(post) {
    const card = document.createElement('article');
    card.className = 'blog-card';
    
    const date = new Date(post.date);
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    card.innerHTML = `
        <a href="blog-post.html?slug=${post.slug}">
            <div class="blog-card-image">
                <img src="${post.image}" alt="${post.title}">
                <div class="blog-card-badge">${post.category}</div>
            </div>
        </a>
        <div class="blog-card-content">
            <div class="blog-card-meta">
                <span>📅 ${formattedDate}</span>
                <span>👤 ${post.author}</span>
            </div>
            <a href="blog-post.html?slug=${post.slug}">
                <h3 class="blog-card-title">${post.title}</h3>
            </a>
            <p class="blog-card-excerpt">${post.excerpt}</p>
            <div class="blog-card-tags">
                ${post.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="blog-post.html?slug=${post.slug}" class="blog-card-link">
                Read More →
            </a>
        </div>
    `;
    
    return card;
}

// Format Date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Get URL Parameter
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Scroll to Top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

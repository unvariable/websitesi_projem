document.addEventListener('DOMContentLoaded', () => {
    // blogPosts verisi data.js dosyasından otomatik olarak gelir.

    const grid = document.getElementById('blogGrid');
    const categoryFilter = document.getElementById('categoryFilter');
    const dateSort = document.getElementById('dateSort');

    function renderPosts(posts) {
        grid.innerHTML = '';

        posts.forEach(post => {
            const article = document.createElement('article');
            article.className = 'blog-card';

            // Tarihi formatla (YYYY-MM-DD -> DD.MM.YYYY)
            const dateObj = new Date(post.date);
            const formattedDate = dateObj.toLocaleDateString('tr-TR');

            article.innerHTML = `
                <img src="${post.image}" alt="${post.title}" class="card-image">
                <div class="card-content">
                    <span class="category-tag">${post.category}</span>
                    <span class="date-tag">${formattedDate}</span>
                    <h3>${post.title}</h3>
                    <p>${post.description}</p>
                    <a href="${post.link}" class="read-more">Devamını Oku</a>
                </div>
            `;
            grid.appendChild(article);
        });
    }

    function filterAndSortPosts() {
        const selectedCategory = categoryFilter.value;
        const sortOrder = dateSort.value;

        // 1. Filtrele
        let filteredPosts = blogPosts.filter(post => {
            if (selectedCategory === 'all') return true;
            return post.category === selectedCategory;
        });

        // 2. Sırala
        filteredPosts.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);

            if (sortOrder === 'newest') {
                return dateB - dateA; // Yeniden eskiye
            } else {
                return dateA - dateB; // Eskiden yeniye
            }
        });

        renderPosts(filteredPosts);
    }

    // Event Listeners
    categoryFilter.addEventListener('change', filterAndSortPosts);
    dateSort.addEventListener('change', filterAndSortPosts);

    // Initial Render
    filterAndSortPosts();
});

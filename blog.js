document.addEventListener('DOMContentLoaded', () => {
    // Örnek Blog Verileri
    const blogPosts = [
        {
            id: 1,
            title: "Web Tasarımı Nedir?",
            description: "Web tasarımı süreçleri, HTML ve CSS temelleri üzerine kısa bir giriş yazısı. Tasarımın inceliklerini öğrenin.",
            image: "images/web_tasarimi.png",
            date: "2025-12-20",
            category: "Teknoloji",
            link: "posts/web-tasarimi-nedir.html"
        },
        {
            id: 2,
            title: "Kodlamaya Başlarken",
            description: "Programlama dünyasına adım atmak isteyenler için tavsiyeler. Hangi dilden başlamalı?",
            image: "images/kodlama.jpg",
            date: "2025-12-18",
            category: "Öğrenme",
            link: "posts/kodlamaya-baslarken.html"
        },
        {
            id: 3,
            title: "Öğrenci Hayatı ve Zaman Yönetimi",
            description: "Dersler ve sosyal hayat arasındaki dengeyi nasıl kurabiliriz? Etkili çalışma teknikleri.",
            image: "images/zaman_yonetimi.png",
            date: "2025-12-19",
            category: "Yaşam",
            link: "posts/ogrenci-hayati-ve-zaman-yonetimi.html"
        },
        {
            id: 4,
            title: "Yapay Zeka ve Gelecek",
            description: "Yapay zekanın hayatımızdaki yeri ve gelecekte bizi nelerin beklediği hakkında.",
            image: "https://source.unsplash.com/random/400x300/?ai,robot",
            date: "2025-12-15",
            category: "Teknoloji",
            link: "#" 
        },
        {
            id: 5,
            title: "Verimli Ders Çalışma Teknikleri",
            description: "Pomodoro tekniği ve daha fazlası ile daha kısa sürede daha çok şey öğrenin.",
            image: "https://source.unsplash.com/random/400x300/?study,book",
            date: "2025-12-10",
            category: "Öğrenme",
            link: "#"
        }
    ];

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

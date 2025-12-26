document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Aşağı kaydırılıyor -> Header'ı gizle
            header.classList.add('nav-hidden');
        } else {
            // Yukarı kaydırılıyor -> Header'ı göster
            header.classList.remove('nav-hidden');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Mobil için negatif scroll kontrolü
    });
    // ---------------------------------------------------------
    // "Son Yazılar" Otomatik Yükleme (Ana Sayfa İçin)
    // ---------------------------------------------------------
    const homeBlogGrid = document.querySelector('.blog-grid');
    // Eğer ana sayfadaysak (blogGrid id'si olmayan ama blog-grid class'ı olan yer)
    if (homeBlogGrid && !document.getElementById('blogGrid')) {
        renderRecentPosts(homeBlogGrid);
    }

    function renderRecentPosts(container) {
        // 1. Yazıları tarihe göre azalan (yeniden eskiye) sırala
        const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

        // 2. İlk 3 yazıyı al
        const latestPosts = sortedPosts.slice(0, 3);

        // 3. Container'ı temizle ve yazıları ekle
        container.innerHTML = '';
        latestPosts.forEach(post => {
            const dateObj = new Date(post.date);
            const formattedDate = dateObj.toLocaleDateString('tr-TR');

            const article = document.createElement('article');
            article.className = 'blog-card';
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
            container.appendChild(article);
        });
    }
});


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
});

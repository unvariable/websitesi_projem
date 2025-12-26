# Yeni Blog Yazısı Nasıl Eklenir?

Bu proje statik bir web sitesi olduğu için (bir veritabanı paneli yok), yeni bir yazı eklemek iki adımlı basit bir işlemdir.

## Adım 1: Yeni HTML Sayfası Oluşturma

1.  `posts` klasörüne gidin.
2.  Mevcut dosyalardan birini (örneğin `web-tasarimi-nedir.html`) kopyalayıp yapıştırın.
3.  Yeni dosyanın adını içeriğinize uygun şekilde değiştirin (örneğin `yapay-zeka-nedir.html`). **Türkçe karakter ve boşluk kullanmamaya özen gösterin.**
4.  Bu yeni dosyayı bir kod editörü (veya Not Defteri) ile açın ve şu kısımları güncelleyin:
    *   `<title>... | Blog Dünyası</title>` kısmı.
    *   `<h1>...</h1>` içindeki başlık.
    *   `<div class="post-meta">...</div>` içindeki **Kategori** ve **Tarih**.
    *   Yazının içeriği (`<p>`, `<h2>`, `<img>` etiketleri).
    *   **Resim Yolu:** Eğer yeni bir resim kullanacaksanız bunu `images` klasörüne atın ve `src="../images/yeni-resim.jpg"` şeklinde güncelleyin.

## Adım 2: Blog Listesine Ekleme (`blog.js`)

Yazınızın "Blog" sayfasında görünmesi ve filtrelenebilmesi için `blog.js` dosyasına kaydını yapmanız gerekir.

1.  Ana klasördeki `blog.js` dosyasını açın.
2.  `blogPosts` dizisinin içine yeni bir süslü parantez `{ ... }` bloğu ekleyin. En sona ekleyebilirsiniz (virgüle dikkat edin).

**Örnek Şablon:**

```javascript
    {
        id: 6, // Bir önceki sayıdan devam edin
        title: "Yazınızın Başlığı Buraya",
        description: "Blog sayfasında kartın üzerinde görünecek kısa özet açıklama.",
        image: "images/resim-dosyaniz.jpg", // Ana sayfadaki resim yolu (başında ../ yok!)
        date: "2025-12-25", // YYYY-AA-GG formatında (Sıralama için önemli)
        category: "Teknoloji", // Kategori filtreleme ile tam eşleşmeli (Teknoloji, Yaşam, Öğrenme)
        link: "posts/dosya-adiniz.html" // Adım 1'de oluşturduğunuz dosya adı
    },
```

## Önemli İpuçları
*   **Resim Yolları:**
    *   `posts/` içindeki HTML dosyalarında resim yolu `../images/resim.jpg` olur (bir üst klasöre çıkmak için `../`).
    *   `blog.js` dosyasında ise resim yolu direkt `images/resim.jpg` olur (çünkü bu dosya ana dizinde çalışır).
*   **Tarih Formatı:** `blog.js` içinde tarihi mutlaka `Yıl-Ay-Gün` (örn: 2025-12-30) formatında yazın ki sıralama doğru çalışsın.

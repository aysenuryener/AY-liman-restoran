# AY Liman

Ege/Akdeniz konseptli butik bir restoran için tek sayfa pazarlama vitrini ve mobil-öncelikli QR menü sayfası. Next.js (App Router) + TypeScript + Tailwind CSS ile yapıldı.

**Mimari kuralı:** veritabanı yok, auth yok, dış API çağrısı yok, localStorage yok. Tüm içerik `data/` klasöründeki seed dosyalarından gelir; bunları değiştirmek siteyi günceller.

## Geliştirme

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) — ana vitrin
[http://localhost:3000/menu](http://localhost:3000/menu) — QR menü sayfası

## İçeriği güncellemek

- `data/site.ts` — isim, hikâye, adres, telefon, çalışma saatleri, Instagram, harita gömme linki, rezervasyon açma/kapama bayrağı (`reservationEnabled`).
- `data/menu.ts` — kategoriler ve ürünler (ad, açıklama, fiyat, kalori, alerjen listesi, görsel yolu).

## Görseller

Görseller `public/images/` altına aşağıdaki dosya adlarıyla eklendiğinde otomatik olarak görünür (eklenene kadar zarif bir yer tutucu gösterilir):

```
public/images/hero.jpg              Hero arka planı (mekan, geniş, golden hour)
public/images/mekan-kose.jpg        Hikâye bölümü (iki kişilik köşe masa)
public/images/doku-duvar.jpg        Bölüm ayracı / arka plan dokusu
public/images/yemek-meze.jpg        Menüden Seçmeler + galeri + başlangıçlar
public/images/yemek-balik.jpg       Menüden Seçmeler + ana yemek (levrek)
public/images/yemek-yag.jpg         Galeri + ana yemekler (zeytinyağı yakın çekim)
public/images/yemek-tatli.jpg       Menüden Seçmeler + tatlı kategorisi
public/images/marka-moodboard.jpg   (opsiyonel) basın/footer dokusu
public/images/marka-menukart.jpg    (opsiyonel) menü başlık görseli
public/images/marka-natürmort.jpg   Galeri + içecekler + ana yemek (risotto)
```

Dosya adları ve klasör yolu birebir eşleşmeli (Türkçe karakterler dahil). Bir görsel eklendiğinde sayfayı yeniden derlemeden (dev modda) otomatik belirir.

## QR menü kodu üretmek

`/menu` rotasına işaret eden statik bir QR kod, masa kartı veya broşür için şu şekilde üretilebilir:

1. Siteyi Vercel'e deploy ettikten sonra menü adresini not edin, örn: `https://ay-liman.vercel.app/menu`
2. Ücretsiz bir QR üretici kullanın (örn. [qr-code-generator.com](https://www.qr-code-generator.com) veya [api.qrserver.com](https://api.qrserver.com)) ve bu adresi girin.
3. PNG/SVG olarak indirip masa kartlarına veya broşüre basın.
4. Adres değişirse (örn. alan adı değişirse) QR kodu yeniden üretmeniz gerekir — QR kod sabit bir görseldir, otomatik güncellenmez.

Örnek API tabanlı üretim (terminalde, opsiyonel):

```bash
curl "https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://ay-liman.vercel.app/menu" -o qr-menu.png
```

## Rezervasyon formu

`data/site.ts` içindeki `reservationEnabled` varsayılan olarak `false`'dur — bu durumda "Rezervasyon" butonu İletişim/Ziyaret bölümüne kaydırır. `true` yapıldığında ad/telefon/tarih/saat/kişi sayısı alan bir form görünür ve gönderildiğinde WhatsApp üzerinden mesaj olarak iletilir (backend yoktur).

## Deploy

Proje tamamen statik/SSG'dir, Vercel'e doğrudan deploy edilebilir:

```bash
vercel --prod
```

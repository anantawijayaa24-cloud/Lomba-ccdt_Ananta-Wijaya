Ini dia cara untuk menjalankan projectnya secara lokal Jika menggunakan Tailwind melalui NPM.
langkah-langkahnya untuk menjalankan projectnya:

- Buat folder & masuk dengan : "mkdir portofolio-ccdt && cd portofolio-ccdt".
- Selanjutnya buat di terminal dengan Init project Node dengan : "npm init -y".
- Lalu Install Tailwind dengan : "npm install tailwindcss @tailwindcss/cli".
- Setelah di Install lanjut buat input.css di terminal dengan code : "@import "tailwindcss"; (isi file assets/css/input.css)".
- Berikutnya Jalankan watch mode dengan : "npx @tailwindcss/cli -i ./assets/css/input.css -o ./assets/css/output.css --watch".
- Setelah itu Link ke HTML dengan tambahkan di bagian header dengan : "<link rel="stylesheet" href="./assets/css/output.css">".
- Berikutnya project yang kalian bikin itu sudah selesai dengan pembuatan project yang tema portofolio bebas, lanjut klik open terminal.
- Setelah open terminal, klik terminal baru.
- Jika di terminal tidak bisa menggunakan Powershell, gunakan CMD (Command Prompt).
- Lalu, di terminal kalian ketik "npm run watch".
- Jika setelah mengetik "npm run watch" maka nanti akan muncul "npx @tailwindcss/cli -i ./assets/css/input.css -  o ./assets/css/output.css --watch".
- Selanjutnya tunggu loading sekitar 1-3 detik.
- Setelah itu Ketika sudah muncul version tailwind dan Done, klik live server yaitu Go live yang ada di kanan Bawah.
- Dan sudah selesai, tampilannya bisa dilihat langsung diarahkan ke browser Microsoft Edge.

Itu dia langkah-langkah untuk menjalankan project menggunakan Tailwind melalui NPM.

Berikut Inilah link untuk akses demo hasil deployment website yang telah saya buat ke Vercel:
- Deployment : https://vercel.com/anantawijaya/lomba-ccdt-ananta-wijaya/9WiAZ3H5ydVfdW3jvSWg5VhC326f
- Domains : https://lomba-ccdt-ananta-wijaya.vercel.app/
PORTAL & ABSENSI DPRT PSI SUMBERJAYA
PAKET PERSIAPAN DEPLOY VERCEL + FIREBASE

ISI PAKET
- index.html            Aplikasi HTML versi terakhir
- firebase-config.js    Tempat mengisi konfigurasi Firebase Web App
- vercel.json           Konfigurasi hosting Vercel
- manifest.webmanifest Manifest instalasi PWA
- icon-192.png          Ikon aplikasi
- icon-512.png          Ikon aplikasi

A. ISI KONFIGURASI FIREBASE
1. Buka https://console.firebase.google.com/
2. Pilih proyek Firebase yang sudah Anda buat.
3. Buka Project settings (ikon roda gigi) > General > Your apps.
4. Pilih aplikasi Web (</>) atau daftarkan aplikasi Web jika belum ada.
5. Salin nilai apiKey, authDomain, projectId, storageBucket,
   messagingSenderId, dan appId ke file firebase-config.js.
6. Isi window.ADMIN_EMAIL dengan email admin yang akan dipakai login.
7. Simpan file firebase-config.js.

CATATAN: Firebase Web config/API key adalah identitas aplikasi web, bukan
kunci admin. Jangan pernah menaruh service account JSON, private key,
atau kredensial Admin SDK di dalam HTML/JavaScript yang dikirim ke browser.

B. DEPLOY KE VERCEL
1. Buat repository GitHub baru, misalnya:
   portal-absensi-dprt-psi-sumberjaya
2. Upload SEMUA isi folder paket ini ke root repository (bukan folder luar).
3. Pastikan index.html dan firebase-config.js berada di root repository.
4. Buka https://vercel.com/ lalu Add New > Project.
5. Import repository GitHub tadi.
6. Framework Preset: Other.
7. Build Command: kosongkan.
8. Output Directory: .
9. Klik Deploy.
10. Buka domain .vercel.app yang diberikan Vercel.

Setiap perubahan kode yang di-push ke branch produksi GitHub akan memicu
deployment baru secara otomatis.

C. SETTING FIREBASE AUTHENTICATION
1. Firebase Console > Authentication > Get started.
2. Sign-in method > aktifkan Email/Password.
3. Authentication > Settings > Authorized domains.
4. Tambahkan domain Vercel Anda, misalnya:
   portal-absensi-dprt-psi-sumberjaya.vercel.app
5. Pastikan akun admin benar-benar dibuat pada Authentication.

D. SETTING FIRESTORE
Aplikasi saat ini memakai koleksi/dokumen berikut:
- app/{office, chairman, info, loginCfg, formCfg, struktur, kas}
- users/{id}
- directory/{username-atau-id-kader}
- uidmap/{uid}
- attendance/{id}
- resets/{id}

JANGAN mengaktifkan Firestore dalam mode test atau memasang rules yang
mengizinkan read/write untuk semua orang. Kode saat ini membaca koleksi
users secara luas untuk menyusun daftar pengguna, sehingga aturan yang
aman perlu disertai refactor pembatasan data pengguna. Jangan membuka
seluruh dokumen users, directory, uidmap, kas, atau data anggota kepada
semua akun kader. Aturan final harus menguji role admin dari custom claims
atau dokumen role yang tidak dapat diubah pengguna, dan membatasi akses
kader ke data miliknya sendiri.

PENTING SEBELUM DIPAKAI DENGAN DATA ASLI:
- Audit dan refactor akses koleksi users/directory/uidmap agar data pribadi
  tidak terbaca oleh semua pengguna yang login.
- Pastikan pembuatan akun tidak meninggalkan password dalam dokumen Firestore
  atau localStorage. Autentikasi harus ditangani Firebase Authentication.
- Pastikan role admin tidak hanya ditentukan dari email di JavaScript
  (nilai di browser dapat dimodifikasi); gunakan custom claims/backend tepercaya.
- Uji rules dengan Firebase Emulator / Rules Playground untuk setiap role.
- Data kas dan pengaturan organisasi hanya boleh ditulis admin/bendahara
  sesuai kebijakan yang ditetapkan.
- Buat backup Firestore terjadwal sebelum operasional.

E. UJI SETELAH DEPLOY
[ ] Website terbuka dari HP melalui data seluler.
[ ] Status aplikasi menunjukkan koneksi cloud aktif.
[ ] Login admin menggunakan akun Firebase Authentication.
[ ] Buat data uji, lalu cek dokumen masuk ke Firestore.
[ ] Buka aplikasi pada perangkat/browser kedua dan cek data berubah otomatis.
[ ] Uji kader hanya dapat melihat/mengubah data sesuai haknya.
[ ] Uji logout dan login kembali.
[ ] Uji ekspor Excel.
[ ] Hapus data uji setelah pengujian.

BATASAN PAKET INI
Paket ini menyiapkan file statis dan panduan deployment. Paket belum
terhubung ke proyek Firebase milik Anda karena konfigurasi proyek, email
admin, domain Vercel, serta kebijakan role belum diberikan. Saya juga tidak
dapat masuk atau menerbitkan deployment ke akun Vercel/Firebase Anda dari
percakapan ini. Jangan gunakan data kader asli sebelum aturan keamanan
Firestore dan pembatasan role selesai diuji.

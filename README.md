# Vontrip - Volunteer Trip

## Prasyarat

Berikut ini yang harus terinstall pada sistem sebelum mulai menjalankan aplikasi.

1. NodeJS
2. NPM
3. MongoDB
4. AdonisJS CLI

> **Info**: Instalasi AdonisJS CLI dapat dilakukan dengan menjalankan perintah `sudo npm i -g @adonisjs/cli`

## Menjalankan Aplikasi

### Persiapan

Sebelum aplikasi ini dijalankan, ada hal-hal yang harus disiapkan lebih dahulu. Semua jenis persiapan, tertera berikut ini.

#### Menjalankan MongoDB

Jalankan perintah berikut.

```bash
sudo systemctl restart mongodb
```

#### Konfigurasi

Jalankan perintah berikut.

```bash
cp .env.example .env
adonis key:generate
```

Kemudian, buka file `.env` dan sesuaikan. Setelah itu, jalankan perintah berikut.

```bash
adonis migration:run
```

> **Info**: Abaikan apabila terjadi error. Cukup cek database sudah terbuat atau belum menggunakan *mongo client*.

### Menjalankan

Jalankan perintah berikut.

```bash
adonis serve --dev
```


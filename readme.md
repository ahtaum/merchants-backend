# Seller Pintar API

RESTful API untuk manajemen produk dan merchant menggunakan Express.js, PostgreSQL, Prisma ORM, dan JWT authentication. Dilengkapi dokumentasi Swagger di `/api-docs`.

---

## 🛠️ Tech Stack

- **Backend**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JSON Web Token (JWT)
- **Documentation**: Swagger (OpenAPI 3)

---

## 📦 Fitur Utama

- Registrasi & login untuk merchant dan user
- CRUD produk
- Variasi produk (warna & ukuran)
- Token-based authentication
- Swagger UI untuk dokumentasi API

---

## 📁 Struktur Folder

```
src/
├── modules/
│   └── product/
│       ├── productController.ts
│       ├── productRoute.ts
│       └── productService.ts
├── middleware/
│   └── authMiddleware.ts
├── prisma/
│   └── schema.prisma
├── app.ts
└── server.ts
```

---

## ⚙️ Instalasi

### 1. Clone project ini

```bash
git clone https://github.com/username/sellerpintar-api.git
cd sellerpintar-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup database & Prisma

Buat database PostgreSQL lalu sesuaikan di file `.env`.

#### Contoh `.env`:

```
JWT_SECRET="secretkeyyangkuat"
```

Lalu jalankan perintah berikut:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

---

## ▶️ Menjalankan Server

```bash
npm run dev
```

Server akan berjalan di: `http://localhost:3000`

---

## 📘 Dokumentasi API

Swagger UI tersedia di:

```
http://localhost:3000/api-docs
```

Gunakan ini untuk eksplorasi dan pengujian endpoint.

---

## 🔐 Autentikasi

Sebagian besar endpoint (seperti `/products`) membutuhkan token JWT.

### 🔑 Mendapatkan Token:

- **Login** melalui endpoint `/auth/login`
- Gunakan token di header setiap request:
  
```
Authorization: Bearer <token>
```

---

## 🧪 Contoh Endpoint

### 🔸 GET Semua Produk

```
GET /products
Headers:
Authorization: Bearer <token>
```

### 🔸 POST Produk Baru

```
POST /products
Headers:
Authorization: Bearer <token>
Body:
{
  "merchantId": "1",
  "name": "Kaos Polos",
  "location": "Bandung",
  "price": 100000,
  "colours": ["Merah", "Hitam"],
  "sizes": ["S", "M", "L"]
}
```
# 🧠 Penjelasan JavaScript
<p align="justify">
DOM (Document Object Model) pada JavaScript adalah representasi struktur halaman web dalam bentuk pohon objek. Dengan DOM, JavaScript bisa mengakses, mengubah, menambah, atau menghapus elemen HTML dan CSS secara dinamis.
</p>

---

## 🧭 Method Seleksi Elemen (Selection / Traversal)
<p align="justify">Digunakan untuk mencari dan mengambil elemen dari dokumen.</p>

```js
getElementById() | menghasilkan Element => digunakan untuk mencari atribut id

Contoh Penggunaan:
// ambil id judul lalu simpan ke dalam variabel judul
let judul = document.getElementById("judul");
// panggil judul lalu tambahkan style dan property css nya
judul.style.color = "red";
```

```js
getElementsByClassName() | menghasilkan HtmlCollection => digunakan untuk mencari atribut class

Contoh Penggunaan:
// ambil class P1 lalu simpan ke dalam variabel P1
let p1 = document.getElementsByClassName("p1");
// panggil P1 setelah itu tambahkan [index] lalu style dan property css nya
p1[0].style.color = "red";
```

```js
getElementsByTagName() | menghasilkan HtmlCollection => digunakan untuk mencari tag html

Contoh Penggunaan:
// ambil tag P lalu simpan ke dalam variabel P
let p = document.getElementsByTagName("p");
// panggil P setelah itu tambahkan [index] lalu style dan property css nya
p[2].style.backgroundColor = "aqua";
```

```js
querySelector() | menghasilkan Element => digunakan untuk mencari tag html secara spesifik

Contoh Penggunaan:
// ambil id B yang di dalam nya ada p lalu simpan ke dalam variabel P4
const p4 = document.querySelector("#b p");
// panggil P4 setelah itu tambahkan style dan property css nya
p4.style.color = "green";
```

```js
querySelectorAll() | menghasilkan NodeList => digunakan untuk mencari tag html secara keseluruhan

Contoh Penggunaan:
// ambil tag P lalu simpan ke dalam variabel PAll
const pAll = document.querySelectorAll("p");
// panggil PAll setelah itu tambahkan style dan property css nya
pAll[2].style.backgroundColor = "aqua";
```

---

## ✏️ Method Manipulasi Konten (Content Manipulation)
<p align="justify">Digunakan untuk mengubah isi teks atau HTML.</p>

```js
innerHTML (bukan method, tapi properti yang sering dipakai) => digunakan untuk merubah tag Html

Contoh Penggunaan:
// ambil id judul lalu simpan ke dalam variabel judulku
const judulku = document.getElementById("judul");
// panggil judulku setelah itu tambahkan style dan property css nya
judulku.innerHTML = "ini diubah di js";
```

```js
textContent => digunakan untuk merubah isi konten berupa text

Contoh Penggunaan:
// ambil id judul lalu simpan ke dalam variabel judulku
const judulku = document.getElementById("judul");
// panggil judulku setelah itu tambahkan style dan property css nya
judulku.textContent = "ini di ubah pakai text content";
```

```js
insertAdjacentHTML() => digunakan untuk menyisipkan tag html

Contoh Penggunaan:
// ambil id kontainer lalu simpan ke variabel kontainerku
const kontainerku = document.getElementById("kontainer");
// sisipkan tag HTML baru di akhir isi kontainer
kontainerku.insertAdjacentHTML("beforeend", "<p>Paragraf tambahan dari JS</p>");
// sisipkan tag HTML baru di awal isi kontainer
kontainerku.insertAdjacentHTML("afterbegin", "<button>Klik Saya</button>");
```

---

## 🏷️ Method Manipulasi Atribut (Attribute Handling)
<p align="justify">Digunakan untuk mengatur atau membaca atribut elemen.</p>

```js
setAttribute() => digunakan untuk menambahkan atribut baru beserta isi nya

Contoh Penggunaan:
// ambil tag h1 lalu simpan ke variabel h1
const h1 = document.querySelector("h1");
// buat nama atribut nya apa lalu atribut nya apa setelah itu simpan ke variabel h2
h1.setAttribute("id", "judulUtama");
```

```js
getAttribute() => digunakan untuk mengetahui isi atribut di tag html

Contoh Penggunaan:
// ambil tag h1 lalu simpan ke variabel h1
const h1 = document.querySelector("h1");
// ambil atribut id yang ada di dalam variabel h1 lalu simpan ke variabel nilaiId
const nilaiId = h1.getAttribute("id");
console.log(nilaiId); // Output: "judulUtama"
```

```js
removeAttribute() => digunakan untuk menghapus atribut

Contoh Penggunaan:
// ambil tag h1 lalu simpan ke variabel h1
const h1 = document.querySelector("h1");
// ambil atribut yang ingin di hapus
h1.removeAttribute("id");
```

```js
hasAttribute() => digunakan untuk Mengecek apakah sebuah elemen memiliki atribut tertentu. | Return value: true jika atribut ada, false jika tidak ada.

Contoh Penggunaan:
const h1 = document.querySelector("h1");
// Cek apakah ada atribut "id"
console.log(h1.hasAttribute("id")); 
// Output: true
// Cek apakah ada atribut "class"
console.log(h1.hasAttribute("class")); 
// Output: false
```

---

## 🎭 Method Manipulasi Kelas (Class Handling)
<p align="justify">Digunakan untuk mengelola kelas CSS dengan classList.</p>

```js
add() => digunakan untuk menambahkan class

Contoh Penggunaan:
// ambil id judul lalu simpan ke variabel judul
const judul = document.getElementById("judul");
// panggil judul setelah itu tambahkan classlist dan method nya apa
judul.classList.add("highlight");
```

```js
remove() => digunakan untuk menghapus class

Contoh Penggunaan:
// ambil id judul lalu simpan ke variabel judul
const judul = document.getElementById("judul");
// panggil judul setelah itu tambahkan classlist dan method nya apa
judul.classList.remove("highlight");
```

```js
toggle() => digunakan untuk menambahkan class jika belum ada dan menghapus kelas jika sudah ada

Contoh Penggunaan:
// ambil id judul lalu simpan ke variabel judul
const judul = document.getElementById("judul");
// panggil judul setelah itu tambahkan classlist dan method nya apa
judul.classList.toggle("hidden");
```

```js
contains() => digunakan untuk mengecek class

Contoh Penggunaan:
// ambil id judul lalu simpan ke variabel judul
const judul = document.getElementById("judul");
// panggil judul ke dalam console.log setelah itu tambahkan classlist dan method nya apa
console.log(judul.classList.contains("highlight")); // true
```

```js
replace() => digunakan untuk mengganti class

Contoh Penggunaan:
// ambil id judul lalu simpan ke variabel judul
const judul = document.getElementById("judul");
// panggil judul setelah itu tambahkan classlist dan method nya apa
judul.classList.replace("hidden", "show");
```

---

## 🗂️ Method Manipulasi Struktur (Structure Modification)
<p align="justify">Digunakan untuk menambah atau menghapus elemen.</p>

```js
createElement() => digunakan untuk membuat element html baru

Contoh Penggunaan:
// Buat elemen baru <p>
let p = document.createElement("p"); // bikin elemen <p>
```

```js
createTextNode() => digunakan untuk membuat teks baru di dalam element

Contoh Penggunaan:
// Buat node teks baru
let teksBaru = document.createTextNode("Halo cuy, ini teks baru!");
```

```js
appendChild() => digunakan untuk menambahkan element html di akhir

Contoh Penggunaan:
// Tempel ke container
container.appendChild(p); // masukkan <p> ke dalam #container
```

```js
inshertBefore() => digunakan untuk membuat element html diantara element html yang lain

Contoh Penggunaan:
// Sisipkan itemBaru sebelum itemReferensi
list.insertBefore(itemBaru, itemReferensi);
```

```js
removeChild() => digunakan untuk menghapus element html

Contoh Penggunaan:
// Ambil elemen anak yang mau dihapus (misalnya li kedua)
let item = list.children[1]; // <li>B</li>
// Hapus elemen anak dari parent
list.removeChild(item);
```

```js
replaceChild() => digunakan untuk mengubah element html yang sudah ada

Contoh Penggunaan:
// Ganti itemLama dengan itemBaru
list.replaceChild(itemBaru, itemLama);
```

```js
cloneNode() => digunakan untuk menggandakan node yang sudah ada

Contoh Penggunaan:
// Misalnya ada <div id="box"><p>Halo</p></div>
let box = document.getElementById("box");
// Clone elemen box (tanpa isi anak)
let cloneKosong = box.cloneNode(); 
// hasil: <div id="box"></div>
// Clone elemen box beserta isi anak
let cloneLengkap = box.cloneNode(true); 
// hasil: <div id="box"><p>Halo</p></div>
// Tempelkan clone ke body
document.body.appendChild(cloneLengkap);
```

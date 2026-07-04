# 🧠 Penjelasan JavaScript
<p align="justify">
DOM (Document Object Model) pada JavaScript adalah representasi struktur halaman web dalam bentuk pohon objek. Dengan DOM, JavaScript bisa mengakses, mengubah, menambah, atau menghapus elemen HTML dan CSS secara dinamis.
</p>

---

## 🧭 Method Seleksi Elemen (Selection / Traversal)
<p align="justify">Digunakan untuk mencari dan mengambil elemen dari dokumen.</p>

```js
getElementById() | menghasilkan Element → digunakan untuk mencari atribut id

Contoh Penggunaan:
// ambil id judul lalu simpan ke dalam variabel judul
let judul = document.getElementById("judul");
// panggil judul lalu tambahkan style dan property css nya
judul.style.color = "red";
```

```js
getElementsByClassName() | menghasilkan HtmlCollection → digunakan untuk mencari atribut class

Contoh Penggunaan:
// ambil class P1 lalu simpan ke dalam variabel P1
let p1 = document.getElementsByClassName("p1");
// panggil P1 setelah itu tambahkan [index] lalu style dan property css nya
p1[0].style.color = "red";
```

```js
getElementsByTagName() | menghasilkan HtmlCollection → digunakan untuk mencari tag html

Contoh Penggunaan:
// ambil tag P lalu simpan ke dalam variabel P
let p = document.getElementsByTagName("p");
// panggil P setelah itu tambahkan [index] lalu style dan property css nya
p[2].style.backgroundColor = "aqua";
```

```js
querySelector() | menghasilkan Element → digunakan untuk mencari tag html secara spesifik

Contoh Penggunaan:
// ambil id B yang di dalam nya ada p lalu simpan ke dalam variabel P4
const p4 = document.querySelector("#b p");
// panggil P4 setelah itu tambahkan style dan property css nya
p4.style.color = "green";
```

```js
querySelectorAll() | menghasilkan NodeList → digunakan untuk mencari tag html secara keseluruhan

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
innerHTML (bukan method, tapi properti yang sering dipakai) → digunakan untuk merubah tag Html

Contoh Penggunaan:
// ambil id judul lalu simpan ke dalam variabel judulku
const judulku = document.getElementById("judul");
// panggil judulku setelah itu tambahkan style dan property css nya
judulku.innerHTML = "ini diubah di js";
```

```js
textContent → digunakan untuk merubah isi konten berupa text

Contoh Penggunaan:
// ambil id judul lalu simpan ke dalam variabel judulku
const judulku = document.getElementById("judul");
// panggil judulku setelah itu tambahkan style dan property css nya
judulku.textContent = "ini di ubah pakai text content";
```

```js
insertAdjacentHTML() → digunakan untuk menyisipkan tag html

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
setAttribute() → digunakan untuk menambahkan atribut baru beserta isi nya

Contoh Penggunaan:
// ambil tag h1 lalu simpan ke variabel h1
const h1 = document.querySelector("h1");
// buat nama atribut nya apa lalu atribut nya apa setelah itu simpan ke variabel h2
h1.setAttribute("id", "judulUtama");
```

```js
getAttribute() → digunakan untuk mengetahui isi atribut di tag html

Contoh Penggunaan:
// ambil tag h1 lalu simpan ke variabel h1
const h1 = document.querySelector("h1");
// ambil atribut id yang ada di dalam variabel h1 lalu simpan ke variabel nilaiId
const nilaiId = h1.getAttribute("id");
console.log(nilaiId); // Output: "judulUtama"
```

```js
removeAttribute() → digunakan untuk menghapus atribut

Contoh Penggunaan:
// ambil tag h1 lalu simpan ke variabel h1
const h1 = document.querySelector("h1");
// ambil atribut yang ingin di hapus
h1.removeAttribute("id");
```

```js
hasAttribute() → digunakan untuk Mengecek apakah sebuah elemen memiliki atribut tertentu. | Return value: true jika atribut ada, false jika tidak ada.

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
add() → digunakan untuk menambahkan class

Contoh Penggunaan:
// ambil id judul lalu simpan ke variabel judul
const judul = document.getElementById("judul");
// panggil judul setelah itu tambahkan classlist dan method nya apa
judul.classList.add("highlight");
```

```js
remove() → digunakan untuk menghapus class

Contoh Penggunaan:
// ambil id judul lalu simpan ke variabel judul
const judul = document.getElementById("judul");
// panggil judul setelah itu tambahkan classlist dan method nya apa
judul.classList.remove("highlight");
```

```js
toggle() → digunakan untuk menambahkan class jika belum ada dan menghapus kelas jika sudah ada

Contoh Penggunaan:
// ambil id judul lalu simpan ke variabel judul
const judul = document.getElementById("judul");
// panggil judul setelah itu tambahkan classlist dan method nya apa
judul.classList.toggle("hidden");
```

```js
contains() → digunakan untuk mengecek class

Contoh Penggunaan:
// ambil id judul lalu simpan ke variabel judul
const judul = document.getElementById("judul");
// panggil judul ke dalam console.log setelah itu tambahkan classlist dan method nya apa
console.log(judul.classList.contains("highlight")); // true
```

```js
replace() → digunakan untuk mengganti class

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
createElement() → digunakan untuk membuat element html baru

Contoh Penggunaan:
// Buat elemen baru <p>
let p = document.createElement("p"); // bikin elemen <p>
```

```js
createTextNode() → digunakan untuk membuat teks baru di dalam element

Contoh Penggunaan:
// Buat node teks baru
let teksBaru = document.createTextNode("Halo cuy, ini teks baru!");
```

```js
appendChild() → digunakan untuk menambahkan element html di akhir

Contoh Penggunaan:
// Tempel ke container
container.appendChild(p); // masukkan <p> ke dalam #container
```

```js
inshertBefore() → digunakan untuk membuat element html diantara element html yang lain

Contoh Penggunaan:
// Sisipkan itemBaru sebelum itemReferensi
list.insertBefore(itemBaru, itemReferensi);
```

```js
removeChild() → digunakan untuk menghapus element html

Contoh Penggunaan:
// Ambil elemen anak yang mau dihapus (misalnya li kedua)
let item = list.children[1]; // <li>B</li>
// Hapus elemen anak dari parent
list.removeChild(item);
```

```js
replaceChild() → digunakan untuk mengubah element html yang sudah ada

Contoh Penggunaan:
// Ganti itemLama dengan itemBaru
list.replaceChild(itemBaru, itemLama);
```

```js
cloneNode() → digunakan untuk menggandakan node yang sudah ada

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

---

## ⌨️ Penjelasan DOM Events
<p align="justify">
DOM Event adalah mekanisme di JavaScript yang memungkinkan halaman web merespons interaksi atau kejadian tertentu. Dengan kata lain, event adalah “kejadian” yang terjadi di dalam dokumen (DOM), seperti
klik tombol, mengetik di input, memuat halaman, atau bahkan perubahan data.
</p>

```js
addEventListener() → digunakan untuk menangkap interaksi events

Contoh Penggunaan:
// Ambil elemen target (misalnya tombol)
let tombol = document.getElementById("btn");
// Tambahkan event listener untuk klik
tombol.addEventListener("click", function() {
  // Setelah di klik tampilkan alert()
  alert("Tombol diklik cuy!");
});
```

```js
removeEventListener() → digunakan untuk menghapus event listener

Contoh Penggunaan:
// Ambil elemen target (misalnya tombol)
let tombol = document.getElementById("btn");
// Buat fungsi handler
function klikHandler() {
  alert("Tombol diklik cuy!");
}
// Pasang event listener
tombol.addEventListener("click", klikHandler);
// Hapus event listener
tombol.removeEventListener("click", klikHandler);
```

```js
dispatchEvent() → digunakan untuk memicu event secara manual pada sebuah elemen.

Contoh Penggunaan:
// Ambil elemen target (misalnya tombol)
let tombol = document.getElementById("btn");
// Buat event baru bertipe "click"
let eventKlik = new Event("click");
// Pasang listener untuk menangkap event
tombol.addEventListener("click", function() {
  alert("Event klik dipicu cuy!");
});
// Jalankan event secara manual
tombol.dispatchEvent(eventKlik);
```

---

## Macam-macam Event Yang Sering Digunakan:

```
Mouse Events | Digunakan untuk interaksi berbasis klik dan gerakan kursor.
- click → saat elemen diklik.
- dblclick → saat elemen diklik dua kali.
- mousemove → saat kursor bergerak di atas elemen.
- mouseover / mouseout → saat kursor masuk atau keluar dari elemen.
```

```
Keyboard Events | Dipakai untuk input berbasis keyboard.
- keydown → saat tombol ditekan.
- keypress → saat tombol ditekan (deprecated di beberapa browser, diganti dengan keydown).
- keyup → saat tombol dilepas.
```

```
Form Events | Sangat penting dalam aplikasi web yang melibatkan input pengguna.
- submit → saat form dikirim.
- change → saat nilai input berubah.
- focus → saat input mendapat fokus.
- blur → saat input kehilangan fokus.
```

```
Window & Document Events | Dipakai untuk mengontrol perilaku halaman secara keseluruhan.
- load → saat halaman selesai dimuat.
- resize → saat ukuran jendela browser berubah.
- scroll → saat pengguna menggulir halaman.
```

```
Input & UI Events | Digunakan untuk interaksi lebih detail.
- input → saat nilai input berubah (lebih real-time dibanding change).
- select → saat teks dalam input dipilih.
```

---

## 🌳 Penjelasan DOM Traversal
<p align="justify">
DOM traversal adalah proses menavigasi struktur pohon DOM (Document Object Model) di JavaScript untuk menemukan, mengakses, atau memanipulasi elemen dalam halaman web. DOM sendiri merepresentasikan
dokumen HTML sebagai sebuah tree of nodes (pohon node) yang saling berhubungan dengan konsep parent, child, dan sibling.
</p>

```
Konsep Utama DOM Traversal:
- Parent Node → elemen induk dari sebuah node.
- Child Node → elemen di dalam induk.
- Sibling Node → elemen yang berada sejajar (saudara).
- Root Node → node paling atas (biasanya <html>).
```

```js
parentNode → ambil induk dari list

Contoh Penggunaan:
let item = document.querySelector("#list li"); 
// ambil elemen <li>
// Ambil induk dari elemen <li>
let induk = item.parentNode; 
// parentNode → ambil elemen induk (dalam hal ini <ul>)
```

```js
childNodes → semua anak termasuk text node (spasi, enter)

Contoh Penggunaan:
let list = document.getElementById("list");
// Ambil semua anak node
let anak = list.childNodes; 
// childNodes → berisi semua node anak, termasuk elemen <li> dan text node (spasi/enter)
```

```js
firstChild → anak pertama (bisa text node)

Contoh Penggunaan:
let list = document.getElementById("list");
// Ambil anak pertama
let anakPertama = list.firstChild; 
// firstChild → ambil node pertama (bisa elemen <li> atau text node spasi/enter)
```

```js
lastChild → anak terakhir (bisa text node)

Contoh Penggunaan:
let list = document.getElementById("list");
// Ambil anak terakhir
let anakTerakhir = list.lastChild; 
// lastChild → ambil node terakhir (bisa elemen <li> atau text node spasi/enter)
```

```js
nextSibling → saudara setelah list

Contoh Penggunaan:
let itemB = document.querySelector("#list li:nth-child(2)"); 
// ambil elemen <li>B</li>
// Ambil saudara setelahnya
let saudaraSetelah = itemB.nextSibling; 
// nextSibling → ambil node setelahnya (bisa elemen <li>C</li> atau text node spasi/enter)
```

```js
previousSibling → saudara sebelum list

Contoh Penggunaan:
let itemB = document.querySelector("#list li:nth-child(2)"); 
// ambil elemen <li>B</li>
// Ambil saudara sebelum elemen B
let saudaraSebelum = itemB.previousSibling; 
// previousSibling → ambil node saudara sebelum elemen (bisa text node spasi/enter atau elemen <li>A</li>)
```

```js
children → hanya elemen anak (lebih bersih dari childNodes)

Contoh Penggunaan:
let list = document.getElementById("list");
// Ambil semua anak elemen
let anakElemen = list.children; 
// children → hanya berisi elemen anak (<li>), lebih bersih daripada childNodes (tidak ada text node)
```

```js
firstElementChild → anak elemen pertama

Contoh Penggunaan:
let list = document.getElementById("list");
// Ambil anak elemen pertama
let anakPertama = list.firstElementChild; 
// firstElementChild → ambil elemen anak pertama (langsung <li>A</li>, tidak kena text node spasi/enter)
```

```js
lastElementChild → anak elemen terakhir

Contoh Penggunaan:
let list = document.getElementById("list");
// Ambil anak elemen terakhir
let anakTerakhir = list.lastElementChild; 
// lastElementChild → ambil elemen anak terakhir (langsung <li>C</li>, tidak kena text node spasi/enter)
```

```js
nextElementSibling → elemen saudara setelah firstItem

Contoh Penggunaan:
let firstItem = document.getElementById("firstItem"); 
// ambil elemen <li>A</li>
// Ambil elemen saudara setelahnya
let saudaraSetelah = firstItem.nextElementSibling; 
// nextElementSibling → ambil elemen saudara setelahnya (langsung <li>B</li>, tidak kena text node spasi/enter)
```

```js
previousElementSibling → elemen saudara sebelum lastItem

Contoh Penggunaan:
let lastItem = document.getElementById("lastItem"); 
// ambil elemen <li>C</li>
// Ambil elemen saudara sebelum lastItem
let saudaraSebelum = lastItem.previousElementSibling; 
// previousElementSibling → ambil elemen saudara sebelum elemen tertentu (langsung <li>B</li>, tidak kena text node spasi/enter)
```

---

## ✋ Penjelasan preventDefault
<p align="justify">
preventDefault() adalah sebuah method di JavaScript yang digunakan untuk mencegah perilaku bawaan (default behavior) dari suatu event pada elemen HTML.
</p>

```js
Contoh Penggunaan:
let form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  // preventDefault → mencegah aksi bawaan (submit form reload halaman)
  // Ganti dengan aksi custom
  alert("Form dicegah submit, data bisa diproses manual cuy!");
});
```

---

## 🫧 Penjelasan Event Bubbling
<p align="justify">
Event Bubbling adalah mekanisme di JavaScript di mana sebuah event yang terjadi pada elemen anak akan “naik” (bubble up) ke elemen induknya, lalu ke induk yang lebih tinggi, hingga mencapai root
(document).
</p>

```js
child.addEventListener("click", (e) => {
  e.stopPropagation(); 
  console.log("Klik child, bubbling dihentikan");
});
```

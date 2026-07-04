# 🧠 Penjelasan JavaScript
<p align="justify">
DOM (Document Object Model) pada JavaScript adalah representasi struktur halaman web dalam bentuk pohon objek. Dengan DOM, JavaScript bisa mengakses, mengubah, menambah, atau menghapus elemen HTML dan CSS secara dinamis.
</p>

---

### 📝 Method Seleksi Elemen (Selection/Traversal)
<p align="justify">Digunakan untuk mencari dan mengambil elemen dari dokumen.</p>

```
getElementById() | menghasilkan Element => digunakan untuk mencari atribut id
Contoh Penggunaan:
```

```js
// ambil id judul lalu simpan ke dalam variabel judul
let judul = document.getElementById("judul");
  
// panggil judul lalu tambahkan style dan property css nya
judul.style.color = "red";
```

```
getElementsByClassName() | menghasilkan HtmlCollection => digunakan untuk mencari atribut class
Contoh Penggunaan:
```
```js
// ambil class P1 lalu simpan ke dalam variabel P1
let p1 = document.getElementsByClassName("p1");

// panggil P1 setelah itu tambahkan [index] lalu style dan property css nya
p1[0].style.color = "red";
```

```
getElementsByTagName() | menghasilkan HtmlCollection => digunakan untuk mencari tag html
Contoh Penggunaan:
```
```js
// ambil tag P lalu simpan ke dalam variabel P
let p = document.getElementsByTagName("p");

// panggil P setelah itu tambahkan [index] lalu style dan property css nya
p[2].style.backgroundColor = "aqua";
```
```
querySelector() | menghasilkan Element => digunakan untuk mencari tag html secara spesifik
Contoh Penggunaan:
```
```js
// ambil id B yang di dalam nya ada p lalu simpan ke dalam variabel P4
const p4 = document.querySelector("#b p");

// panggil P4 setelah itu tambahkan style dan property css nya
p4.style.color = "green";
```

```
querySelectorAll() | menghasilkan NodeList => digunakan untuk mencari tag html secara keseluruhan
Contoh Penggunaan:
```
```js
// ambil tag P lalu simpan ke dalam variabel PAll
const pAll = document.querySelectorAll("p");

// panggil PAll setelah itu tambahkan style dan property css nya
pAll[2].style.backgroundColor = "aqua";
```

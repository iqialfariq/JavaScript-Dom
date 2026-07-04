// Latihan 2

// Soal Satu

// Tugas

// Saat tombol diklik:

// - jika belum dark mode
// - tambahkan class dark
// - ubah tulisan tombol menjadi Light Mode

// - jika sudah dark mode
// - hapus class dark
// - ubah tulisan tombol menjadi Dark Mode

// let btn = document.querySelector('button#toggleBtn');

// btn.addEventListener('click', function () {
//     btn.classList.toggle('dark');
//     btn.textContent = btn.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
//     document.body.style.backgroundColor = btn.classList.contains('dark') ? 'darkgray' : 'lightgray';
// });

// Soal Dua
// Tugas

// Klik tombol: +
// angka bertambah 1

// Klik tombol: -
// angka berkurang 1

// Tetapi angka tidak boleh kurang dari 0.
// let plusBtn = document.querySelector('button#plus');
// let minusBtn = document.querySelector('button#minus');
// let countSpan = document.querySelector('span#count');

// plusBtn.addEventListener('click', function () {
//     let currentCount = parseInt(countSpan.textContent);
//     countSpan.textContent = currentCount + 1;
// });

// minusBtn.addEventListener('click', function () {
//     let currentCount = parseInt(countSpan.textContent);
//     countSpan.textContent = currentCount - 1;
// });

// Soal Tiga
// Tugas

// Saat tombol ditekan
// ambil isi input
// buat elemen < li >
// masukkan isi input
// tampilkan di dalam < ul >
// kosongkan input
// cth:
// Belajar DOM
// Belajar Array
// Belajar Object

// let input = document.querySelector('input#todoInput');
// let addBtn = document.querySelector('button#addBtn');
// let list = document.querySelector('ul#list');

// addBtn.addEventListener('click', function () {
//     let todoList = input.value;
//     let todoItem = document.createElement('li');
//     todoItem.appendChild(document.createTextNode(todoList));
//     list.appendChild(todoItem);
//     input.value = '';
// });

// Soal Empat
// Lanjutkan dari soal tiga tapi sekarang hapus list nya ketika di klik

// let input = document.querySelector('input#todoInput');
// let addBtn = document.querySelector('button#addBtn');
// let list = document.querySelector('ul#list');

// addBtn.addEventListener('click', function () {
//     let todoList = input.value;
//     let todoItem = document.createElement('li');
//     todoItem.appendChild(document.createTextNode(todoList));
//     list.appendChild(todoItem);
//     input.value = '';
// });

// list.addEventListener('click', function (e) {
//     e.target.tagName === 'LI' && list.removeChild(e.target);
// });

// Soal Lima
// Tugas
// Setiap pengguna mengetik Halo
// langsung muncul Jumlah karakter: 4
// Tanpa menekan tombol.

let textArea = document.querySelector('textarea#text');
let jumlahKarakter = document.querySelector('p span#jumlah');

textArea.addEventListener('input', function () {
    jumlahKarakter.textContent = textArea.value.replace(/\s/g, '').length;
});
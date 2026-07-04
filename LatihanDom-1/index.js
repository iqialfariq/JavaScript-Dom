// Latihan Dom - 1
let ubahWarna = document.querySelector('button#ubahWarna');

ubahWarna.addEventListener('click', function () {
    document.body.classList.toggle('biru');
});

// Latihan Dom - 2
// Buat element baru nya
let randomColor = document.createElement('button');
// Buat teks untuk element baru
let textButton = document.createTextNode('Random Color');
// Tambahkan teks ke dalam element baru
randomColor.appendChild(textButton);
// Tambahkan atribut ke dalam element baru
randomColor.setAttribute('type', 'button');
// simpan button baru setelah button lama
ubahWarna.after(randomColor);
// panggil element baru lalu tambahkan sebuah events setelah itu jalan kan sebuah fungsi
randomColor.addEventListener('click', function () {
    // Buat variabel yang isi nya berupa rumus math genap yang di dalam nya ada math random lalu di kali 225 dan di tambah 1
    let r = Math.round(Math.random() * 255 + 1);
    let g = Math.round(Math.random() * 255 + 1);
    let b = Math.round(Math.random() * 255 + 1);
    // Panggil body html lalu tambahkan sebuah style setelah itu tambahkan style apa yang di gunakan dan tambahkan variabel di atas
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});


let sliderMerah = document.querySelector('input[name="sliderMerah"]');
let sliderHijau = document.querySelector('input[name="sliderHijau"]');
let sliderBiru = document.querySelector('input[name="sliderBiru"]');


sliderMerah.addEventListener('input', function () {
    // Buat variabel yang isi nya berupa rumus math genap yang di dalam nya ada math random 
    let r = sliderMerah.value;
    let g = sliderHijau.value;
    let b = sliderBiru.value;
    // Panggil body html lalu tambahkan sebuah style setelah itu tambahkan style apa yang di gunakan dan tambahkan variabel di atas
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

sliderHijau.addEventListener('input', function () {
    // Buat variabel yang isi nya berupa rumus math genap yang di dalam nya ada math random 
    let r = sliderMerah.value;
    let g = sliderHijau.value;
    let b = sliderBiru.value;
    // Panggil body html lalu tambahkan sebuah style setelah itu tambahkan style apa yang di gunakan dan tambahkan variabel di atas
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

sliderBiru.addEventListener('input', function () {
    // Buat variabel yang isi nya berupa rumus math genap yang di dalam nya ada math random 
    let r = sliderMerah.value;
    let g = sliderHijau.value;
    let b = sliderBiru.value;
    // Panggil body html lalu tambahkan sebuah style setelah itu tambahkan style apa yang di gunakan dan tambahkan variabel di atas
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
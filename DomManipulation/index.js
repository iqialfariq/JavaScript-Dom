// Dom Manipulation

// Manipulasi Element

// InnerHtml and TextContent
// let judul = document.getElementById('judul');
// judul.textContent = 'text content';
// judul.innerHTML = 'inner html';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello World!';

// style
// let judul = document.querySelector('h1#judul');
// judul.style.backgroundColor = 'salmon';

// SetAttribute()
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'judul-baru');
// // getattribute digunakan untuk mendapatkan nilai dari sebuah atribut
// // console.log(judul.getAttribute('name'));
// console.log(judul.removeAttribute('name') + ' telah di hapus');

// ClassList
// const judul = document.querySelector('.p2');
// // judul.classList.add('label')
// // judul.classList.remove('label')
// // judul.classList.toggle('biru');
// // judul.classList.item(0);
// // console.log(judul.classList.contains('biru'));
// judul.classList.replace('p2', 'biru');

// Manipulasi Node

// CreateElement()
// let paragrafBaru = document.createElement('p');
// // CreateTextNode()
// let teksBaru = document.createTextNode('Ini adalah paragraf baru');

// // AppendChild()
// paragrafBaru.appendChild(teksBaru);
// // Ambil element yang ingin di inputkan sesuatu
// let sectionA = document.querySelector('section#a');
// sectionA.appendChild(paragrafBaru);

// let liBaru = document.createElement('li');
// let teksLi = document.createTextNode('Ini adalah item daftar baru');

// liBaru.appendChild(teksLi);

// let ul = document.querySelector('section#b ul');
// let li2 = ul.querySelector('li:nth-child(2)');
// // Parameter pertama element baru nya parameter kedua lokasi penempatan nya sebelum element apa
// // InshertBefore()
// ul.insertBefore(liBaru, li2);

// removeChild()
// let sectionA = document.querySelector('section#a');
// let link = document.querySelector('section#a a');
// sectionA.removeChild(link);

// replaceChild()
let sectionB = document.querySelector('section#b');
let paragraf4 = sectionB.querySelector('p')

let h2Baru = document.createElement('h2');
let teksh2 = document.createTextNode('Ini adalah heading baru');

h2Baru.appendChild(teksh2);

sectionB.replaceChild(h2Baru, paragraf4);
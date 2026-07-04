// Dom Selection

// getElementByid() | Mengembalikan Element
// let judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'lightblue';
// judul.innerHTML = 'lalalayeyeyeye'

// getElementsByTagName() | Mengembalikan HTML Collection
// let paragraf = document.getElementsByTagName('p');

// for (let i = 0; i < paragraf.length; i++) {
//     paragraf[i].style.color = 'salmon';
//     paragraf[i].style.fontWeight = 'bold';
// }

// getElementsByClassName() | Mengembalikan Html Collection
// let p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'Ini di ubah dari javascript';

// querySelector() | Mengembalikan Element
// let p4 = document.querySelector('#b p');
// p4.style.color = 'green'
// p4.style.fontWeight = 'bold'

// let li2 = document.querySelector('#b li:nth-child(2)');
// li2.style.backgroundColor = 'salmon';
// li2.style.fontWeight = 'bold';

// querySelectorAll() | Mengembalikan Element
let paragraf = document.querySelectorAll('p')

for (let i = 0; i < paragraf.length; i++) {
    paragraf[i].style.color = 'salmon';
    paragraf[i].style.fontWeight = 'bold';
}
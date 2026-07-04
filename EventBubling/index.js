// Event Bubbling
// Digunakan untuk menghemat resource atau ruang lingkup agar scoope nya lebih sedikit tapi effisien

// let closeButtons = document.querySelectorAll('span.close');

// closeButtons.forEach(function (button) {
//     button.addEventListener('click', function () {
//         let kontak = this.parentElement;
//         kontak.remove();
//         // Ini preventDefault()
//         event.preventDefault();
//         event.stopPropagation();
//     });
// });

// const card = document.querySelectorAll('div.card')

// card.forEach(function (cards) {
//     cards.addEventListener('click', function (event) {
//         alert('Card clicked!')
//     });
// });

let container = document.querySelector('div.container');
container.addEventListener('click', function (event) {
    if (event.target.className === 'close') {
        event.target.parentElement.style.display = 'none';
    }
});
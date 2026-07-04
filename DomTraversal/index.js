// Dom Traversal

// Tanpa Dom Traversal
// let kontak = document.querySelector('div.card');
// let close = document.querySelector('span.close');

// close.addEventListener('click', function () {
//     kontak.remove();
// });


// Dengan Dom Traversal
let closeButtons = document.querySelectorAll('span.close');

closeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        let kontak = this.parentElement;
        kontak.remove();
    });
});

// parentNode

// parentElement

// nextSibling

// nextElementSibling

// previousSibling
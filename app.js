var alertBtn = document.querySelector('.alert');
var box = document.querySelector('.box');

var eResult = document.querySelector('.result');
var eKey = document.querySelector('.card.key p:last-child');
var eLocation = document.querySelector('.card.location p:last-child');
var eWhich = document.querySelector('.card.which p:last-child');
var eCode = document.querySelector('.card.code p:last-child');

document.addEventListener('keydown', function(e){
    eResult.innerText = e.which;
    eKey.innerText = e.key;
    eLocation.innerText = e.location;
    eWhich.innerText = e.which;
    eCode.innerText = e.code;

    alertBtn.classList.add('hide');
    box.classList.remove('hide');
});

// var alertBtn = document.querySelector('.alert');
// var box = document.querySelector('.box');

// var result = document.querySelector('.result');
// var key = document.querySelector('.key p:last-child');
// var location = document.querySelector('.location p:last-child');
// var which = document.querySelector('.which p:last-child');
// var code = document.querySelector('.code p:last-child');

// alertBtn.addEventListener('keydown', function(e){
//     result.innerText = e.which;
//     key.innerText = e.key;
//     location.innerText = e.location;
//     which.innerText = e.which;
//     code.innerText = e.code;

//     alertBtn.classList.add('hide');
//     box.classList.remove('hide');
// });
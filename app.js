const button = document.querySelector('button');
const del = document.querySelector('.closeX');
const popupWr = document.querySelector('.popup-wrapper');


button.addEventListener('click', ()=>{
popupWr.style.display = 'block';
});

del.addEventListener('click', ()=>{
    popupWr.style.display = 'none';
    
    });
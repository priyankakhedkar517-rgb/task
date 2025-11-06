//!------Thumbnail Click Function-- 
const mainImg = document.getElementById('mainImg');
const thumbs = document.querySelectorAll('.thumbnails img');

thumbs.forEach(img => {
  img.addEventListener('click', () => {
    mainImg.src = img.src;
  });
});

//!---Tabs Switch Function---
const tabButtons = document.querySelectorAll('.tab-buttons button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(tab => tab.classList.remove('active'));
    button.classList.add('active');
    document.getElementById(button.dataset.tab).classList.add('active');
});
});
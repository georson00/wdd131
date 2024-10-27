



 // Navigation
 const menuButton = document.querySelector('#menu-button');
 const navigation = document.querySelector('.navigation');
 
 menuButton.addEventListener('click', () =>{
     navigation.classList.toggle('open');
     menuButton.classList.toggle('open');
 });
 
 const navlinks = document.querySelectorAll('nav a');
 const mainHeading = document.querySelector('#main-heading')
 
 navlinks.forEach(link =>{
     link.addEventListener('click', ()=>{
         mainHeading.textContent = link.textContent;
     })
 })

//Footer
const copyrightSymbol = '&copy;';

const currentDate = new Date();
const year = currentDate.getFullYear();

const day = currentDate.getDate();
const month = currentDate.getMonth() + 1
const fullDate = `${month}/${day}/${year}`;


document.querySelector('#currentYear').textContent =  year;
document.querySelector('#copyright').innerHTML = copyrightSymbol;
document.querySelector('#lastModified').textContent = `Last Modified: ${fullDate}`;
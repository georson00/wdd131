const copyrightSymbole = '&copy;'
const year = currentDate.getFullYear();

const fullDate = currentDate.getFullDate();

document.getElementById('currentYear').innerHTML =  year;
document.getElementById('copyright').innerHTML = copyrightSymbole;
document.getElementById('lastModified').innerHTML = 'Last Modified: '+ fullDate
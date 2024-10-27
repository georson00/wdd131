
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

 // Temple Cards
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
        {
      templeName: "Port-au-Prince Haiti",
      location: "Port-au-Prince, Haiti",
      dedicated: "2019, September, 1",
      area: 10396,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/port-au-prince-haiti/400x250/02-Port-au-Prince-Haiti-Temple-2264533.jpg"
    },
    {
        templeName: "Santo Domingo Dominican Republic",
        location: "Santo Doming, Dominican Republic",
        dedicated: "2000, September, 17",
        area: 67000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/santo-domingo-dominican-republic/400x250/santo-domingo-dominican-republic-temple-lds-761308-wallpaper.jpg"
        },
    {
        templeName: "Copenhagen Denmark",
        location: "Copenhagen, Denmark",
        dedicated: "2004, May, 23",
        area: 25000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/copenhagen-denmark/400x250/copenhagen-denmark-temple-lds-278232-wallpaper.jpg"
        },
    {
        templeName: "Orlando Florida",
        location: "Orlando, Florida",
        dedicated: "1994, Octoberber, 11",
        area: 70000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/orlando-florida/400x250/orlando-temple-lds-776399-wallpaper.jpg"
        },
    {
        templeName: "Philadelphia Pennsylvania",
        location: "Philadelphia, Pennsylvania",
        dedicated: "2016, September, 18",
        area: 61466,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/philadelphia-pennsylvania/400x250/philadelphia-pennsylvania-temple-exterior-1775822-wallpaper.jpg"
        },
            
  ];


function create_temple_cards (templesArray) {

    const templeContainer = document.querySelector("#temple-container");
    templeContainer.innerHTML ='';
    
    templesArray.forEach( temple => {

    
        const card = document.createElement("div");
        card.classList.add("temple-card");

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName + " Temple";
        img.loading = "lazy";

        const headerName = document.createElement("h2");
        headerName.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML = `<span class='bold-text'>LOCATION:</span> ${temple.location}`;
        

        const dedication = document.createElement("p");
        dedication.innerHTML = `<span class='bold-text'>DEDICATED:</span> ${temple.dedicated}`;
        

        const area = document.createElement("p");
        area.innerHTML = `<span class='bold-text'>SIZE:</span> ${temple.area.toLocaleString()} sq ft`;
        

        card.appendChild(headerName);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        templeContainer.appendChild(card);



  });

}

create_temple_cards(temples);
    



document.getElementById("old").addEventListener("click", () =>{
    const oldTemples = temples.filter(temple =>{
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    });
    create_temple_cards(oldTemples);

});

document.getElementById("new").addEventListener("click", () =>{
    const newTemples = temples.filter(temple =>{
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year >= 2000;
    });
    create_temple_cards(newTemples);

});

document.getElementById("large").addEventListener("click", () =>{
    const largeTemples = temples.filter(temple =>{
        const size = parseInt(temple.area);
        return size >= 90000;
    });
    create_temple_cards(largeTemples);

});

document.getElementById("small").addEventListener("click", () =>{
    const smallTemples = temples.filter(temple =>{
        const size = parseInt(temple.area);
        return size <= 10000;
    });
    create_temple_cards(smallTemples);

});

document.getElementById("home").addEventListener("click", () =>{
    create_temple_cards(temples);

});













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
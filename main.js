function handleContextMenu() {
    if(window.innerWidth >= 800) {
        document.addEventListener("contextmenu", preventMenu);
    } else {
        document.removeEventListener("contextmenu", preventMenu);
    }
}


function preventMenu(e) {
    e.preventDefault();
}

window.addEventListener("resize", handleContextMenu);

const close = document.querySelector('.btn-close');
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('nav');
const menuItems = document.querySelectorAll('.menu-items');


hamburger.addEventListener('click', openSlideMenu);
close.addEventListener('click', closeSlideMenu);

function openSlideMenu() {
    menu.classList.add('open');
    
};

function closeSlideMenu() {
    menu.classList.remove('open');
    menuItems.classList.remove('display')
};


const aiCate = document.getElementById('ai');
const businessCate = document.getElementById('business');
const bioCate = document.getElementById('bio');
const ecomCate = document.getElementById('ecom');
const foodsDrinksCate = document.getElementById('foodsDrinks');
const natureCate = document.getElementById('nature');
const abstractCate = document.getElementById('abstract');
const eduCate = document.getElementById('edu');
const hobCate = document.getElementById('hob');
const illustCate = document.getElementById('illust');
const lifestyleCate = document.getElementById('lifestyle');
const peopleCate = document.getElementById('people');
const technologyCate = document.getElementById('technology');
const travelCate = document.getElementById('travel');
const vehiclesCate = document.getElementById('vehicles');

const ai = document.querySelector('.ai');
const nature = document.querySelector('.nature');
const foodsDrinks = document.querySelector('.foodsanddrinks');
const abstract = document.querySelector('.abstract');
const travel = document.querySelector('.travel');
const illustrations = document.querySelector('.illustrations');
const ecom = document.querySelector('.ecom');
const bio = document.querySelector('.bio');
const business = document.querySelector('.business');
const edu = document.querySelector('.edu');
const hob = document.querySelector('.hob');
const lifestyle = document.querySelector('.lifestyle');
const people = document.querySelector('.people');
const technology = document.querySelector('.technology');
const vehicles = document.querySelector('.vehicles');

natureCate.addEventListener('click', function() {
    natureCate.classList.add('current');
    businessCate.classList.remove('current');
    bioCate.classList.remove('current');
    ecomCate.classList.remove('current');
    abstractCate.classList.remove('current');
    eduCate.classList.remove('current');
    hobCate.classList.remove('current');
    illustCate.classList.remove('current');
    lifestyleCate.classList.remove('current');
    peopleCate.classList.remove('current');
    technologyCate.classList.remove('current');
    travelCate.classList.remove('current');
    vehiclesCate.classList.remove('current');
    aiCate.classList.remove('current');
    foodsDrinksCate.classList.remove('current');

    ai.classList.remove('show');
    foodsDrinks.classList.remove('show');
    nature.classList.add('show');
    abstract.classList.remove('show');
    travel.classList.remove('show');
    illustrations.classList.remove('show');
    technology.classList.remove('show');
    ecom.classList.remove('show');
    bio.classList.remove('show');
    business.classList.remove('show');
    edu.classList.remove('show');
    hob.classList.remove('show');
    lifestyle.classList.remove('show');
    people.classList.remove('show');
    vehicles.classList.remove('show');
});

aiCate.addEventListener('click', function() {
    natureCate.classList.remove('current');
    businessCate.classList.remove('current');
    bioCate.classList.remove('current');
    ecomCate.classList.remove('current');
    abstractCate.classList.remove('current');
    eduCate.classList.remove('current');
    hobCate.classList.remove('current');
    illustCate.classList.remove('current');
    lifestyleCate.classList.remove('current');
    peopleCate.classList.remove('current');
    technologyCate.classList.remove('current');
    travelCate.classList.remove('current');
    vehiclesCate.classList.remove('current');
    aiCate.classList.add('current');
    foodsDrinksCate.classList.remove('current');

    ai.classList.add('show');
    foodsDrinks.classList.remove('show');
    nature.classList.remove('show');
    abstract.classList.remove('show');
    travel.classList.remove('show');
    illustrations.classList.remove('show');
    technology.classList.remove('show');
    ecom.classList.remove('show');
    bio.classList.remove('show');
    business.classList.remove('show');
    edu.classList.remove('show');
    hob.classList.remove('show');
    lifestyle.classList.remove('show');
    people.classList.remove('show');
    vehicles.classList.remove('show');
});

foodsDrinksCate.addEventListener('click', function() {
    natureCate.classList.remove('current');
    businessCate.classList.remove('current');
    bioCate.classList.remove('current');
    ecomCate.classList.remove('current');
    abstractCate.classList.remove('current');
    eduCate.classList.remove('current');
    hobCate.classList.remove('current');
    illustCate.classList.remove('current');
    lifestyleCate.classList.remove('current');
    peopleCate.classList.remove('current');
    technologyCate.classList.remove('current');
    travelCate.classList.remove('current');
    vehiclesCate.classList.remove('current');
    aiCate.classList.remove('current');
    foodsDrinksCate.classList.add('current');
    
    ai.classList.remove('show');
    foodsDrinks.classList.add('show');
    nature.classList.remove('show');
    abstract.classList.remove('show');
    travel.classList.remove('show');
    illustrations.classList.remove('show');
    technology.classList.remove('show');
    ecom.classList.remove('show');
    bio.classList.remove('show');
    business.classList.remove('show');
    edu.classList.remove('show');
    hob.classList.remove('show');
    lifestyle.classList.remove('show');
    people.classList.remove('show');
    vehicles.classList.remove('show');
});

abstractCate.addEventListener('click', function() {

    natureCate.classList.remove('current');
    businessCate.classList.remove('current');
    bioCate.classList.remove('current');
    ecomCate.classList.remove('current');
    abstractCate.classList.add('current');
    eduCate.classList.remove('current');
    hobCate.classList.remove('current');
    illustCate.classList.remove('current');
    lifestyleCate.classList.remove('current');
    peopleCate.classList.remove('current');
    technologyCate.classList.remove('current');
    travelCate.classList.remove('current');
    vehiclesCate.classList.remove('current');
    aiCate.classList.remove('current');
    foodsDrinksCate.classList.remove('current');

    ai.classList.remove('show');
    foodsDrinks.classList.remove('show');
    nature.classList.remove('show');
    abstract.classList.add('show');
    travel.classList.remove('show');
    illustrations.classList.remove('show');
    technology.classList.remove('show');
    ecom.classList.remove('show');
    bio.classList.remove('show');
    business.classList.remove('show');
    edu.classList.remove('show');
    hob.classList.remove('show');
    lifestyle.classList.remove('show');
    people.classList.remove('show');
    vehicles.classList.remove('show');
});

bioCate.addEventListener('click', function() {

    natureCate.classList.remove('current');
    businessCate.classList.remove('current');
    bioCate.classList.add('current');
    ecomCate.classList.remove('current');
    abstractCate.classList.remove('current');
    eduCate.classList.remove('current');
    hobCate.classList.remove('current');
    illustCate.classList.remove('current');
    lifestyleCate.classList.remove('current');
    peopleCate.classList.remove('current');
    technologyCate.classList.remove('current');
    travelCate.classList.remove('current');
    vehiclesCate.classList.remove('current');
    aiCate.classList.remove('current');
    foodsDrinksCate.classList.remove('current');

    ai.classList.remove('show');
    foodsDrinks.classList.remove('show');
    nature.classList.remove('show');
    abstract.classList.remove('show');
    travel.classList.remove('show');
    illustrations.classList.remove('show');
    technology.classList.remove('show');
    ecom.classList.remove('show');
    bio.classList.add('show');
    business.classList.remove('show');
    edu.classList.remove('show');
    hob.classList.remove('show');
    lifestyle.classList.remove('show');
    people.classList.remove('show');
    vehicles.classList.remove('show');
});

businessCate.addEventListener('click', function() {

    natureCate.classList.remove('current');
    businessCate.classList.add('current');
    bioCate.classList.remove('current');
    ecomCate.classList.remove('current');
    abstractCate.classList.remove('current');
    eduCate.classList.remove('current');
    hobCate.classList.remove('current');
    illustCate.classList.remove('current');
    lifestyleCate.classList.remove('current');
    peopleCate.classList.remove('current');
    technologyCate.classList.remove('current');
    travelCate.classList.remove('current');
    vehiclesCate.classList.remove('current');
    aiCate.classList.remove('current');
    foodsDrinksCate.classList.remove('current');

    ai.classList.remove('show');
    foodsDrinks.classList.remove('show');
    nature.classList.remove('show');
    abstract.classList.remove('show');
    travel.classList.remove('show');
    illustrations.classList.remove('show');
    technology.classList.remove('show');
    ecom.classList.remove('show');
    bio.classList.remove('show');
    business.classList.add('show');
    edu.classList.remove('show');
    hob.classList.remove('show');
    lifestyle.classList.remove('show');
    people.classList.remove('show');
    vehicles.classList.remove('show');
});

ecomCate.addEventListener('click', function() {

    natureCate.classList.remove('current');
    businessCate.classList.remove('current');
    bioCate.classList.remove('current');
    ecomCate.classList.add('current');
    abstractCate.classList.remove('current');
    eduCate.classList.remove('current');
    hobCate.classList.remove('current');
    illustCate.classList.remove('current');
    lifestyleCate.classList.remove('current');
    peopleCate.classList.remove('current');
    technologyCate.classList.remove('current');
    travelCate.classList.remove('current');
    vehiclesCate.classList.remove('current');
    aiCate.classList.remove('current');
    foodsDrinksCate.classList.remove('current');

    ai.classList.remove('show');
    foodsDrinks.classList.remove('show');
    nature.classList.remove('show');
    abstract.classList.remove('show');
    travel.classList.remove('show');
    illustrations.classList.remove('show');
    technology.classList.remove('show');
    ecom.classList.add('show');
    bio.classList.remove('show');
    business.classList.remove('show');
    edu.classList.remove('show');
    hob.classList.remove('show');
    lifestyle.classList.remove('show');
    people.classList.remove('show');
    vehicles.classList.remove('show');
});

eduCate.addEventListener('click', function() {

    natureCate.classList.remove('current');
    businessCate.classList.remove('current');
    bioCate.classList.remove('current');
    ecomCate.classList.remove('current');
    abstractCate.classList.remove('current');
    eduCate.classList.add('current');
    hobCate.classList.remove('current');
    illustCate.classList.remove('current');
    lifestyleCate.classList.remove('current');
    peopleCate.classList.remove('current');
    technologyCate.classList.remove('current');
    travelCate.classList.remove('current');
    vehiclesCate.classList.remove('current');
    aiCate.classList.remove('current');
    foodsDrinksCate.classList.remove('current');

    ai.classList.remove('show');
    foodsDrinks.classList.remove('show');
    nature.classList.remove('show');
    abstract.classList.remove('show');
    travel.classList.remove('show');
    illustrations.classList.remove('show');
    technology.classList.remove('show');
    ecom.classList.remove('show');
    bio.classList.remove('show');
    business.classList.remove('show');
    edu.classList.add('show');
    hob.classList.remove('show');
    lifestyle.classList.remove('show');
    people.classList.remove('show');
    vehicles.classList.remove('show');
});

hobCate.addEventListener('click', function() {

    natureCate.classList.remove('current');
    businessCate.classList.remove('current');
    bioCate.classList.remove('current');
    ecomCate.classList.remove('current');
    abstractCate.classList.remove('current');
    eduCate.classList.remove('current');
    hobCate.classList.add('current');
    illustCate.classList.remove('current');
    lifestyleCate.classList.remove('current');
    peopleCate.classList.remove('current');
    technologyCate.classList.remove('current');
    travelCate.classList.remove('current');
    vehiclesCate.classList.remove('current');
    aiCate.classList.remove('current');
    foodsDrinksCate.classList.remove('current');

    ai.classList.remove('show');
    foodsDrinks.classList.remove('show');
    nature.classList.remove('show');
    abstract.classList.remove('show');
    travel.classList.remove('show');
    illustrations.classList.remove('show');
    technology.classList.remove('show');
    ecom.classList.remove('show');
    bio.classList.remove('show');
    business.classList.remove('show');
    edu.classList.remove('show');
    hob.classList.add('show');
    lifestyle.classList.remove('show');
    people.classList.remove('show');
    vehicles.classList.remove('show');
});

illustCate.addEventListener('click', function() {

    natureCate.classList.remove('current');
    businessCate.classList.remove('current');
    bioCate.classList.remove('current');
    ecomCate.classList.remove('current');
    abstractCate.classList.remove('current');
    eduCate.classList.remove('current');
    hobCate.classList.remove('current');
    illustCate.classList.add('current');
    lifestyleCate.classList.remove('current');
    peopleCate.classList.remove('current');
    technologyCate.classList.remove('current');
    travelCate.classList.remove('current');
    vehiclesCate.classList.remove('current');
    aiCate.classList.remove('current');
    foodsDrinksCate.classList.remove('current');

    ai.classList.remove('show');
    foodsDrinks.classList.remove('show');
    nature.classList.remove('show');
    abstract.classList.remove('show');
    travel.classList.remove('show');
    illustrations.classList.add('show');
    technology.classList.remove('show');
    ecom.classList.remove('show');
    bio.classList.remove('show');
    business.classList.remove('show');
    edu.classList.remove('show');
    hob.classList.remove('show');
    lifestyle.classList.remove('show');
    people.classList.remove('show');
    vehicles.classList.remove('show');
});

lifestyleCate.addEventListener('click', function() {

    natureCate.classList.remove('current');
    businessCate.classList.remove('current');
    bioCate.classList.remove('current');
    ecomCate.classList.remove('current');
    abstractCate.classList.remove('current');
    eduCate.classList.remove('current');
    hobCate.classList.remove('current');
    illustCate.classList.remove('current');
    lifestyleCate.classList.add('current');
    peopleCate.classList.remove('current');
    technologyCate.classList.remove('current');
    travelCate.classList.remove('current');
    vehiclesCate.classList.remove('current');
    aiCate.classList.remove('current');
    foodsDrinksCate.classList.remove('current');

    ai.classList.remove('show');
    foodsDrinks.classList.remove('show');
    nature.classList.remove('show');
    abstract.classList.remove('show');
    travel.classList.remove('show');
    illustrations.classList.remove('show');
    technology.classList.remove('show');
    ecom.classList.remove('show');
    bio.classList.remove('show');
    business.classList.remove('show');
    edu.classList.remove('show');
    hob.classList.remove('show');
    lifestyle.classList.add('show');
    people.classList.remove('show');
    vehicles.classList.remove('show');
});

peopleCate.addEventListener('click', function() {

    natureCate.classList.remove('current');
    businessCate.classList.remove('current');
    bioCate.classList.remove('current');
    ecomCate.classList.remove('current');
    abstractCate.classList.remove('current');
    eduCate.classList.remove('current');
    hobCate.classList.remove('current');
    illustCate.classList.remove('current');
    lifestyleCate.classList.remove('current');
    peopleCate.classList.add('current');
    technologyCate.classList.remove('current');
    travelCate.classList.remove('current');
    vehiclesCate.classList.remove('current');
    aiCate.classList.remove('current');
    foodsDrinksCate.classList.remove('current');

    ai.classList.remove('show');
    foodsDrinks.classList.remove('show');
    nature.classList.remove('show');
    abstract.classList.remove('show');
    travel.classList.remove('show');
    illustrations.classList.remove('show');
    technology.classList.remove('show');
    ecom.classList.remove('show');
    bio.classList.remove('show');
    business.classList.remove('show');
    edu.classList.remove('show');
    hob.classList.remove('show');
    lifestyle.classList.remove('show');
    people.classList.add('show');
    vehicles.classList.remove('show');
});

    technologyCate.addEventListener('click', function() {

    natureCate.classList.remove('current');
    businessCate.classList.remove('current');
    bioCate.classList.remove('current');
    ecomCate.classList.remove('current');
    abstractCate.classList.remove('current');
    eduCate.classList.remove('current');
    hobCate.classList.remove('current');
    illustCate.classList.remove('current');
    lifestyleCate.classList.remove('current');
    peopleCate.classList.remove('current');
    technologyCate.classList.add('current');
    travelCate.classList.remove('current');
    vehiclesCate.classList.remove('current');
    aiCate.classList.remove('current');
    foodsDrinksCate.classList.remove('current');

    ai.classList.remove('show');
    foodsDrinks.classList.remove('show');
    nature.classList.remove('show');
    abstract.classList.remove('show');
    travel.classList.remove('show');
    illustrations.classList.remove('show');
    technology.classList.add('show');
    ecom.classList.remove('show');
    bio.classList.remove('show');
    business.classList.remove('show');
    edu.classList.remove('show');
    hob.classList.remove('show');
    lifestyle.classList.remove('show');
    people.classList.remove('show');
    vehicles.classList.remove('show');
});

    travelCate.addEventListener('click', function() {

    natureCate.classList.remove('current');
    businessCate.classList.remove('current');
    bioCate.classList.remove('current');
    ecomCate.classList.remove('current');
    abstractCate.classList.remove('current');
    eduCate.classList.remove('current');
    hobCate.classList.remove('current');
    illustCate.classList.remove('current');
    lifestyleCate.classList.remove('current');
    peopleCate.classList.remove('current');
    technologyCate.classList.remove('current');
    travelCate.classList.add('current');
    vehiclesCate.classList.remove('current');
    aiCate.classList.remove('current');
    foodsDrinksCate.classList.remove('current');

    ai.classList.remove('show');
    foodsDrinks.classList.remove('show');
    nature.classList.remove('show');
    abstract.classList.remove('show');
    travel.classList.add('show');
    illustrations.classList.remove('show');
    technology.classList.remove('show');
    ecom.classList.remove('show');
    bio.classList.remove('show');
    business.classList.remove('show');
    edu.classList.remove('show');
    hob.classList.remove('show');
    lifestyle.classList.remove('show');
    people.classList.remove('show');
    vehicles.classList.remove('show');
});

    vehiclesCate.addEventListener('click', function() {

    natureCate.classList.remove('current');
    businessCate.classList.remove('current');
    bioCate.classList.remove('current');
    ecomCate.classList.remove('current');
    abstractCate.classList.remove('current');
    eduCate.classList.remove('current');
    hobCate.classList.remove('current');
    illustCate.classList.remove('current');
    lifestyleCate.classList.remove('current');
    peopleCate.classList.remove('current');
    technologyCate.classList.remove('current');
    travelCate.classList.remove('current');
    vehiclesCate.classList.add('current');
    aiCate.classList.remove('current');
    foodsDrinksCate.classList.remove('current');

    ai.classList.remove('show');
    foodsDrinks.classList.remove('show');
    nature.classList.remove('show');
    abstract.classList.remove('show');
    travel.classList.remove('show');
    illustrations.classList.remove('show');
    technology.classList.remove('show');
    ecom.classList.remove('show');
    bio.classList.remove('show');
    business.classList.remove('show');
    edu.classList.remove('show');
    hob.classList.remove('show');
    lifestyle.classList.remove('show');
    people.classList.remove('show');
    vehicles.classList.add('show');
});

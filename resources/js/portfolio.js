const desktopView = document.querySelector('.desktop-view');
const tabletView = document.querySelector('.tablet-view');
const mobileView = document.querySelector('.mobile-view');
const overviewImage = document.querySelector('.overview-image img');

var matildaEyre = [{
    location: 'London',
    industry: 'Music',
    website: 'https://www.matildaeyre.com',
    launch: 'September 2019',
    category: 'Music',
    h2: 'Matilda Eyre',
    imagePositon: 'center',
    imageUrl: './images/matildaeyre.jpg',
    desktopImage: './images/matildaeyre_desktop.png',
    tabletImage: './images/matildaeyre_tablet.png',
    mobileImage: './images/matildaeyre_mobile.png'
}];

const tablet = function () {
    desktopView.style.color = 'black';
    mobileView.style.color = 'black';
    tabletView.style.color = 'paleturquoise';
    overviewImage.src = '../resources/images/matildaeyre_tablet.png';
    overviewImage.style.width = '';
};

tabletView.addEventListener('click', tablet);

const mobile = function () {
    desktopView.style.color = 'black';
    tabletView.style.color = 'black';
    mobileView.style.color = 'paleturquoise';
    overviewImage.src = '../resources/images/matildaeyre_mobile.png';
    overviewImage.style.width = '50%';
};

mobileView.addEventListener('click', mobile);

const desktop = function () {
    tabletView.style.color = 'black';
    mobileView.style.color = 'black';
    desktopView.style.color = 'paleturquoise';
    overviewImage.src = '../resources/images/matildaeyre_desktop.png';
    overviewImage.style.width = '';
};

desktopView.addEventListener('click', desktop);

document.create
var portfolioItems = [{
        url: 'https://www.matildaeyre.com',
        imageUrl: './resources/images/matildaeyre.jpg',
        client: 'Matilda Eyre',
        imagePositon: 'center',
        subtitle: 'Custom website for independent artist',
        paragraph: 'Soundcloud integration and music portfolio',
        portfolioSite: '/portfolio/matildaeyre.html'
    },
    {
        url: 'https://www.anderl-heckmair.com',
        imageUrl: './resources/images/mark-basarab-157610-unsplash.jpg',
        client: 'Anderl Heckmair',
        imagePositon: 'center',
        subtitle: 'Custom website and shop integration',
        paragraph: 'Beautiful bavarian outdoor fashion.'
    },
    {
        url: 'https://www.brydiemusic.com',
        imageUrl: './resources/images/Brydie.jpg',
        client: 'Brydie Music',
        imagePositon: 'right',
        subtitle: 'DJ & Producer website',
        paragraph: 'More info coming soon.'
    },
    {
        url: 'http://der-wohlstands-trainer.de',
        imageUrl: './resources/images/wohlstandstrainer.jpg',
        client: 'Der Wohlstands Trainer',
        imagePositon: 'right',
        subtitle: 'Fully customized coaching website',
        paragraph: 'More info coming soon.'
    },
    {
        url: 'https://www.löwenherz.tv',
        imageUrl: './resources/images/loewenherz.jpg',
        client: 'Löwenherz TV',
        imagePositon: 'center',
        subtitle: 'Custom website for a German coach',
        paragraph: 'More info coming soon.'
    },
    {
        url: 'https://lisaschumann.github.io/colmar_academy/',
        imageUrl: './resources/images/Colmar.jpg',
        client: 'Colmar Academy',
        imagePositon: 'center',
        subtitle: 'Educational project page',
        paragraph: 'More info coming soon.'
    },
    {
        url: 'https://lisaschumann.github.io/u4_tea_cozy/',
        imageUrl: './resources/images/teacozy.jpg',
        client: 'Tea Cozy',
        imagePositon: 'center',
        subtitle: 'Commercial example',
        paragraph: 'More info coming soon.'
    },
    {
        url: 'https://lisaschumann.github.io/u4_my_times/',
        imageUrl: './resources/images/img-story-1.png',
        client: 'My Times',
        imagePositon: 'center',
        subtitle: 'Example of a news page',
        paragraph: 'More info coming soon.'
    },
    {
        url: 'https://www.ann-christin-osteopathy.com/',
        imageUrl: './resources/images/osteopathy.jpg',
        client: 'Osteopathy',
        imagePositon: 'center',
        subtitle: 'Client base and booking.',
        paragraph: 'More info coming soon.'
    }
]

function generatePorfolioCards() {
    var portfolioCardElements = portfolioItems.map(function (item) {
        return `<div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front website" style="background-image: url('${item.imageUrl}'); background-position: ${item.imagePositon};">
                                    <h2>${item.client}</h2>
                            </div>
                            <div class="flip-card-back">
                                <h3>${item.client}</h3>
                                <h4>${item.subtitle}</h4>
                                <img src="./resources/images/white-line-small.png" style="width:3rem;">
                                <p>${item.paragraph}</p>
                                <span><a href="${item.portfolioSite}">View Site</a></span>
                             </div>
                        </div>
                    </div>`
    })
    portfolioCardElements.push(`<a href="https://lisaschumann.github.io/match_game/" target="_blank"><div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front website" style="height: 28rem; background-color: rgb(32, 64, 86);"><h2>Match Game</h2></div><div class="flip-card-back"><h3>Match Game</h3><h4>A real fun game</h4><img src="./resources/images/white-line-small.png" style="width:3rem;"><p>This is a small game I build.</p></div></div></div></a>`)

    return portfolioCardElements
}

$('.portfolio').html(generatePorfolioCards())



// Pop-Up Call

/*
window.addEventListener('scroll',() => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    console.log(scrollable);
    const scrolled = window.scrollY;
    console.log(scrolled);
    const popUpCall = document.querySelector(".popup-call");
    if (scrolled >= 542) {
        popUpCall.style.display = 'block';
    }
})*/


// Back To Top Button

// Set a variable for our button element.
const scrollToTopButton = document.getElementById('js-top');

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;
  
  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  if (y > 100) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  // Let's set a variable for the number of pixels we are from the top of the document.
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  
  // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
  // We'll also animate that scroll with requestAnimationFrame:
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    // ScrollTo takes an x and a y coordinate.
    // Increase the '10' value to get a smoother/slower scroll!
    window.scrollTo(0, c - c / 10);
  }
};

// When the button is clicked, run our ScrolltoTop function above!
scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}
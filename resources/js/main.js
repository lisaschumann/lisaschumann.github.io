// Navigation Anchor with correct margin to display sections
        (function (document, history, location) {
            var HISTORY_SUPPORT = !!(history && history.pushState);

            var anchorScrolls = {
                //ANCHOR_REGEX: /^#[^ ]+$/
                ANCHOR_REGEX: /^[\/a-z0-9-.]*#[^\s]+$/,
                OFFSET_HEIGHT_PX: 58,

                /**
                 * Establish events, and fix initial scroll position if a hash is provided.
                 */
                init: function () {
                    this.scrollToCurrent();
                    window.addEventListener('hashchange', this.scrollToCurrent.bind(this));
                    document.body.addEventListener('click', this.delegateAnchors.bind(this));
                },

                /**
                 * Return the offset amount to deduct from the normal scroll position.
                 * Modify as appropriate to allow for dynamic calculations
                 */
                getFixedOffset: function () {
                    return this.OFFSET_HEIGHT_PX;
                },

                /**
                 * If the provided href is an anchor which resolves to an element on the
                 * page, scroll to it.
                 * @param  {String} href
                 * @return {Boolean} - Was the href an anchor.
                 */
                scrollIfAnchor: function (href, pushToHistory) {
                    var match, rect, anchorOffset;

                    if (!this.ANCHOR_REGEX.test(href)) {
                        return false;
                    }

                    match = document.getElementById(href.slice(1));

                    if (match) {
                        rect = match.getBoundingClientRect();
                        anchorOffset = window.pageYOffset + rect.top - this.getFixedOffset();
                        window.scrollTo(window.pageXOffset, anchorOffset);

                        // Add the state to history as-per normal anchor links
                        if (HISTORY_SUPPORT && pushToHistory) {
                            history.pushState({}, document.title, location.pathname + href);
                        }
                    }

                    return !!match;
                },

                /**
                 * Attempt to scroll to the current location's hash.
                 */
                scrollToCurrent: function () {
                    this.scrollIfAnchor(window.location.hash);
                },

                /**
                 * If the click event's target was an anchor, fix the scroll position.
                 */
                delegateAnchors: function (e) {
                    var elem = e.target;

                    if (
                        elem.nodeName === 'A' &&
                        this.scrollIfAnchor(elem.getAttribute('href'), true)
                    ) {
                        e.preventDefault();
                    }
                }
            };

            window.addEventListener(
                'DOMContentLoaded', anchorScrolls.init.bind(anchorScrolls)
            );
        })(window.document, window.history, window.location);

// Portfolio

var portfolioItems = [{
        url: 'https://www.quite-something.de',
        imageUrl: './resources/images/quite-something.jpg',
        client: 'Quite Something',
        imagePositon: 'center',
        subtitle: 'Independent Magazin from Munich',
        paragraph: 'Website maintenance and shop integrations',
        portfolioSite: 'https://www.quite-something.de'
    },
    {
        url: 'https://www.matildaeyre.com',
        imageUrl: './resources/images/matildaeyre.jpg',
        client: 'Matilda Eyre',
        imagePositon: 'center',
        subtitle: 'Custom website for independent artist',
        paragraph: 'Soundcloud integration and music portfolio',
        portfolioSite: 'https://www.matildaeyre.com'
    },
    {
        url: 'https://www.anderl-heckmair.com',
        imageUrl: './resources/images/mark-basarab-157610-unsplash.jpg',
        client: 'Anderl Heckmair',
        imagePositon: 'center',
        subtitle: 'Brand website and shop integration',
        paragraph: 'Beautiful bavarian outdoor fashion.',
        portfolioSite: 'https://www.anderl-heckmair.com'
    },
    {
        url: 'https://www.brydiemusic.com',
        imageUrl: './resources/images/Brydie.jpg',
        client: 'Brydie Music',
        imagePositon: 'right',
        subtitle: 'DJ & Producer website',
        paragraph: 'More info coming soon.',
        portfolioSite: 'https://www.brydiemusic.com'
    },
    {
        url: 'http://der-wohlstands-trainer.de',
        imageUrl: './resources/images/wohlstandstrainer.jpg',
        client: 'Der Wohlstands Trainer',
        imagePositon: 'right',
        subtitle: 'Fully customized coaching website',
        paragraph: 'More info coming soon.',
        portfolioSite: 'http://der-wohlstands-trainer.de'
    },
    {
        url: 'https://www.löwenherz.tv',
        imageUrl: './resources/images/loewenherz.jpg',
        client: 'Löwenherz TV',
        imagePositon: 'center',
        subtitle: 'Custom website for a German coach',
        paragraph: 'More info coming soon.',
        portfolioSite: 'https://www.löwenherz.tv'
    },
    {
        url: 'https://lisaschumann.github.io/colmar_academy/',
        imageUrl: './resources/images/Colmar.jpg',
        client: 'Colmar Academy',
        imagePositon: 'center',
        subtitle: 'Educational project page',
        paragraph: 'More info coming soon.',
        portfolioSite: 'https://lisaschumann.github.io/colmar_academy/'
    },
    {
        url: 'https://lisaschumann.github.io/u4_tea_cozy/',
        imageUrl: './resources/images/teacozy.jpg',
        client: 'Tea Cozy',
        imagePositon: 'center',
        subtitle: 'Commercial example',
        paragraph: 'More info coming soon.',
        portfolioSite: 'https://lisaschumann.github.io/u4_tea_cozy/'
    },
    {
        url: 'https://lisaschumann.github.io/u4_my_times/',
        imageUrl: './resources/images/img-story-1.png',
        client: 'My Times',
        imagePositon: 'center',
        subtitle: 'Example of a news page',
        paragraph: 'More info coming soon.',
        portfolioSite: 'https://lisaschumann.github.io/u4_my_times/'
    },
    {
        url: 'https://www.ann-christin-osteopathy.com/',
        imageUrl: './resources/images/osteopathy.jpg',
        client: 'Osteopathy',
        imagePositon: 'center',
        subtitle: 'Client base and booking.',
        paragraph: 'More info coming soon.',
        portfolioSite: 'https://www.ann-christin-osteopathy.com/'
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
smoothScrollCapture = (x) => {
  event.preventDefault();
  var id = event.target.getAttribute('href').split("#")[1]
  var el = document.getElementById(id);
  var x = el.getBoundingClientRect().left
  var y = el.getBoundingClientRect().top
  smoothScrollFunc(x, y)
}

smoothScrollFunc = (x, y) => {
  event.preventDefault()
  window.scrollTo({
    top: y,
    left: x,
    behavior: 'smooth'
  });
}

window.addEventListener('DOMContentLoaded', () => {
  scrollToTopButton.addEventListener('click', () => {
    smoothScrollFunc(0, 0)
  })

  var aTags = document.getElementsByTagName('A')
  var myTags = []
  for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].getAttribute("href").indexOf('#') === 0) {
      aTags[i].addEventListener('click', smoothScrollCapture);
    }
  }
})

window.addEventListener('scroll', () => {
  // Get the current scroll value
  let y = window.scrollY;
  if (y > 100) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
})
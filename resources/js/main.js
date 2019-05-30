var portfolioItems = [{
        url: 'https://www.anderl-heckmair.com',
        imageUrl: './resources/images/mark-basarab-157610-unsplash.jpg',
        client: 'Anderl Heckmair',
        imagePositon: 'center',
        title: 'Anderl Heckmair Mode',
        subtitle: 'Custom website and shop integration',
        paragraph: 'Beautiful bavarian outdoor fashion.'
    },
    {
        url: 'https://www.brydiemusic.com',
        imageUrl: './resources/images/Brydie.jpg',
        client: 'Brydie Music',
        imagePositon: 'right',
        title: 'Brydie Music',
        subtitle: 'DJ & Producer website',
        paragraph: 'More info coming soon.'
    },
    {
        url: 'http://der-wohlstands-trainer.de',
        imageUrl: './resources/images/wohlstandstrainer.jpg',
        client: 'Der Wohlstands Trainer',
        imagePositon: 'right',
        title: 'Der Wohlstands Trainer',
        subtitle: 'Fully customized coaching website',
        paragraph: 'More info coming soon.'
    },
    {
        url: 'https://www.löwenherz.tv',
        imageUrl: './resources/images/loewenherz.jpg',
        client: 'Löwenherz TV',
        imagePositon: 'center',
        title: 'Löwenherz TV',
        subtitle: 'Custom website for a German coach',
        paragraph: 'More info coming soon.'
    },
    {
        url: 'https://lisaschumann.github.io/colmar_academy/',
        imageUrl: './resources/images/Colmar.jpg',
        client: 'Colmar Academy',
        imagePositon: 'center',
        title: 'Colmar Academy',
        subtitle: 'Educational project page',
        paragraph: 'More info coming soon.'
    },
    {
        url: 'https://lisaschumann.github.io/u4_tea_cozy/',
        imageUrl: './resources/images/teacozy.jpg',
        client: 'Tea Cozy',
        imagePositon: 'center',
        title: 'Tea Cozy',
        subtitle: 'Commercial example',
        paragraph: 'More info coming soon.'
    },
    {
        url: 'https://lisaschumann.github.io/u4_my_times/',
        imageUrl: './resources/images/img-story-1.png',
        client: 'My Times',
        imagePositon: 'center',
        title: 'My Times',
        subtitle: 'Example of a news page',
        paragraph: 'More info coming soon.'
    },
    {
        url: 'https://www.ann-christin-osteopathy.com/',
        imageUrl: './resources/images/osteopathy.jpg',
        client: 'Osteopathy',
        imagePositon: 'center',
        title: 'Osteopathy',
        subtitle: 'Client base and booking.',
        paragraph: 'More info coming soon.'
    }
]

function generatePorfolioCards() {
    var portfolioCardElements = portfolioItems.map(function (item) {
        return `<a href="${item.url}" target="_blank">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front website" style="background-image: url('${item.imageUrl}'); background-position: ${item.imagePositon};">
                                    <h2>${item.client}</h2>
                            </div>
                            <div class="flip-card-back">
                                <h3>${item.title}</h3>
                                <h4>${item.subtitle}</h4>
                                <img src="./resources/images/white-line-small.png" style="width:3rem;">
                                <p>${item.paragraph}</p>
                             </div>
                        </div>
                    </div>
                </a>`
    })
    portfolioCardElements.push(`<a href="https://lisaschumann.github.io/match_game/" target="_blank"><div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front website" style="height: 28rem; background-color: rgb(32, 64, 86);"><h2>Match Game</h2></div><div class="flip-card-back"><h3>Match Game</h3><h4>A real fun game</h4><img src="./resources/images/white-line-small.png" style="width:3rem;"><p>This is a small game I build.</p></div></div></div></a>`)

    return portfolioCardElements
}

$('.portfolio').html(generatePorfolioCards())
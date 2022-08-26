const badgesJSON = [
    {
        img: "img/react.svg",
        skill: "React.js", started: "2014",
        stars: 6
    },
    {
        img: "img/css.svg",
        skill: "CSS3", started: "1999",
        stars: 6
    },
    {
        img: "img/html.svg",
        skill: "HTML5", started: "2008",
        stars: 6
    },
    {
        img: "img/mongodb.svg",
        skill: "MongoDB", started: "2014",
        stars: 6
    },
    {
        img: "img/oath.svg",
        skill: "Oauth1&2 / PKCE", started: "2010",
        stars: 6
    },
    {
        img: "img/mapbox.svg",
        skill: "Mapbox GL/JS", started: "2018",
        stars: 6
    },

    {
        img: "img/vanillajs.svg",
        skill: "Vanilla JS", started: "2000",
        stars: 6
    },

    {
        img: "img/node.svg",
        skill: "Node", started: "2013",
        stars: 6
    },

    {
        img: "img/php.svg",
        skill: "PHP", started: "2000",
        stars: 5
    },

    {
        img: "img/aws.svg",
        skill: "AWS", started: "2015",
        stars: 5
    },

    {
        img: "img/linux.svg",
        skill: "Linux / Unix", started: "2000",
        stars: 5
    },

    {
        img: "img/bash.svg",
        skill: "Bash / Zsh", started: "2000",
        stars: 5
    },

    {
        img: "img/geojson.svg",
        skill: "Geojson / Vector", started: "2018",
        stars: 5
    },

    {
        img: "img/docker.svg",
        skill: "Docker / Compose", started: "2016",
        stars: 5
    },

    { 
        img: "img/nginx.svg",
        skill: "Nginx", started: "2016",
        stars: 4
    },

    {
        img: "img/traefik.svg",
        skill: "Traefik", started: "2018",
        stars: 4
    },
    {
        img: "img/caddy.svg",
        skill: "Caddy", started: "2018",
        stars: 4
    },
    {
        img: "img/apache.svg",
        skill: "Apache", started: "2002",
        stars: 4
    },
]

for (let badge of badgesJSON) {
    let badgeul = document.getElementById("skillbadges");
    badgeul.insertAdjacentHTML('beforeend', `
    <li>
        <img src="${badge.img}" alt="" />
        <div class="skillstats">
            <p>${badge.skill}</p>
            <p class="started"><span data-startDate="${badge.started}">8</span> Years</p>
        </div>

        <div class="stars">${'<span class="shiny">' + '★'.repeat(Math.min(badge.stars, 5)) + '</span>' + (badge.stars > 5 ? '<sup>++</sup>' : '')}</div>
    </li>
    `)

}
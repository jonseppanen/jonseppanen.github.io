const dateCalc = (startYear) => {
    let thisYear = new Date().getFullYear();
    return thisYear - startYear;
};

for (let element of document.querySelectorAll("[data-startDate]")) {
    element.innerHTML = dateCalc(parseInt(element.getAttribute("data-startDate"))).toString();
}

const quipper = (quip) => {

    for (let element of document.querySelectorAll(".snide")) {
        if (element !== quip) element.removeAttribute("style")
    }


    let quipDems = quip.getBoundingClientRect();

    if (quipDems.left < document.body.getBoundingClientRect().width / 2) {
        document.getElementsByClassName("heady")[0].classList.remove("right");
        document.getElementsByClassName("heady")[0].classList.add("left");
        document.getElementsByClassName("heady")[0].style.left = quipDems.left + "px";
    } else {
        document.getElementsByClassName("heady")[0].classList.remove("left");
        document.getElementsByClassName("heady")[0].classList.add("right");
        document.getElementsByClassName("heady")[0].style.left =
            quipDems.left +
            quipDems.width -
            document.getElementsByClassName("heady")[0].getBoundingClientRect().width +
            "px";
    }
    document.getElementsByClassName("heady")[0].style.top = quipDems.top + document.body.scrollTop + 20 + "px";

    document.getElementById("thefact").innerHTML = quip.innerHTML;
}


const sections = document.querySelectorAll(".snide");

const options = {
    root: null,
    threshold: 0,
    rootMargin: "0px",
};

let visibleIntersectors = [];

const callbackFunction = (intersectors) => {


    for (let intersector of intersectors) {


        if (intersector.isIntersecting === true) {
            if (!visibleIntersectors.find(visibleIntersector => visibleIntersector === intersector.target)) {
                scrollDirection === "up" ? visibleIntersectors.unshift(intersector.target) : visibleIntersectors.push(intersector.target)
            }
        }
        else {
            visibleIntersectors = visibleIntersectors.filter(visibleIntersector => visibleIntersector !== intersector.target)
        }


        if (visibleIntersectors.length < 1) return;

        if (visibleIntersectors.length === 1) {
            quipper(visibleIntersectors[0])
        }
        else if (visibleIntersectors.length === 2) {

            if (scrollDirection === "down") {
                quipper(visibleIntersectors[1])
            }
            else {
                quipper(visibleIntersectors[0])
            }
        }
        else {
            let activeIntersector = Math.floor(visibleIntersectors.length / 2)
            quipper(visibleIntersectors[activeIntersector])
        }

    }




};

const theObserver = new IntersectionObserver(callbackFunction, options);

for (let section of sections) {
    theObserver.observe(section);
}


let lastScrollTop = 0;
let scrollDirection;
document.body.addEventListener("scroll", (e) => {
    if (lastScrollTop > document.body.scrollTop) {
        scrollDirection = "up"
    }
    else {
        scrollDirection = "down"
    }
    lastScrollTop = document.body.scrollTop

}, { passive: true })

document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("embedshower")) {

        let embedded = document.getElementById(e.target.getAttribute("show"));

        if (embedded.classList.contains("visible")) {
            embedded.classList.remove("visible")
        }
        else {
            embedded.classList.add("visible")
        }
    }
})

let colortags = document.querySelectorAll("[color]")

for (let coloredNode of colortags) {
    coloredNode.style.color = coloredNode.getAttribute("color")

}

const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left')
});

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left')
});

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right')
});

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right')
});

function showMore() {
    var more1 = document.getElementById("more1")
    var BathroomButton = document.getElementById("BathroomButton")

    if (more1.style.display == "block") {
        more1.style.display = "none"
        BathroomButton.innerHTML = "Read More"
        BathroomButton.style.top = "40%"
    } else {
        more1.style.display = "block"
        BathroomButton.innerHTML = "Read less"
        BathroomButton.style.top = "60%"
    }
}

function showMore2() {
    var more2 = document.getElementById("more2")
    var KitchenButton = document.getElementById("KitchenButton")

    if (more2.style.display == "block") {
        more2.style.display = "none"
        KitchenButton.innerHTML = "Read More"
        KitchenButton.style.top = "40%"
    } else {
        more2.style.display = "block"
        KitchenButton.innerHTML = "Read less"
        KitchenButton.style.top = "60%"

    }
}
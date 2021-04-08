$("#slider").on("input change", (e) => {
    const sliderPos = e.target.value;
    // Update the width of the foreground image
    $('.foreground-img').css('width', `${sliderPos}%`)
    // Update the position of the slider button
    $('.slider-button').css('left', `calc(${sliderPos}% - 18px)`)
});

let thumbnails = document.getElementsByClassName('thumbnail')

let activeImages = document.getElementsByClassName('active')

for (var i = 0; i < thumbnails.length; i++) {

    thumbnails[i].addEventListener('click', function () {
        console.log(activeImages)

        if (activeImages.length > 0) {
            activeImages[0].classList.remove('active')
        }


        this.classList.add('active')
        document.querySelector('.background-img').style.backgroundImage = `url("${this.id}.jpg")`
        document.querySelector('.foreground-img').style.backgroundImage = `url("${this.id}1.jpg")`
    })
}

let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');

buttonLeft.addEventListener('click', function () {
    document.getElementById('slide').scrollLeft -= 100;
    console.log("object")
})

buttonRight.addEventListener('click', function () {
    document.getElementById('slide').scrollLeft += 100
})
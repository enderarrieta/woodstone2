// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 28.495560, lng: -81.534798 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    console.log("alo")
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.classList.add('success')
        status.innerHTML = "Thanks for your submission!";
        form.reset()
    }).catch(error => {
        status.classList.add('error')
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)

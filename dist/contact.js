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
function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 10.7376, lng: 106.6871638};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'South Jakarta, INA' // Title Location
    });
}

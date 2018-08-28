function initMap() {
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 16, center: {lat: 28.639639 , lng:77.341911 }})

        function addMarker(loc) {
            var marker = new google.maps.Marker({
                position:loc,map:map
            })
        }
        addMarker({lat: 28.639639 , lng:77.341911 })
        
}
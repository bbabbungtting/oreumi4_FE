var mapContainer = document.getElementById('kakaomap'),
    mapOption = {
        center: new kakao.maps.LatLng(33.4423379727783, 126.571449734542),
        level: 3
    };

var map = new kakao.maps.Map(mapContainer, mapOption);
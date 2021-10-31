function initMap() {
  const home = { lat: 46.755198, lng: 23.551152 };
  const map = new google.maps.Map(document.getElementById("Map"), {
    zoom: 16,
    center: home,
  });
  const marker = new google.maps.Marker({
    position: home,
    map: map,
  });
}

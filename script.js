const apiKey = "93dfda349bc834d0a83157076ecca92f";

const cityId = 91; // Dublin

const cityDescription = "Dublin";
const cuisineId = 82; // Pzza
const cuisineDescription = "Pizza";
fetch(
  `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisineId}`,
  { headers: { "user-key": apiKey } }
)
  .then(response => {
    return response.json();
  })
  .then(json => {
    console.log(json);
    json.restaurants.forEach(resto => {
      document.getElementById(
        "restaurantList"
      ).innerHTML += `<li>${resto.restaurant.name} ${}</li>`;
    });
  })
  .catch(err => {
    return err;
  });

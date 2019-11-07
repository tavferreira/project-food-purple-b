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
      console.log(resto.restaurant.thumb);
      document.getElementById(
        "restaurantList"
      ).innerHTML += `<div class="restaurant-card">
        <div class="card-img" style="width: 200px; height: 150px; background-image: url(${resto.restaurant.thumb})">
          
          <div class="bubble">€${resto.restaurant.average_cost_for_two}</div>
        </div>
        <div class="card-info">
          <li><h2>${resto.restaurant.name}</h2></li>
          <p class="card-rating">	&#9733; ${resto.restaurant.user_rating.aggregate_rating} ${resto.restaurant.user_rating.rating_text}</p>
          <p>${resto.restaurant.location.address}</p>
        </div>
      </div>`;
    });
  })
  .catch(err => {
    return err;
  });

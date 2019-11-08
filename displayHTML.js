const displayUI = data => {
  document.getElementById("restaurantList").innerHTML = "";

  data.forEach(restaurant => {
    document.getElementById(
      "restaurantList"
    ).innerHTML += `<div class="restaurant-card">
    <div class="card-img" style="background-image: url(${restaurant.restaurant.thumb})">
    
    <div class="bubble">€${restaurant.restaurant.average_cost_for_two}</div>
    </div>
    <div class="card-info">
    <li><h2>${restaurant.restaurant.name}</h2></li>
    <p class="card-rating">	&#9733; ${restaurant.restaurant.user_rating.aggregate_rating} ${restaurant.restaurant.user_rating.rating_text}</p>
    <p>${restaurant.restaurant.location.address}</p>
    </div>
    </div>`;
  });
};

const displayUIfiltered = data => {
  document.getElementById("restaurantList").innerHTML = "";
  numbers = data.length
  document.getElementById("restaurant-number").innerHTML = `${numbers} restaurants is filtered`
  data.forEach(restaurant => {
    document.getElementById(
      "restaurantList"
    ).innerHTML += `<div class="restaurant-card">
    <div class="card-img" style="background-image: url(${restaurant.thumb})">
    <div class="bubble">€${restaurant.average_cost_for_two}</div>
    </div>
    <div class="card-info">
    <li><h2>${restaurant.name}</h2></li>
    <p class="card-rating">	&#9733; ${restaurant.user_rating.aggregate_rating} ${restaurant.user_rating.rating_text}</p>
    <p>${restaurant.location.address}</p>
    </div>
    </div>`;
  });
};

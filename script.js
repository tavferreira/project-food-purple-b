const apiKey = "93dfda349bc834d0a83157076ecca92f";

const cityId = 91; // Dublin

const cityDescription = "Dublin";
const cuisineId = 82; // Pzza
const cuisineDescription = "Pizza";
let filteredCuisines = [];

let restoArray = [];

fetch(
	`https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisineId}`,
	{ headers: { "user-key": apiKey } }
)
	.then(response => {
		return response.json();
	})
	.then(json => {
		restoArray = json.restaurants;

		console.log(filteredCuisines);

		restoArray.forEach(item => {
			const { restaurant } = item;
			console.log(restaurant);
			document.getElementById(
				"restaurantList"
			).innerHTML += `<li>${restaurant.name}</li> <p>${restaurant.location.address}</p><p>${restaurant.average_cost_for_two} €</p> <img src="${restaurant.thumb}"><p>${restaurant.user_rating.aggregate_rating}</p><p>${restaurant.user_rating.rating_text}</p>`;
		});
	})
	.catch(err => {
		return err;
	});

// console.log("Restoarray", restoArray);

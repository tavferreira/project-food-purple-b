const displayUI = data => {
	document.getElementById("restaurantList").innerHTML = "";

	data.forEach(restaurant => {
		let lastReviews = restaurant.all_reviews.reviews.splice(0, 3);

		console.log(lastReviews);

		const reviewTemplates = lastReviews.map(review => {
			return `<p>${review.review.review_text}</p>`;
		});

		// console.log(reviewTemplates);

		document.getElementById("restaurantList").innerHTML += `
        <li>
          <p>${restaurant.name}</p>
          <p>${restaurant.location.address}</p>
          <p>${restaurant.average_cost_for_two} €</p>
          <img src="${restaurant.thumb}">
          <p>${restaurant.user_rating.aggregate_rating}</p>
          <p>${restaurant.user_rating.rating_text}</p>
          <div>${reviewTemplates
						.forEach(item => {
							return item;
						})
						.join("")}</div>
        </li>
        `;
	});
};
